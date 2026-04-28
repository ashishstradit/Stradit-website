/**
 * After `next build`, `out/` copies the entire `public/` folder — huge.
 * This keeps only what Landing (/), About (/about-us), Navbar & Footer need.
 * Always keeps `out/_next/` intact.
 */
const fs = require('fs')
const path = require('path')

const OUT = path.resolve(__dirname, '..', 'out')

const KEEP_DIRS = new Set(['_next'])

const KEEP_FILES = new Set([
  // root pages
  'index.html',
  'index.txt',
  '404.html',
  'Artboard 1.png',
  'VideoHand.web.mp4',
  'Globe.web.mp4',
  'Bule1.png',
  'Blue2.png',
  'Blue3.png',
  'Blue4.png',
  'Blue5.png',
  'Blue6.png',
  'StraditLogo.web.mp4',
  'Mission.png',
  'Vision.png',
  'Technology with Accountability.png',
  'Engineering with Purpose.png',
  'Global Delivery Model.png',
])

const KEEP_SUBDIRS = new Set([
  // folder-style route output (trailingSlash: true)
  'about-us',
])

function main() {
  if (!fs.existsSync(OUT)) {
    console.error('out/ missing — run next build first')
    process.exit(1)
  }

  const entries = fs.readdirSync(OUT, { withFileTypes: true })
  let removed = 0
  for (const e of entries) {
    const full = path.join(OUT, e.name)
    if (e.isDirectory()) {
      if (KEEP_DIRS.has(e.name) || KEEP_SUBDIRS.has(e.name)) continue
      fs.rmSync(full, { recursive: true, force: true })
      removed++
      console.log('removed:', e.name + '/')
    } else if (e.isFile()) {
      if (KEEP_FILES.has(e.name)) continue
      fs.unlinkSync(full)
      removed++
      console.log('removed:', e.name)
    }
  }
  console.log(`done — kept ${KEEP_FILES.size} root files + _next/ (${removed} items removed from out/)`)
}

main()
