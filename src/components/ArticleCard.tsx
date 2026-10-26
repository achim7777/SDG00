import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime?: string;
  image?: string;
  featured?: boolean;
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readTime = "4 min read",
  image = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  featured = false,
}: ArticleCardProps) {
  if (featured) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-5 p-8 flex flex-col justify-center space-y-4">
          <div className="flex items-center space-x-4 text-xs font-semibold">
            <span className="px-3 py-1 bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 rounded-full uppercase tracking-wider">
              {category}
            </span>
            <span className="flex items-center text-slate-500 dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {formatDate(date)}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white leading-tight">
            <Link href={`/articles/${slug}`} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              {title}
            </Link>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 line-clamp-3 text-base">
            {excerpt}
          </p>
          <div className="pt-4">
            <Link
              href={`/articles/${slug}`}
              className="inline-flex items-center text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700"
            >
              Read full article →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-brand-700 dark:text-brand-300 rounded-md text-xs font-semibold uppercase tracking-wider shadow-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {formatDate(date)}
            </span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {readTime}
            </span>
          </div>
          <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            <Link href={`/articles/${slug}`}>
              {title}
            </Link>
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">
            {excerpt}
          </p>
        </div>
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <Link
            href={`/articles/${slug}`}
            className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </div>
  );
}
