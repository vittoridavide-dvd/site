# davidevittori.xyz

Personal academic website for Davide Vittori — static HTML/CSS/JS, no build step.

## Structure
- `index.html` — the whole site (single page, anchored sections)
- `assets/css/style.css` — styles
- `assets/js/data.js` — publications, teaching, and project content (edit this file to add/update entries)
- `assets/js/main.js` — rendering logic (grouping by year, tabs, reveal-on-scroll)
- `assets/img/portrait.jpg` — photo
- `assets/cv/Davide_Vittori_CV.pdf` — downloadable CV

## Editing content
Most day-to-day updates (new publication, new course, new project) only require editing
`assets/js/data.js` — add an entry to the relevant array (`ARTICLES`, `CHAPTERS`, `DATASETS`,
`BOOKS`, `PROJECTS`, or `TEACHING`). No HTML changes needed.

## Publishing with GitHub Pages
1. Push this repository to `main` (or your default branch).
2. On GitHub: Settings → Pages → Source → Deploy from a branch → `main` / `/ (root)`.
3. The site will be live at `https://<username>.github.io/<repo>/` within a few minutes,
   or at a custom domain if you add a `CNAME` file with `davidevittori.xyz` and point your
   domain's DNS to GitHub Pages.

## Local preview
No build tools needed — just serve the folder, e.g.:
```
python3 -m http.server 8000
```
then open http://localhost:8000
