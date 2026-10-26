import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { Compass, Sparkles, ArrowRight, BookOpen, Layers } from "lucide-react";

export default function HomePage() {
  const articles = getAllArticles();
  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const remainingArticles = articles.filter((a) => a.slug !== featuredArticle?.slug);

  const categories = [
    { name: "AI Tools", slug: "ai-tools", count: articles.filter(a => a.categorySlug === "ai-tools").length, icon: Sparkles },
    { name: "Tech Tips", slug: "tech-tips", count: articles.filter(a => a.categorySlug === "tech-tips").length, icon: Compass },
    { name: "Software Guides", slug: "guides", count: articles.filter(a => a.categorySlug === "guides").length, icon: BookOpen },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Smart Daily Guidance for Digital Minds</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-serif tracking-tight text-slate-900 dark:text-white">
            Navigate AI, Productivity, & Modern Technology
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover actionable tutorials, hand-picked AI tools, and expert digital strategies designed to elevate your daily workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/category/ai-tools"
              className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-md transition-all flex items-center space-x-2"
            >
              <span>Explore AI Tools</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/category/tech-tips"
              className="px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-semibold rounded-xl transition-all"
            >
              Browse Tech Tips
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Featured Article */}
        {featuredArticle && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white flex items-center">
                <span className="w-2 h-6 bg-brand-600 rounded-full mr-3"></span>
                Featured Story
              </h2>
            </div>
            <ArticleCard {...featuredArticle} featured />
          </section>
        )}

        {/* Popular Categories */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white flex items-center">
            <span className="w-2 h-6 bg-brand-600 rounded-full mr-3"></span>
            Explore Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-brand-500 dark:hover:border-brand-500 transition-all group flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cat.count} articles available</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Latest Articles Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white flex items-center">
              <span className="w-2 h-6 bg-brand-600 rounded-full mr-3"></span>
              Latest Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
