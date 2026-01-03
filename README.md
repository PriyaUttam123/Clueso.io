# Clueso.io Clone

A modern, responsive pixel-perfect clone of the Clueso.io landing page, built with React, Vite, and Framer Motion.

## 🚀 Project Overview

This project replicates the clean, SaaS aesthetic of Clueso.io. It focuses on visual fidelity, smooth animations, and a reusable component architecture.

### Tech Stack
- **Framework**: [React](https://react.dev/) v18
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (with CSS Variables & Modules approach)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🛠️ Setup & Installation

Follow these steps to get the project running on your local machine.

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd Clueso.io
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The app will arguably start at `http://localhost:5173`.

## 🏗️ Architecture

The project follows a standard React component-based architecture:

```
src/
├── components/
│   ├── common/       # Reusable UI atoms (Buttons, Cards)
│   ├── layout/       # Structural components (Navbar, Footer)
│   └── sections/     # Page-specific sections (Hero, Features, Pricing)
├── App.jsx           # Main entry component
├── index.css         # Global styles & Design System (Variables)
└── main.jsx          # App entry point
```

### Design Decisions
- **CSS Variables**: Used for colors, spacing, and typography to ensure consistency and easy theming (defined in `index.css`).
- **Component Composition**: Sections are broken down into smaller components to maintain readability.
- **Mobile-First**: Styles are written with responsive media queries to ensure the site looks good on all devices.

## 🎨 Key Features
- **Sticky Navbar**: Smoothly transitions on scroll.
- **Animated Hero**: Entrance animations for headline and imagery.
- **Interactive UI**: Hover states on buttons and cards.
- **Responsive Layout**: Adapts seamlessly to mobile and desktop screens.
