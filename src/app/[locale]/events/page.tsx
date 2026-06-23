'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

type FilterKey = 'all' | 'theater' | 'music' | 'visual'

const events = [
  { id: 'event1', filterKey: 'theater' as const, colorAccent: 'var(--color-teal-700)' },
  { id: 'event2', filterKey: 'music' as const, colorAccent: 'var(--color-gold-dark)' },
  { id: 'event3', filterKey: 'visual' as const, colorAccent: 'var(--color-teal-800)' },
]

export default function EventsPage() {
  const t = useTranslations()
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const [filter, setFilter] = useState<FilterKey>('all')

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t('events_page.filter_all') },
    { key: 'theater', label: t('events_page.filter_theater') },
    { key: 'music', label: t('events_page.filter_music') },
    { key: 'visual', label: t('events_page.filter_visual') },
  ]

  const filtered = filter === 'all' ? events : events.filter(e => e.filterKey === filter)

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-teal-900) 0%, var(--color-teal-800) 100%)',
        color: 'var(--color-text-inverse)',
        padding: 'calc(var(--spacing-4xl) + 80px) 0 var(--spacing-3xl)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(45deg,rgba(184,127,30,.4) 25%,transparent 25%),linear-gradient(-45deg,rgba(184,127,30,.4) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(184,127,30,.4) 75%),linear-gradient(-45deg,transparent 75%,rgba(184,127,30,.4) 75%)', backgroundSize: '24px 24px', backgroundPosition: '0 0,0 12px,12px -12px,-12px 0' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} style={{ color: 'var(--color-gold)', fontSize: 'var(--fs-sm)', letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: 'var(--spacing-m)' }}>
              {t('events.badge')}
            </motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display)', lineHeight: 1.1, marginBottom: 'var(--spacing-l)' }}>
              {t('events_page.hero_title')}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: 'var(--fs-body-lg)', color: 'rgba(255,255,255,0.75)', maxWidth: '520px', lineHeight: 1.7 }}>
              {t('events_page.hero_subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: 'var(--color-surface-elevated)', borderBottom: '1px solid var(--color-border-feather)', padding: 'var(--spacing-l) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 'var(--spacing-s)', flexWrap: 'wrap' }}>
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                style={{
                  padding: '8px 20px',
                  border: `1px solid ${filter === key ? 'var(--color-gold)' : 'var(--color-border-feather)'}`,
                  background: filter === key ? 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))' : 'transparent',
                  color: filter === key ? 'var(--color-teal-900)' : 'var(--color-text-secondary)',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: filter === key ? 700 : 400,
                  transition: 'all 200ms ease',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section style={{ background: 'var(--color-surface-page)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-xl)' }}>
            {t('events_page.upcoming_title')}
          </h2>

          {filtered.length === 0 ? (
            <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: 'var(--spacing-3xl) 0', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)' }}>
              {t('events_page.no_events')}
            </p>
          ) : (
            <motion.div
              key={filter}
              initial="hidden"
              animate="show"
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 'var(--spacing-l)' }}
            >
              {filtered.map(({ id, colorAccent }) => (
                <motion.div key={id} variants={fadeUp} className="card-ornate" style={{ background: 'var(--color-surface-elevated)', overflow: 'hidden' }}>
                  {/* Date bar */}
                  <div style={{ background: colorAccent, padding: 'var(--spacing-m) var(--spacing-l)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,0.85)', letterSpacing: '2px' }}>
                      {t(`events.${id}.date`)}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--color-gold)', letterSpacing: '1px' }}>
                      {t(`events.${id}.time`)}
                    </span>
                  </div>
                  <div style={{ padding: 'var(--spacing-l)' }}>
                    <span style={{ display: 'inline-block', padding: '3px 10px', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: 'var(--fs-xs)', fontFamily: 'var(--font-mono)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 'var(--spacing-m)' }}>
                      {t(`events.${id}.category`)}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-s)', lineHeight: 1.3 }}>
                      {t(`events.${id}.title`)}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--fs-sm)', lineHeight: 1.7, marginBottom: 'var(--spacing-l)' }}>
                      {t(`events.${id}.description`)}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--spacing-m)', borderTop: '1px solid var(--color-border-feather)' }}>
                      <div>
                        <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '3px' }}>{t('events.location_label')}</div>
                        <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-text-secondary)' }}>{t(`events.${id}.location`)}</div>
                      </div>
                      <button style={{ padding: '10px 20px', background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))', color: 'var(--color-teal-900)', border: 'none', borderRadius: '2px', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', fontWeight: 700, cursor: 'pointer', letterSpacing: '1px' }}>
                        {t('events.register')}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
