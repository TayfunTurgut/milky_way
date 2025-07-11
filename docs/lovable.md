Repository: tayfunturgut/milky_way
Files analyzed: 82

Estimated tokens: 49.1k

Directory structure:
└── tayfunturgut-milky_way/
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│ └── robots.txt
└── src/
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
├── components/
│ ├── DiaperTracker.tsx
│ ├── FeedingTracker.tsx
│ ├── HistoryDialog.tsx
│ ├── Navigation.tsx
│ ├── ThemeProvider.tsx
│ ├── ThemeToggle.tsx
│ └── ui/
│ ├── accordion.tsx
│ ├── alert-dialog.tsx
│ ├── alert.tsx
│ ├── aspect-ratio.tsx
│ ├── avatar.tsx
│ ├── badge.tsx
│ ├── breadcrumb.tsx
│ ├── button.tsx
│ ├── calendar.tsx
│ ├── card.tsx
│ ├── carousel.tsx
│ ├── chart.tsx
│ ├── checkbox.tsx
│ ├── collapsible.tsx
│ ├── command.tsx
│ ├── context-menu.tsx
│ ├── dialog.tsx
│ ├── drawer.tsx
│ ├── dropdown-menu.tsx
│ ├── form.tsx
│ ├── hover-card.tsx
│ ├── input-otp.tsx
│ ├── input.tsx
│ ├── label.tsx
│ ├── menubar.tsx
│ ├── navigation-menu.tsx
│ ├── pagination.tsx
│ ├── popover.tsx
│ ├── progress.tsx
│ ├── radio-group.tsx
│ ├── resizable.tsx
│ ├── scroll-area.tsx
│ ├── select.tsx
│ ├── separator.tsx
│ ├── sheet.tsx
│ ├── sidebar.tsx
│ ├── skeleton.tsx
│ ├── slider.tsx
│ ├── sonner.tsx
│ ├── switch.tsx
│ ├── table.tsx
│ ├── tabs.tsx
│ ├── textarea.tsx
│ ├── toast.tsx
│ ├── toaster.tsx
│ ├── toggle-group.tsx
│ ├── toggle.tsx
│ ├── tooltip.tsx
│ └── use-toast.ts
├── hooks/
│ ├── use-mobile.tsx
│ ├── use-toast.ts
│ ├── useLocalStorage.ts
│ └── useTracking.ts
├── lib/
│ └── utils.ts
├── pages/
│ ├── DiaperPage.tsx
│ ├── FeedingPage.tsx
│ ├── Index.tsx
│ └── NotFound.tsx
└── types/
└── index.ts

================================================
FILE: README.md
================================================

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c81aaace-0b02-4c40-991a-15941e44f506

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c81aaace-0b02-4c40-991a-15941e44f506) and start
prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be
reflected in Lovable.

The only requirement is having Node.js & npm
installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c81aaace-0b02-4c40-991a-15941e44f506) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

================================================
FILE: components.json
================================================
{
"$schema": "https://ui.shadcn.com/schema.json",
"style": "default",
"rsc": false,
"tsx": true,
"tailwind": {
"config": "tailwind.config.ts",
"css": "src/index.css",
"baseColor": "slate",
"cssVariables": true,
"prefix": ""
},
"aliases": {
"components": "@/components",
"utils": "@/lib/utils",
"ui": "@/components/ui",
"lib": "@/lib",
"hooks": "@/hooks"
}
}

================================================
FILE: eslint.config.js
================================================
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
{ ignores: ["dist"] },
{
extends: [js.configs.recommended, ...tseslint.configs.recommended],
files: ["**/*.{ts,tsx}"],
languageOptions: {
ecmaVersion: 2020,
globals: globals.browser,
},
plugins: {
"react-hooks": reactHooks,
"react-refresh": reactRefresh,
},
rules: {
...reactHooks.configs.recommended.rules,
"react-refresh/only-export-components": [
"warn",
{ allowConstantExport: true },
],
"@typescript-eslint/no-unused-vars": "off",
},
}
);

================================================
FILE: index.html
================================================

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Baby Tracker - Feeding & Diaper Tracker</title>
    <meta name="description" content="Beautiful breastfeeding and diaper tracking app for new parents" />
    <meta name="author" content="Lovable" />

    <meta property="og:title" content="Baby Tracker - Feeding & Diaper Tracker" />
    <meta property="og:description" content="Beautiful breastfeeding and diaper tracking app for new parents" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

================================================
FILE: package.json
================================================
{
"name": "vite_react_shadcn_ts",
"private": true,
"version": "0.0.0",
"type": "module",
"scripts": {
"dev": "vite",
"build": "vite build",
"build:dev": "vite build --mode development",
"lint": "eslint .",
"preview": "vite preview"
},
"dependencies": {
"@hookform/resolvers": "^3.9.0",
"@radix-ui/react-accordion": "^1.2.0",
"@radix-ui/react-alert-dialog": "^1.1.1",
"@radix-ui/react-aspect-ratio": "^1.1.0",
"@radix-ui/react-avatar": "^1.1.0",
"@radix-ui/react-checkbox": "^1.1.1",
"@radix-ui/react-collapsible": "^1.1.0",
"@radix-ui/react-context-menu": "^2.2.1",
"@radix-ui/react-dialog": "^1.1.2",
"@radix-ui/react-dropdown-menu": "^2.1.1",
"@radix-ui/react-hover-card": "^1.1.1",
"@radix-ui/react-label": "^2.1.0",
"@radix-ui/react-menubar": "^1.1.1",
"@radix-ui/react-navigation-menu": "^1.2.0",
"@radix-ui/react-popover": "^1.1.1",
"@radix-ui/react-progress": "^1.1.0",
"@radix-ui/react-radio-group": "^1.2.0",
"@radix-ui/react-scroll-area": "^1.1.0",
"@radix-ui/react-select": "^2.1.1",
"@radix-ui/react-separator": "^1.1.0",
"@radix-ui/react-slider": "^1.2.0",
"@radix-ui/react-slot": "^1.1.0",
"@radix-ui/react-switch": "^1.1.0",
"@radix-ui/react-tabs": "^1.1.0",
"@radix-ui/react-toast": "^1.2.1",
"@radix-ui/react-toggle": "^1.1.0",
"@radix-ui/react-toggle-group": "^1.1.0",
"@radix-ui/react-tooltip": "^1.1.4",
"@tanstack/react-query": "^5.56.2",
"class-variance-authority": "^0.7.1",
"clsx": "^2.1.1",
"cmdk": "^1.0.0",
"date-fns": "^4.1.0",
"embla-carousel-react": "^8.3.0",
"input-otp": "^1.2.4",
"lucide-react": "^0.462.0",
"next-themes": "^0.4.6",
"react": "^18.3.1",
"react-day-picker": "^8.10.1",
"react-dom": "^18.3.1",
"react-hook-form": "^7.53.0",
"react-resizable-panels": "^2.1.3",
"react-router-dom": "^6.26.2",
"recharts": "^2.12.7",
"sonner": "^1.5.0",
"tailwind-merge": "^2.5.2",
"tailwindcss-animate": "^1.0.7",
"vaul": "^0.9.3",
"zod": "^3.23.8"
},
"devDependencies": {
"@eslint/js": "^9.9.0",
"@tailwindcss/typography": "^0.5.15",
"@types/node": "^22.5.5",
"@types/react": "^18.3.3",
"@types/react-dom": "^18.3.0",
"@vitejs/plugin-react-swc": "^3.5.0",
"autoprefixer": "^10.4.20",
"eslint": "^9.9.0",
"eslint-plugin-react-hooks": "^5.1.0-rc.0",
"eslint-plugin-react-refresh": "^0.4.9",
"globals": "^15.9.0",
"lovable-tagger": "^1.1.7",
"postcss": "^8.4.47",
"tailwindcss": "^3.4.11",
"typescript": "^5.5.3",
"typescript-eslint": "^8.0.1",
"vite": "^5.4.1"
}
}

================================================
FILE: postcss.config.js
================================================
export default {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
}

================================================
FILE: tailwind.config.ts
================================================
import type { Config } from "tailwindcss";

export default {
darkMode: ["class"],
content: [
"./pages/**/*.{ts,tsx}",
"./components/**/*.{ts,tsx}",
"./app/**/*.{ts,tsx}",
"./src/**/*.{ts,tsx}",
],
prefix: "",
theme: {
container: {
center: true,
padding: '2rem',
screens: {
'2xl': '1400px'
}
},
extend: {
colors: {
border: 'hsl(var(--border))',
input: 'hsl(var(--input))',
ring: 'hsl(var(--ring))',
background: 'hsl(var(--background))',
foreground: 'hsl(var(--foreground))',
primary: {
DEFAULT: 'hsl(var(--primary))',
foreground: 'hsl(var(--primary-foreground))',
glow: 'hsl(var(--primary-glow))'
},
secondary: {
DEFAULT: 'hsl(var(--secondary))',
foreground: 'hsl(var(--secondary-foreground))'
},
destructive: {
DEFAULT: 'hsl(var(--destructive))',
foreground: 'hsl(var(--destructive-foreground))'
},
muted: {
DEFAULT: 'hsl(var(--muted))',
foreground: 'hsl(var(--muted-foreground))'
},
accent: {
DEFAULT: 'hsl(var(--accent))',
foreground: 'hsl(var(--accent-foreground))'
},
popover: {
DEFAULT: 'hsl(var(--popover))',
foreground: 'hsl(var(--popover-foreground))'
},
card: {
DEFAULT: 'hsl(var(--card))',
foreground: 'hsl(var(--card-foreground))'
},
sidebar: {
DEFAULT: 'hsl(var(--sidebar-background))',
foreground: 'hsl(var(--sidebar-foreground))',
primary: 'hsl(var(--sidebar-primary))',
'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
accent: 'hsl(var(--sidebar-accent))',
'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
border: 'hsl(var(--sidebar-border))',
ring: 'hsl(var(--sidebar-ring))'
}
},
backgroundImage: {
'gradient-primary': 'var(--gradient-primary)',
'gradient-secondary': 'var(--gradient-secondary)',
'gradient-accent': 'var(--gradient-accent)',
'gradient-background': 'var(--gradient-background)'
},
boxShadow: {
'soft': 'var(--shadow-soft)',
'glow': 'var(--shadow-glow)'
},
transitionTimingFunction: {
'smooth': 'var(--transition-smooth)'
},
borderRadius: {
lg: 'var(--radius)',
md: 'calc(var(--radius) - 2px)',
sm: 'calc(var(--radius) - 4px)'
},
keyframes: {
'accordion-down': {
from: {
height: '0'
},
to: {
height: 'var(--radix-accordion-content-height)'
}
},
'accordion-up': {
from: {
height: 'var(--radix-accordion-content-height)'
},
to: {
height: '0'
}
}
},
animation: {
'accordion-down': 'accordion-down 0.2s ease-out',
'accordion-up': 'accordion-up 0.2s ease-out'
}
}
},
plugins: [require("tailwindcss-animate")],
} satisfies Config;

================================================
FILE: tsconfig.app.json
================================================
{
"compilerOptions": {
"target": "ES2020",
"useDefineForClassFields": true,
"lib": ["ES2020", "DOM", "DOM.Iterable"],
"module": "ESNext",
"skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }

},
"include": ["src"]
}

================================================
FILE: tsconfig.json
================================================
{
"files": [],
"references": [
{ "path": "./tsconfig.app.json" },
{ "path": "./tsconfig.node.json" }
],
"compilerOptions": {
"baseUrl": ".",
"paths": {
"@/_": ["./src/_"]
},
"noImplicitAny": false,
"noUnusedParameters": false,
"skipLibCheck": true,
"allowJs": true,
"noUnusedLocals": false,
"strictNullChecks": false
}
}

================================================
FILE: tsconfig.node.json
================================================
{
"compilerOptions": {
"target": "ES2022",
"lib": ["ES2023"],
"module": "ESNext",
"skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true

},
"include": ["vite.config.ts"]
}

================================================
FILE: vite.config.ts
================================================
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
server: {
host: "::",
port: 8080,
},
plugins: [
react(),
mode === 'development' &&
componentTagger(),
].filter(Boolean),
resolve: {
alias: {
"@": path.resolve(\_\_dirname, "./src"),
},
},
}));

================================================
FILE: public/robots.txt
================================================
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: \*
Allow: /

================================================
FILE: src/App.css
================================================
#root {
max-width: 1280px;
margin: 0 auto;
padding: 2rem;
text-align: center;
}

.logo {
height: 6em;
padding: 1.5em;
will-change: filter;
transition: filter 300ms;
}
.logo:hover {
filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}

@media (prefers-reduced-motion: no-preference) {
a:nth-of-type(2) .logo {
animation: logo-spin infinite 20s linear;
}
}

.card {
padding: 2em;
}

.read-the-docs {
color: #888;
}

================================================
FILE: src/App.tsx
================================================
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DiaperPage from "./pages/DiaperPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
<QueryClientProvider client={queryClient}>
<ThemeProvider defaultTheme="light" storageKey="baby-tracker-theme">
<TooltipProvider>
<Toaster />
<Sonner />
<BrowserRouter>
<Routes>
<Route path="/" element={<Index />} />
<Route path="/diaper" element={<DiaperPage />} />
{/_ ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "_" ROUTE _/}
<Route path="_" element={<NotFound />} />
</Routes>
</BrowserRouter>
</TooltipProvider>
</ThemeProvider>
</QueryClientProvider>
);

export default App;

================================================
FILE: src/index.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;

/_ Definition of the design system. All colors, gradients, fonts, etc should be defined here.
All colors MUST be HSL.
_/

@layer base {
:root {
/_ Baby app soft pastel theme _/
--background: 315 100% 98%;
--foreground: 260 15% 25%;

    --card: 320 50% 96%;
    --card-foreground: 260 15% 25%;

    --popover: 320 50% 96%;
    --popover-foreground: 260 15% 25%;

    /* Soft lavender primary */
    --primary: 270 50% 65%;
    --primary-foreground: 320 50% 98%;
    --primary-glow: 270 60% 80%;

    /* Mint secondary */
    --secondary: 150 40% 85%;
    --secondary-foreground: 260 15% 25%;

    /* Peachy accent */
    --accent: 15 70% 85%;
    --accent-foreground: 260 15% 25%;

    /* Soft muted tones */
    --muted: 300 20% 92%;
    --muted-foreground: 260 10% 50%;

    /* Gentle error state */
    --destructive: 0 70% 70%;
    --destructive-foreground: 320 50% 98%;

    /* Subtle borders */
    --border: 300 30% 88%;
    --input: 300 30% 88%;
    --ring: 270 50% 65%;

    /* Beautiful gradients */
    --gradient-primary: linear-gradient(135deg, hsl(270 50% 65%), hsl(270 60% 80%));
    --gradient-secondary: linear-gradient(135deg, hsl(150 40% 85%), hsl(150 50% 90%));
    --gradient-accent: linear-gradient(135deg, hsl(15 70% 85%), hsl(15 80% 90%));
    --gradient-background: linear-gradient(180deg, hsl(315 100% 98%), hsl(300 50% 96%));

    /* Elegant shadows */
    --shadow-soft: 0 4px 20px hsl(270 50% 65% / 0.1);
    --shadow-glow: 0 0 30px hsl(270 60% 80% / 0.3);

    /* Smooth transitions */
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;

    --sidebar-foreground: 240 5.3% 26.1%;

    --sidebar-primary: 240 5.9% 10%;

    --sidebar-primary-foreground: 0 0% 98%;

    --sidebar-accent: 240 4.8% 95.9%;

    --sidebar-accent-foreground: 240 5.9% 10%;

    --sidebar-border: 220 13% 91%;

    --sidebar-ring: 217.2 91.2% 59.8%;

}

.dark {
/_ Dark mode with warm, muted tones _/
--background: 260 25% 8%;
--foreground: 300 20% 92%;

    --card: 260 20% 12%;
    --card-foreground: 300 20% 92%;

    --popover: 260 20% 12%;
    --popover-foreground: 300 20% 92%;

    /* Soft purple primary in dark */
    --primary: 270 40% 70%;
    --primary-foreground: 260 25% 8%;
    --primary-glow: 270 50% 60%;

    /* Muted mint secondary */
    --secondary: 150 20% 25%;
    --secondary-foreground: 300 20% 92%;

    /* Warm accent */
    --accent: 15 30% 25%;
    --accent-foreground: 300 20% 92%;

    /* Dark muted tones */
    --muted: 260 15% 18%;
    --muted-foreground: 260 10% 65%;

    /* Gentle error in dark */
    --destructive: 0 50% 60%;
    --destructive-foreground: 300 20% 92%;

    /* Dark borders */
    --border: 260 15% 20%;
    --input: 260 15% 20%;
    --ring: 270 40% 70%;

    /* Dark mode gradients */
    --gradient-primary: linear-gradient(135deg, hsl(270 40% 70%), hsl(270 50% 60%));
    --gradient-secondary: linear-gradient(135deg, hsl(150 20% 25%), hsl(150 25% 30%));
    --gradient-accent: linear-gradient(135deg, hsl(15 30% 25%), hsl(15 35% 30%));
    --gradient-background: linear-gradient(180deg, hsl(260 25% 8%), hsl(260 20% 12%));

    /* Dark shadows */
    --shadow-soft: 0 4px 20px hsl(260 50% 5% / 0.5);
    --shadow-glow: 0 0 30px hsl(270 50% 60% / 0.2);
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;

}
}

@layer base {

- {
  @apply border-border;
  }

body {
@apply bg-background text-foreground;
}
}

================================================
FILE: src/main.tsx
================================================
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

================================================
FILE: src/vite-env.d.ts
================================================
/// <reference types="vite/client" />

================================================
FILE: src/components/DiaperTracker.tsx
================================================
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTracking } from "@/hooks/useTracking"
import { formatDistanceToNow } from "date-fns"
import { DiaperChange } from "@/types"

export function DiaperTracker() {
const { addDiaperChange, getLastDiaperChange } = useTracking()
const lastDiaper = getLastDiaperChange()

const handleDiaperChange = (type: 'pee' | 'poop' | 'both') => {
addDiaperChange({
type,
timestamp: new Date()
})
}

const getDiaperEmoji = (type: DiaperChange['type']) => {
switch (type) {
case 'pee': return '🍋'
case 'poop': return '💩'
case 'both': return '🍋💩'
}
}

const getDiaperLabel = (type: DiaperChange['type']) => {
switch (type) {
case 'pee': return 'Pee'
case 'poop': return 'Poop'
case 'both': return 'Both'
}
}

const DiaperButton = ({ type }: { type: 'pee' | 'poop' | 'both' }) => (
<Button
onClick={() => handleDiaperChange(type)}
size="lg"
variant="outline"
className="h-24 w-full flex-col space-y-2 text-lg font-semibold rounded-2xl border-2 hover:scale-105 transition-all
bg-card hover:bg-secondary shadow-soft"

> <span className="text-3xl">{getDiaperEmoji(type)}</span>
> <span>{getDiaperLabel(type)}</span>
> </Button>
> )

return (

<div className="space-y-8">
<div className="text-center space-y-2">
<h1 className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
Diaper Tracker
</h1>
<p className="text-muted-foreground">
Log diaper changes quickly and easily
</p>
</div>

      {lastDiaper && (
        <Card className="p-4 bg-gradient-secondary/20 border-secondary">
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">{getDiaperEmoji(lastDiaper.type)}</span>
              <span className="font-medium">Last change: {getDiaperLabel(lastDiaper.type)}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(lastDiaper.timestamp), { addSuffix: true })}
            </p>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <DiaperButton type="pee" />
        <DiaperButton type="poop" />
        <DiaperButton type="both" />
      </div>
    </div>

)
}

================================================
FILE: src/components/FeedingTracker.tsx
================================================
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTracking } from "@/hooks/useTracking"
import { formatDistanceToNow } from "date-fns"

export function FeedingTracker() {
const { addFeeding, getNextSuggestedSide, getLastFeedingForSide } = useTracking()
const [isFeeding, setIsFeeding] = useState<'left' | 'right' | null>(null)
const [startTime, setStartTime] = useState<Date | null>(null)

const suggestedSide = getNextSuggestedSide()
const leftLastFeeding = getLastFeedingForSide('left')
const rightLastFeeding = getLastFeedingForSide('right')

const startFeeding = (side: 'left' | 'right') => {
setIsFeeding(side)
setStartTime(new Date())
}

const stopFeeding = () => {
if (isFeeding && startTime) {
const endTime = new Date()
const duration = Math.round((endTime.getTime() - startTime.getTime()) / 60000) // duration in minutes

      addFeeding({
        side: isFeeding,
        startTime,
        duration
      })
    }

    setIsFeeding(null)
    setStartTime(null)

}

const FeedingSideCard = ({
side,
lastFeeding
}: {
side: 'left' | 'right'
lastFeeding: any
}) => {
const isSuggested = suggestedSide === side
const isCurrentlyFeeding = isFeeding === side

    return (
      <Card className={`p-6 transition-all duration-300 ${
        isSuggested && !isFeeding
          ? 'bg-gradient-primary shadow-glow border-primary/50'
          : isCurrentlyFeeding
          ? 'bg-gradient-accent shadow-soft border-accent'
          : 'bg-card hover:bg-card/80 shadow-soft'
      }`}>
        <div className="text-center space-y-4">
          <h3 className={`text-2xl font-semibold capitalize ${
            isSuggested && !isFeeding ? 'text-primary-foreground' :
            isCurrentlyFeeding ? 'text-accent-foreground' : 'text-foreground'
          }`}>
            {side} Breast
          </h3>

          {isSuggested && !isFeeding && (
            <div className="text-sm text-primary-foreground/80 font-medium">
              Suggested Next
            </div>
          )}

          {lastFeeding && (
            <div className={`text-sm ${
              isSuggested && !isFeeding ? 'text-primary-foreground/70' :
              isCurrentlyFeeding ? 'text-accent-foreground/70' : 'text-muted-foreground'
            }`}>
              Last fed: {formatDistanceToNow(new Date(lastFeeding.startTime), { addSuffix: true })}
              {lastFeeding.duration && (
                <div>Duration: {lastFeeding.duration}min</div>
              )}
            </div>
          )}

          <Button
            onClick={() => isCurrentlyFeeding ? stopFeeding() : startFeeding(side)}
            variant={isCurrentlyFeeding ? "destructive" : isSuggested ? "secondary" : "default"}
            size="lg"
            className={`w-full h-16 text-lg font-semibold rounded-2xl transition-all ${
              isCurrentlyFeeding
                ? 'bg-destructive hover:bg-destructive/90'
                : isSuggested
                ? 'bg-secondary hover:bg-secondary/90'
                : 'hover:scale-105'
            }`}
          >
            {isCurrentlyFeeding ? 'Stop Feeding' : 'Start Feeding'}
          </Button>
        </div>
      </Card>
    )

}

return (

<div className="space-y-8">
<div className="text-center space-y-2">
<h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
Breastfeeding Tracker
</h1>
<p className="text-muted-foreground">
Track your feeding sessions with ease
</p>
</div>

      {isFeeding && startTime && (
        <Card className="p-4 bg-gradient-accent border-accent">
          <div className="text-center">
            <p className="text-accent-foreground font-medium">
              Currently feeding from {isFeeding} breast
            </p>
            <p className="text-sm text-accent-foreground/70">
              Started {formatDistanceToNow(startTime, { addSuffix: true })}
            </p>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeedingSideCard side="left" lastFeeding={leftLastFeeding} />
        <FeedingSideCard side="right" lastFeeding={rightLastFeeding} />
      </div>
    </div>

)
}

================================================
FILE: src/components/HistoryDialog.tsx
================================================
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTracking } from "@/hooks/useTracking"
import { format } from "date-fns"
import { Clock, Calendar } from "lucide-react"

interface HistoryDialogProps {
open: boolean
onOpenChange: (open: boolean) => void
}

export function HistoryDialog({ open, onOpenChange }: HistoryDialogProps) {
const { data } = useTracking()

const getDiaperEmoji = (type: 'pee' | 'poop' | 'both') => {
switch (type) {
case 'pee': return '🍋'
case 'poop': return '💩'
case 'both': return '🍋💩'
}
}

const getDiaperLabel = (type: 'pee' | 'poop' | 'both') => {
switch (type) {
case 'pee': return 'Pee'
case 'poop': return 'Poop'
case 'both': return 'Both'
}
}

return (

<Dialog open={open} onOpenChange={onOpenChange}>
<DialogContent className="max-w-md w-full max-h-[80vh]">
<DialogHeader>
<DialogTitle className="text-center text-xl font-bold">
Tracking History
</DialogTitle>
</DialogHeader>

        <Tabs defaultValue="feedings" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="feedings">Feedings</TabsTrigger>
            <TabsTrigger value="diapers">Diapers</TabsTrigger>
          </TabsList>

          <TabsContent value="feedings" className="space-y-4">
            <ScrollArea className="h-[400px] w-full">
              <div className="space-y-3 pr-4">
                {data.feedings.length === 0 ? (
                  <Card className="p-4 text-center text-muted-foreground">
                    No feeding sessions recorded yet
                  </Card>
                ) : (
                  data.feedings.map((feeding) => (
                    <Card key={feeding.id} className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={feeding.side === 'left' ? 'default' : 'secondary'}
                          className="capitalize font-medium"
                        >
                          {feeding.side} Breast
                        </Badge>
                        {feeding.duration && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {feeding.duration}min
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(feeding.startTime), 'MMM d, h:mm a')}
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="diapers" className="space-y-4">
            <ScrollArea className="h-[400px] w-full">
              <div className="space-y-3 pr-4">
                {data.diapers.length === 0 ? (
                  <Card className="p-4 text-center text-muted-foreground">
                    No diaper changes recorded yet
                  </Card>
                ) : (
                  data.diapers.map((diaper) => (
                    <Card key={diaper.id} className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{getDiaperEmoji(diaper.type)}</span>
                          <Badge className="font-medium">
                            {getDiaperLabel(diaper.type)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(diaper.timestamp), 'MMM d, h:mm a')}
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>

)
}

================================================
FILE: src/components/Navigation.tsx
================================================
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { History, Baby, Shirt } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"

interface NavigationProps {
onHistoryClick: () => void
}

export function Navigation({ onHistoryClick }: NavigationProps) {
const navigate = useNavigate()
const location = useLocation()

const isFeeding = location.pathname === '/'
const isDiaper = location.pathname === '/diaper'

return (

<div className="flex items-center justify-between w-full mb-8">
<div className="flex gap-2">
<Button
variant={isFeeding ? "default" : "ghost"}
size="sm"
onClick={() => navigate('/')}
className="h-9 px-4 rounded-full"
>
<Baby className="h-4 w-4 mr-2" />
Feeding
</Button>
<Button
variant={isDiaper ? "default" : "ghost"}
size="sm"
onClick={() => navigate('/diaper')}
className="h-9 px-4 rounded-full"
>
<Shirt className="h-4 w-4 mr-2" />
Diaper
</Button>
</div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onHistoryClick}
          className="h-10 w-10 rounded-full bg-secondary/50 hover:bg-secondary transition-smooth"
        >
          <History className="h-4 w-4" />
          <span className="sr-only">View history</span>
        </Button>
        <ThemeToggle />
      </div>
    </div>

)
}

================================================
FILE: src/components/ThemeProvider.tsx
================================================
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
children: React.ReactNode
defaultTheme?: Theme
storageKey?: string
}

type ThemeProviderState = {
theme: Theme
setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
theme: "system",
setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
children,
defaultTheme = "system",
storageKey = "vite-ui-theme",
...props
}: ThemeProviderProps) {
const [theme, setTheme] = useState<Theme>(
() => (localStorage.getItem(storageKey) as Theme) || defaultTheme
)

useEffect(() => {
const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)

}, [theme])

const value = {
theme,
setTheme: (theme: Theme) => {
localStorage.setItem(storageKey, theme)
setTheme(theme)
},
}

return (
<ThemeProviderContext.Provider {...props} value={value}>
{children}
</ThemeProviderContext.Provider>
)
}

export const useTheme = () => {
const context = useContext(ThemeProviderContext)

if (context === undefined)
throw new Error("useTheme must be used within a ThemeProvider")

return context
}

================================================
FILE: src/components/ThemeToggle.tsx
================================================
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
const { theme, setTheme } = useTheme()

return (
<Button
variant="ghost"
size="icon"
onClick={() => setTheme(theme === "light" ? "dark" : "light")}
className="h-10 w-10 rounded-full bg-secondary/50 hover:bg-secondary transition-smooth"

> <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
> <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
> <span className="sr-only">Toggle theme</span>
> </Button>
> )
> }

================================================
FILE: src/hooks/use-mobile.tsx
================================================
import \* as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

React.useEffect(() => {
const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
const onChange = () => {
setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
}
mql.addEventListener("change", onChange)
setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
return () => mql.removeEventListener("change", onChange)
}, [])

return !!isMobile
}

================================================
FILE: src/hooks/use-toast.ts
================================================
import \* as React from "react"

import type {
ToastActionElement,
ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
id: string
title?: React.ReactNode
description?: React.ReactNode
action?: ToastActionElement
}

const actionTypes = {
ADD_TOAST: "ADD_TOAST",
UPDATE_TOAST: "UPDATE_TOAST",
DISMISS_TOAST: "DISMISS_TOAST",
REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
count = (count + 1) % Number.MAX_SAFE_INTEGER
return count.toString()
}

type ActionType = typeof actionTypes

type Action =
| {
type: ActionType["ADD_TOAST"]
toast: ToasterToast
}
| {
type: ActionType["UPDATE_TOAST"]
toast: Partial<ToasterToast>
}
| {
type: ActionType["DISMISS_TOAST"]
toastId?: ToasterToast["id"]
}
| {
type: ActionType["REMOVE_TOAST"]
toastId?: ToasterToast["id"]
}

interface State {
toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
if (toastTimeouts.has(toastId)) {
return
}

const timeout = setTimeout(() => {
toastTimeouts.delete(toastId)
dispatch({
type: "REMOVE_TOAST",
toastId: toastId,
})
}, TOAST_REMOVE_DELAY)

toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
switch (action.type) {
case "ADD_TOAST":
return {
...state,
toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
}

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }

}
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
memoryState = reducer(memoryState, action)
listeners.forEach((listener) => {
listener(memoryState)
})
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
const id = genId()

const update = (props: ToasterToast) =>
dispatch({
type: "UPDATE_TOAST",
toast: { ...props, id },
})
const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

dispatch({
type: "ADD_TOAST",
toast: {
...props,
id,
open: true,
onOpenChange: (open) => {
if (!open) dismiss()
},
},
})

return {
id: id,
dismiss,
update,
}
}

function useToast() {
const [state, setState] = React.useState<State>(memoryState)

React.useEffect(() => {
listeners.push(setState)
return () => {
const index = listeners.indexOf(setState)
if (index > -1) {
listeners.splice(index, 1)
}
}
}, [state])

return {
...state,
toast,
dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
}
}

export { useToast, toast }

================================================
FILE: src/hooks/useLocalStorage.ts
================================================
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
const [storedValue, setStoredValue] = useState<T>(() => {
try {
const item = window.localStorage.getItem(key)
return item ? JSON.parse(item) : initialValue
} catch (error) {
console.error(`Error reading localStorage key "${key}":`, error)
return initialValue
}
})

const setValue = (value: T | ((val: T) => T)) => {
try {
const valueToStore = value instanceof Function ? value(storedValue) : value
setStoredValue(valueToStore)
window.localStorage.setItem(key, JSON.stringify(valueToStore))
} catch (error) {
console.error(`Error setting localStorage key "${key}":`, error)
}
}

return [storedValue, setValue] as const
}

================================================
FILE: src/hooks/useTracking.ts
================================================
import { useLocalStorage } from './useLocalStorage'
import { TrackingData, FeedingSession, DiaperChange } from '@/types'
import { toast } from '@/hooks/use-toast'

const initialData: TrackingData = {
feedings: [],
diapers: []
}

export function useTracking() {
const [data, setData] = useLocalStorage<TrackingData>('baby-tracker-data', initialData)

const addFeeding = (feeding: Omit<FeedingSession, 'id'>) => {
const newFeeding: FeedingSession = {
...feeding,
id: Date.now().toString()
}

    setData(prev => ({
      ...prev,
      feedings: [newFeeding, ...prev.feedings]
    }))

    toast({
      title: "Feeding recorded",
      description: `${feeding.side.charAt(0).toUpperCase() + feeding.side.slice(1)} side feeding logged`
    })

}

const addDiaperChange = (diaper: Omit<DiaperChange, 'id'>) => {
const newDiaper: DiaperChange = {
...diaper,
id: Date.now().toString()
}

    setData(prev => ({
      ...prev,
      diapers: [newDiaper, ...prev.diapers]
    }))

    const typeText = diaper.type === 'both' ? 'Pee & Poop' : diaper.type.charAt(0).toUpperCase() + diaper.type.slice(1)
    toast({
      title: "Diaper change recorded",
      description: `${typeText} diaper change logged`
    })

}

const getLastFeeding = () => data.feedings[0] || null

const getLastDiaperChange = () => data.diapers[0] || null

const getNextSuggestedSide = (): 'left' | 'right' => {
const lastFeeding = getLastFeeding()
if (!lastFeeding) return 'left'
return lastFeeding.side === 'left' ? 'right' : 'left'
}

const getLastFeedingForSide = (side: 'left' | 'right') => {
return data.feedings.find(feeding => feeding.side === side) || null
}

return {
data,
addFeeding,
addDiaperChange,
getLastFeeding,
getLastDiaperChange,
getNextSuggestedSide,
getLastFeedingForSide
}
}

================================================
FILE: src/lib/utils.ts
================================================
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs))
}

================================================
FILE: src/pages/DiaperPage.tsx
================================================
import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { DiaperTracker } from "@/components/DiaperTracker"
import { HistoryDialog } from "@/components/HistoryDialog"

export default function DiaperPage() {
const [historyOpen, setHistoryOpen] = useState(false)

return (

<div className="min-h-screen bg-gradient-background p-4">
<div className="mx-auto max-w-2xl space-y-6">
<Navigation onHistoryClick={() => setHistoryOpen(true)} />
<DiaperTracker />
<HistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
</div>
</div>
)
}

================================================
FILE: src/pages/FeedingPage.tsx
================================================
import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { FeedingTracker } from "@/components/FeedingTracker"
import { HistoryDialog } from "@/components/HistoryDialog"

export default function FeedingPage() {
const [historyOpen, setHistoryOpen] = useState(false)

return (

<div className="min-h-screen bg-gradient-background p-4">
<div className="mx-auto max-w-2xl space-y-6">
<Navigation onHistoryClick={() => setHistoryOpen(true)} />
<FeedingTracker />
<HistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
</div>
</div>
)
}

================================================
FILE: src/pages/Index.tsx
================================================
import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { FeedingTracker } from "@/components/FeedingTracker"
import { HistoryDialog } from "@/components/HistoryDialog"

const Index = () => {
const [historyOpen, setHistoryOpen] = useState(false)

return (

<div className="min-h-screen bg-gradient-background p-4">
<div className="mx-auto max-w-2xl space-y-6">
<Navigation onHistoryClick={() => setHistoryOpen(true)} />
<FeedingTracker />
<HistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
</div>
</div>
)
};

export default Index;

================================================
FILE: src/pages/NotFound.tsx
================================================
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
const location = useLocation();

useEffect(() => {
console.error(
"404 Error: User attempted to access non-existent route:",
location.pathname
);
}, [location.pathname]);

return (

<div className="min-h-screen flex items-center justify-center bg-gray-100">
<div className="text-center">
<h1 className="text-4xl font-bold mb-4">404</h1>
<p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
<a href="/" className="text-blue-500 hover:text-blue-700 underline">
Return to Home
</a>
</div>
</div>
);
};

export default NotFound;

================================================
FILE: src/types/index.ts
================================================
export interface FeedingSession {
id: string
side: 'left' | 'right'
startTime: Date
duration?: number
notes?: string
}

export interface DiaperChange {
id: string
type: 'pee' | 'poop' | 'both'
timestamp: Date
notes?: string
}

export type TrackingData = {
feedings: FeedingSession[]
diapers: DiaperChange[]
}
