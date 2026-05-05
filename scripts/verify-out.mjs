#!/usr/bin/env node
/**
 * Sanity-check static export before upload (missing routes = blank site on Apache).
 */
import fs from 'fs'
import path from 'path'

const OUT = path.join(process.cwd(), 'out')

function exists(rel) {
  return fs.existsSync(path.join(OUT, rel))
}

const required = [
  'index.html',
  '.htaccess',
  '_next',
  'about-us/index.html',
  'coe/index.html',
  'gcc/index.html',
  'startit/index.html',
  'GCC/GCC.html',
  'contact-us/index.html',
]

function main() {
  if (!exists('')) {
    console.error('verify-out: out/ missing — run npm run build first.')
    process.exit(1)
  }
  const missing = required.filter((rel) => !exists(rel))
  if (missing.length) {
    console.error('verify-out: missing in out/:')
    for (const m of missing) console.error(`  - ${m}`)
    process.exit(1)
  }
  console.log('verify-out: ok (core routes + .htaccess present)')
}

main()
