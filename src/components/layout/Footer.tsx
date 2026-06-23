'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const dir = isRTL ? 'rtl' : 'ltr'
  const year = new Date().getFullYear()

  const navLinks = [
    { key: 'home', href: `/${locale}` },
    { key: 'about', href: `/${locale}/about` },
    { key: 'events', href: `/${locale}/events` },
    { key: 'gallery', href: `/${locale}/gallery` },
    { key: 'contact', href: `/${locale}/contact` },
  ]

  return (
    <footer
      dir={dir}
      style={{
        backgroundColor: 'var(--color-teal-900)',
        borderTop: '1px solid var(--color-gold)',
        color: 'var(--color-text-inverse)',
        paddingBlock: 'var(--spacing-3xl)',
      }}
    >
      {/* Ornamental top border */}
      <div
        style={{
          height: '2px',
          background: 'linear-gradient(to right, transparent, var(--color-gold-light), var(--color-gold), var(--color-gold-light), transparent)',
          marginBottom: 'var(--spacing-3xl)',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--spacing-3xl)',
            marginBottom: 'var(--spacing-3xl)',
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--spacing-m)' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '1.5px solid var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  background: 'rgba(184,127,30,0.08)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="Deroua Logo"
                  width={44}
                  height={44}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-arabic-display)',
                  fontSize: '17px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  lineHeight: 1.3,
                }}
              >
                جمعية الدروة<br />للثقافة والفن
              </div>
            </div>
            <p
              style={{
                fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                fontSize: 'var(--fs-sm)',
                color: 'rgba(248,245,240,0.6)',
                lineHeight: isRTL ? 'var(--lh-body-arabic)' : 'var(--lh-body)',
                margin: 0,
              }}
            >
              {t('tagline')}
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: 'var(--spacing-l)' }}>
              {['Facebook', 'Instagram', 'YouTube'].map(s => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  style={{
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(237,208,152,0.3)',
                    borderRadius: '3px',
                    color: 'rgba(237,208,152,0.6)',
                    fontSize: '13px',
                    textDecoration: 'none',
                    transition: 'all 200ms ease-out',
                    fontFamily: 'var(--font-mono)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--color-gold)'
                    el.style.color = 'var(--color-gold)'
                    el.style.backgroundColor = 'rgba(184,127,30,0.12)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(237,208,152,0.3)'
                    el.style.color = 'rgba(237,208,152,0.6)'
                    el.style.backgroundColor = 'transparent'
                  }}
                >
                  {s === 'Facebook' ? 'f' : s === 'Instagram' ? '◎' : '▶'}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-latin-display)',
                fontSize: 'var(--fs-h4)',
                fontWeight: 700,
                color: 'var(--color-gold)',
                marginBottom: 'var(--spacing-l)',
                paddingBottom: 'var(--spacing-s)',
                borderBottom: '1px solid rgba(237,208,152,0.2)',
              }}
            >
              {t('nav_title')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                      fontSize: 'var(--fs-sm)',
                      color: 'rgba(248,245,240,0.7)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 200ms',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-gold-warm)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(248,245,240,0.7)' }}
                  >
                    <span style={{ color: 'var(--color-gold)', fontSize: '8px' }}>✦</span>
                    {tNav(key as 'home' | 'about' | 'events' | 'gallery' | 'contact')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-latin-display)',
                fontSize: 'var(--fs-h4)',
                fontWeight: 700,
                color: 'var(--color-gold)',
                marginBottom: 'var(--spacing-l)',
                paddingBottom: 'var(--spacing-s)',
                borderBottom: '1px solid rgba(237,208,152,0.2)',
              }}
            >
              {t('contact_title')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '◎', text: t('address') },
                { icon: '✉', text: 'contact@deroua-arts.ma' },
                { icon: '☎', text: '+212 5XX XXX XXX' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                    fontSize: 'var(--fs-sm)',
                    color: 'rgba(248,245,240,0.65)',
                  }}
                >
                  <span style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }}>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(237,208,152,0.15)',
            paddingTop: 'var(--spacing-l)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--spacing-s)',
          }}
        >
          <span
            style={{
              fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
              fontSize: 'var(--fs-xs)',
              color: 'rgba(248,245,240,0.4)',
            }}
          >
            © {year} — {t('rights')} — جمعية الدروة للثقافة والفن
          </span>
        </div>
      </div>
    </footer>
  )
}
