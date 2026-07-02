import type { Config } from "stylelint";

/**
 * `@acme-skunkworks/stylelint-config` — the shared, Tailwind-friendly Stylelint
 * preset for Acme Skunkworks projects.
 *
 * Consumed via:
 *
 * ```jsonc
 * { "extends": "@acme-skunkworks/stylelint-config" }
 * ```
 *
 * `stylelint-config-tailwindcss` is listed after `stylelint-config-standard`
 * so the Tailwind layer wins the `at-rule-no-unknown` / `function-no-unknown`
 * overrides that let `@tailwind`, `@theme`, `@apply` etc. lint cleanly.
 */
const config: Config = {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-alphabetical-order": true,
  },
};

export default config;
