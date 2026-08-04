---
title: "Add the Tailwind-friendly stylelint-config preset"
release_note: "Initial release of @acme-skunkworks/stylelint-config — a shared Stylelint preset composing stylelint-config-standard, stylelint-config-tailwindcss, and alphabetical property ordering."
created_at: "2026-07-02T09:15:58Z"
merged_at:
branch: "a-270-stylelint-config-preset"
pr:
commit:
merge_strategy:
author: "rob@acmeskunkworks.io"
co_authors: []
category: feature
breaking: false
issues: ["A-269", "A-270", "A-271"]
stats:
  files_changed:
  loc_added:
  loc_removed:
---

## Added

- The `@acme-skunkworks/stylelint-config` preset — the repo generated from
  `npm-package-template` now ships a real published API. `src/index.ts`
  default-exports a Stylelint config composing `stylelint-config-standard` then
  `stylelint-config-tailwindcss` (the Tailwind layer wins the `at-rule-no-unknown`
  / `function-no-unknown` overrides so `@import "tailwindcss"`, `@theme`, `@apply`
  lint cleanly), plus `stylelint-order` with `order/properties-alphabetical-order`
  ([A-270](https://linear.app/rheged-studio/issue/A-270)).
- Consumed via `extends: "@acme-skunkworks/stylelint-config"`. The extended
  configs and the order plugin are bundled as `dependencies`; only `stylelint`
  (`^17`) is a peer, so consumers install one package plus Stylelint
  ([A-271](https://linear.app/rheged-studio/issue/A-271)).
- A self-test: the repo dogfoods the built preset via `stylelint.config.mjs`, and
  a Vitest test lints a Tailwind fixture to guard against false positives.

## Changed

- Renamed the package from the template placeholder to
  `@acme-skunkworks/stylelint-config`, seeded at `1.0.0`, and pointed the
  metadata (description/keywords/repository) at the new package. Completes the
  per-package standup checklist from
  [A-269](https://linear.app/rheged-studio/issue/A-269).
