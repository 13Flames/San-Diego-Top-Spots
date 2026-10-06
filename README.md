# San Diego Top Spots (jQuery)

A jQuery app that lists the top 30 places to see in San Diego in a table, each
with a link to its location on Google Maps.

**Live demo:** https://san-diego-top-spots-pi.vercel.app/

## Features

- Loads the spots from a local JSON file when the page is ready
- Shows each spot's name and description in a table
- "View on Google Maps" opens the spot's coordinates in a new tab

## How it works

All the logic is in `public/main.js`:

- `$.getJSON` loads `public/data.json`
- `$.each` builds a table row for each spot, turning its `[latitude,
  longitude]` into a Google Maps link
- The rows are inserted into the table in one go with `.html()`

## Run locally

No build step - it's static HTML, CSS and JavaScript in `public/`.

```bash
npm install      # also installs the Playwright browsers for testing
npm start        # http://localhost:8888
npm test         # Playwright end-to-end tests
```

## Built with

HTML, CSS, JavaScript, jQuery, Playwright. Deployed on Vercel.

A later React version that fetches the spots from a remote API is at
[13Flames/React-Top-Spots](https://github.com/13Flames/React-Top-Spots).
