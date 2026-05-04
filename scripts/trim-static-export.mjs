#!/usr/bin/env node
/**
 * After `next build` (output: 'export'), deletes from `out/` anything not needed for:
 *   /  |  /about-us/  |  /coe/*  |  Navbar + Footer  |  coe-detail.css backgrounds
 * Keeps: out/_next/**, allowed route HTML, public assets listed in page-asset-paths.mjs,
 *        .htaccess
 * Run via: npm run build:site  →  npm run build:compressed (zip)
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PAGE_ASSET_PATHS } from './page-asset-paths.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT = path.join(ROOT, 'out')

const keepAssets = new Set(PAGE_ASSET_PATHS.map((p) => p.replace(/\\/g, '/')))

/** Next.js static routes only — drops legacy HTML copied from public/ */
const ALLOWED_HTML = new Set([
  'index.html',
  '404.html',
  '404/index.html',
  'about-us/index.html',
  'coe/index.html',
  'coe/ai/index.html',
  'coe/cloud/index.html',
  'coe/cyber-security/index.html',
  'coe/data-analytics/index.html',
  'coe/testing/index.html',
  'startit/index.html',
  'StartIT/index.html',
])

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, cb)
    else cb(full)
  }
}

function relPosix(from, to) {
  return path.relative(from, to).split(path.sep).join('/')
}

function shouldKeepFile(fullPath) {
  const rel = relPosix(OUT, fullPath)
  if (rel.startsWith('_next/')) return true
  // Apache/cPanel: MIME + gzip (copied from public/.htaccess)
  if (rel === '.htaccess') return true
  if (rel.endsWith('.html')) return ALLOWED_HTML.has(rel)
  if (keepAssets.has(rel)) return true
  return false
}

function main() {
  if (!fs.existsSync(OUT)) {
    console.error('Missing out/ — run `npm run build` first.')
    process.exit(1)
  }

  const toRemove = []
  walk(OUT, (fullPath) => {
    if (!shouldKeepFile(fullPath)) toRemove.push(fullPath)
  })

  for (const f of toRemove) {
    fs.unlinkSync(f)
  }

  // Remove empty directories (excluding _next tree), deepest first
  const dirs = []
  function collectDirs(dir) {
    if (relPosix(OUT, dir).startsWith('_next')) return
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const e of entries) {
      if (e.isDirectory()) collectDirs(path.join(dir, e.name))
    }
    dirs.push(dir)
  }
  collectDirs(OUT)
  dirs.sort((a, b) => b.length - a.length)
  for (const d of dirs) {
    if (d === OUT) continue
    try {
      const rest = fs.readdirSync(d)
      if (rest.length === 0) fs.rmdirSync(d)
    } catch {
      /* ignore */
    }
  }

  console.log(`trim-static-export: removed ${toRemove.length} unreferenced file(s) from out/`)
}

main()
