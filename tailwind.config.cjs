/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        orcalight: {
          "color-scheme": "light",
          "primary": "#ffc107",
          "primary-content": "#ffffff",
          "secondary": "#ea868f",
          "secondary-content": "#ffffff",
          "accent": "#4dd4ac",
          "accent-content": "#163835",
          "neutral": "#3d4451",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#1f2937",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      {
        orcadark: {
          "color-scheme": "dark",
          "primary": "#ffc107",
          "primary-content": "#ffffff",
          "secondary": "#ea868f",
          "secondary-content": "#ffffff",
          "accent": "#4dd4ac",
          "accent-content": "#ffffff",
          "neutral": "#191D24",
          "neutral-focus": "#111318",
          "neutral-content": "#A6ADBB",
          "base-100": "#2A303C",
          "base-200": "#242933",
          "base-300": "#20252E",
          "base-content": "#A6ADBB",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
    darkTheme: "orcadark",
  },
  darkMode: ["class", "[data-theme=\"orcadark\"]"],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
