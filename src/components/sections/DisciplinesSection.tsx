'use client'

import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

const DISCIPLINES = {
  ar: {
    badge: 'مجالاتنا',
    title: 'خمسة فنون، رسالة واحدة',
    items: [
      { n: 'I', name: 'الأدب', desc: 'أمسياتٌ شعرية ولقاءاتٌ أدبية تحتفي بالكلمة.' },
      { n: 'II', name: 'المسرح', desc: 'عروضٌ مسرحية وورشاتٌ في فنّ الأداء والإخراج.' },
      { n: 'III', name: 'الفنون التشكيلية', desc: 'معارضُ في الرسم والنحت والخط العربي.' },
      { n: 'IV', name: 'الموسيقى', desc: 'حفلاتٌ وأمسياتٌ تجمع الأصالة والمعاصرة.' },
      { n: 'V', name: 'التراث', desc: 'صونُ الذاكرة وإحياءُ الموروث الثقافي المحلي.' },
    ],
  },
  en: {
    badge: 'Our Fields',
    title: 'Five Arts, One Mission',
    items: [
      { n: 'I', name: 'Literature', desc: 'Poetry evenings and literary gatherings that honor the word.' },
      { n: 'II', name: 'Theater', desc: 'Stage performances and workshops in acting and directing.' },
      { n: 'III', name: 'Visual Arts', desc: 'Exhibitions in painting, sculpture, and calligraphy.' },
      { n: 'IV', name: 'Music', desc: 'Concerts blending heritage with the contemporary.' },
      { n: 'V', name: 'Heritage', desc: 'Preserving memory and reviving our local cultural legacy.' },
    ],
  },
  fr: {
    badge: 'Nos domaines',
    title: 'Cinq arts, une mission',
    items: [
      { n: 'I', name: 'Littérature', desc: 'Soirées poétiques et rencontres littéraires qui honorent la parole.' },
      { n: 'II', name: 'Théâtre', desc: 'Spectacles et ateliers dans l\'art du jeu et de la mise en scène.' },
      { n: 'III', name: 'Arts visuels', desc: 'Expositions de peinture, sculpture et calligraphie.' },
      { n: 'IV', name: 'Musique', desc: 'Concerts mêlant patrimoine et sonorités contemporaines.' },
      { n: 'V', name: 'Patrimoine', desc: 'Préserver la mémoire et raviver notre héritage culturel local.' },
    ],
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export default function DisciplinesSection() {
  const locale = useLocale() as 'ar' | 'en' | 'fr'
  const isRTL = locale === 'ar'
  const data = DISCIPLINES[locale] ?? DISCIPLINES.ar

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        position: 'relative',
        paddingBlock: 'clamp(72px, 9vw, 124px)',
        paddingInline: 'clamp(20px, 5vw, 48px)',
        background: 'linear-gradient(180deg, var(--color-teal-900), var(--color-teal-800))',
        color: 'var(--color-text-inverse)',
        overflow: 'hidden',
      }}
    >
      {/* Lattice overlay */}
      <div
        aria-hidden
        className="bg-pattern-lattice"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 14,
            marginBlockEnd: 54,
          }}
        >
          <motion.span
            variants={fadeUp}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              color: 'var(--color-gold-warm)',
              fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            <span style={{ width: 24, height: 1, background: 'var(--color-gold)', display: 'inline-block' }} />
            {data.badge}
            <span style={{ width: 24, height: 1, background: 'var(--color-gold)', display: 'inline-block' }} />
          </motion.span>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-latin-display)',
              fontSize: 'var(--fs-h2)',
              fontWeight: 700,
              color: 'var(--color-parchment-light)',
              lineHeight: isRTL ? 1.5 : 'var(--lh-heading)',
              margin: 0,
            }}
          >
            {data.title}
          </motion.h2>
        </motion.div>

        {/* 5-column grid — gold gap lines create separator effect */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(178px, 1fr))',
            gap: 1,
            background: 'rgba(184,127,30,.24)',
            border: '1px solid rgba(184,127,30,.24)',
          }}
        >
          {data.items.map(({ n, name, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              style={{
                background: 'var(--color-teal-800)',
                padding: '36px 26px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                transition: 'background .35s',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'var(--color-teal-700)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'var(--color-teal-800)'
              }}
            >
              {/* Roman numeral */}
              <span
                style={{
                  fontFamily: 'var(--font-latin-display)',
                  fontSize: 26,
                  fontWeight: 700,
                  color: 'var(--color-gold-warm)',
                  lineHeight: 1,
                }}
              >
                {n}
              </span>

              {/* Gold rule */}
              <span
                style={{
                  width: 30,
                  height: 1,
                  background: 'var(--color-gold)',
                  display: 'block',
                }}
              />

              <h3
                style={{
                  fontFamily: isRTL ? 'var(--font-arabic-display)' : 'var(--font-latin-display)',
                  fontSize: 'var(--fs-h4)',
                  fontWeight: 600,
                  color: 'var(--color-parchment-light)',
                  margin: 0,
                  lineHeight: isRTL ? 1.5 : 1.3,
                }}
              >
                {name}
              </h3>

              <p
                style={{
                  fontFamily: isRTL ? 'var(--font-arabic-body)' : 'var(--font-latin-body)',
                  color: 'rgba(248,245,240,.66)',
                  fontSize: 14,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
