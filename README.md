# SmartDailyGuide

SmartDailyGuide is a professional, modern, responsive content website designed to publish helpful articles and build sustainable traffic through organic search, optimized for Google AdSense readiness, technical SEO, and lightning-fast performance.

## Tech Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS with Typography plugin
- **Content System:** Markdown / MDX (`gray-matter`, `remark`)
- **Icons:** Lucide React

---

## Getting Started (Local Development)

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your computer.

### 1. Install Dependencies
Open your terminal in the project folder and run:
\`\`\`bash
npm install
\`\`\`

### 2. Run the Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

---

## Building for Production

To create an optimized production build, run:
\`\`\`bash
npm run build
\`\`\`

To start the production server locally:
\`\`\`bash
npm start
\`\`\`

---

## Zero-Budget Deployment (Vercel or Netlify)

1. **Push your code to GitHub** (create a free repository).
2. Go to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) and log in with GitHub (free tier).
3. Click **"New Project"** and select your `SmartDailyGuide` repository.
4. Leave build settings as default (`npm run build` / `.next` output).
5. Click **Deploy**. Your site will be live instantly with a free `.vercel.app` or `.netlify.app` domain!

---

## Adding New Articles

Adding new articles is simple and requires no database:
1. Navigate to `src/content/articles/`.
2. Create a new `.md` file (e.g., `my-new-article.md`).
3. Add the required frontmatter metadata at the top:
   \`\`\`markdown
   ---
   title: "Your Article Title"
   excerpt: "A brief summary of the article."
   category: "AI Tools"
   categorySlug: "ai-tools"
   date: "2026-10-26"
   readTime: "5 min read"
   image: "https://images.unsplash.com/photo-..."
   author:
     name: "Author Name"
     avatar: "https://images.unsplash.com/photo-..."
     role: "Role"
   ---
   \`\`\`
4. Write your article content in Markdown below the frontmatter and commit changes.

---

## Google AdSense Readiness Checklist

1. **Complete Legal Pages:** Ensure Privacy Policy, Terms of Use, Disclaimer, and Contact Us pages are published (already included).
2. **Original Content:** Publish at least 15-20 high-value articles (8 starter articles are included).
3. **Traffic & Navigation:** Ensure clean menus and fast loading speeds.
4. **Apply:** Once your site is indexed by Google and receiving steady traffic, apply for Google AdSense and paste your verification snippet into the site header.
