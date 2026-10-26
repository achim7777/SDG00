import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Terms of Use",
  description: `Terms and conditions of use for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
          Terms of Use
        </h1>
        <p className="text-sm text-slate-500 mt-2">Last updated: October 26, 2026</p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
        <p>
          Welcome to {siteConfig.name}. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Intellectual Property</h2>
        <p>
          All content published on this website—including articles, guides, graphics, logos, and software structure—is the property of {siteConfig.name} or its content creators and is protected by international copyright laws.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Permitted Use</h2>
        <p>
          You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms of use.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Limitation of Liability</h2>
        <p>
          The information provided on {siteConfig.name} is for general informational purposes only. We make no representations or warranties of any kind regarding the completeness, accuracy, reliability, or availability of the website or the information contained within it.
        </p>
      </div>
    </div>
  );
}
