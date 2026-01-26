# ZST Website Codebase Guidelines for AI Agents

## Project Overview
This is a **Next.js 16** full-stack website for Zespół Szkół Technicznych (ZST), a technical school. The application uses:
- **React 19** with React Compiler enabled
- **CSS Modules** for component styling with comprehensive token-based theming
- **Turso + LibSQL** for database (SQLite)
- **Tailwind CSS 4** + PostCSS
- Context API for state management (Menu, Settings)

**Dev Server:** `npm run dev` → http://localhost:3000

## Architecture & Project Structure

### Directory Organization
- `src/_components/` → Reusable UI components (Menu, Buttons, Backgrounds, etc.)
- `src/_lib/` → Shared utilities, contexts, styles, icons, animations
- `src/app/` → Next.js App Router pages & layout
- `src/app/api/` → Backend routes (API handlers)

### Key Design Patterns

#### 1. **Context Providers** (`src/_lib/Providers/`)
- **MenuContext**: Manages mobile menu state, auto-closes on route change or Escape key, prevents body scroll overflow
- **SettingsContext**: Persists user preferences (theme, contrast, motion) to `localStorage` under key `app-settings`
- Both wrapped in `Providers.jsx` component at root layout

Example usage:
```jsx
const { isOpen, toggleMenu } = useContext(MenuContext);
const { theme, updateSetting } = useSettings();
```

#### 2. **Component Styling with CSS Modules**
- All components use `.module.css` files (e.g., `Button.module.css`)
- **NOT** using Tailwind utility classes—use CSS Modules exclusively for component styles
- Token-based color system with HSL variables supporting saturation modifier (accessibility)

Key color files:
- `src/_lib/Style/colors.css` → 2865-line palette (red, blue, green, etc. scales)
- `src/_lib/Style/theme.css` → Brand colors (red #D7193C base)
- `src/_lib/Style/base.css` → Global resets

#### 3. **Button System** (`src/_components/Buttons/`)
Highly configurable with presets:
```jsx
<Button 
  variant="primary|secondary|tertiary|danger|success|warning"
  size="2xs|xs|sm|md|lg|xl|2xl"
  content="text|textIcon|IconText|icon"
  outlineOnly={false}
  transparent={false}
  disabled={false}
  iconName="list|person-circle|gear-wide|tools|box-arrow-right|arrow-up-right-square|box"
/>
```
Content presets handle layout combinations in `buttonPresets.jsx`

#### 4. **Icon System** (`src/_lib/Icons/`)
Icons stored as SVG path components in `icons.jsx`. Use:
```jsx
<Icon name="list" size={16} svgClassName="custom-class" />
```
Add new icons by adding objects to `ICONS` export with `content` property (JSX paths)

#### 5. **Menu Configuration** (`src/_components/Menu/menu/menu.config.jsx`)
Nested tree structure with three types:
- `type: 'link'` → Direct navigation
- `type: 'section'` → Top-level group
- `type: 'subSection'` → Collapsible nested items

Handles student/teacher/parent role-based routes (e.g., `/plan-lekcji?type=uczen`)

#### 6. **Text Animations** (`src/_lib/TextAnimations/`)
- **CurvedLoop**: Marquee text following SVG path with interactive drag support
- **FuzzyText**: Glitch-like text animation effect
- Used in hero sections and decorative elements

## Critical Workflows

### Starting Development
```bash
npm run dev          # Dev server + auto-reload
npm run build        # Production build
npm start            # Production server
```

### Adding a New Page
1. Create `src/app/(pages)/your-page/page.jsx`
2. Import `Menu` component in layout (already done globally)
3. Use CSS Modules for styling
4. Export `metadata` object for SEO

### Adding a Component
1. Create folder in `src/_components/YourComponent/`
2. Add `YourComponent.jsx` and `YourComponent.module.css`
3. Export from `index.jsx` if needed
4. Use context providers if state management needed

### Database Queries
- Library: `@libsql/client` (Turso)
- Config: `src/app/api/lib/db.js` (requires `TURSO_DATABASE_URL` + `TURSO_AUTH_TOKEN` env vars)
- Example API route in `src/app/api/data/route.js`
- Use `export const dynamic = "force-dynamic"` for non-cached routes

## Code Conventions

### Naming & File Structure
- Components: PascalCase filenames (e.g., `NotFound.jsx`)
- Utilities: camelCase (e.g., `icons.jsx`)
- CSS Modules: `filename.module.css`
- Polish comments common in codebase (acceptable)

### Component Template
```jsx
'use client';  // Add if client-side state/hooks needed

import styles from "./Component.module.css";

export default function Component({ children, variant = "default", ...props }) {
  const classes = [
    styles.component,
    styles[variant],
    props.className
  ].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}
```

### CSS Module Pattern
- Use BEM-like naming (e.g., `.button`, `.buttonContent`, `.buttonContentText`)
- Leverage CSS variables from theme (e.g., `var(--brand-500)`)
- Support dark mode via `prefers-color-scheme` or theme context

### Layout Props
Suppress hydration warnings for dynamic styling:
```jsx
<html lang="pl">
  <body suppressHydrationWarning className={theme}>
    ...
  </body>
</html>
```

## State Management & Hydration

### LocalStorage Patterns
Settings persist via SettingsContext. Watch for hydration issues:
- Check `isLoaded` state before rendering theme-dependent content
- Always use `suppressHydrationWarning` when server/client output may differ

### Menu State
Auto-closes on:
- Route changes (detected via `usePathname()`)
- Escape key press
- Body scroll disabled when open

## Accessibility & Settings
Users can control:
- Theme: "system" | color modes (stored in localStorage)
- High contrast mode
- Reduced motion (`isReduceMotion`)
- Reduced blur effects
- Saturation modifier (for colorblind users)

Apply these in CSS via `:root` variables and media queries (e.g., `prefers-reduced-motion`)

## External Dependencies
- **React**: 19.2.3 (with Compiler enabled)
- **Next.js**: 16.1.1 (App Router)
- **OGL**: 1.0.11 (WebGL graphics, used in Aurora/GradientBlinds backgrounds)
- **Tailwind CSS**: 4.0 (available but NOT used for components—reserved for future)
- **Turso/LibSQL**: SQLite database client

## Common Gotchas
1. **Don't use Tailwind in components**—use CSS Modules instead
2. **Always provide fallback values** for CSS variables
3. **Test color tokens** with saturation modifier (e.g., `calc(var(--saturation-factor, 1)*85%)`)
4. **Menu closes on pathname change**—design accorded for mobile-first navigation
5. **Polish language is default** in metadata and content
6. **Database errors require env vars**—test with `npm run dev` to verify Turso connection
