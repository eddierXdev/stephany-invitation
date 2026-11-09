# Stephany's Invitation

A minimalist, playful, mobile-first invitation website built with React and Vite.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Personalize the proposed date

Open `src/config/invitation.js` and change:

```js
proposedDate: null,
proposedDateLabel: "Tengo una fecha especial en mente…",
```

Set `proposedDate` to an ISO date string, for example:

```js
proposedDate: "2026-12-14",
```

The date is formatted automatically in Spanish. Replace the example with the real date before publishing.

## Deploy

You can deploy the `dist/` directory to Vercel or another static hosting provider. For GitHub Pages, configure Vite's `base` option to match the repository path.

## Notes

- No backend or database.
- No music or autoplay audio.
- The No button moves away a limited number of times, then becomes selectable.
- Reduced-motion preferences are respected.
