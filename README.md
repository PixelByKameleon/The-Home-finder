# The Home Finder

A clean, modern real-estate listing web app for browsing, filtering, and saving homes for sale and rent. Built as a fast, dependency-free static site so it runs anywhere — no build step required.

![The Home Finder](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80)

## Features

- **Smart search** — filter listings by location, property type, and max price.
- **Live filters & sorting** — toggle For Sale / For Rent / New, and sort by price or bedrooms.
- **Property detail view** — a modal gallery with photos, specs, features, and call-to-action.
- **Save favorites** — heart any home; favorites persist in `localStorage` across visits.
- **Explore by city** — quick-search popular markets.
- **Fully responsive** — designed mobile-first, scales to large screens.
- **Accessible** — semantic markup, ARIA labels, keyboard support (Esc closes the modal).

## Tech

Plain HTML, CSS, and vanilla JavaScript — no frameworks, no bundler.

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and content |
| `styles.css` | Design system, layout, and responsive rules |
| `data.js` | Sample listing & city data |
| `app.js` | Rendering, search/filter/sort, favorites, modal |

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000

# or Node
npx serve .
```

## Design notes

- **Type**: *Fraunces* (display serif) paired with *Plus Jakarta Sans* (UI sans).
- **Palette**: a calm forest-green brand with warm terracotta and gold accents on a soft paper background.
- Listing images are royalty-free photos served from the Unsplash CDN.

## Status

This is a front-end design demo. Listing data is static sample content; "Schedule a tour", "Contact agent", and the sign-up forms are illustrative and not wired to a backend.
