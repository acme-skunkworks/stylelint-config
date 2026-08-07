---
title: Update Linear team name and workspace slug
release_note: ''
created_at: '2026-08-04T18:42:48Z'
merged_at: '2026-08-04T18:52:14Z'
branch: a-1238-stylelint-config-update-linearteamname-linearworkspaceslug
pr: 24
commit: 19c7d57
author: rob@acmeskunkworks.io
co_authors: []
category: chore
breaking: false
issues:
  - A-1238
stats:
  files_changed: 10
  loc_added: 42
  loc_removed: 16
  commits: 3
version: 1.0.1
---

## Changed

**Linear identity ([A-1238](https://linear.app/rheged-studio/issue/A-1238))** — point root `linearWorkspaceSlug` at `rheged-studio` and rewrite stale `linear.app/acme-skunkworks` changelog URLs. Skill `config.json` values are generated locally (gitignored) via `initialise-skills --set` for both `.claude` and `.agents` mirrors.
