Portfolio
-
Sarah Ferguson

Software Developer | NYC

# Demo Overview
In this demo, I address common cross-team and inter-team challenges that I've encountered in various projects. The focus is on streamlining workflows, reducing manual errors, and automating processes that can save time and improve project consistency. Specifically, I will demonstrate how to:

## Build and maintain a versioned design system:
This design token package provides a system to manage and use design variables (such as colors, typography, spacing, breakpoints, etc.) in a consistent and scalable way across projects. It converts a JSON file containing design tokens into SCSS variables and maps, allowing the tokens to be consumed directly in your SCSS files.

Current Features:
* **Typography:** Includes font families, sizes, weights, and line heights that can be applied consistently across components using predefined SCSS mixins.
* **Colors:** Provides easy access to color variables through maps for different contexts (e.g., primary, secondary, tertiary colors).
* **Spacing & Breakpoints:** Offers consistent padding, margin, and responsive breakpoints, ensuring a uniform layout system.

### Usage
1. The package is already installed via npm `npm install @sferguson9670/portfolio-design-tokens`

2. It is imported via scss `@import '~@sferguson9670/portfolio-design-tokens/dist/design-tokens.scss';`

3. Access the design tokens via SCSS maps:

* For typography: map-get($typography, fontFamily, primary, name)
* For spacing: map-get($spacing, large)
* For colors: map-get($colors, text, primary)

4. Use prebuilt mixins to apply typography, font sizes, and responsive layouts:
For example, let's say our design tokens json file contains these rules:
```
{
  "typography": {
    "fontFamily": {
      "primary": {
        "name": "'Raleway', sans-serif",
        "fontWeight": {
          "light": "100",
          "regular": "400",
          "medium": "500",
          "bold": "700"
        }
      }
    },
    ...
    "heading": {
        "medium": {
            "fontWeight": "700",
            "fontSize": "30px",
            "lineHeight": "35px"
        }
    }
}
```

and we have a mixin defined (in _mixins.font.module.scss) called `@mixin heading()` which accepts a $size argument. We can easily apply this to a selector like:
```
h3 {
    @include heading(medium)
}
```

and the output css will be:
```
h3 {
    font-family: 'Raleway', sans-serif';
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
}
```

Awesome. You don't have to think so hard about whether or not you grabbed all of the correct properties from designs as all of the rules determined by the design have been setup already.

As well, let's say that we have switched from the font-family 'Raleway' to 'Times New Roman' with different fallback fonts. If the design token json file is updated to reflect that and the npm package is published with a new version, developers can selectively get the latest version in their own code repo.

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

### Use of Mixins for Design Tokens
This project makes extensive use of SCSS mixins to apply design tokens, ensuring consistency and flexibility across the codebase. Mixins, such as the font and font-size mixins, are used to access and apply the design tokens defined in the package, including typography, spacing, colors, and breakpoints.

For example, the font mixin allows you to easily set the font family and weight based on the design tokens:

```
@include font(bold);
```

Similarly, the font-size mixin enables the application of responsive font sizes and line heights that are mapped directly to the token values:

```
@include font-size(medium);
```

### Benefits of Using Mixins:
* **Consistency:** By using design tokens and mixins throughout the project, the same styles are applied consistently across components, which improves the overall coherence of the design.
* **Maintainability:** If a design change occurs (e.g., a new font size or weight is added), you can update the design tokens in one place, and the mixins will automatically apply the changes throughout the project.
* **Scalability:** Mixins make it easy to scale styles across different components and screen sizes, with minimal effort. They also simplify the application of complex styles like responsive typography or spacing.
* **DRY Principle:** Mixins help to keep the code DRY by centralizing the logic and ensuring you don’t need to manually repeat the same CSS properties across components.

### Future State
#### Figma integration & Visual Regression Tests
In a future state, this design token package could be enhanced to not only pull design tokens directly from tools like Figma via an API but also to automate visual regression testing. By integrating tools like Storybook for component development and visual regression testing tools, we could ensure that any changes to the design tokens are visually verified before they are deployed.

#### Javascript Support
In the future, this design token package can be expanded to support not only SCSS variables but also JavaScript, enabling developers to use design tokens in various environments. This could be achieved by integrating tools like Vanilla Extract or other CSS-in-JS solutions, allowing developers to access and apply design tokens in JavaScript, React, and other frameworks without being tied to SCSS.

By supporting both SCSS and JS, the package will offer greater flexibility, allowing developers to choose their preferred styling method while maintaining a consistent design system across different platforms and technologies.