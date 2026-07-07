---
name: Supaste Inspired System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#414754'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005cbb'
  primary: '#005ab6'
  on-primary: '#ffffff'
  primary-container: '#0072e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#abc7ff'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#9b4000'
  on-tertiary: '#ffffff'
  tertiary-container: '#c25200'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#00458f'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#793100'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  background-subtle: '#F7F7F7'
  border-light: '#E5E5E5'
  text-muted: '#666666'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  container-max: 1200px
---

## Brand & Style

This design system is built for performance-oriented tools and developer utilities. It prioritizes clarity, speed, and a high-signal-to-noise ratio. The aesthetic is **Corporate / Modern** with a lean toward **Minimalism**, characterized by generous whitespace, a high-contrast monochromatic base, and a singular functional accent color.

The design evokes a sense of reliability and technical precision. It avoids unnecessary decoration, instead using subtle borders and intentional typography to define structure. The goal is to provide a "workhorse" UI that feels invisible yet premium, allowing the user's content and data to take center stage.

## Colors

The palette is anchored by a vibrant, "utility blue" primary color used sparingly for calls to action and active states. The foundation is built on absolute white and black to ensure maximum legibility and a sharp, professional look.

- **Primary:** Reserved for the most important interactive elements and brand identifiers.
- **Secondary:** Used for high-contrast text and solid buttons that demand immediate attention.
- **Neutral:** A very light gray is utilized for background sectioning and surface separation to prevent the pure white from becoming overwhelming.
- **Surface Strategy:** Use white for primary content cards and input areas, and the subtle neutral gray for the page background or sidebar regions.

## Typography

The typography system relies heavily on **Inter** for its neutral, highly legible characteristics. To reinforce the developer-friendly aesthetic, **JetBrains Mono** is introduced for labels, metadata, and code snippets, providing a technical "engine-room" feel.

Headlines should use tight tracking (letter-spacing) to appear more cohesive and impactful. For long-form reading, `body-md` is the standard. Use `label-sm` in all-caps for category headers or small UI indicators to differentiate them from interactive text.

## Layout & Spacing

This design system uses a **Fluid Grid** model with strict adherence to a 4px baseline unit. All padding and margins must be multiples of 4 (4, 8, 12, 16, 24, 32, 48, 64).

- **Desktop:** A 12-column grid with 24px gutters. Content is typically centered in a maximum container width of 1200px.
- **Tablet:** 8-column grid with 20px gutters and 24px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Horizontal spacing between related components (like buttons in a group) should be 12px. Vertical section spacing should be more generous, typically 64px or 80px, to maintain the "Minimalist" feel.

## Elevation & Depth

The system uses **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows to convey depth. This keeps the interface feeling "flat" and fast.

- **Level 0 (Base):** Neutral background color (`#F7F7F7`).
- **Level 1 (Surface):** Pure white surfaces (`#FFFFFF`) with a 1px border (`#E5E5E5`). No shadow.
- **Level 2 (Interactive):** Elements that are being hovered or dragged may use a very subtle, tight ambient shadow: `0 4px 12px rgba(0,0,0,0.05)`.
- **Level 3 (Overlays):** Modals and dropdowns use the same tight shadow but with a 1px border to ensure definition against white surfaces.

Separation is primarily achieved through changes in background color (White vs. Light Gray) rather than physical height.

## Shapes

The shape language is **Soft** and restrained. We avoid overly rounded "pill" shapes for standard components to maintain a professional, slightly more rigid character.

- **Small Components (Inputs, Buttons):** 4px (0.25rem) corner radius.
- **Medium Components (Cards, Modals):** 8px (0.5rem) corner radius.
- **Large Layout Containers:** 12px (0.75rem) corner radius.

This subtle rounding removes the "sharpness" of a brutalist design while retaining the structured feel of a systematic tool.

## Components

### Buttons
- **Primary:** Solid `#0080FF` background with white text. 4px radius. High-energy but functional.
- **Secondary:** Solid `#000000` background with white text. Used for secondary actions that still require high visibility.
- **Ghost/Tertiary:** No background, `#666666` text, appearing in primary blue or black on hover. 

### Input Fields
Inputs should be pure white with a 1px `#E5E5E5` border. On focus, the border transitions to the primary blue with a subtle 2px blue glow (low opacity). Labels should use `body-sm` in bold or `label-md`.

### Cards
Cards are the primary container. They feature a white background, 1px border, and 8px corner radius. Padding inside cards should be 24px (standard) or 32px (hero).

### Chips & Tags
Small badges used for status or categories. Use a light gray background with `label-sm` text in uppercase. Status-specific chips (Success/Warning) should use desaturated background tints with high-contrast text.

### Lists & Tables
Rows should have a subtle hover state (background change to `#F7F7F7`) and be separated by 1px horizontal lines. Typography in tables should lean on `body-sm` for density.
