# AutoVault — Premium Used Cars

A modern, responsive React website for showcasing pre-owned luxury and performance vehicles. UI-only demo with no backend.

## Features

- **Home** — Hero section, featured vehicles, and value propositions
- **Inventory** — Full car listing with search, body-type filter, and sorting
- **Car Detail** — Image gallery, specs, and call-to-action buttons
- **About** — Brand story and company values

## Tech Stack

- React 19 + Vite
- React Router
- Custom CSS (no UI framework)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── cars/       # CarCard, CarGrid, FilterBar
│   ├── home/       # Hero, FeaturedCars, WhyUs
│   └── layout/     # Header, Footer, Layout
├── data/           # Static car inventory
├── hooks/          # useCarFilters
├── pages/          # Route pages
└── styles/         # Global CSS & variables
```
