---
title: Adopt changelog-core and in-repo post-merge enrich
release_note:
created_at: '2026-07-10T14:27:51Z'
merged_at: '2026-07-10T14:40:33Z'
branch: a-799-phase-3-roll-out-in-repo-enricher-to-stylelint-config-npm
pr: 12
commit: 16f36c8
author: rob@acmeskunkworks.io
co_authors: []
category: chore
breaking: false
issues:
  - A-799
stats:
  files_changed: 23
  loc_added: 115
  loc_removed: 1656
---

## Changed

- Adopted `@acme-skunkworks/changelog-core` for validate + completeness; deleted
  the vendored `infrastructure/scripts/*changelog*.ts` scripts and tests (plus
  `gray-matter`).
- Wired `reusable-changelog-enrich.yml` (`mode: finalise`, `secrets: inherit`)
  into `pkg-release.yml`, pinned at the [A-821](https://linear.app/acme-skunkworks/issue/A-821) merge SHA, so post-merge
  enrichment and `version` stamping run in-repo as `road-runner-bot` (ADR 0004 /
  [A-799](https://linear.app/acme-skunkworks/issue/A-799)).
- Updated docs for the in-repo enrich lifecycle; dropped `merge_strategy` from
  the documented schema ([A-802](https://linear.app/acme-skunkworks/issue/A-802)).
- Committed a root `config.json` so `changelog-core` can resolve identity keys in
  CI (skill-local `config.json` remains gitignored).
