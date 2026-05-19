'use client'
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'about', href: '/#about' },
  { name: 'projects', href: '/#projects-section' },
  { name: 'cv', href: '/BennettBishopResume.pdf', external: true },
  { name: 'github', href: 'https://github.com/BennettJamesBishop', external: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="t-nav">
      <nav className="t-wrap t-nav-inner" aria-label="Global">
        <Link to="/" className="t-brand">bjb</Link>

        <ul className="t-nav-links">
          {navigation.map((item) => (
            item.external ? (
              <li key={item.name}>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{item.name}</a>
              </li>
            ) : (
              <li key={item.name}>
                <Link to={item.href} smooth>{item.name}</Link>
              </li>
            )
          ))}
        </ul>

        <div className="t-status">
          <span className="t-dot" aria-hidden="true"></span>
          <span>available</span>
        </div>

        <button
          type="button"
          className="t-mobile-btn"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon aria-hidden="true" />
        </button>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40" />
        <DialogPanel className="t-mobile-panel">
          <div className="t-mobile-head">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="t-brand">bjb</Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'var(--fg)' }}
            >
              <XMarkIcon aria-hidden="true" style={{ width: 24, height: 24 }} />
            </button>
          </div>
          <div className="t-mobile-list">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >{item.name}</a>
              ) : (
                <Link key={item.name} to={item.href} smooth onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
              )
            ))}
          </div>
          <div className="t-status" style={{ marginTop: 'auto' }}>
            <span className="t-dot" aria-hidden="true"></span>
            <span>available</span>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
