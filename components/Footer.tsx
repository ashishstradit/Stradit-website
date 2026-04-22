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
          <a href="#">About us</a>
          <a href="#">CoE</a>
          <a href="#">GCC</a>
          <a href="#">StartIT</a>
        </div>
        <div className={styles.footerCol}>
          <h4>CoE</h4>
          <a href="#">Data Analytics</a>
          <a href="#">Applied AI</a>
          <a href="#">Cyber Security</a>
          <a href="#">Testing</a>
          <a href="#">Cloud Infrastructure</a>
          <a href="#">GCC CoE</a>
        </div>
        <div className={styles.footerCol}>
          <h4>Get in Touch</h4>
          <a href="mailto:reachout@stradit.com">reachout@stradit.com</a>
          <a href="tel:+18005550199">+1 (800) 555-0199</a>
          <div className={styles.socialIcons}>
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="GitHub">gh</a>
            <a href="#" title="YouTube">yt</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
