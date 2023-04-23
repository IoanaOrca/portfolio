module.exports = {
  "extends": [
    "plugin:astro/recommended",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest",
  },
  "overrides": [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
      },
    },
    {
      files: [".eslintrc.cjs", "tailwind.config.cjs"],
      rules: {
        "quotes": ["warn", "double"],
      },
    },
  ],
  rules: {
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "curly": ["warn", "all"],
    "eqeqeq": ["warn", "always"],
    "indent": ["warn", 2],
    "no-var": "warn",
    "prefer-const": "warn",
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "space-infix-ops": "warn",
  },
};
