# ORBIRIS INDIA Design System

The visual foundation is for a premium digital consultancy and strategic growth partner. Use clear editorial hierarchy, confident whitespace, and restrained technology-inspired details. Avoid eye-shaped marks and fabricated client, performance, or award claims.

## Brand palette

| Token | Value | Intended use |
| --- | --- | --- |
| Navy | `#0B1F3B` | Primary brand surfaces, headings, footer |
| Blue | `#00B4FF` | Primary actions and interactive highlights |
| Teal | `#00D1A7` | Secondary accents and positive signals |
| Orange | `#FFB020` | Small directional accents |
| Background | `#F7F9FC` | Main canvas and soft section surfaces |
| White | `#FFFFFF` | Cards and high-contrast surfaces |
| Dark | `#07111F` | Deep contrast |
| Text | `#102033` | Body text |
| Muted | `#607086` | Supporting copy |
| Border | `#DCE3EA` | Dividers and control boundaries |

CSS custom properties are defined in `src/style.css`.

The foundational tokens also define shared surfaces, strong borders, accessible link colors, dark-surface text, error color, focus outlines, animation timing, and container widths. Use these shared variables for common accents instead of repeating visually equivalent hex values in page styles.

## Typography

Use Manrope for display headings and DM Sans for body and interface text, with system sans-serif fallbacks. Use fluid heading sizes, concise line lengths, and generous line height for body copy. Fonts currently load from Google Fonts; system fallbacks remain available if the remote font service cannot be reached.

## Spacing and layout

The spacing scale is `--space-1` through `--space-9` (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px). Containers use a maximum width of 1200px and responsive side gutters. Prefer grid/flex layouts and fluid `clamp()` spacing over fixed page dimensions.

## Foundations

- `Container` provides the shared responsive content width.
- `Button` supports primary, secondary, and text variants with visible keyboard focus.
- `SectionHeading` establishes eyebrow, heading, and description hierarchy.
- `BaseCard` provides a bordered, softly elevated card surface.
- `Badge` provides compact status/label treatments.
- `Icon` renders the small set of shared inline SVG interface icons.
- `Breadcrumb` presents navigable page context.
- Global focus styling and reduced-motion handling are included.

## Visual language

Use subtle grid lines, orbital paths, connected nodes, and directional rules as supporting decoration. Keep these elements low contrast so they do not compete with content. The supplied official logo artwork is stored in `public/assets/brand/orbiris-logo-primary.png` and `public/assets/brand/orbiris-logo-icon.png`. Their original square canvases and artwork are preserved; the source's near-black matte has been made transparent for use on the approved navy surface.

## Brand application

- Positioning: **ORBIRIS INDIA — Turning Business Challenges into Digital Growth.**
- Use navy and dark surfaces with white typography, electric-blue interaction accents, and restrained teal/orange details.
- Use `--color-link` for recurring interactive accents; ensure text remains readable on its surface.
- Keep the shared header, Footer, form controls, and action styles consistent while allowing established page-specific diagrams and editorial compositions to remain distinctive.
- The current Manrope and DM Sans font requests use Google Fonts; system sans-serif fallbacks remain in place.
- The shared Navbar uses the official standalone symbol against the approved navy background; the Footer uses the official full logo. `public/favicon.png` presents the standalone symbol on a navy field.

Privacy, Terms of Use, and Cookie Policy pages describe the implementation conservatively. Their copy should be reviewed against the actual hosting configuration and by appropriate legal counsel before being treated as final legal advice.

## Accessibility

Use semantic landmarks, descriptive link text, keyboard-operable controls, visible focus indicators, ARIA-expanded state for menus, and reduced-motion preferences. Do not rely on color alone to communicate meaning.
