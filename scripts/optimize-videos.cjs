/**
 * Compress + enable faststart for background videos.
 *
 * - Keeps originals intact.
 * - Writes new mp4 files in /public with safe filenames (no spaces).
 * - Uses H.264 + faststart and removes audio (videos are muted in UI).
 */
const path = require('path')
const { spawnSync } = require('child_process')

const ffmpeg = require('ffmpeg-static')

const ROOT = path.resolve(__dirname, '..')
const PUBLIC = path.join(ROOT, 'public')

const jobs = [
  {
    in: path.join(PUBLIC, 'VideoHand.mp4'),
    out: path.join(PUBLIC, 'VideoHand.web.mp4'),
    scale: 1280,
    crf: 28,
  },
  {
    in: path.join(PUBLIC, 'Globe.mp4'),
    out: path.join(PUBLIC, 'Globe.web.mp4'),
    scale: 1280,
    crf: 28,
  },
  {
    in: path.join(PUBLIC, 'Stradit Logo (1).mp4'),
    out: path.join(PUBLIC, 'StraditLogo.web.mp4'),
    scale: 1280,
    crf: 28,
  },
]

function run(job) {
  const args = [
    '-y',
    '-i',
    job.in,
    '-vf',
    `scale=${job.scale}:-2`,
    '-c:v',
    'libx264',
    '-preset',
    'veryfast',
    '-crf',
    String(job.crf),
    '-profile:v',
    'high',
    '-level',
    '4.1',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    '-an',
    job.out,
  ]

  const res = spawnSync(ffmpeg, args, { stdio: 'inherit' })
  if (res.status !== 0) {
    process.exit(res.status ?? 1)
  }
}

console.log('ffmpeg:', ffmpeg)
for (const job of jobs) {
  console.log('\noptimizing:', path.basename(job.in), '→', path.basename(job.out))
  run(job)
}

