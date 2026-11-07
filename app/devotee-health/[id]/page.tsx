import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchCookingArticles } from "@/lib/cooking-api";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const currentOrder = parseInt(id);
  const response = await fetchCookingArticles({
    mainTopic: "Health Care of Devotees",
    pageSize: 50,
    ordering: "order",
  });
  const article = response.results.find((a) => a.order === currentOrder);

  if (!article) {
    return {
      title: "Article Not Found | Sattvic Cooking",
    };
  }

  return {
    title: `${article.subTopic} | Devotee Health Care`,
    description: `Detailed study of ${article.subTopic} through Bhagavad-gita, Srila Prabhupada's guidance, and authentic Ayurveda.`,
  };
}

export default async function DevoteeHealthDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const currentOrder = parseInt(id);

  if (isNaN(currentOrder)) {
    notFound();
  }

  const response = await fetchCookingArticles({
    mainTopic: "Health Care of Devotees",
    pageSize: 50,
    ordering: "order",
  });

  const allArticles = response.results.sort((a, b) => (a.order || 0) - (b.order || 0));
  const currentIndex = allArticles.findIndex((a) => a.order === currentOrder);

  if (currentIndex === -1) {
    notFound();
  }

  const currentArticle = allArticles[currentIndex];
  const prev = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const next = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <div className="bg-spiritual-cream dark:bg-gray-950 min-h-screen text-primary font-sans pb-20 transition-colors">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/devotee-health"
            className="inline-flex items-center text-forest-green dark:text-emerald-400 hover:text-deep-saffron transition-colors font-semibold group text-sm"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All 30 Health Care Topics
          </Link>

          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            Part {currentOrder} of {allArticles.length}
          </span>
        </div>

        <article className="bg-card-bg rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12 transition-colors">
          <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-forest-green text-white p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-deep-saffron/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <span className="text-amber-200 bg-white/10 px-4 py-1 rounded-full font-bold tracking-[0.4em] uppercase text-xs mb-4 inline-block relative z-10">
              Devotee Health Care • Part {currentOrder}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight relative z-10 text-white mt-2">
              {currentArticle.subTopic}
            </h1>
          </div>

          <div className="p-8 md:p-16 bg-card-bg transition-colors">
            <div
              className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-serif prose-headings:text-forest-green dark:prose-headings:text-emerald-400 
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed 
              prose-strong:text-deep-saffron dark:prose-strong:text-amber-400
              prose-blockquote:border-l-4 prose-blockquote:border-deep-saffron prose-blockquote:bg-spiritual-cream/40 dark:prose-blockquote:bg-gray-900/50 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:italic
              prose-ul:list-disc prose-li:my-1.5 prose-li:text-gray-700 dark:prose-li:text-gray-300
              prose-table:border-collapse prose-table:w-full prose-table:my-6
              prose-th:bg-forest-green/10 dark:prose-th:bg-emerald-950/40 prose-th:p-3 prose-th:text-forest-green dark:prose-th:text-emerald-300 prose-th:font-bold prose-th:text-left
              prose-td:p-3 prose-td:border-b prose-td:border-gray-200 dark:prose-td:border-gray-800"
            >
              <ReactMarkdown>{currentArticle.article}</ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Sequential Navigation between Articles */}
        <div className="grid md:grid-cols-2 gap-6">
          {prev ? (
            <Link
              href={`/devotee-health/${prev.order}`}
              className="group bg-card-bg p-6 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-deep-saffron/40 hover:shadow-lg transition-all flex items-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-spiritual-cream dark:bg-gray-800 flex items-center justify-center text-forest-green dark:text-emerald-400 group-hover:bg-deep-saffron group-hover:text-white transition-colors mr-4 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted group-hover:text-deep-saffron transition-colors">
                  Previous Part #{prev.order}
                </div>
                <div className="font-serif font-bold text-forest-green dark:text-emerald-400 text-sm md:text-base truncate group-hover:text-deep-saffron transition-colors">
                  {prev.subTopic}
                </div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {next ? (
            <Link
              href={`/devotee-health/${next.order}`}
              className="group bg-card-bg p-6 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-deep-saffron/40 hover:shadow-lg transition-all flex items-center justify-end text-right md:col-start-2"
            >
              <div className="overflow-hidden">
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted group-hover:text-deep-saffron transition-colors">
                  Next Part #{next.order}
                </div>
                <div className="font-serif font-bold text-forest-green dark:text-emerald-400 text-sm md:text-base truncate group-hover:text-deep-saffron transition-colors">
                  {next.subTopic}
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-spiritual-cream dark:bg-gray-800 flex items-center justify-center text-forest-green dark:text-emerald-400 group-hover:bg-deep-saffron group-hover:text-white transition-colors ml-4 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}
