import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center mx-auto shadow-sm">
        <Compass className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-extrabold font-serif text-slate-900 dark:text-white">Page Not Found</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Sorry, we couldn&apos;t find the page you were looking for. It might have been moved or doesn&apos;t exist.
      </p>
      <div>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-md transition-colors space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
