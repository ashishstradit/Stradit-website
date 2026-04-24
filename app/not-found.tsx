export default function NotFound() {
  return (
    <main style={{ padding: '120px 5%', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 12 }}>Page not found</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>The page you’re looking for doesn’t exist.</p>
      <a className="cta-btn" href="/">
        Go to Home
      </a>
    </main>
  )
}

