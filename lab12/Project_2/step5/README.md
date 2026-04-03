# Week 12 Lab 12 — Project 2 Step 5

## Student Info
- Name: `__________`
- Student ID: `__________`
- Date: `2026-04-03`

## Overview
This project updates the existing Expo/React Native app using **Flexbox** and responsive layout techniques from **React Native, 5th ed. (Ch. 18)**:
- Responsive grid layout (flexbox + `useWindowDimensions`)
- Safe area handling in the header (SafeAreaView + `react-native-safe-area-context`)
- Adaptive content layout for phone vs tablet (responsive layout + flexible grids/rows)

## Requirements (Step 5)
Implemented in:
- `src/components/GridLayout.tsx` — Responsive grid system (flexbox)
- `src/components/ResponsiveHeader.tsx` — Header with safe area handling
- `src/components/AdaptiveLayout.tsx` — Adaptive content layout + feature cards + stats

Screens updated to use the new components:
- `app/index.js`
- `app/data.js`
- `app/settings.js`

## How Responsive Layout Works
- **`useWindowDimensions()`** is used to detect screen size (tablet breakpoint at `width >= 768`) and orientation (`width > height`).
- **Grid sizing**: `GridLayout` computes a fixed item width based on available width, spacing, and number of columns.
- **Safe areas**: `ResponsiveHeader` relies on `useSafeAreaInsets()` to avoid notches/home indicators (Android/iOS handled via `Platform.OS`).

## Test / Run
From `lab12/Project_2/step5/`:
1. `npm install`
2. `npm start` (or `npm run android` / `npm run ios` depending on your setup)

## Screenshots
Add screenshots for:
- Phone — Portrait
- Phone — Landscape
- Tablet

Suggested filenames (optional):
- `screenshots/phone-portrait.png`
- `screenshots/phone-landscape.png`
- `screenshots/tablet.png`

