'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'

const heroStyles = `
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }
  @keyframes scrollPulse {
    0% { opacity: .3; transform: translateY(0); }
    50% { opacity: 1; }
    100% { opacity: .3; transform: translateY(7px); }
  }
  .hero-logo-float {
    animation: floatSlow 6.5s ease-in-out infinite 1s;
    filter: drop-shadow(0 14px 40px rgba(0,0,0,.55));
  }
  .hero-scroll-arrow { animation: scrollPulse 1.9s ease-in-out infinite; }
`

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9 } },
}

export default function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingBlock: '130px 70px',
        paddingInline: 'clamp(20px, 5vw, 48px)',
        background: 'linear-gradient(165deg, var(--color-teal-900) 0%, var(--color-teal-800) 52%, var(--color-teal-700) 100%)',
        color: 'var(--color-text-inverse)',
        textAlign: 'center',
      }}
    >
      <style>{heroStyles}</style>

      {/* Diamond lattice overlay */}
      <div
        aria-hidden
        className="bg-pattern-lattice"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      {/* Radial gold glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          width: 'min(840px, 92vw)',
          height: 'min(840px, 92vw)',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(184,127,30,.18) 0%, rgba(184,127,30,.05) 38%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        style={{
          position: 'relative',
          maxWidth: 920,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Floating logo */}
        <motion.div variants={fadeUp}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpeg"
            alt="Deroua"
            className="hero-logo-float"
            style={{
              width: 'clamp(100px, 13vw, 148px)',
              height: 'auto',
              display: 'block',
              marginBottom: 'var(--spacing-l)',
            }}
          />
        </motion.div>

        {/* Eyebrow with flanking lines */}
        <motion.span
          variants={fadeUp}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            color: 'var(--color-gold-300)',
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            letterSpacing: '0.16em',
            marginBottom: 'var(--spacing-m)',
          }}
        >
          <span
            style={{
              width: 28,
              height: 1,
              background: 'var(--color-gold)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          {t('tagline')}
          <span
            style={{
              width: 28,
              height: 1,
              background: 'var(--color-gold)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
        </motion.span>

        {/* Main Arabic slogan — always RTL, gradient gold */}
        <motion.h1
          variants={fadeUp}
          dir="rtl"
          className="text-gradient-gold"
          style={{
            fontFamily: 'var(--font-arabic-display)',
            fontSize: 'clamp(64px, 11vw, 150px)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 0,
            marginBlock: '14px 0',
          }}
        >
          من أجل الفن
        </motion.h1>

        {/* Gold diamond divider */}
        <motion.div
          variants={fadeIn}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: 'var(--color-gold)',
            marginBlockStart: 24,
          }}
        >
          <span
            style={{
              width: 56,
              height: 1,
              background: 'linear-gradient(to right, transparent, var(--color-gold))',
              display: 'inline-block',
            }}
          />
          <span>❖</span>
          <span
            style={{
              width: 56,
              height: 1,
              background: 'linear-gradient(to left, transparent, var(--color-gold))',
              display: 'inline-block',
            }}
          />
        </motion.div>

        {/* Lead paragraph */}
        <motion.p
          variants={fadeUp}
          style={{
            maxWidth: 640,
            marginBlockStart: 24,
            fontSize: 'clamp(17px, 2vw, 21px)',
            lineHeight: isRTL ? 'var(--lh-body-arabic)' : 1.8,
            color: 'rgba(248,245,240,.84)',
            fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
          }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBlockStart: 38,
          }}
        >
          <Link
            href={`/${locale}/events`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 52,
              padding: '0 30px',
              borderRadius: 4,
              background: 'var(--color-gold)',
              color: 'var(--color-teal-900)',
              fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
              fontWeight: 700,
              fontSize: 18,
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(0,0,0,.28)',
              transition: 'all .25s cubic-bezier(.25,.46,.45,.94)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--color-gold-warm)'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 12px 30px rgba(0,0,0,.34)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--color-gold)'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 6px 20px rgba(0,0,0,.28)'
            }}
          >
            {t('cta_primary')}
          </Link>

          <Link
            href={`/${locale}/contact`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 52,
              padding: '0 30px',
              borderRadius: 4,
              background: 'transparent',
              border: '1.5px solid var(--color-gold)',
              color: 'var(--color-parchment)',
              fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
              fontWeight: 600,
              fontSize: 18,
              textDecoration: 'none',
              transition: 'all .25s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(184,127,30,.16)'
              el.style.borderColor = 'var(--color-gold-warm)'
              el.style.color = 'var(--color-gold-100)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.borderColor = 'var(--color-gold)'
              el.style.color = 'var(--color-parchment)'
            }}
          >
            {t('cta_secondary')}
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          style={{
            marginBlockStart: 56,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 9,
            color: 'var(--color-gold-300)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            {t('scroll')}
          </span>
          <span className="hero-scroll-arrow" style={{ fontSize: 16 }}>↓</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
