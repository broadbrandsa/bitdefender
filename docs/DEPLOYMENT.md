# Deployment

## GitHub Repository Setup

1. Create a new GitHub repository (public or private)
2. Push the project:
   ```bash
   cd proposal-site
   git remote add origin <repo-url>
   git push -u origin main
   ```

## Vercel Project Setup

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repository
3. Configure project settings:

| Setting           | Value              |
| ----------------- | ------------------ |
| Framework Preset  | Next.js            |
| Root Directory    | `.` (project root) |
| Build Command     | `pnpm build`       |
| Output Directory  | (leave blank)      |
| Install Command   | `pnpm install`     |
| Node.js Version   | 18.x or 20.x      |

4. Click **Deploy**

## Root Directory Rules

- The Vercel root directory must point to the project root (where `package.json` lives)
- Do NOT set root directory to `src/` or any subfolder
- If this project is inside a monorepo later, update the root directory accordingly

## Build Command

```bash
pnpm build
```

This runs `next build` which compiles TypeScript and generates the production bundle.

## Environment Variable Management

Add environment variables in Vercel Dashboard > Project > Settings > Environment Variables.

| Variable             | Purpose                  | Required |
| -------------------- | ------------------------ | -------- |
| `NEXT_PUBLIC_GA_ID`  | Google Analytics 4 ID    | No       |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL     | No       |

- Prefix with `NEXT_PUBLIC_` for client-side access
- Non-prefixed variables are server-side only

## How to Redeploy

### Automatic
Every push to the `main` branch triggers an automatic deployment on Vercel.

### Manual
1. Go to Vercel Dashboard > Project > Deployments
2. Click the three-dot menu on any deployment
3. Select **Redeploy**

### CLI
```bash
pnpm dlx vercel --prod
```
