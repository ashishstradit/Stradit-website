import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <img src="/Artboard 1.png" alt="Logo" style={{ height: 30, marginBottom: 20 }} />
          <p>Pioneering the next generation of applied artificial intelligence and machine learning architectures for global enterprises.</p>
        </div>
        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about-us/">About us</a>
          <a href="/coe/">Center of Excellence</a>
          <a href="/gcc/">Global Capability Centre</a>
          <a href="#">StartIT</a>
        </div>
        <div className={styles.footerCol}>
          <h4>Center Of Excellence</h4>
          <a href="/coe/ai/">Applied Artificial Intelligence</a>
          <a href="/coe/data-analytics/">Data Analytics - Applied AI</a>
          <a href="/coe/cyber-security/">Cyber Security - Applied AI</a>
          <a href="/coe/cloud/">Cloud &amp; Infrastructure - Applied AI</a>
          <a href="/coe/testing/">Automated AI Testing</a>
        </div>
        <div className={styles.footerCol}>
          <h4>Get in Touch</h4>
          <a href="mailto:reachout@stradit.com">reachout@stradit.com</a>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/stradit-llc" title="LinkedIn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" title="Facebook" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/stradit23?igsh=OGNzdXRlZHdkdWd1" title="Instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
