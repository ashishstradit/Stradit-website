'use client'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [coeOpen, setCoeOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href="/" aria-label="Go to home">
          <img src="/Artboard 1.png" alt="Brand Logo" />
        </a>
      </div>

      {/* Desktop Links */}
      <div className={styles.desktopLinks}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/about-us/">About us</a></li>
          <li className={styles.navItem}>
            <a href="/coe/">Center of Excellence</a>
            <ul className={styles.dropdownMenu}>
              <li><a href="/coe/ai/">Applied Artificial Intelligence</a></li>
              <li><a href="/coe/data-analytics/">Data Analytics - Applied AI</a></li>
              <li><a href="/coe/cyber-security/">Cyber Security - Applied AI</a></li>
              <li><a href="/coe/cloud/">Cloud &amp; Infrastructure - Applied AI</a></li>
              <li><a href="/coe/testing/">Automated AI Testing</a></li>
            </ul>
          </li>
          <li className={styles.navItem}><a href="/gcc/">Global Capability Centers</a></li>
          <li className={styles.navItem}><a href="#">StartIT</a></li>
        </ul>
        <button className="cta-btn" style={{padding: '10px 18px', fontSize: '13px'}}>Contact Us</button>
      </div>

      {/* Hamburger Button */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <a href="/about-us/" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>About us</a>
        {/* CoE main page */}
        <a href="/coe/" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Center of Excellence</a>

        <div className={styles.mobileAccordion}>
          <button className={styles.mobileAccordionBtn} onClick={() => setCoeOpen(!coeOpen)}>
            Center of Excellence <span className={`${styles.chevron} ${coeOpen ? styles.chevronOpen : ''}`}>▾</span>
          </button>
          {coeOpen && (
            <div className={styles.mobileSubMenu}>
              <a href="/coe/ai/" onClick={() => setMenuOpen(false)}>Applied Artificial Intelligence</a>
              <a href="/coe/data-analytics/" onClick={() => setMenuOpen(false)}>Data Analytics - Applied AI</a>
              <a href="/coe/cyber-security/" onClick={() => setMenuOpen(false)}>Cyber Security - Applied AI</a>
              <a href="/coe/cloud/" onClick={() => setMenuOpen(false)}>Cloud &amp; Infrastructure - Applied AI</a>
              <a href="/coe/testing/" onClick={() => setMenuOpen(false)}>Automated AI Testing</a>
            </div>
          )}
        </div>

        <a href="/gcc/" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Global Capability Centers</a>
        <a href="#" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>StartIT</a>
        <button className={`cta-btn ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>Contact Us</button>
      </div>
    </nav>
  )
}
