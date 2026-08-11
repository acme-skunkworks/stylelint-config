---
title: Bump other @acme-skunkworks packages and fix markdownlint 3.x fallout
release_note: ""
created_at: "2026-08-07T15:12:56Z"
merged_at: "2026-08-11T13:03:58Z"
branch: a-1345-stylelint-config-bump-acme-skunkworks-and-fix-lint-fallout
pr: 31
commit: dcc344d
author: rob@acmeskunkworks.io
co_authors: []
category: chore
breaking: false
issues:
  - A-1345
stats:
  files_changed: 7
  loc_added: 77
  loc_removed: 45
  commits:
---

## Changed

**Bump other `@acme-skunkworks` packages and fix markdownlint 3.x fallout ([A-1345](https://linear.app/rheged-studio/issue/A-1345))**

- Raise `@acme-skunkworks/markdownlint-config` to `^3.0.0`, `eslint-config` to
  `^1.1.3`, `changelog-core` to `^1.1.1`, and `commitlint-config` to `^1.0.1`. Leave
  this package at `1.0.1`.
- Ignore vendored `.claude/skills/**` and `.agents/skills/**` in markdownlint and
  `lint:md`, and repair MD044/MD040 hits in first-party docs so CI stays green under
  markdownlint-config 3.x.
