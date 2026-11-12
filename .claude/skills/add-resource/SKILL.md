---
name: add-resource
description: Add a new downloadable resource (PDF, sheet, dataset, link) to the /resources section of anuragkanade.com — copies the file and thumbnail into place, writes the YAML entry, previews it, commits and pushes. Use when the user says "add a resource", "/add-resource", or hands over a file/link to share on Instagram.
argument-hint: "<file path or URL> [title] [thumbnail path]"
---

# Add a resource to anuragkanade.com/resources

The Resources section is driven by one YAML file per resource in `content/resources/`.
The file name is the URL slug: `content/resources/ml-cheatsheet.yml` → `anuragkanade.com/resources/ml-cheatsheet`.
Schema lives in `content.config.ts` (`resources` collection); `content/resources/_template.yml` is a filled-in example.

## 1. Gather the details

From the arguments and conversation, work out the following. Ask only for what's missing **and** can't be inferred — title and description are the only must-haves besides the file itself.

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Short, punchy — it's the card heading. |
| `description` | yes | 1–2 sentences, plain language. Draft one from the file's contents if the user didn't give one, and show it to them. |
| `download` | yes | A full `https://` URL, or a site path like `/downloads/files/<slug>.pdf`. |
| `date` | yes | Today's date, `YYYY-MM-DD`, unless told otherwise. |
| `type` | no | `PDF`, `Sheet`, `Notebook`, `Dataset`, `Code`, `Notion`, `Link`, `Video`. Link/Notion/Website/Course/Video show an "Open" button instead of "Download". |
| `size` | no | Human-readable (`1.2 MB`). Compute it for local files (`du -h` / `ls -lh`). |
| `tags` | no | 1–3 short tags; reuse existing ones (`grep -h tags content/resources/*.yml`) so the filter chips stay tidy. |
| `thumbnail` | no | Leave it out to get an auto-generated coloured cover. |
| `highlights` | no | 3–5 "What's inside" bullets, each under ~8 words. |
| `featured` | no | `true` pins it to the top. Only one or two should be featured at a time. |
| `cta` | no | Custom button text, e.g. `"Get the sheet"`. |

Slug: lowercase, hyphenated, short (`ai-ml-interview-roadmap`). Check `content/resources/` so it doesn't collide.

## 2. Place the files

- **Local file the user handed over:**
  - Small (< ~20 MB): copy into `public/downloads/files/<slug>.<ext>` and set `download: "/downloads/files/<slug>.<ext>"`.
  - Larger, or something expected to go viral: tell the user GitHub Pages/Vercel bandwidth and git repo size make this a bad idea, and suggest a GitHub Release or a Hugging Face dataset repo instead. Only proceed with a local copy if they insist.
  - Never use Google Drive links for popular files — Drive blocks them with "download quota exceeded".
- **URL:** use it as-is for `download`.
- **Thumbnail:** copy into `public/downloads/thumbs/<slug>.<ext>`, set `thumbnail: "/downloads/thumbs/<slug>.<ext>"`. 16:10 (e.g. 1600×1000) fits the cards best; mention it if the image is far off that ratio.
- Never put files in `public/resources/` — that path collides with the `/resources` page.

## 3. Write `content/resources/<slug>.yml`

```yaml
title: "ML Interview Cheatsheet"
description: "One-page summary of the ML concepts asked most in interviews."
date: "2026-11-12"
type: "PDF"
size: "1.2 MB"
tags: ["ML", "Interviews"]
download: "/downloads/files/ml-interview-cheatsheet.pdf"
thumbnail: "/downloads/thumbs/ml-interview-cheatsheet.png"
highlights:
  - "Bias–variance with diagrams"
  - "Metrics at a glance"
featured: true
```

Quote all string values. Omit optional fields rather than leaving them empty.

## 4. Verify

Run `npx nuxt dev --port 3123` in the background, then:
- `curl -s -o /dev/null -w "%{http_code}" localhost:3123/resources/<slug>` → `200`
- the slug appears on `localhost:3123/resources`
- for a local file, `curl -sI localhost:3123/downloads/files/<file>` → `200`

Stop the dev server afterwards. Building regenerates committed files under `.nuxt/` and `.data/`; restore them with `git checkout -- .nuxt .data` and delete `.output/` and `dist` if they appear, so only the real change gets committed.

## 5. Publish

1. Stage only the new/changed resource files (`content/resources/<slug>.yml`, `public/downloads/...`), commit (`Add resource: <title>`), and push to `master` once the user has said to publish.
2. The live site is on **Vercel**, and pushes to `master` create a Preview only. Production needs one of:
   - the user running `! vercel --prod` (or `vercel promote <preview-url> --yes`), or
   - Vercel → Project Settings → Git → Production Branch set to `master` (then pushes go live automatically).
   Claude is not permitted to deploy to production itself — give the user the command.
3. After it's live, confirm `https://anuragkanade.com/resources/<slug>` returns 200.

## 6. Hand back

Give the user:
- the share link `anuragkanade.com/resources/<slug>`
- the short link `anuragkanade.com/r` (for Instagram, where links in comments aren't clickable)
- a one-line caption suggestion, e.g. "Comment ROADMAP and grab it free → anuragkanade.com/r"
