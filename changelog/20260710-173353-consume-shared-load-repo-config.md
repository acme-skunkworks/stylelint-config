---
title: Consume shared load-repo-config reusable
release_note: CI and pkg-release now float reusable-load-repo-config.yml@v1; the local load-repo-config composite is deleted (A-779).
created_at: '2026-07-10T17:33:53Z'
branch: a-779-consume-shared-load-repo-config
author: rob@acmeskunkworks.io
co_authors: []
category: chore
breaking: false
issues:
  - A-779
merged_at: '2026-07-10T17:42:03Z'
commit: e153f43
pr: 13
stats:
  loc_added: 26
  loc_removed: 138
  files_changed: 6
---

## Changed

- Caller `config` jobs call `reusable-load-repo-config.yml@v1` instead of the
  local composite ([A-779](https://linear.app/rheged-studio/issue/A-779)).
- Deleted `.github/actions/load-repo-config/`.
