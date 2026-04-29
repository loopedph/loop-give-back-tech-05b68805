# Deploying Looped to GitHub Pages

This project builds two ways:

- **Lovable preview / Cloudflare** — uses `vite.config.ts` (TanStack Start). This is the default `bun run build`.
- **Static site for GitHub Pages** — uses `vite.static.config.ts`. Run `bun run build:static`.

## One-time setup on GitHub

1. Push this repo to GitHub.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually). The workflow at
   `.github/workflows/deploy.yml` will build and publish the site.

That's it — your site will be live at
`https://<your-username>.github.io/<repo-name>/`.

## Custom domain or user/org pages

If you deploy at the root of a domain (custom domain or
`username.github.io`), edit `.github/workflows/deploy.yml` and set
`BASE_PATH: /` instead of the repo name.

## Build locally

```bash
bun install
bun run build:static
# Output is in ./dist
```
