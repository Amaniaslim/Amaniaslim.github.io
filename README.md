# Amani Aslim · Portfolio

Personal portfolio website for **Amani Aslim** — Software Testing & Quality Assurance,
with a technical background in Python, REST APIs and Web Security.

🌐 **Live site:** https://amaniaslim.github.io

The site is fully **multilingual** (German · English · Arabic, with automatic
right-to-left layout for Arabic), supports **light and dark mode**, is
**responsive** across smartphone, tablet and desktop, and is built with a focus
on **accessibility** (semantic HTML, visible focus states, ARIA labels and
keyboard operability).

---

## Technologies

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties (theming), Flexbox & Grid, responsive media queries,
  `prefers-reduced-motion` and `prefers-color-scheme` support
- **Vanilla JavaScript** — no frameworks, no build step, no dependencies
  - i18n translation system (DE / EN / AR)
  - theme switcher with `localStorage` persistence
  - mobile navigation, scroll-reveal animations, dynamic footer year

No React, no npm, no bundler — the site runs directly on **GitHub Pages**.

---

## Project structure

```
.
├── index.html                    # Page structure & content (all sections)
├── styles.css                    # Styling, theming, responsive layout
├── script.js                     # Translations, theme, language, interactions
├── README.md                     # This file
├── .nojekyll                     # Serve files as-is (disables Jekyll processing)
└── assets/
    └── profile-placeholder.svg   # "AA" initials placeholder image
```

---

## Run locally

The site is fully static, so no build is required.

**Option A — open directly**

Double-click `index.html`, or open it in your browser.

**Option B — local web server** (recommended, avoids any file-path quirks)

```bash
# Python 3
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

---

## Deployment via GitHub Pages

The site is published from the **root of the `main` branch**:

1. Push the files to the `main` branch of the repository.
2. In the repository on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
5. After a short moment the site is available at:
   **https://amaniaslim.github.io**

The `.nojekyll` file ensures GitHub Pages serves all files as-is without Jekyll processing.

---

## Replacing the profile picture

The hero section uses a placeholder with the initials **AA**
(`assets/profile-placeholder.svg`). To use a real photo:

1. Add your image to the `assets/` folder, e.g. `assets/profile.jpg`
   (a square image, around 520×520 px, works best).
2. In `index.html`, update the avatar image source and add a descriptive
   `alt` text:

   ```html
   <img src="assets/profile.jpg"
        alt="Portrait of Amani Aslim"
        width="260" height="260" class="avatar-img">
   ```

3. (Optional) Update the `og:image` and `icon` references in the `<head>`
   of `index.html` to point at the new image.

To keep the initials placeholder, simply leave the files unchanged.

---

## Adding more projects

Projects live in the **Projects** section of `index.html` inside
`<div class="projects-grid"> … </div>`. To add one:

1. Copy an existing `<article class="card project"> … </article>` block.
2. Update the project number, title, description, flow steps, contributions
   and technology tags.
3. For text that should appear in all three languages, give the element a
   `data-i18n="my_key"` attribute and add `my_key` to **each** language object
   (`de`, `en`, `ar`) in `script.js`. Text without a `data-i18n` attribute
   (e.g. technology names like `Python`) stays the same in every language.
4. Add `class="project-featured"` to make a card span the full width of the grid.

For a project with a public repository, add a link:

```html
<a class="project-link"
   href="https://github.com/Amaniaslim/your-repo"
   target="_blank" rel="noopener"
   data-i18n="link_open_repo">Repository öffnen ↗</a>
```

For a private repository, use the private badge instead of a non-functional link:

```html
<span class="badge badge-private" data-i18n="badge_private">Repository privat</span>
```

---

## Privacy

This website uses **no tracking or analytics cookies** and loads no third-party
scripts or fonts.
