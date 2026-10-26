import { siteConfig } from "@/lib/config";
import { Compass, ShieldCheck, Users, Zap } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.name}, our mission, and our editorial commitment to helpful technology guides.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-900 dark:text-white">
          About SmartDailyGuide
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Your trusted companion for navigating the modern digital landscape with practical AI tutorials, tech tips, and productivity workflows.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 space-y-6">
        <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">Our Mission</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          In an era of information overload and AI-generated noise, finding accurate, actionable, and trustworthy guidance can be difficult. {siteConfig.name} was founded with a singular purpose: to cut through the clutter and provide clear, high-quality, and reliable resources that empower digital creators, professionals, and lifelong learners.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Actionable Quality</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Every article is crafted to provide immediate, practical value rather than superficial summaries.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Editorial Integrity</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            We clearly distinguish editorial recommendations from advertising and maintain strict verification standards.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Community First</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Our content is shaped by the real questions and challenges faced by our readers every day.
          </p>
        </div>
      </div>
    </div>
  );
}
