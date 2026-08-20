import config from "../../src";
import path from "node:path";
import stylelint from "stylelint";
import { describe, expect, it } from "vitest";

// Resolve the repo root so stylelint resolves `extends`/`plugins` package names
// (stylelint-config-standard, stylelint-config-tailwindcss, stylelint-order)
// against the repo's node_modules regardless of the cwd vitest runs from.
const repoRoot = path.resolve(import.meta.dirname, "../..");
const fixture = path.join(repoRoot, "fixtures/tailwind.css");

describe("@rheged-studio/stylelint-config", () => {
  it("lints a Tailwind CSS fixture with no warnings or errors", async () => {
    const { errored, results } = await stylelint.lint({
      config,
      configBasedir: repoRoot,
      files: fixture,
    });

    const [file] = results;
    // Surface any offending rule/message in the assertion output.
    expect(file.warnings).toEqual([]);
    expect(file.parseErrors).toEqual([]);
    expect(errored).toBe(false);
  });
});
