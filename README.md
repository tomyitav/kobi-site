# Kobi Site

Source code project of Kobi Yitav company site, using:

- next@6.1.1
- react@16.4
- typescript@3.0.1
- bootstrap@4.0.0
- Styled-jsx
- Module css **(PostCSS - cssnext, nested, import)**
- font-awesome@5
- SEO & analytics (Google Analytics)

## Run  :rocket:


### :rocket: Development

```bash
npm run start:dev # run
```

### :rocket: Production

#### Serve
```bash
npm install
npm run build # create .next directory
npm start # start server
```

#### Deploy
```bash
npm run now:deploy
```

#### Build static HTML
```bash
npm install
npm run build # create .next directory
npm run export # create .out directory
```

## Configuration

Set SEO & analytics variables

> src/constants/env.ts

```typescript
export const GA_TRACKING_ID = ''
export const FB_TRACKING_ID = ''
export const SENTRY_TRACKING_ID = ''

// for meta tag <og & twitter>
export const SITE_NAME = ''
export const SITE_TITLE = ''
export const SITE_DESCRIPTION = ''
export const SITE_IMAGE = ''
```

If each variable evaluated false, it does not load related library
