---
name: Pallu Stories Design System
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#4e4639'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#695c51'
  on-secondary: '#ffffff'
  secondary-container: '#f1dfd1'
  on-secondary-container: '#6f6257'
  tertiary: '#964824'
  on-tertiary: '#ffffff'
  tertiary-container: '#ec8d62'
  on-tertiary-container: '#682604'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#f1dfd1'
  secondary-fixed-dim: '#d4c4b6'
  on-secondary-fixed: '#231a11'
  on-secondary-fixed-variant: '#50453b'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb597'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#77320e'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  container_max: 1280px
  gutter: 24px
  margin_mobile: 16px
---

## Brand & Style
The brand identity for this design system is built upon the concept of "Soft Luxury"—an approach that balances high-end fashion aesthetics with a warm, artisanal touch. It is designed for an audience that values the tactile nature of handcrafted goods and the stories behind them.

The visual style is **Minimalist with Tactile accents**, characterized by:
- **Quiet Sophistication:** Using generous whitespace (negative space) to let high-quality product photography breathe.
- **Warmth:** Eschewing the coldness of traditional high-fashion minimalism in favor of organic tones and soft edges.
- **Crafted Detail:** Subtle use of borders and refined typography that evokes the feeling of a boutique editorial magazine.
- **Immersive Narrative:** Transitions and layouts that favor a slower, more intentional browsing experience.

## Colors
The palette is rooted in earth-derived neutrals to establish a "Soft Luxury" foundation. 

- **Primary (Muted Gold):** Used sparingly for key calls to action, brand iconography, and premium signifiers.
- **Secondary (Deep Espresso):** The primary color for typography and structural lines, providing better legibility and a softer contrast than pure black.
- **Tertiary (Terracotta):** An organic accent color used for highlighting handcrafted details, notifications, or seasonal collections.
- **Neutrals (Champagne, Sand, Ivory):** These form the layered background system. The "Canvas" is the lightest, while "Sand" and "Ivory" are used for section differentiation and card surfaces.

## Typography
The typography strategy creates a classic editorial hierarchy. 

**Playfair Display** is the voice of the brand. It should be used for all expressive headings and storytelling elements. Its high-contrast serifs reflect the intricate weaving and patterns of the accessories.

**Montserrat** provides a clean, airy counterpoint. It is used for body copy and UI labels to ensure modern readability.
- **Tracking:** Use increased letter-spacing for `label-caps` and `button` text to enhance the premium, airy feel.
- **Line Height:** Body text uses a generous 1.6x line height to prevent the UI from feeling cluttered.

## Layout & Spacing
This design system utilizes a **Fixed-Fluid Hybrid Grid**. 
- **Desktop:** A 12-column grid with a max-width of 1280px. Gutters are set to 24px to maintain an airy feel. 
- **Mobile:** A 4-column grid with 16px side margins. 

**Vertical Rhythm:**
Spacing follows a 4px base unit, but emphasizes the larger increments (`xl` and `xxl`) to create "breathing room" between brand stories. Sections should be separated by a minimum of 80px on desktop to maintain the boutique gallery aesthetic.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Soft Ambient Shadows** rather than aggressive elevation.

- **Surface Tiers:** Use subtle shifts between Ivory and Sand colors to denote different functional areas (e.g., a Sand-colored sidebar over an Ivory canvas).
- **Shadows:** Shadows are highly diffused and tinted with the secondary color (Deep Espresso) at very low opacity (e.g., `box-shadow: 0 10px 30px rgba(74, 63, 53, 0.05)`). This creates a "hovering" effect like a light fabric on a surface.
- **Glassmorphism:** Use sparingly for navigation bars or image overlays. A subtle backdrop blur (8px-12px) with a semi-transparent Champagne tint (`#F9F6F1CC`) adds a modern, high-fashion touch.

## Shapes
The shape language is "Softly Geometric." 
- **Standard Elements:** Buttons, input fields, and small cards use a **0.5rem (8px)** radius to feel approachable.
- **Large Cards & Modals:** Use **1rem (16px)** or **1.5rem (24px)** for a more distinct, pillowy feel.
- **Borders:** Use thin, 1px borders in a slightly darker neutral tone (Sand) to define shapes without creating visual noise. Avoid heavy black outlines.

## Components
- **Buttons:** Primary buttons use a solid Deep Espresso or Muted Gold background with white or ivory text. Secondary buttons are "Ghost" style with a 1px border and high tracking on the text label.
- **Chips:** Used for material types (e.g., "Silk", "Cotton") or categories. These should have a light Sand background and no border, with `label-caps` typography.
- **Inputs:** Clean, bottom-border only or very subtle 1px outlines. Focus states should transition the border color to Muted Gold.
- **Cards:** Product cards should be "frameless"—using the image as the primary driver with a slight background tint on the container and no heavy borders.
- **Interactive Story Strips:** A custom component featuring a large editorial image on one side and a short serif-heavy narrative on the other, used to explain the "handcrafted" process.
- **Featured Lists:** Bullet points should be replaced with custom Muted Gold icons or subtle horizontal dividers to maintain the sophisticated tone.