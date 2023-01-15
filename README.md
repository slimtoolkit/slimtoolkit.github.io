# PUBLISHING

## Setup

Install dependencies:

```bash
npm install
```

## Generate Static Site

```bash
npm run generate
```

## Publish Static Site to `gh-pages`

```bash
npm run deploy
```

note: `npm run deploy` deletes `CNAME` and `.nojekyll`, which need to be restored
