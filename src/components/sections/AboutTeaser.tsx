'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'

const STATS = [
  { key: 'stat_events', value: '+60' },
  { key: 'stat_years', value: '12' },
  { key: 'stat_artists', value: '+200' },
]

export default function AboutTeaser() {
  const t = useTranslations('about')
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const dir = isRTL ? 'rtl' : 'ltr'

  return (
    <section
      dir={dir}
      style={{
        paddingBlock: 'var(--spacing-4xl)',
        backgroundColor: 'var(--color-surface-page)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background paper texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent, transparent 20px,
            rgba(184,127,30,0.018) 20px, rgba(184,127,30,0.018) 21px
          )`,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-4xl)',
            alignItems: 'center',
          }}
        >
          {/* Left: decorative panel */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-l)' }}
          >
            {/* Ornate decorative frame */}
            <div
              style={{
                position: 'relative',
                padding: 'var(--spacing-2xl)',
                backgroundColor: 'var(--color-teal-dark)',
                borderRadius: '3px',
                border: '1px solid var(--color-gold)',
                overflow: 'hidden',
              }}
            >
              {/* Corner marks */}
              {[
                { top: 8, left: 8, borderTop: true, borderLeft: true },
                { top: 8, right: 8, borderTop: true, borderRight: true },
                { bottom: 8, left: 8, borderBottom: true, borderLeft: true },
                { bottom: 8, right: 8, borderBottom: true, borderRight: true },
              ].map((corner, i) => (
                <div
                  key={i}
                  aria-hidden
                  style={{
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    ...(corner.top !== undefined ? { top: corner.top } : {}),
                    ...(corner.bottom !== undefined ? { bottom: corner.bottom } : {}),
                    ...(corner.left !== undefined ? { left: corner.left } : {}),
                    ...(corner.right !== undefined ? { right: corner.right } : {}),
                    borderTop: corner.borderTop ? '1.5px solid var(--color-gold)' : undefined,
                    borderBottom: corner.borderBottom ? '1.5px solid var(--color-gold)' : undefined,
                    borderLeft: corner.borderLeft ? '1.5px solid var(--color-gold)' : undefined,
                    borderRight: corner.borderRight ? '1.5px solid var(--color-gold)' : undefined,
                  }}
                />
              ))}

              <p
                dir="rtl"
                style={{
                  fontFamily: 'var(--font-arabic-display)',
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  lineHeight: 1.6,
                  textAlign: 'center',
                  margin: 0,
                  letterSpacing: 0,
                }}
              >
                الفن رسالة<br />والثقافة وطن
              </p>

              {/* Gold divider */}
              <div
                style={{
                  width: 64,
                  height: 1.5,
                  background: 'linear-gradient(to right, transparent, var(--color-gold), transparent)',
                  margin: 'var(--spacing-l) auto 0',
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-latin-body)',
                  fontStyle: 'italic',
                  fontSize: 'var(--fs-sm)',
                  color: 'rgba(248,245,240,0.5)',
                  textAlign: 'center',
                  marginTop: 'var(--spacing-m)',
                  marginBottom: 0,
                  letterSpacing: '0.03em',
                }}
              >
                Art is a message, culture is a homeland
              </p>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                backgroundColor: 'var(--color-border-feather)',
                borderRadius: '3px',
                overflow: 'hidden',
                border: '1px solid var(--color-border-feather)',
              }}
            >
              {STATS.map(({ key, value }) => (
                <div
                  key={key}
                  style={{
                    backgroundColor: 'var(--color-surface-card)',
                    padding: 'var(--spacing-l) var(--spacing-m)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-latin-display)',
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      fontWeight: 700,
                      color: 'var(--color-teal-dark)',
                      lineHeight: 1,
                      marginBottom: 'var(--spacing-xs)',
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                      fontSize: 'var(--fs-xs)',
                      color: 'var(--color-text-tertiary)',
                      lineHeight: 1.4,
                    }}
                  >
                    {t(key as 'stat_events' | 'stat_years' | 'stat_artists')}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-l)' }}
          >
            {/* Badge */}
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: 'var(--fs-xs)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 32,
                    height: 1.5,
                    backgroundColor: 'var(--color-gold)',
                  }}
                />
                {t('badge')}
              </span>
            </div>

            <h2
              style={{
                fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-latin-display)',
                fontSize: 'var(--fs-h2)',
                fontWeight: 700,
                color: 'var(--color-teal-dark)',
                lineHeight: isRTL ? 1.5 : 'var(--lh-heading)',
                letterSpacing: isRTL ? 0 : 'var(--ls-heading)',
                margin: 0,
              }}
            >
              {t('title')}
            </h2>

            {/* Gold accent underline */}
            <div
              style={{
                width: 64,
                height: 2,
                borderRadius: 1,
                background: 'linear-gradient(to right, var(--color-gold), transparent)',
                ...(isRTL ? {
                  background: 'linear-gradient(to left, var(--color-gold), transparent)',
                  marginInlineStart: 'auto',
                  marginInlineEnd: 0,
                } : {}),
              }}
            />

            <p
              style={{
                fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                fontSize: 'var(--fs-body-lg)',
                color: 'var(--color-text-secondary)',
                lineHeight: isRTL ? 'var(--lh-body-arabic)' : 'var(--lh-body)',
                margin: 0,
              }}
            >
              {t('body')}
            </p>

            <Link
              href={`/${locale}/about`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                fontSize: 'var(--fs-body)',
                fontWeight: 700,
                color: 'var(--color-teal-dark)',
                textDecoration: 'none',
                paddingBottom: '3px',
                borderBottom: '2px solid var(--color-gold)',
                width: 'fit-content',
                transition: 'all 200ms ease-out',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--color-gold)'
                el.style.gap = '14px'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--color-teal-dark)'
                el.style.gap = '10px'
              }}
            >
              {t('cta')}
              <span style={{ fontSize: '18px' }}>{isRTL ? '←' : '→'}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
