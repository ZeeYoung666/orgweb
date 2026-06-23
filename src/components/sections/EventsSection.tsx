'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'

const EVENT_KEYS = ['event1', 'event2', 'event3'] as const
const EVENT_ICONS = ['🎭', '🎵', '🖼']

export default function EventsSection() {
  const t = useTranslations('events')
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const dir = isRTL ? 'rtl' : 'ltr'

  return (
    <section
      dir={dir}
      style={{
        paddingBlock: 'var(--spacing-4xl)',
        backgroundColor: 'var(--color-parchment-deep)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle paper texture on parchment */}
      <div
        aria-hidden
        className="bg-pattern-lines"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: 'var(--fs-xs)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              marginBottom: 'var(--spacing-m)',
            }}
          >
            <span style={{ display: 'inline-block', width: 24, height: 1, backgroundColor: 'var(--color-gold)' }} />
            {t('badge')}
            <span style={{ display: 'inline-block', width: 24, height: 1, backgroundColor: 'var(--color-gold)' }} />
          </span>

          <h2
            style={{
              fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-latin-display)',
              fontSize: 'var(--fs-h2)',
              fontWeight: 700,
              color: 'var(--color-teal-dark)',
              lineHeight: isRTL ? 1.5 : 'var(--lh-heading)',
              letterSpacing: isRTL ? 0 : 'var(--ls-display)',
              margin: '0 0 var(--spacing-m)',
            }}
          >
            {t('title')}
          </h2>

          <p
            style={{
              fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
              fontSize: 'var(--fs-body)',
              color: 'var(--color-text-tertiary)',
              lineHeight: isRTL ? 'var(--lh-body-arabic)' : 'var(--lh-body)',
              maxWidth: 560,
              margin: '0 auto',
            }}
          >
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Events grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-l)',
            marginBottom: 'var(--spacing-2xl)',
          }}
        >
          {EVENT_KEYS.map((key, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                backgroundColor: 'var(--color-surface-card)',
                border: '1px solid var(--color-border-feather)',
                borderRadius: '3px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(9,22,32,0.25)',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 8px 32px rgba(9,22,32,0.35)'
                el.style.borderColor = 'var(--color-gold-light)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 2px 12px rgba(9,22,32,0.25)'
                el.style.borderColor = 'var(--color-border-feather)'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Date bar */}
              <div
                style={{
                  backgroundColor: 'var(--color-teal-900)',
                  padding: '10px var(--spacing-l)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(184,127,30,0.2)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--fs-xs)',
                    color: 'var(--color-gold-warm)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {t(`${key}.date` as `event1.date` | `event2.date` | `event3.date`)}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--fs-xs)',
                    color: 'rgba(206,154,64,0.7)',
                  }}
                >
                  {t(`${key}.time` as `event1.time` | `event2.time` | `event3.time`)}
                </span>
              </div>

              <div
                style={{
                  padding: 'var(--spacing-l)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-s)',
                }}
              >
                {/* Category */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>{EVENT_ICONS[i]}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--fs-xs)',
                      fontWeight: 700,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                    }}
                  >
                    {t(`${key}.category` as `event1.category` | `event2.category` | `event3.category`)}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-latin-display)',
                    fontSize: 'var(--fs-h4)',
                    fontWeight: 700,
                    color: 'var(--color-teal-dark)',
                    lineHeight: isRTL ? 1.6 : 1.3,
                    margin: 0,
                  }}
                >
                  {t(`${key}.title` as `event1.title` | `event2.title` | `event3.title`)}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                    fontSize: 'var(--fs-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: isRTL ? 'var(--lh-body-arabic)' : 'var(--lh-body)',
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {t(`${key}.description` as `event1.description` | `event2.description` | `event3.description`)}
                </p>

                {/* Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                    fontSize: 'var(--fs-xs)',
                    color: 'var(--color-text-tertiary)',
                    paddingTop: 'var(--spacing-xs)',
                    borderTop: '1px solid var(--color-border-feather)',
                  }}
                >
                  <span>◎</span>
                  <span>{t(`${key}.location` as `event1.location` | `event2.location` | `event3.location`)}</span>
                </div>

                {/* CTA */}
                <Link
                  href={`/${locale}/events`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: 'var(--spacing-xs)',
                    fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                    fontSize: 'var(--fs-sm)',
                    fontWeight: 700,
                    color: 'var(--color-teal-dark)',
                    textDecoration: 'none',
                    borderBottom: '1.5px solid var(--color-gold-light)',
                    paddingBottom: '2px',
                    width: 'fit-content',
                    transition: 'all 200ms',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'var(--color-gold)'
                    el.style.borderBottomColor = 'var(--color-gold)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'var(--color-teal-dark)'
                    el.style.borderBottomColor = 'var(--color-gold-light)'
                  }}
                >
                  {t('register')}
                  <span>{isRTL ? '←' : '›'}</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center' }}
        >
          <Link
            href={`/${locale}/events`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 28px',
              border: '1.5px solid var(--color-gold)',
              borderRadius: '3px',
              color: 'var(--color-gold)',
              fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
              fontSize: 'var(--fs-body)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 250ms ease-out',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'var(--color-gold)'
              el.style.color = 'var(--color-charcoal)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'transparent'
              el.style.color = 'var(--color-gold)'
            }}
          >
            {t('cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
