import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q?.toLowerCase() || "";
  const allArticles = getAllArticles();

  const filteredArticles = query
    ? allArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query)
      )
    : [];

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
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center">
            <SearchIcon className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
              Search Results
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Showing results for &quot;<span className="font-semibold text-brand-600">{searchParams.q || ""}</span>&quot;
            </p>
          </div>
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
          <p className="text-lg text-slate-500">No articles matched your search query.</p>
          <Link
            href="/"
            className="inline-block px-6 py-2.5 bg-brand-600 text-white font-medium rounded-xl hover:bg-brand-700 transition-colors"
          >
            Browse All Articles
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      )}
    </div>
  );
}
