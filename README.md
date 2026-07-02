# @acme-skunkworks/stylelint-config

Shared, Tailwind-friendly [Stylelint](https://stylelint.io) config for Acme Skunkworks projects — [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) + [`stylelint-config-tailwindcss`](https://github.com/schoero/stylelint-config-tailwindcss), with alphabetical property ordering via [`stylelint-order`](https://github.com/hudochenkov/stylelint-order).

## 📦 Installation

`stylelint` is a peer dependency; the extended configs and the order plugin are bundled, so you only install this package plus Stylelint itself:

```bash
pnpm add -D @acme-skunkworks/stylelint-config stylelint
# or
npm install --save-dev @acme-skunkworks/stylelint-config stylelint
```

## 🚀 Usage

Create a `stylelint.config.mjs` (or `.stylelintrc.json`) in your project root and extend the preset:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ["@acme-skunkworks/stylelint-config"],
};
```

```jsonc
// .stylelintrc.json
{
  "extends": "@acme-skunkworks/stylelint-config",
}
```

Add a script to `package.json` and run it:

```json
{
  "scripts": {
    "lint:css": "stylelint \"**/*.css\""
  }
}
```

## 🎯 What you get

The preset composes three layers, in order:

1. **`stylelint-config-standard`** — the community baseline of modern, sensible CSS conventions.
2. **`stylelint-config-tailwindcss`** — layered on top so Tailwind's at-rules and functions lint cleanly. This is what stops `at-rule-no-unknown` / `function-no-unknown` from flagging `@tailwind`, `@import "tailwindcss"`, `@theme`, `@apply`, `theme()`, `screen()` and friends. **The preset assumes you're using Tailwind** — that's the house default across our stack.
3. **`stylelint-order`** with `order/properties-alphabetical-order` — declarations within a rule are ordered alphabetically, so diffs stay small and property placement is never a debate.

## 🛠️ Overriding rules

Everything is a normal Stylelint config, so override or disable any rule after extending:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ["@acme-skunkworks/stylelint-config"],
  rules: {
    // Turn off alphabetical property ordering for this project.
    "order/properties-alphabetical-order": null,
  },
};
```

Use a `.stylelintignore` file (or the `ignoreFiles` config option) to scope which files are linted — the preset intentionally does **not** ship ignore globs, leaving that to the consumer.

## 📁 Package structure

```text
.
├── src/index.ts             # the config (source)
├── dist/                    # published artifact (compiled from src/)
├── fixtures/tailwind.css    # self-test fixture
├── stylelint.config.mjs     # repo self-test — extends the built preset
├── package.json
└── README.md
```

## 🤝 Contributing

Decisions for this package are recorded as [Linear](https://linear.app) issues, not in-repo ADRs. Found an issue or want to suggest a rule change? Open an issue in the repository.

## 📄 License

MIT License — see [LICENSE](./LICENSE). Provided "as is", without warranty of any kind.
