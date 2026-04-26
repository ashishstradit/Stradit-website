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
          <li className={styles.navItem}><a href="/about-us">About us</a></li>
          <li className={styles.navItem}>
            <a href="/coe">CoE</a>
            <ul className={styles.dropdownMenu}>
              <li><a href="/coe/ai">AI</a></li>
              <li><a href="/coe">Overview</a></li>
              <li><a href="/coe/data-analytics">Data Analytics</a></li>
              <li><a href="/coe/cloud">Cloud</a></li>
              <li><a href="/coe/cyber-security">Cyber Security</a></li>
              <li><a href="/coe/testing">Testing CoE</a></li>
              <li><a href="/coe">GCC CoE</a></li>
            </ul>
          </li>
          <li className={styles.navItem}><a href="#">GCC</a></li>
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
        <a href="/about-us" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>About us</a>
        {/* CoE main page */}
        <a href="/coe" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>CoE</a>

        <div className={styles.mobileAccordion}>
          <button className={styles.mobileAccordionBtn} onClick={() => setCoeOpen(!coeOpen)}>
            CoE <span className={`${styles.chevron} ${coeOpen ? styles.chevronOpen : ''}`}>▾</span>
          </button>
          {coeOpen && (
            <div className={styles.mobileSubMenu}>
              <a href="/coe/ai" onClick={() => setMenuOpen(false)}>AI</a>
              <a href="/coe" onClick={() => setMenuOpen(false)}>Overview</a>
              <a href="/coe/data-analytics" onClick={() => setMenuOpen(false)}>Data Analytics</a>
              <a href="/coe/cloud" onClick={() => setMenuOpen(false)}>Cloud</a>
              <a href="/coe/cyber-security" onClick={() => setMenuOpen(false)}>Cyber Security</a>
              <a href="/coe/testing" onClick={() => setMenuOpen(false)}>Testing CoE</a>
              <a href="/coe" onClick={() => setMenuOpen(false)}>GCC CoE</a>
            </div>
          )}
        </div>

        <a href="#" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>GCC</a>
        <a href="#" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>StartIT</a>
        <button className={`cta-btn ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>Contact Us</button>
      </div>
    </nav>
  )
}
