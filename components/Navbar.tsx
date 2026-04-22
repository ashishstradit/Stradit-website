'use client'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [coeOpen, setCoeOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/Artboard 1.png" alt="Brand Logo" />
      </div>

      {/* Desktop Links */}
      <div className={styles.desktopLinks}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#">About us</a></li>
          <li className={styles.navItem}>
            <a href="#">CoE</a>
            <ul className={styles.dropdownMenu}>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Data Analytics</a></li>
              <li><a href="#">Applied AI</a></li>
              <li><a href="#">Testing CoE</a></li>
              <li><a href="#">GCC CoE</a></li>
              <li><a href="#">AI</a></li>
            </ul>
          </li>
          <li className={styles.navItem}><a href="#">GCC</a></li>
          <li className={styles.navItem}><a href="#">StartIT</a></li>
        </ul>
        <button className="cta-btn">Contact Us</button>
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
        <a href="#" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>About us</a>

        <div className={styles.mobileAccordion}>
          <button className={styles.mobileAccordionBtn} onClick={() => setCoeOpen(!coeOpen)}>
            CoE <span className={`${styles.chevron} ${coeOpen ? styles.chevronOpen : ''}`}>▾</span>
          </button>
          {coeOpen && (
            <div className={styles.mobileSubMenu}>
              <a href="#" onClick={() => setMenuOpen(false)}>Overview</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Data Analytics</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Applied AI</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Testing CoE</a>
              <a href="#" onClick={() => setMenuOpen(false)}>GCC CoE</a>
              <a href="#" onClick={() => setMenuOpen(false)}>AI</a>
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
