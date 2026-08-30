# Sandip Acharya — Personal Portfolio

Professional portfolio and online CV for **Sandip Acharya**, Civil Engineer and
Disaster Risk & Resilience Specialist based in Kathmandu, Nepal.

Built with **Next.js** (App Router) + **Tailwind CSS**.

## Stack

- Next.js 16 (static-first, App Router)
- Tailwind CSS v4
- `react-markdown` + `remark-gfm` for blog articles
- `gray-matter` for Markdown frontmatter

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Project structure

```
app/                 # pages and routes
  page.jsx           # home / hero
  about/ experience/ projects/ education/ skills/ contact/
  blog/              # blog listing
  blog/[slug]/       # individual article
  layout.jsx         # root layout + nav + footer
  globals.css        # Tailwind theme + styles
components/          # reusable UI components
content/blog/        # blog articles (Markdown + frontmatter)
data/                # CV data (experience, projects, skills, etc.)
lib/                 # utilities (metadata, blog reader, contact config)
```

## Content management

### Blog articles

Add a new article by creating a Markdown file in `content/blog/`:

```markdown
---
title: My Article
slug: my-article
excerpt: Short summary
date: 2026-08-30
category: "Disaster Risk Reduction"
tags:
  - Flood Risk
coverImage: /images/blog/cover.jpg
featured: false
author: Sandip Acharya
---

Article body in Markdown...
```

The article is automatically published at `/blog/my-article` and listed on
`/blog`. No code changes are required.

See `content/blog/_template.md.example` for a full template with every
supported frontmatter field and Markdown feature.

Supported Markdown: headings, paragraphs, lists, blockquotes, tables, images,
captions, links, and code blocks.

### Updating CV content

All CV content lives in `data/` as structured JavaScript objects
(`experience.js`, `projects.js`, `education.js`, `skills.js`, `about.js`,
`profile.js`). Edit these files to keep the site in sync with your CV.

### LinkedIn

The "Connect" / "LinkedIn" buttons link to the profile set as `linkedin` in
`data/profile.js`.

### Contact form

By default the contact form is purely local and does not send email. To enable
submissions, edit `lib/contactConfig.js` and set `endpoint` to a service that
accepts a JSON POST (e.g. Formspree). The form posts `{ name, email, subject,
message }`.
