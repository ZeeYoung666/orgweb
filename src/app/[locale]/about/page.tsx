'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }

export default function AboutPage() {
  const t = useTranslations()
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const values = [
    { key: 'value1', icon: '◆' },
    { key: 'value2', icon: '◈' },
    { key: 'value3', icon: '◇' },
    { key: 'value4', icon: '◉' },
  ]

  const milestones = ['milestone1', 'milestone2', 'milestone3', 'milestone4']

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-teal-900) 0%, var(--color-teal-800) 60%, var(--color-teal-700) 100%)',
        color: 'var(--color-text-inverse)',
        padding: 'calc(var(--spacing-4xl) + 80px) 0 var(--spacing-4xl)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(45deg,rgba(184,127,30,.4) 25%,transparent 25%),linear-gradient(-45deg,rgba(184,127,30,.4) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(184,127,30,.4) 75%),linear-gradient(-45deg,transparent 75%,rgba(184,127,30,.4) 75%)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0,0 12px,12px -12px,-12px 0',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} style={{ color: 'var(--color-gold)', fontSize: 'var(--fs-sm)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 'var(--spacing-m)', fontFamily: 'var(--font-mono)' }}>
              {t('about_page.mission_badge')}
            </motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display)', lineHeight: 1.1, marginBottom: 'var(--spacing-l)', maxWidth: '700px' }}>
              {t('about_page.hero_title')}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: 'var(--fs-body-lg)', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', lineHeight: 1.7 }}>
              {t('about_page.hero_subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: 'var(--color-surface-page)', padding: 'var(--spacing-4xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'var(--spacing-2xl)', alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} style={{ color: 'var(--color-gold)', fontSize: 'var(--fs-sm)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 'var(--spacing-m)', fontFamily: 'var(--font-mono)' }}>
                {t('about_page.mission_badge')}
              </motion.p>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-l)', lineHeight: 1.15 }}>
                {t('about_page.mission_title')}
              </motion.h2>
              <motion.div variants={fadeUp} style={{ width: '64px', height: '2px', background: 'linear-gradient(to right, var(--color-gold), transparent)', marginBottom: 'var(--spacing-l)', ...(isRTL ? { marginLeft: 'auto' } : {}) }} />
              <motion.p variants={fadeUp} style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85, fontSize: 'var(--fs-body-lg)' }}>
                {t('about_page.mission_body')}
              </motion.p>
            </motion.div>

            {/* Decorative panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'linear-gradient(135deg, var(--color-teal-900), var(--color-teal-800))',
                borderRadius: '4px',
                padding: 'var(--spacing-2xl)',
                color: 'var(--color-text-inverse)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 12, insetInlineStart: 12, width: 20, height: 20, borderTop: '1px solid var(--color-gold)', borderInlineStart: '1px solid var(--color-gold)' }} />
              <div style={{ position: 'absolute', bottom: 12, insetInlineEnd: 12, width: 20, height: 20, borderBottom: '1px solid var(--color-gold)', borderInlineEnd: '1px solid var(--color-gold)' }} />
              <p style={{ fontFamily: 'var(--font-arabic-display)', fontSize: 'clamp(24px,3.5vw,42px)', lineHeight: 1.6, textAlign: 'center', color: 'rgba(255,255,255,0.92)', marginBottom: 'var(--spacing-xl)' }}>
                الفن رسالة<br />
                <span style={{ color: 'var(--color-gold)' }}>والثقافة وطن</span>
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--spacing-m)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--spacing-l)', textAlign: 'center' }}>
                {[['60+', t('about.stat_events')], ['12', t('about.stat_years')], ['200+', t('about.stat_artists')]].map(([n, l]) => (
                  <div key={n}>
                    <div style={{ fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-mono)' }}>{n}</div>
                    <div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--color-surface-elevated)', padding: 'var(--spacing-4xl) 0' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <motion.p variants={fadeUp} style={{ color: 'var(--color-gold)', fontSize: 'var(--fs-sm)', letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: 'var(--spacing-m)' }}>
              {t('about_page.values_badge')}
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', color: 'var(--color-text-primary)' }}>
              {t('about_page.values_title')}
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 'var(--spacing-l)' }}>
            {values.map(({ key, icon }) => (
              <motion.div key={key} variants={fadeUp} className="card-ornate" style={{ padding: 'var(--spacing-xl)', background: 'var(--color-surface-page)' }}>
                <div style={{ fontSize: '28px', color: 'var(--color-gold)', marginBottom: 'var(--spacing-m)', fontFamily: 'var(--font-mono)' }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-s)' }}>
                  {t(`about_page.${key}_title`)}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--fs-sm)', lineHeight: 1.75 }}>
                  {t(`about_page.${key}_body`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: 'var(--color-surface-page)', padding: 'var(--spacing-4xl) 0' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <motion.p variants={fadeUp} style={{ color: 'var(--color-gold)', fontSize: 'var(--fs-sm)', letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: 'var(--spacing-m)' }}>
              {t('about_page.history_badge')}
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', color: 'var(--color-text-primary)' }}>
              {t('about_page.history_title')}
            </motion.h2>
          </motion.div>

          <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, [isRTL ? 'right' : 'left']: '28px', width: '1px', background: 'linear-gradient(to bottom, transparent, var(--color-gold-light), var(--color-gold), var(--color-gold-light), transparent)' }} />
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
              {milestones.map((m) => (
                <motion.div key={m} variants={fadeUp} style={{ display: 'flex', gap: 'var(--spacing-l)', alignItems: 'flex-start', paddingInlineStart: '60px', position: 'relative' }}>
                  <div style={{ position: 'absolute', [isRTL ? 'right' : 'left']: 0, top: '4px', width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-teal-900)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 'var(--fs-xs)', fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', fontWeight: 700 }}>
                      {t(`about_page.${m}_year`)}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-xs)' }}>
                      {t(`about_page.${m}_title`)}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--fs-sm)', lineHeight: 1.75 }}>
                      {t(`about_page.${m}_body`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-teal-900), var(--color-teal-800))', padding: 'var(--spacing-3xl) 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', color: 'var(--color-text-inverse)', marginBottom: 'var(--spacing-l)' }}>
              {locale === 'ar' ? 'انضم إلى مجتمعنا' : locale === 'fr' ? 'Rejoignez notre communauté' : 'Join Our Community'}
            </motion.h2>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 'var(--spacing-m)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={`/${locale}/events`} style={{ display: 'inline-block', padding: '14px 32px', background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))', color: 'var(--color-teal-900)', fontWeight: 700, textDecoration: 'none', borderRadius: '2px', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)' }}>
                {t('nav.events')}
              </Link>
              <Link href={`/${locale}/contact`} style={{ display: 'inline-block', padding: '14px 32px', border: '1px solid rgba(196,144,48,0.6)', color: 'var(--color-gold)', textDecoration: 'none', borderRadius: '2px', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)' }}>
                {t('nav.contact')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
