import React, { useState, useEffect, useRef } from 'react'
import './App.css'

/* ─────────────── DATA ─────────────── */
const SERVICES = [
  {
    id: 1,
    icon: '🖥️',
    title: 'Assistenza Tecnica',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. Quis nostrud exercitation ullamco laboris nisi aliquip commodo.',
  },
  {
    id: 2,
    icon: '⚙️',
    title: 'PC Custom',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
  {
    id: 3,
    icon: '💻',
    title: 'App & Software',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.',
  },
  {
    id: 4,
    icon: '🔧',
    title: 'Digitalizzazione',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
  },
]

const SLIDES = [
  {
    id: 1,
    icon: '🖥️',
    title: 'Assistenza Tecnica',
    sub: 'Risolviamo ogni problema informatico rapidamente',
    accent: '#2563eb',
  },
  {
    id: 2,
    icon: '⚙️',
    title: 'PC Custom',
    sub: 'Assembliamo il PC perfetto per le tue esigenze',
    accent: '#7c3aed',
  },
  {
    id: 3,
    icon: '💻',
    title: 'App & Software',
    sub: 'Sviluppiamo soluzioni digitali su misura per te',
    accent: '#0891b2',
  },
  {
    id: 4,
    icon: '🔧',
    title: 'Digitalizzazione',
    sub: 'Modernizziamo la tua infrastruttura hardware',
    accent: '#059669',
  },
]

/* ─────────────── COMPONENTS ─────────────── */

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="brand-badge">IT Services</div>
        <h1 className="brand-name">IT Services</h1>
        <p className="brand-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Soluzioni
          informatiche professionali per privati e aziende: assistenza,
          hardware e sviluppo software su misura.
        </p>
      </div>
      <div className="header-contact">
        <h2 className="contact-title">Contattaci</h2>
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <div>
            <span className="contact-label">Telefono</span>
            <span className="contact-value">000 0000000</span>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">✉️</span>
          <div>
            <span className="contact-label">Email</span>
            <span className="contact-value">info@000.com</span>
          </div>
        </div>
      </div>
    </header>
  )
}

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.description}</p>
      <button className="service-btn">Scopri di più →</button>
    </div>
  )
}

function Slider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const total = SLIDES.length

  const go = (index) => setCurrent((index + total) % total)

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % total)
      }, 4000)
    }
    return () => clearInterval(timerRef.current)
  }, [paused, total])

  return (
    <section
      className="slider-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slider-wrapper">
        <button className="slider-arrow left" onClick={() => go(current - 1)}>
          &#8249;
        </button>

        <div className="slider-viewport">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className={`slide ${i === current ? 'active' : i === (current - 1 + total) % total ? 'prev' : ''}`}
              style={{ '--accent': slide.accent }}
            >
              <div className="slide-icon">{slide.icon}</div>
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-sub">{slide.sub}</p>
            </div>
          ))}
        </div>

        <button className="slider-arrow right" onClick={() => go(current + 1)}>
          &#8250;
        </button>
      </div>

      <div className="slider-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>NomeAzienda</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Soluzioni informatiche per tutti.</p>
        </div>
        <div className="footer-col">
          <h4>Servizi</h4>
          <ul>
            <li>Assistenza Tecnica</li>
            <li>PC Custom</li>
            <li>App & Software</li>
            <li>Digitalizzazione</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contatti</h4>
          <p>📞 000 0000000</p>
          <p>✉️ info@000.com</p>
          <p>📍 Via Lorem Ipsum, 0 – 00000 Città</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 NomeAzienda · P.IVA 00000000000 · Tutti i diritti riservati</p>
      </div>
    </footer>
  )
}

/* ─────────────── APP ─────────────── */

export default function App() {
  return (
    <div className="site">
      <Header />
      <section className="services-section">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </section>
      <Slider />
      <Footer />
    </div>
  )
}
