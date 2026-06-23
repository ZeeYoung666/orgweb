'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const GALLERY_ITEMS = [
  { ratio: '4/3', src: '/images/480522620_614114874702790_4849818928140893417_n_1.jpg', label: 'فعاليات' },
  { ratio: '3/4', src: '/images/480414690_612132494901028_4452429650646992873_n.jpg', label: 'تراث' },
  { ratio: '4/3', src: '/images/480341714_612132564901021_2736935456167332640_n.jpg', label: 'إبداع' },
  { ratio: '3/4', src: '/images/481661064_625543653559912_3269956735039664821_n.jpg', label: 'فنون' },
  { ratio: '4/3', src: '/images/481466558_625543486893262_2770622318849802429_n.jpg', label: 'ثقافة' },
  { ratio: '4/3', src: '/images/482066144_628713593242918_2487113990270473868_n.jpg', label: 'مسرح' },
]

function GalleryCard({
  item,
  delay,
}: {
  item: typeof GALLERY_ITEMS[0]
  delay: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        aspectRatio: item.ratio,
        backgroundColor: '#0A2D38',
        borderRadius: '3px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        border: '1px solid rgba(184,127,30,0.15)',
      }}
    >
      {/* Real photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.label}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 500ms ease-out',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />

      {/* Hover overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(6,22,34,0.85) 0%, rgba(6,22,34,0.1) 50%, transparent 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'var(--spacing-m)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 300ms ease-out',
        }}
      >
        <span
          dir="rtl"
          style={{
            fontFamily: 'var(--font-arabic-display)',
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--color-gold)',
          }}
        >
          {item.label}
        </span>
      </div>
    </motion.div>
  )
}

export default function GalleryTeaser() {
  const t = useTranslations('gallery')
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
      <div className="container">
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
              color: 'var(--color-text-secondary)',
              lineHeight: isRTL ? 'var(--lh-body-arabic)' : 'var(--lh-body)',
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gap: 'var(--spacing-s)',
            marginBottom: 'var(--spacing-2xl)',
          }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                gridRow: item.ratio === '3/4' ? 'span 2' : 'span 1',
              }}
            >
              <GalleryCard item={item} delay={i * 0.08} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <Link
            href={`/${locale}/gallery`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 28px',
              backgroundColor: 'var(--color-teal-dark)',
              border: '2px solid var(--color-teal-dark)',
              borderRadius: '3px',
              color: 'var(--color-parchment)',
              fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
              fontSize: 'var(--fs-body)',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: 'var(--shadow-md)',
              transition: 'all 250ms ease-out',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'var(--color-gold)'
              el.style.borderColor = 'var(--color-gold)'
              el.style.color = 'var(--color-charcoal)'
              el.style.boxShadow = '0 4px 20px rgba(184,127,30,0.3)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'var(--color-teal-dark)'
              el.style.borderColor = 'var(--color-teal-dark)'
              el.style.color = 'var(--color-parchment)'
              el.style.boxShadow = 'var(--shadow-md)'
            }}
          >
            {t('cta')}
          </Link>
        </motion.div>
      </div>

      {/* Mobile gallery grid fix */}
      <style>{`
        @media (max-width: 640px) {
          [data-gallery-grid] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
