'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

export default function ContactPage() {
  const t = useTranslations()
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: 'var(--color-surface-elevated)',
    border: '1px solid var(--color-border-feather)',
    borderRadius: '2px',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body)',
    outline: 'none',
    transition: 'border-color 200ms ease',
    direction: isRTL ? 'rtl' : 'ltr',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 'var(--fs-sm)',
    color: 'var(--color-text-secondary)',
    marginBottom: 'var(--spacing-xs)',
    fontFamily: 'var(--font-mono)',
    letterSpacing: '1px',
  }

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
              {t('nav.contact')}
            </motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display)', lineHeight: 1.1, marginBottom: 'var(--spacing-l)' }}>
              {t('contact_page.hero_title')}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: 'var(--fs-body-lg)', color: 'rgba(255,255,255,0.75)', maxWidth: '520px', lineHeight: 1.7 }}>
              {t('contact_page.hero_subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--color-surface-page)', padding: 'var(--spacing-4xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'var(--spacing-3xl)', alignItems: 'start' }}>

            {/* Form */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-xl)' }}>
                {t('contact_page.form_title')}
              </motion.h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: 'var(--spacing-2xl)', border: '1px solid var(--color-gold)', borderRadius: '2px', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '40px', marginBottom: 'var(--spacing-m)' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-s)' }}>
                    {t('contact_page.success_title')}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {t('contact_page.success_body')}
                  </p>
                </motion.div>
              ) : (
                <motion.form variants={stagger} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-l)' }}>
                  <motion.div variants={fadeUp}>
                    <label style={labelStyle}>{t('contact_page.name_label')}</label>
                    <input
                      required
                      type="text"
                      placeholder={t('contact_page.name_placeholder')}
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      style={inputStyle}
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label style={labelStyle}>{t('contact_page.email_label')}</label>
                    <input
                      required
                      type="email"
                      placeholder={t('contact_page.email_placeholder')}
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      style={inputStyle}
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label style={labelStyle}>{t('contact_page.subject_label')}</label>
                    <input
                      required
                      type="text"
                      placeholder={t('contact_page.subject_placeholder')}
                      value={form.subject}
                      onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                      style={inputStyle}
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label style={labelStyle}>{t('contact_page.message_label')}</label>
                    <textarea
                      required
                      rows={6}
                      placeholder={t('contact_page.message_placeholder')}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <button
                      type="submit"
                      style={{
                        padding: '14px 40px',
                        background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
                        color: 'var(--color-teal-900)',
                        border: 'none',
                        borderRadius: '2px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--fs-sm)',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'opacity 200ms ease',
                        width: '100%',
                      }}
                      onMouseOver={e => (e.currentTarget.style.opacity = '0.9')}
                      onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {t('contact_page.submit')}
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-xl)' }}>
                {t('contact_page.info_title')}
              </motion.h2>

              <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-l)' }}>
                {[
                  { labelKey: 'address_label', valueKey: 'address_value', icon: '◎' },
                  { labelKey: 'phone_label', valueKey: 'phone_value', icon: '◷' },
                  { labelKey: 'hours_label', valueKey: 'hours_value', icon: '◈' },
                ].map(({ labelKey, valueKey, icon }) => (
                  <motion.div key={labelKey} variants={fadeUp} className="card-ornate" style={{ padding: 'var(--spacing-l)', display: 'flex', gap: 'var(--spacing-m)', alignItems: 'flex-start', background: 'var(--color-surface-elevated)' }}>
                    <span style={{ fontSize: '20px', color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px', fontFamily: 'var(--font-mono)' }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
                        {t(`contact_page.${labelKey}`)}
                      </div>
                      <div style={{ color: 'var(--color-text-primary)', fontSize: 'var(--fs-body)', lineHeight: 1.6 }}>
                        {t(`contact_page.${valueKey}`)}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div variants={fadeUp} className="card-ornate" style={{ padding: 'var(--spacing-l)', background: 'var(--color-surface-elevated)' }}>
                  <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 'var(--spacing-m)' }}>
                    {t('contact_page.email_label')}
                  </div>
                  <a href={`mailto:${t('contact_page.email_info')}`} style={{ color: 'var(--color-gold)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', wordBreak: 'break-all' }}>
                    {t('contact_page.email_info')}
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} style={{ padding: 'var(--spacing-l) 0', borderTop: '1px solid var(--color-border-feather)' }}>
                  <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 'var(--spacing-m)' }}>
                    {t('contact_page.social_title')}
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--spacing-s)' }}>
                    {['Facebook', 'Instagram', 'YouTube'].map((s) => (
                      <span key={s} style={{ padding: '6px 14px', border: '1px solid var(--color-border-feather)', color: 'var(--color-text-secondary)', borderRadius: '2px', fontSize: 'var(--fs-xs)', fontFamily: 'var(--font-mono)', cursor: 'pointer', transition: 'border-color 200ms ease, color 200ms ease' }}
                        onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)' }}
                        onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--color-border-feather)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
