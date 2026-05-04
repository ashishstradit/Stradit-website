import { Html, Head, Main, NextScript } from 'next/document'

/** Required so dev/build can emit `pages/_document.js`; layouts come from `app/layout.tsx`. */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
