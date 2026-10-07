# Elenotic website

A responsive, static website for Elenotic, an early-stage energy technology company exploring an intelligence layer for distributed energy. The site is built with plain HTML, CSS and JavaScript; there is no build step or package installation.

## Project structure

```text
.
├── index.html
├── about.html
├── contact.html
├── technology.html
├── vision.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── favicon/
│       └── favicon.svg
├── robots.txt
└── sitemap.xml
```

Keep the HTML asset references in sync with this structure.

## Run locally

From this directory, start a local static server:

```powershell
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). You can also open `index.html` directly, although a local server more closely matches deployment.

## Configure contact email

Set `CONTACT_EMAIL` in `js/main.js` when a public contact address is ready. The contact page displays a `mailto:` link when the value is configured; otherwise, it shows the setup message.

## Deploy

The site can be deployed to Cloudflare Pages without a build command. Connect the repository, choose the **None** framework preset, leave the build command empty, and use `/` as the output directory.

When the production domain is confirmed, verify the URLs in `sitemap.xml` and `robots.txt`, and consider adding `og:url` and an `og:image` (1200 × 630) to each page.

## Content note

The site describes Elenotic's thesis and development direction. It does not claim a finished or deployed product, customers, partners, integrations or funding.
