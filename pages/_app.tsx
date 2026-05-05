import type { AppProps } from 'next/app'
import React from 'react'

/** Minimal Pages Router shell — real UI lives in `app/` (App Router). */
export default function App({ Component, pageProps }: AppProps) {
  return React.createElement(Component, pageProps)
}
