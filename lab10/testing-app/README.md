# Lab 10 - Testing and Deployment

## Student Information
- Name: [Your Name]
- Student ID: [Your Student ID]
- Date: 2026-03-21

## Project Overview
This project contains a React + TypeScript Todo application built with Vite.
It includes:
- Unit testing with Jest and React Testing Library
- Production build configuration
- Vercel deployment configuration
- GitHub Actions CI workflow (test before build)

## Task 1: Unit Testing (Jest + RTL)

### Implemented Files
- `src/components/TodoList.tsx`
- `src/components/TodoList.test.tsx`
- `jest.config.js`
- `jest.setup.ts`

### Run Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

## Task 2: Deployment and CI/CD

### Production Build Configuration
- `vite.config.ts` includes:
  - `outDir: "dist"`
  - `sourcemap: false`
  - `minify: "terser"`
  - manual vendor chunking for React libraries

### Environment Variables
- `.env.production`
  - `VITE_API_URL=https://api.example.com`
  - `VITE_APP_VERSION=1.0.0`

### Vercel Configuration
- `vercel.json` includes:
  - Vite build command
  - output directory config
  - SPA rewrite to `index.html`
  - long-term cache headers for static assets

### GitHub Actions Workflow
- `.github/workflows/ci.yml`:
  - Runs on push/pull request to `main`
  - Executes tests with coverage
  - Builds only after tests pass
  - Uploads coverage and build artifacts

## Build and Preview
### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment Steps (Vercel)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Login:
   ```bash
   vercel login
   ```
3. Deploy:
   ```bash
   vercel
   ```

## Live URL
- Vercel URL: [Add deployed URL here]

## Notes
- Tests are written using user-focused patterns from React Testing Library.
- `userEvent` is used for realistic interactions instead of shallow rendering.
