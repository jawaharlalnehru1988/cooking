export interface CookingArticle {
  id: number;
  mainTopic: string;
  subTopic: string;
  article: string;
  slug: string;
  language: string;
  created_at: string;
  order?: number;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface FetchArticlesParams {
  page?: number;
  pageSize?: number;
  mainTopic?: string;
  id?: number | string;
  language?: string;
  search?: string;
  ordering?: string;
  order?: number;
}

const BASE_URL = "https://api.askharekrishna.com/api/v1/cooking/articles/";

/**
 * Fetches a paginated list of cooking articles with optional filters.
 */
export async function fetchCookingArticles(params: FetchArticlesParams = {}): Promise<PaginatedResponse<CookingArticle>> {
  const url = new URL(BASE_URL);
  
  if (params.page) url.searchParams.append("page", params.page.toString());
  if (params.pageSize) url.searchParams.append("page_size", params.pageSize.toString());
  if (params.mainTopic) url.searchParams.append("mainTopic", params.mainTopic);
  if (params.id) url.searchParams.append("id", params.id.toString());
  if (params.language) url.searchParams.append("language", params.language);
  if (params.search) url.searchParams.append("search", params.search);
  if (params.ordering) url.searchParams.append("ordering", params.ordering);
  if (params.order) url.searchParams.append("order", params.order.toString());

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error("Fetch articles failed:", res.status, errorData);
    throw new Error(`Failed to fetch recipes: ${res.statusText}`);
  }

  const data = await res.json();
  
  // Normalize response: Handle both list and object formats
  if (Array.isArray(data)) {
    let filteredData = data;
    
    // Client-side filtering if backend didn't do it
    if (params.mainTopic && params.mainTopic !== "All") {
      filteredData = data.filter(article => 
        article.mainTopic.toLowerCase() === params.mainTopic?.toLowerCase()
      );
    }
    
    // Client-side search if needed
    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredData = filteredData.filter(article => 
        article.subTopic.toLowerCase().includes(searchLower) ||
        article.article.toLowerCase().includes(searchLower)
      );
    }

    const page = params.page || 1;
    const pageSize = params.pageSize || 12;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    
    return {
      count: filteredData.length,
      next: end < filteredData.length ? "true" : null,
      previous: start > 0 ? "true" : null,
      results: filteredData.slice(start, end),
    };
  }

  return data;
}

/**
 * Fetches a single cooking article by its ID.
 */
export async function fetchCookingArticleById(id: number | string): Promise<CookingArticle> {
  const res = await fetch(`${BASE_URL}${id}/`, {
    next: { revalidate: 3600 }, // Cache deeper pages longer
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("Recipe not found");
    }
    throw new Error("Failed to fetch recipe detail");
  }

  return res.json();
}
