#!/usr/bin/env node
/**
 * Re-encodes videos in public/ — smaller files + faststart for streaming on cheap hosting.
 * Run BEFORE npm run build. Uses ffmpeg-static (no system ffmpeg needed).
 *
 * Usage: npm run optimize:media              # all .mp4/.mov under public/
 *        npm run optimize:media:site        # only videos listed in page-asset-paths.mjs
 *        node scripts/optimize-media.mjs --dry-run
 *        node scripts/optimize-media.mjs --page-assets --dry-run
 */
import { spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import ffmpegStatic from 'ffmpeg-static'
import { PAGE_ASSET_PATHS } from './page-asset-paths.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC = path.join(__dirname, '..', 'public')
const dryRun = process.argv.includes('--dry-run')
const pageAssetsOnly = process.argv.includes('--page-assets')

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, acc)
    else if (/\.(mp4|mov)$/i.test(e.name)) acc.push(full)
  }
  return acc
}

function human(n) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

function optimize(file) {
  const ffmpeg = ffmpegStatic
  if (!ffmpeg || !fs.existsSync(ffmpeg)) {
    console.error('ffmpeg-static binary missing. Run npm install.')
    process.exit(1)
  }

  const before = fs.statSync(file).size
  const ext = path.extname(file).toLowerCase()
  const dir = path.dirname(file)
  const base = path.basename(file, ext)
  const tmp = path.join(dir, `${base}_opt_${Date.now()}${ext}`)

  const args = [
    '-y',
    '-i',
    file,
    '-c:v',
    'libx264',
    '-profile:v',
    'main',
    '-pix_fmt',
    'yuv420p',
    '-crf',
    '26',
    '-preset',
    'medium',
    '-vf',
    "scale='min(1920,iw)':-2",
    '-c:a',
    'aac',
    '-b:a',
    '128k',
    '-movflags',
    '+faststart',
    tmp,
  ]

  if (dryRun) {
    console.log(`[dry-run] ${path.relative(PUBLIC, file)} (${human(before)})`)
    return { saved: 0 }
  }

  const r = spawnSync(ffmpeg, args, { stdio: 'pipe' })
  if (r.status !== 0) {
    console.error(`ffmpeg failed: ${path.relative(PUBLIC, file)}`)
    console.error(r.stderr?.toString().slice(-800))
    try {
      fs.unlinkSync(tmp)
    } catch {
      /* */
    }
    return { saved: 0 }
  }

  const after = fs.statSync(tmp).size
  if (after >= before * 0.98) {
    console.log(`skip (not smaller): ${path.relative(PUBLIC, file)} ${human(before)} → ${human(after)}`)
    fs.unlinkSync(tmp)
    return { saved: 0 }
  }

  const bak = `${file}.bak`
  fs.renameSync(file, bak)
  try {
    fs.renameSync(tmp, file)
    fs.unlinkSync(bak)
  } catch (e) {
    try {
      fs.renameSync(bak, file)
    } catch {
      /* */
    }
    try {
      fs.unlinkSync(tmp)
    } catch {
      /* */
    }
    console.error(`replace failed: ${file}`, e)
    return { saved: 0 }
  }

  console.log(`ok ${path.relative(PUBLIC, file)} ${human(before)} → ${human(after)}`)
  return { saved: before - after }
}

function videosFromPageAssetList() {
  const list = []
  for (const rel of PAGE_ASSET_PATHS) {
    if (!/\.(mp4|mov)$/i.test(rel)) continue
    const full = path.join(PUBLIC, rel)
    if (fs.existsSync(full)) list.push(full)
    else console.warn(`warn: listed video missing: ${rel}`)
  }
  return list
}

function main() {
  if (!fs.existsSync(PUBLIC)) {
    console.error('public/ not found')
    process.exit(1)
  }

  const files = pageAssetsOnly ? videosFromPageAssetList() : walk(PUBLIC)
  const label = pageAssetsOnly ? 'optimize-media (page-assets only)' : 'optimize-media (all public videos)'
  console.log(`${label}: ${files.length} video(s)\n`)

  let total = 0
  for (const f of files) {
    total += optimize(f).saved
  }

  if (!dryRun && total > 0) {
    console.log(`\nSaved ≈ ${human(total)} — next: npm run pack:zip`)
  }
}

main()
