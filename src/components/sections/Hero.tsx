'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay },
})

export default function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const dir = isRTL ? 'rtl' : 'ltr'

  return (
    <section
      dir={dir}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--color-teal-900)',
      }}
    >
      {/* Background layered atmosphere */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 30% 40%, rgba(18, 68, 85, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 70% 60%, rgba(184,127,30,0.07) 0%, transparent 50%),
            linear-gradient(180deg, var(--color-teal-900) 0%, var(--color-teal-800) 60%, var(--color-teal-900) 100%)
          `,
        }}
      />

      {/* Diamond lattice pattern overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(45deg, rgba(184,127,30,0.04) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(184,127,30,0.04) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(184,127,30,0.04) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(184,127,30,0.04) 75%)
          `,
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 0 16px, 16px -16px, -16px 0',
        }}
      />

      {/* Decorative large Arabic letter (watermark) */}
      <motion.div
        aria-hidden
        {...fadeIn(0.2)}
        style={{
          position: 'absolute',
          insetInlineEnd: isRTL ? 'auto' : '-2%',
          insetInlineStart: isRTL ? '-2%' : 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-arabic-display)',
          fontSize: 'clamp(200px, 30vw, 420px)',
          color: 'rgba(184,127,30,0.04)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          direction: 'rtl',
        }}
      >
        ف
      </motion.div>

      {/* Decorative ornamental circles */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '15%',
          insetInlineStart: '8%',
          width: 280,
          height: 280,
          borderRadius: '50%',
          border: '1px solid rgba(184,127,30,0.1)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '10%',
          insetInlineEnd: '5%',
          width: 180,
          height: 180,
          borderRadius: '50%',
          border: '1px solid rgba(184,127,30,0.08)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          paddingBlock: '140px 100px',
        }}
      >
        {/* Pre-title badge */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 'var(--spacing-l)' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(184,127,30,0.12)',
              border: '1px solid rgba(184,127,30,0.35)',
              borderRadius: '2px',
              padding: '6px 16px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              color: 'var(--color-gold-warm)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: 'var(--color-gold)', fontSize: '8px' }}>✦</span>
            {isRTL ? 'جمعية الدروة للثقافة والفن' : 'Deroua Association for Culture and Arts'}
            <span style={{ color: 'var(--color-gold)', fontSize: '8px' }}>✦</span>
          </span>
        </motion.div>

        {/* Main slogan — Arabic always displayed prominently */}
        <motion.div {...fadeUp(0.2)}>
          <h1
            dir="rtl"
            style={{
              fontFamily: 'var(--font-arabic-display)',
              fontSize: 'clamp(56px, 9vw, 120px)',
              fontWeight: 700,
              color: 'transparent',
              background: 'linear-gradient(135deg, var(--color-gold-warm) 0%, var(--color-gold) 45%, var(--color-gold-dark) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.15,
              letterSpacing: 0,
              margin: '0 0 var(--spacing-s)',
              textAlign: 'center',
            }}
          >
            من أجل الفن
          </h1>
        </motion.div>

        {/* Latin subtitle of slogan (only when not Arabic locale) */}
        {!isRTL && (
          <motion.div {...fadeUp(0.3)}>
            <p
              style={{
                fontFamily: 'var(--font-latin-display)',
                fontSize: 'clamp(18px, 2.5vw, 28px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'rgba(248,245,240,0.45)',
                marginBottom: 'var(--spacing-m)',
                letterSpacing: '0.04em',
              }}
            >
              {t('slogan')}
            </p>
          </motion.div>
        )}

        {/* Gold ornamental divider */}
        <motion.div
          {...fadeIn(0.4)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-m)',
            marginBlock: 'var(--spacing-l)',
          }}
        >
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--color-gold))' }} />
          <span style={{ color: 'var(--color-gold)', fontSize: '10px' }}>❖</span>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, var(--color-gold))' }} />
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          style={{
            fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
            fontSize: isRTL ? '19px' : 'var(--fs-body-lg)',
            color: 'rgba(248,245,240,0.72)',
            lineHeight: isRTL ? 'var(--lh-body-arabic)' : 'var(--lh-body)',
            maxWidth: 620,
            margin: '0 auto var(--spacing-2xl)',
            textAlign: 'center',
          }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.55)}
          style={{
            display: 'flex',
            gap: 'var(--spacing-m)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href={`/${locale}/events`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 28px',
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-charcoal)',
              fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              borderRadius: '3px',
              border: '2px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(184,127,30,0.35)',
              transition: 'all 250ms ease-out',
              letterSpacing: isRTL ? 0 : '0.01em',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'var(--color-gold-warm)'
              el.style.boxShadow = '0 6px 28px rgba(184,127,30,0.5)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'var(--color-gold)'
              el.style.boxShadow = '0 4px 20px rgba(184,127,30,0.35)'
              el.style.transform = 'translateY(0)'
            }}
          >
            {t('cta_primary')}
          </Link>

          <Link
            href={`/${locale}/about`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 28px',
              backgroundColor: 'transparent',
              color: 'var(--color-parchment)',
              fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '3px',
              border: '1.5px solid rgba(237,208,152,0.4)',
              transition: 'all 250ms ease-out',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--color-gold)'
              el.style.color = 'var(--color-gold-warm)'
              el.style.backgroundColor = 'rgba(184,127,30,0.08)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(237,208,152,0.4)'
              el.style.color = 'var(--color-parchment)'
              el.style.backgroundColor = 'transparent'
            }}
          >
            {t('cta_secondary')}
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeIn(1.0)}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(237,208,152,0.4)',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.08em',
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ fontSize: '20px', lineHeight: 1 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
