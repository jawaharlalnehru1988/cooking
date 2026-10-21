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
    mainTopic: "Why No Onion & Garlic",
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
    title: `${article.subTopic} | Why No Onion & Garlic`,
    description: `Detailed inquiry into ${article.subTopic} through authentic Vedic scriptures, Ayurveda, and modern science.`,
  };
}

export default async function WhyNoOnionGarlicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const currentOrder = parseInt(id);

  if (isNaN(currentOrder)) {
    notFound();
  }

  // Fetch all articles in the "Why No Onion & Garlic" category for sequential navigation
  const response = await fetchCookingArticles({
    mainTopic: "Why No Onion & Garlic",
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
            href="/why-no-onion-garlic"
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
            Back to All 28 Inquiries
          </Link>

          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            Inquiry {currentOrder} of {allArticles.length}
          </span>
        </div>

        <article className="bg-card-bg rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12 transition-colors">
          <div className="bg-gradient-to-br from-forest-green via-emerald-800 to-forest-green text-white p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-deep-saffron/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <span className="text-deep-saffron bg-spiritual-cream/10 px-4 py-1 rounded-full font-bold tracking-[0.4em] uppercase text-xs mb-4 inline-block relative z-10">
              Why No Onion &amp; Garlic • Part {currentOrder}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight relative z-10 text-white mt-2">
              {currentArticle.subTopic}
            </h1>
          </div>

          <div className="p-8 md:p-16 bg-card-bg transition-colors">
            <div
              className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-serif prose-headings:text-forest-green dark:prose-headings:text-emerald-400
              prose-h1:text-center prose-h1:mb-10 prose-h1:text-3xl
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:border-b prose-h3:border-forest-green/10 prose-h3:pb-2
              prose-strong:text-forest-green dark:prose-strong:text-emerald-300 prose-strong:font-bold
              prose-li:marker:text-deep-saffron
              prose-blockquote:border-l-4 prose-blockquote:border-deep-saffron prose-blockquote:bg-deep-saffron/5 prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-blockquote:italic
              prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
              leading-relaxed"
            >
              <ReactMarkdown>{currentArticle.article}</ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Sequential Navigation */}
        <section className="grid md:grid-cols-2 gap-6 mt-12">
          {prev ? (
            <Link
              href={`/why-no-onion-garlic/${prev.order}`}
              className="p-6 md:p-8 bg-card-bg rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-deep-saffron/40 transition-all group flex flex-col justify-between"
            >
              <span className="text-xs font-bold text-muted uppercase tracking-widest mb-3 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Inquiry (#{prev.order})
              </span>
              <h4 className="text-lg md:text-xl font-serif text-forest-green dark:text-emerald-400 group-hover:text-deep-saffron transition-colors leading-snug">
                {prev.subTopic}
              </h4>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}

          {next ? (
            <Link
              href={`/why-no-onion-garlic/${next.order}`}
              className="p-6 md:p-8 bg-card-bg rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-deep-saffron/40 transition-all group flex flex-col justify-between text-right items-end"
            >
              <span className="text-xs font-bold text-muted uppercase tracking-widest mb-3 flex items-center">
                Next Inquiry (#{next.order})
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <h4 className="text-lg md:text-xl font-serif text-forest-green dark:text-emerald-400 group-hover:text-deep-saffron transition-colors leading-snug">
                {next.subTopic}
              </h4>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
        </section>

        {/* Explore All Inquiries Button */}
        <div className="mt-12 text-center">
          <Link
            href="/why-no-onion-garlic"
            className="inline-flex items-center px-8 py-3.5 bg-card-bg hover:bg-forest-green hover:text-white border border-forest-green/30 text-forest-green dark:text-emerald-300 font-bold rounded-2xl transition-all shadow-sm"
          >
            ← View All 28 Onion &amp; Garlic Inquiries
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
