import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Back navigation & Category */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-4 text-xs font-semibold">
            <Link
              href={`/category/${article.categorySlug}`}
              className="px-3 py-1 bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 rounded-full uppercase tracking-wider hover:bg-brand-200 transition-colors"
            >
              {article.category}
            </Link>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Author & Meta */}
        <div className="flex items-center justify-between py-6 border-y border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500/20"
            />
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {article.author.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {article.author.role}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[350px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 font-sans leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Footer Sharing / Author Box */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">Written by {article.author.name}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{article.author.role} at SmartDailyGuide.</p>
            </div>
          </div>
          <Link
            href="/"
            className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Explore More Articles
          </Link>
        </div>
      </article>
    </>
  );
}
