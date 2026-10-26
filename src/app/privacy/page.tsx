import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and data collection practices for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mt-2">Last updated: October 26, 2026</p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
        <p>
          At {siteConfig.name}, accessible from {siteConfig.url}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {siteConfig.name} and how we use it.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Information We Collect</h2>
        <p>
          We collect information in order to provide better services to all our users. When you visit our website, our web servers automatically log standard data provided by your web browser, such as your IP address, browser type, operating system, referring pages, and timestamps.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Google AdSense and Cookies</h2>
        <p>
          We may partner with third-party vendors, including Google, who use cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting Ads Settings. (Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting www.aboutads.info).
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
}
