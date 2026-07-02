/**
 * Self-test: this repo dogfoods its own preset by extending the built artifact
 * (`dist/index.js`). Run `pnpm build` first, then `pnpm lint:css`.
 * @type {import('stylelint').Config}
 */
export default {
  extends: ["./dist/index.js"],
};
