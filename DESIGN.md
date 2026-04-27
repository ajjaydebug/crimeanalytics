# Design Brief

## Purpose & Tone
Crime analytics dashboard for final year project review at SVCE. Premium, analytical authority with luxury tech aesthetic. Glassmorphic cards, layered depth, smooth animations.

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Background | 0.08 0.02 265 | Deep navy base |
| Card | 0.135 0.03 265 | Glassmorphic containers |
| Foreground | 0.92 0.02 265 | Text on dark |
| Primary/Accent | 0.75 0.2 80 | Gold highlights, CTAs, alerts |
| Destructive | 0.65 0.19 22 | Critical incidents (red) |
| Chart-1 to 5 | Varied vibrant | Data visualization |
| Border | 0.2 0.04 265 | Subtle blue dividers |

## Typography
- **Display**: Fraunces (dramatic dashboard titles)
- **Body**: General Sans (clean data labels, metrics)
- **Mono**: System monospace (code/timestamps)

## Shape Language
- Default radius: 12px (medium)
- Cards: 12px rounded corners with backdrop blur
- Buttons: 12px, fill with gold on dark navy
- Inputs: 12px border with subtle blue tint

## Structural Zones

| Zone | Treatment | Depth |
|------|-----------|-------|
| Header | Glass card with gold border-bottom | Elevated |
| Sidebar | Navy panel, gold highlight on active | Embedded |
| Content Grid | Semi-transparent glass cards | Layered |
| Footer | Muted navy with top border | Baseline |

## Elevation & Depth
- Level 0: bg-background (8% lightness)
- Level 1: bg-card (13.5% lightness) with glass effect
- Level 2: Hovered cards with increased blur and shadow
- Accent layer: Gold (#f9a825) for critical data

## Spacing & Rhythm
- Base grid: 4px (Tailwind spacing)
- Card padding: 24px (6 units)
- Gap between cards: 16px (4 units)
- Tight density for data visualization

## Component Patterns
- Metric cards: Glass + gold accent label or border
- Data tables: Striped rows with subtle navy alternation
- Charts: Use chart-1 through chart-5 colors
- Buttons: Gold fill, navy text, 12px radius
- Toggles/switches: Gold accent on active state
- Status badges: Green/yellow/red semantic colors

## Motion & Animation
- Entrance: fade-in 0.6s ease-out on page load
- Card hover: smooth scale 1.02 + shadow increase
- Transitions: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- No bouncy or excessive animations

## Constraints
- Never use raw hex colors—always consume OKLCH tokens
- Glass effect: 70% opacity with 12px blur, 30% border opacity
- Gold accent used sparingly: headers, alerts, active states only
- Indian city context (Chennai, Anna Nagar, T. Nagar, Adyar, Velachery)
- All data hardcoded as sample data for demo

## Signature Detail
Glassmorphic cards with semi-transparent navy backgrounds and subtle backdrop blur, creating layered depth. Gold accent borders and highlights on critical metrics and active states. Smooth entrance animations guide user attention through dashboard hierarchy.
