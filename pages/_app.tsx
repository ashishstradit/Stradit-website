import type { AppProps } from 'next/app'

/** Minimal Pages Router shell — real UI lives in `app/` (App Router). */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
