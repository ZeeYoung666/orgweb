'use client'

import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LOCALES = [
  { code: 'ar', label: 'ع', full: 'العربية' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'fr', label: 'FR', full: 'Français' },
]

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const isRTL = locale === 'ar'
  const dir = isRTL ? 'rtl' : 'ltr'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setLangOpen(false)
  }

  const navLinks = [
    { key: 'home', href: `/${locale}` },
    { key: 'about', href: `/${locale}/about` },
    { key: 'events', href: `/${locale}/events` },
    { key: 'gallery', href: `/${locale}/gallery` },
    { key: 'contact', href: `/${locale}/contact` },
  ]

  const currentLang = LOCALES.find(l => l.code === locale)

  return (
    <motion.header
      dir={dir}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'fixed',
        top: 0,
        insetInline: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(10, 45, 56, 0.97)' : 'var(--color-teal-dark)',
        borderBottom: '1px solid',
        borderBottomColor: scrolled ? 'var(--color-gold)' : 'rgba(237, 208, 152, 0.3)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-lg)' : 'none',
        transition: 'all 300ms ease-out',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBlock: '14px',
        }}
      >
        {/* Brand */}
        <Link
          href={`/${locale}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1.5px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0,
              background: 'rgba(184,127,30,0.08)',
            }}
          >
            <Image
              src="/images/logo.jpeg"
              alt="Deroua Logo"
              width={40}
              height={40}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-latin-display)',
                fontSize: isRTL ? '18px' : '17px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                lineHeight: 1.2,
                letterSpacing: isRTL ? 0 : '0.01em',
              }}
            >
              {isRTL ? 'جمعية الدروة للثقافة والفن' : 'Deroua Arts'}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: 'rgba(240,234,224,0.55)',
                marginTop: '2px',
                fontFamily: 'var(--font-latin-body)',
                letterSpacing: '0.06em',
              }}
            >
              {isRTL ? 'من أجل الفن' : 'For the Sake of Art'}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
          className="hidden-mobile"
        >
          {navLinks.map(({ key, href }) => {
            const active = pathname === href
            return (
              <Link
                key={key}
                href={href}
                style={{
                  fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                  fontSize: isRTL ? '16px' : '15px',
                  color: active ? 'var(--color-gold-warm)' : 'rgba(248,245,240,0.85)',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '3px',
                  borderBottom: active ? '2px solid var(--color-gold)' : '2px solid transparent',
                  transition: 'all 200ms ease-out',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!active) {
                    (e.target as HTMLElement).style.color = 'var(--color-gold-warm)'
                    ;(e.target as HTMLElement).style.borderBottomColor = 'rgba(206,154,64,0.4)'
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    (e.target as HTMLElement).style.color = 'rgba(248,245,240,0.85)'
                    ;(e.target as HTMLElement).style.borderBottomColor = 'transparent'
                  }
                }}
              >
                {t(key as 'home' | 'about' | 'events' | 'gallery' | 'contact')}
              </Link>
            )
          })}
        </nav>

        {/* Language switcher + mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Language Switcher */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(v => !v)}
              aria-label="Switch language"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                backgroundColor: 'rgba(184,127,30,0.12)',
                border: '1px solid var(--color-gold)',
                borderRadius: '3px',
                color: 'var(--color-gold)',
                fontFamily: 'var(--font-latin-body)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all 200ms ease-out',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(184,127,30,0.22)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(184,127,30,0.12)' }}
            >
              <span>{currentLang?.label}</span>
              <span style={{ fontSize: '10px', opacity: 0.7 }}>▾</span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    insetInlineEnd: 0,
                    backgroundColor: 'var(--color-teal-800)',
                    border: '1px solid var(--color-gold)',
                    borderRadius: '4px',
                    boxShadow: 'var(--shadow-lg)',
                    overflow: 'hidden',
                    minWidth: '140px',
                    zIndex: 200,
                  }}
                >
                  {LOCALES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => switchLocale(l.code)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '100%',
                        padding: '10px 16px',
                        backgroundColor: l.code === locale ? 'rgba(184,127,30,0.2)' : 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(237,208,152,0.12)',
                        color: l.code === locale ? 'var(--color-gold)' : 'var(--color-text-inverse)',
                        fontFamily: l.code === 'ar' ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                        fontSize: '14px',
                        cursor: 'pointer',
                        textAlign: 'start',
                        transition: 'background 150ms',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(184,127,30,0.15)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = l.code === locale ? 'rgba(184,127,30,0.2)' : 'transparent' }}
                    >
                      <span style={{ fontWeight: 700, minWidth: 24, fontSize: '12px', opacity: 0.7, fontFamily: 'var(--font-mono)' }}>{l.label}</span>
                      <span>{l.full}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              padding: '8px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(237,208,152,0.3)',
              borderRadius: '3px',
              color: 'var(--color-parchment)',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid rgba(237,208,152,0.2)',
            }}
          >
            <nav
              dir={dir}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '8px 0 16px',
              }}
            >
              {navLinks.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                    fontSize: '16px',
                    color: 'rgba(248,245,240,0.9)',
                    textDecoration: 'none',
                    padding: '12px 24px',
                    borderBottom: '1px solid rgba(237,208,152,0.1)',
                    transition: 'color 200ms',
                  }}
                >
                  {t(key as 'home' | 'about' | 'events' | 'gallery' | 'contact')}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </motion.header>
  )
}
