---
title: Update Linear team name and workspace slug
release_note: ''
created_at: '2026-08-04T18:42:48Z'
merged_at: ''
branch: a-1238-stylelint-config-update-linearteamname-linearworkspaceslug
pr: 
commit: ''
author: rob@acmeskunkworks.io
co_authors: []
category: chore
breaking: false
issues:
  - A-1238
stats:
  files_changed: 
  loc_added: 
  loc_removed: 
  commits: 
---

## Changed

**Linear identity ([A-1238](https://linear.app/rheged-studio/issue/A-1238))** — point root `linearWorkspaceSlug` at `rheged-studio` and rewrite stale `linear.app/acme-skunkworks` changelog URLs. Skill `config.json` values are generated locally (gitignored) via `initialise-skills --set` for both `.claude` and `.agents` mirrors.
