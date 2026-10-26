import { getArticlesByCategory } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const articles = getArticlesByCategory(slug);

  const categoryNames: Record<string, string> = {
    "ai-tools": "AI Tools & Tutorials",
    "tech-tips": "Tech Tips & Productivity",
    "guides": "Software Guides & Resources",
  };

  const categoryName = categoryNames[slug] || slug;

  if (articles.length === 0 && !categoryNames[slug]) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white capitalize">
          {categoryName}
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Showing all articles published under this topic.
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-lg text-slate-500">No articles found in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      )}
    </div>
  );
}
