import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchCookingArticles } from "@/lib/cooking-api";

export default async function WhyVegDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const currentOrder = parseInt(id);

  // Fetch all articles in the "Why Veg?" category to build navigation
  const response = await fetchCookingArticles({ 
    mainTopic: "Why Veg?",
    pageSize: 50,
    ordering: "order"
  });

  const allArticles = response.results.sort((a, b) => (a.order || 0) - (b.order || 0));
  const currentIndex = allArticles.findIndex(a => (a.order === currentOrder));
  
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
        <Link 
          href="/why-veg" 
          className="inline-flex items-center text-forest-green dark:text-forest-green hover:text-deep-saffron transition-colors mb-8 font-semibold group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Why Veg?
        </Link>

        <article className="bg-card-bg rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12 transition-colors">
          <div className="bg-deep-saffron text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <span className="text-white/80 font-bold tracking-[0.4em] uppercase text-xs mb-4 block relative z-10">
              Inquiry {currentOrder} of {allArticles.length}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight relative z-10">
              {currentArticle.subTopic}
            </h1>
          </div>

          <div className="p-8 md:p-20 bg-card-bg transition-colors">
            <div className="prose prose-lg max-w-none 
              prose-headings:font-serif prose-headings:text-forest-green
              prose-h1:text-center prose-h1:mb-12
              prose-strong:text-forest-green prose-strong:font-bold
              prose-li:marker:text-deep-saffron
            ">
              <ReactMarkdown>{currentArticle.article}</ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Navigation Buttons */}
        <section className="grid md:grid-cols-2 gap-8 mt-12">
          {prev ? (
            <Link 
              href={`/why-veg/${prev.order}`}
              className="p-8 bg-card-bg rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-deep-saffron/30 transition-all group flex flex-col"
            >
              <span className="text-xs font-bold text-muted uppercase tracking-widest mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </span>
              <h4 className="text-xl font-serif text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors">
                {prev.subTopic}
              </h4>
            </Link>
          ) : <div />}

          {next ? (
            <Link 
              href={`/why-veg/${next.order}`}
              className="p-8 bg-card-bg rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-deep-saffron/30 transition-all group flex flex-col text-right items-end"
            >
              <span className="text-xs font-bold text-muted uppercase tracking-widest mb-2 flex items-center">
                Next
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <h4 className="text-xl font-serif text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors">
                {next.subTopic}
              </h4>
            </Link>
          ) : <div />}
        </section>
      </main>
      <Footer />
    </div>
  );
}
