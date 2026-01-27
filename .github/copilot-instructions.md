

# ZST Website AI Agent Guide

## Project Overview
**Next.js 16** full-stack app for Zespół Szkół Technicznych. Uses:
- React 19 (with Compiler)
- CSS Modules (token-based theming, no Tailwind in components)
- Turso/LibSQL (SQLite)
- Context API for menu/settings

**Dev server:** `npm run dev` → http://localhost:3000

## Key Structure & Patterns
- `src/_components/`: UI components (Menu, Buttons, etc.)
- `src/_lib/`: Shared utilities, contexts, styles, icons, text animations
- `src/app/`: Next.js App Router pages/layout
- `src/app/api/`: API routes (Turso DB)

### Context Providers
- `MenuContext`: Mobile menu state, closes on route change/Escape, disables body scroll
- `SettingsContext`: Persists theme/contrast/motion to `localStorage` (`app-settings`)
- Both wrapped in `Providers.jsx` at root

### Styling
- All components use `.module.css` (BEM-like, e.g. `.buttonContent`)
- Use CSS variables from `src/_lib/Style/theme.css` and `colors.css`
- No Tailwind classes in components (reserved for future)

### Buttons & Icons
- Button system: see `src/_components/Buttons/` and `buttonPresets.jsx` for variants/content
- Icons: SVG paths in `src/_lib/Icons/icons.jsx`, use `<Icon name="..." />`

### Menu & Navigation
- Menu config: `src/_components/Menu/menu/menu.config.jsx` (tree: link/section/subSection)
- Role-based routes (e.g. `/plan-lekcji?type=uczen`)

### Animations
- `src/_lib/TextAnimations/`: `CurvedLoop` (SVG marquee), `FuzzyText` (glitch)

## Critical Workflows
- **Start dev:** `npm run dev` (auto-reloads)
- **Build:** `npm run build` / **Prod:** `npm start`
- **Add page:** `src/app/(pages)/your-page/page.jsx` (export `metadata` for SEO)
- **Add component:** New folder in `src/_components/`, add `.jsx` + `.module.css`
- **DB queries:** Use `@libsql/client`, config in `src/app/api/lib/db.js`, see `src/app/api/data/route.js`

## Conventions
- Components: PascalCase (`NotFound.jsx`), utilities: camelCase (`icons.jsx`)
- Polish comments are common
- Use `suppressHydrationWarning` for dynamic theme/layout
- Settings: check `isLoaded` before rendering theme-dependent content
- Menu auto-closes on route change, Escape, or when open (body scroll lock)

## Accessibility & Settings
- Theme, contrast, motion, blur, and saturation are user-configurable (see `SettingsContext`)
- CSS: use `:root` variables, media queries for reduced motion/contrast

## External Dependencies
- React 19.2.3, Next.js 16.1.1, OGL 1.0.11 (Aurora/GradientBlinds), Tailwind CSS 4 (not for components), Turso/LibSQL

## Gotchas
1. **Never use Tailwind in components**
2. **Always provide fallback for CSS vars**
3. **Test color tokens with saturation modifier**
4. **Menu closes on pathname change**
5. **Polish is default language**
6. **Turso DB needs env vars** (`npm run dev` to verify)
- `type: 'section'` → Top-level group
