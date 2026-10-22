# Luke May — Professional Portfolio Website

A lightweight, responsive portfolio for GitHub Pages. Built with plain HTML, CSS, and a small amount of JavaScript. No framework, installation, build step, or ongoing cost required.

## Preview locally

Double-click `index.html` or run a local server from this folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish for free on GitHub Pages

1. Sign in to GitHub and create a **public** repository called `lukemay1181.github.io` (replace the placeholder with your actual GitHub username). To publish under another name, you can instead use a different repo and your site will be at `lukemay1181.github.io/<repo>/`.
2. Extract the ZIP file, and upload **the contents of this folder**, including `index.html`, `assets`, `documents`, `research`, and the `.nojekyll` file. Do not upload the enclosing `luke-may-portfolio` folder by itself.
3. Commit your files to the `main` branch.
4. Open **Settings → Pages → Build and deployment**. Set **Source: Deploy from a branch**, **Branch: main**, and **Folder: /(root)**; then save.
5. Your site will appear at `https://lukemay1181.github.io/` once GitHub finishes publishing.

## Research documents included (Version 3)

The package contains the documents in `documents/`. Links and in-page PDF viewers on both research pages have been installed and tested.

- `Luke_May_MSc_Thesis_2026.pdf` — supplied MSc thesis (100 pages)
- `Luke_May_Thesis_Defence_Slides_2026.pdf` — supplied defence slides (25 pages)
- `Public_Transit_Team_Project_2023.pdf` — fourth-year group paper (18 pages), **names and student IDs anonymized** on cover and page headers
- `Luke_May_Portfolio_Resume.pdf` — portfolio-formatted résumé from Version 1 (replace with your approved resume if desired)

The plots featured on the cards and project pages are extracted from the actual supplied PDFs, with captions identifying their sources. No research data has been fabricated.

## Important checks before making the repository public

1. **Verify that the thesis file is the final approved thesis.** The supplied PDF has a placeholder table caption (`Table 2.5: smth`, page 31 in the PDF) and the abstract labels a different year from its April 2026 cover. If you have a corrected approved copy, replace `documents/Luke_May_MSc_Thesis_2026.pdf` before publishing.
2. **Confirm that your collaborators are comfortable with public sharing** of the report, even though their names are omitted from this portfolio edition. The website credits the three-person project team as Luke May and two unnamed collaborators.
3. The website and public GitHub repository expose your email address from your résumé. Your phone number was intentionally excluded. Use a professional contact email if you prefer.
4. LinkedIn and GitHub profile links have not been added because the URLs have not been provided.
5. The résumé PDF included here is a **portfolio-formatted transcription**, not an identical copy of your uploaded original résumé. You may replace it with your approved final PDF.

## How to preview without missing styling

Download the ZIP, **extract it completely**, open the extracted website folder, and open `index.html`. Keep the `assets`, `research`, and `documents` folders next to `index.html`.

PDF previews work best in a modern browser (Chrome/Edge). If a local-file browser blocks embedded PDFs, use the separate document link. This restriction doesn't apply to the hosted GitHub Pages version.

## Design customization

- All typography, colour, spacing, and layout rules are in `assets/styles.css`.
- Header/footer/navigation are repeated in the three HTML files.
- Mobile menu is handled by `assets/main.js`.
- The project cards already use figures taken from your research materials.

## Files

- `index.html`: full landing page
- `research/environmental-health.html`: master's thesis project page
- `research/transit-adoption.html`: undergraduate team project page
- `assets/styles.css`: responsive visual design
- `assets/main.js`: mobile menu and footer year
- `assets/favicon.svg`: browser favicon
- `documents/Luke_May_Portfolio_Resume.pdf`: résumé formatted for public portfolio
- `.nojekyll`: instructs GitHub Pages to serve HTML/CSS/JS without Jekyll processing

No analytics or tracking code are included.


## Privacy and attribution in this edition
The public-transit research was completed by Luke May and two additional contributors. Per the portfolio owner's instructions, their names are withheld on the website. The website credits reflect the three-person group specified by the project owner. The portfolio PDF is an anonymized derivative of the supplied report: personally identifying names and student IDs were redacted from its cover and page headers, while the underlying study and results remain as in the supplied document. Keep the original source privately for the full archival record.

The MSc thesis and slides were included as supplied and were not altered; in particular the wording of Table 2.5 remains unchanged.
