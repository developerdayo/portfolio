Portfolio
-
Sarah Ferguson

Software Developer | NYC

# Demo Overview
In this demo, I address common cross-team and inter-team challenges that I've encountered in various projects. The focus is on streamlining workflows, reducing manual errors, and automating processes that can save time and improve project consistency. Specifically, I will demonstrate how to:

## Build and maintain a versioned design system:
This design token package provides a system to manage and use design variables (such as colors, typography, spacing, breakpoints, etc.) in a consistent and scalable way across projects. It converts a JSON file containing design tokens into SCSS variables and maps, allowing the tokens to be consumed directly in your SCSS files.

Current Features:
Typography: Includes font families, sizes, weights, and line heights that can be applied consistently across components using predefined SCSS mixins.
Colors: Provides easy access to color variables through maps for different contexts (e.g., primary, secondary, tertiary colors).
Spacing & Breakpoints: Offers consistent padding, margin, and responsive breakpoints, ensuring a uniform layout system.

### Usage
1. The package is already installed via npm `npm install @sferguson9670/portfolio-design-tokens`

2. It is imported via scss `@import '~@sferguson9670/portfolio-design-tokens/dist/design-tokens.scss';`

3. Access the design tokens via SCSS maps:

* For typography: map-get($typography, fontFamily, primary, name)
* For spacing: map-get($spacing, large)
* For colors: map-get($colors, text, primary)

4. Use prebuilt mixins to apply typography, font sizes, and responsive layouts:
```
@include font(bold);
@include font-size(medium);
```

### Future State
In a future state, this package could be extended to automatically fetch and convert design tokens directly from design tools like Figma. By integrating an API or plugin, the package could pull real-time JSON design tokens from Figma, ensuring that design updates are automatically reflected in the codebase. This would eliminate manual updates, improve cross-team collaboration, and ensure consistency between design and development.

## Units - REM & PX
### Font size
Make sure to use rem units for font-size only. For accessibility purposes, using rem units enables users who prefer to use browser settings to set the site of fonts to their preferences. If pixel values are used, users lose this capability. While users can choose to zoom in/out, we must make sure font sizes resize accordingly both via browser settings as well as zoom in/out.

To make using rem units much easier for designers and developers, a function `@function rem($pxValue)` is available to use to pass in pixel values and it returns a rem value instead.

e.g. 

```
html {
    font-size: 16px;
}

h1 {
    font-size: rem(30px);
}
```

outputs
```
h1 {
    font-size: 1.875rem;
}
```

### Everything else (not font size)
Use pixel or viewport unit size. Em and rem are poor choices since they resize relative to the user's preferences. Since a user usually does this in order to make text readable, increasing the general spacing takes screen real estate away from text, decreasing readability.

