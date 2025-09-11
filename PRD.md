Portfolio Website PRD (v1.0)
Owner: You
Partner: Cascade (AI assistant)
Date: 2025-09-11
Status: Draft
1) Overview
Build a modern, performant, and accessible personal portfolio website to showcase projects, skills, and experience, and to generate inbound opportunities (recruiters, clients, collaborators). The site should be easy to maintain without heavy overhead and should present your work clearly and credibly.

2) Goals and Non‑Goals
Goals
Highlight selected projects with polished case studies.
Communicate your value proposition, skills, and experience quickly.
Enable easy contact and resume access.
Load extremely fast and work well on mobile.
Be simple to update (Markdown/JSON or lightweight CMS).
Non‑Goals (for MVP)
User accounts, comments, or logins.
Complex blog and content scheduling.
Multi‑language localization.
E‑commerce, payments, or gated content.
3) Target Audience and Outcomes
Primary
Recruiters/engineering managers evaluating candidates quickly.
Potential clients assessing capability and fit.
Secondary
Peers/collaborators for open‑source or side projects.
Desired Outcomes
Increase interview requests and project inquiries.
Improve credibility through curated projects and testimonials.
Provide a single link that represents your brand and work quality.
4) Success Metrics
Conversion
Contact form submissions: ≥ 3/month post‑launch.
Resume downloads: ≥ 10/month.
Engagement
Time on project pages: ≥ 90 seconds.
Bounce rate on home: ≤ 45%.
Performance & Quality
Lighthouse Performance ≥ 95 (mobile), Accessibility ≥ 95, SEO ≥ 95.
Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.
5) Scope (MVP)
Pages
Home: Hero, highlights, featured projects, skills summary, CTAs.
Projects Index: Filterable/tagged list.
Project Detail: Case study per project.
About: Bio, skills, tools, values.
Resume: Downloadable PDF + inline summary.
Contact: Form + email link.
404/500 pages.
Optional later: Blog.
Features
Project cards with tags, tech stack, and status labels.
Filters by tag/tech; basic search (client-side) if needed.
Project detail with images/video, responsibilities, outcomes, metrics.
Global components: Header, Footer, Theme toggle (light/dark).
Contact form with spam protection (honeypot/time trap).
Social links (GitHub, LinkedIn, etc.).
SEO: Metadata per page, OpenGraph/Twitter images.
Analytics (privacy-friendly).
CMS/editing: Markdown/JSON stored in repo (MVP) with preview; optional headless CMS later.
Out of Scope (MVP)
Commenting, likes, user-generated content.
Internationalization.
Complex search indexing.
6) Information Architecture
Navigation
Home (/)
Projects (/projects)
About (/about)
Resume (/resume)
Contact (/contact)
URLs
Project detail: /projects/[slug]
Resume PDF: /assets/resume.pdf
Sitemap
/sitemap.xml and /robots.txt
7) Content Model
Project
id (string/uuid)
title (string)
slug (string)
shortDescription (string, ≤ 160 chars)
longDescription (markdown)
role (string)
techStack (string[])
responsibilities (string[])
highlights (string[])
images (array: { src, alt, caption })
video (optional: url, poster)
repoUrl (optional)
liveUrl (optional)
startDate (date) / endDate (date | "Present")
featured (boolean)
status (enum: released, in_progress, archived)
tags (string[])
metrics (array: { label, value })
challenges (markdown)
outcomes (markdown)
testimonials (array: { name, role, quote })
Skill
category (e.g., Frontend, Backend, Tools)
items (string[])
Site Settings
name, tagline, bio, social links, contact email, theme default, OG image defaults.
8) Design Requirements
Brand & Tone
Professional, clear, modern; emphasis on readability over heavy visuals.
Avoid stocky visuals; use real project screenshots or simple case-study graphics.
Visual
Light/dark themes.
Primary accent color with accessible contrast (AA at minimum).
Typography pairing (e.g., Sans for UI, Mono for code snippets).
Components
Hero with concise elevator pitch and key CTA.
ProjectCard (image, title, tags, brief).
Tag/Chip, Badge, TechPill, Button, LinkButton.
ContentSection with standard spacing and max‑width (e.g., 72ch for text).
ImageGallery with lightbox and keyboard support.
MDX/Markdown rendering for case studies.
Responsive
Breakpoints: 360, 768, 1024, 1280, 1536+ px.
Ensure hover interactions have focusable equivalents.
Accessibility
WCAG 2.2 AA.
Keyboard navigable, focus visible, skip links.
ARIA labels/roles for nav, cards, galleries.
Alt text required for images; captions supported.
Color contrast ≥ 4.5:1 (text) and motion reduced when prefers-reduced-motion.
9) Technical Requirements
Recommended Stack (MVP)
Framework: Next.js (SSG/ISR) with TypeScript.
Styling: Tailwind CSS + CSS variables for theming.
Content: Markdown/MDX in content/ directory; JSON for site settings.
Images: Next/Image, AVIF/WebP, responsive srcsets, lazy loading.
Forms: Netlify Forms, Formspree, or Vercel Forms (choose one).
Hosting: Vercel (preferred) or Netlify.
Analytics: Plausible or GA4 (prefer Plausible for privacy).
CI/CD: GitHub repo + auto deploy previews on PRs.
Performance
Pre-render pages with static generation.
Cache headers, HTTP/2, compression, image optimization.
Only load JS where needed (islands/MDX components; consider next/dynamic).
SEO
Per-page meta, canonical URLs.
Structured data (JSON‑LD): Person, WebSite, BreadcrumbList, CreativeWork/SoftwareSourceCode for projects.
OG and Twitter cards; auto-generate share images if possible.
Security/Privacy
No third‑party trackers except analytics vendor.
Email obfuscation to reduce scraping.
CSRF/SPAM mitigation for forms (honeypot + timestamp).
Browser Support
Evergreen browsers; graceful degradation on older Safari/Android.
Test on iOS Safari and Android Chrome.
10) SEO/Content Checklist
Unique, descriptive titles and meta descriptions (≤ 60/160 chars).
H1 per page; semantic headings.
Alt text for all images; captions where helpful.
Descriptive, human‑readable slugs.
Internal links between related projects.
XML sitemap, robots.txt, canonical tags.
Structured data for person, website, and projects.
Blog (optional) with topical content targeting long-tail keywords.
11) Acceptance Criteria (MVP)
Home
Renders hero with headline, subhead, and CTA buttons (Projects, Contact).
Shows at least 3 featured projects with images and tags.
Lighthouse (mobile): Perf ≥ 95, A11y ≥ 95, SEO ≥ 95.
Projects
Index lists all projects with client‑side filter by tag/tech.
Project detail pages render MDX with images and code snippets.
Social share image renders for each project.
About
Bio, headshot, skills by category, social links.
Resume
Inline summary and downloadable PDF link working.
Contact
Form submits successfully (provider), includes spam protection, thank-you state.
Global
Accessible nav with visible focus and skip link.
Dark mode toggle persists via prefers-color-scheme + local storage.
Deployed to live domain with HTTPS and sitemap accessible.
12) Risks and Mitigations
Content readiness delays
Mitigation: Start with brief versions; iterate case studies post‑launch.
Scope creep (blog/features)
Mitigation: Freeze MVP; phase backlog below.
Performance regressions due to imagery
Mitigation: Strict image guidelines and CI checks; use Next/Image.
Maintenance overhead with CMS
Mitigation: Start with Markdown in repo; consider CMS later.
13) Milestones and Timeline (example)
Week 1
Content inventory, wireframes, brand tokens, repository setup.
Week 2
Implement UI, MDX content, project pages, deploy to preview.
Week 3
Polish, SEO, analytics, accessibility fixes, launch.
14) Phase 2 Backlog
Blog with MDX and tags.
Search across projects/blog using client-side index.
Testimonials section.
Case study templates (problem → solution → impact).
Auto OG image generation per page.
RSS feed for blog.
Basic internationalization if needed.
15) Deliverables
Live site at chosen domain with HTTPS.
Source code repository with README and content editing instructions.
Analytics dashboard access.
Asset package (favicons, OG images).
Resume PDF stored in public/assets/.
16) QA Plan
Manual test matrix across breakpoints and browsers (Chrome, Firefox, Safari, Edge; iOS/Android).
Accessibility checks: Axe DevTools, manual keyboard-only pass, screen reader smoke test (NVDA/VoiceOver).
Performance: Lighthouse CI in PRs; verify Core Web Vitals on live.
SEO: Validate structured data via Rich Results Test; check sitemap and robots.
17) Open Questions (to personalize)
What job roles or client work are you primarily targeting (e.g., Frontend Engineer, Full‑Stack, ML, Design)?
Do you want a blog at launch, or defer to Phase 2?
Preferred tech stack? If none, is Next.js + TypeScript + Tailwind okay?
Hosting preference (Vercel vs Netlify)? Do you have a custom domain?
Which contact method should the form use (Formspree, Netlify Forms, Vercel Forms) and preferred recipient email?
Do you have an existing resume PDF to include?
List 3–6 projects to feature at launch (titles, brief descriptions, links, assets).
Any brand constraints (logo, colors, fonts), or should I propose tokens?
Do you want analytics to be privacy‑focused (Plausible) or GA4?
Any testimonials you can include now or later?