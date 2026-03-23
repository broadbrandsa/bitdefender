# Project Structure

## Folder Layout

```
proposal-site/
├── docs/                        # Project documentation
├── public/
│   └── images/                  # Static images and assets
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── globals.css          # Global styles + Tailwind + shadcn theme
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page (proposal)
│   ├── components/
│   │   ├── sections/            # Proposal section components
│   │   └── ui/                  # shadcn/ui primitives
│   ├── content/                 # Static content data files
│   └── lib/
│       └── utils.ts             # Utility functions (cn, etc.)
├── components.json              # shadcn configuration
├── next.config.ts               # Next.js configuration
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json
```

## Section Composition Rules

1. Each proposal section lives in `src/components/sections/` as its own file.
2. Section files are named in kebab-case (e.g., `hero-section.tsx`, `executive-summary.tsx`).
3. Sections are composed together in `src/app/page.tsx`.
4. Sections use shadcn/ui primitives from `src/components/ui/` for consistent styling.
5. Each section is a self-contained React component with its own props interface.

## Content Management Approach

- Content is stored as TypeScript objects or constants in `src/content/`.
- Section components import content data and render it.
- This keeps content separate from presentation for easier updates.
- No CMS — all changes are made in code and deployed via git push.
