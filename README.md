# Graystonite Website

Multi-page static site for Graystonite — visual communication specialists.

## Run it locally (in VS Code)

Open this folder in VS Code, then in the terminal (`` Ctrl+` ``):

```bash
npm install     # one time — pulls in Vite
npm run dev      # starts the dev server and opens the browser
```

The site runs at **http://localhost:5173**. Vite hot-reloads: edit any
`.html` file and the browser updates instantly.

## Build for hosting

```bash
npm run build    # outputs a static site to dist/
npm run preview  # serves the built dist/ to check it before deploying
```

Upload the contents of `dist/` to any static host (Netlify, Vercel,
GitHub Pages, Cloudflare Pages, or plain web hosting).

## Pages

| File                   | Page       |
|------------------------|------------|
| `index.html`           | Home       |
| `about.html`           | About      |
| `services.html`        | Services   |
| `portfolio.html`       | Portfolio  |
| `contact.html`         | Contact    |
| `why-graystonite.html` | Why Us     |

## Notes

- Styling uses **Tailwind via CDN** (loaded in each page's `<head>`), so
  there's no CSS build step — pages are self-contained.
- Fonts (Hanken Grotesk, Work Sans, Material Symbols) and all imagery load
  from Google's CDNs, so an internet connection is needed to render fully.
- Contact details wired in: `graystonite@outlook.com`, and phone links on
  the contact page.
- The social icons in the footers are placeholders (`href="#"`) — point
  them at real profiles when you have the URLs.
