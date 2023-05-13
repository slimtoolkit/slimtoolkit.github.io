# PUBLISHING

## Setup

Install dependencies:

```bash
npm install (or `npm ci`)
```

## Generate Static Site

```bash
npm run generate
```

## Publish Static Site to `gh-pages`

```bash
npm run deploy
```

note: `npm run deploy` may delete `CNAME` and `.nojekyll`, which need to be restored
