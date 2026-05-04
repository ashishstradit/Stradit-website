import type { Metadata } from 'next'
import StartItView from './StartItView'

export const metadata: Metadata = {
  title: 'StartIT — StradIT',
  description:
    'From AI curious to AI certified — StartIT training tracks, cohort model, and hands-on programs with StradIT.',
}

export default function StartItPage() {
  return <StartItView />
}
