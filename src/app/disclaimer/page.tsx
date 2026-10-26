import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Disclaimer",
  description: `Professional and financial disclaimer for ${siteConfig.name}.`,
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
          Disclaimer
        </h1>
        <p className="text-sm text-slate-500 mt-2">Last updated: October 26, 2026</p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
        <p>
          The information contained on {siteConfig.name} ({siteConfig.url}) is for general information purposes only. {siteConfig.name} assumes no responsibility for errors or omissions in the contents of the service.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Professional Advice Disclaimer</h2>
        <p>
          The content on this website does not constitute legal, financial, accounting, or professional advice. Readers should consult with qualified professionals before making decisions based on information found on this site.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Affiliate and Advertising Disclosure</h2>
        <p>
          {siteConfig.name} may participate in various affiliate marketing programs, which means we may earn commissions on editorially chosen products purchased through our links to retailer sites. Additionally, we display advertisements provided by networks such as Google AdSense. These advertisements are clearly distinguished from editorial content.
        </p>
      </div>
    </div>
  );
}
