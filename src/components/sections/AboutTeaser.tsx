'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'

const STATS = [
  { value: '15+', key: 'stat_years' },
  { value: '200+', key: 'stat_artists' },
  { value: '50+', key: 'stat_events' },
  { value: '5', key: 'stat_disciplines' },
] as const

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function AboutTeaser() {
  const t = useTranslations('about')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        position: 'relative',
        paddingBlock: 'clamp(72px, 9vw, 124px)',
        background: 'var(--color-parchment)',
      }}
    >
      {/* Subtle diagonal texture */}
      <div
        aria-hidden
        className="bg-pattern-lines"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 5vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Text column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {/* Badge with leading line */}
            <motion.span
              variants={fadeUp}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                color: 'var(--color-text-gold)',
                fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 1,
                  background: 'var(--color-gold)',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              {t('badge')}
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="heading-accent"
              style={{
                fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-latin-display)',
                fontSize: 'var(--fs-h2)',
                fontWeight: 700,
                color: 'var(--color-teal-dark)',
                lineHeight: isRTL ? 1.5 : 'var(--lh-heading)',
                maxWidth: '18ch',
                margin: 0,
              }}
            >
              {t('title')}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                fontSize: 'var(--fs-body-lg)',
                color: 'var(--color-text-secondary)',
                lineHeight: isRTL ? 'var(--lh-body-arabic)' : 1.85,
                margin: 0,
              }}
            >
              {t('body')}
            </motion.p>

            {/* 4-stat row */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: 22,
                marginBlockStart: 14,
                borderBlockStart: '1px solid var(--color-border-feather)',
                paddingBlockStart: 28,
              }}
            >
              {STATS.map(({ value, key }) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-latin-display)',
                      fontSize: 'clamp(26px, 2.5vw, 36px)',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </span>
                  <span
                    style={{
                      fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                      fontSize: 13,
                      color: 'var(--color-text-tertiary)',
                      lineHeight: 1.4,
                    }}
                  >
                    {t(key)}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginBlockStart: 10 }}>
              <Link
                href={`/${locale}/about`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'none',
                  fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'var(--color-teal-dark)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-gold)',
                  paddingBottom: 4,
                  transition: 'color .2s, gap .25s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'var(--color-gold)'
                  el.style.gap = '14px'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'var(--color-teal-dark)'
                  el.style.gap = '8px'
                }}
              >
                {t('cta')} {isRTL ? '←' : '→'}
              </Link>
            </motion.div>
          </motion.div>

          {/* Image column with corner marks + EST badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            <div className="corner-marks" style={{ padding: 14 }}>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  border: '1px solid var(--color-border-subtle)',
                  boxShadow: '0 16px 44px rgba(26,26,26,.18)',
                  overflow: 'hidden',
                  background: 'var(--color-teal-200)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/480341714_612132564901021_2736935456167332640_n.jpg"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* EST. year badge */}
            <div
              style={{
                position: 'absolute',
                bottom: -16,
                insetInlineStart: -14,
                background: 'var(--color-teal-dark)',
                color: 'var(--color-gold-warm)',
                padding: '16px 22px',
                border: '1px solid var(--color-gold)',
                boxShadow: '0 12px 30px rgba(26,26,26,.24)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-latin-display)',
                  fontSize: 32,
                  fontWeight: 700,
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                2013
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                EST.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
