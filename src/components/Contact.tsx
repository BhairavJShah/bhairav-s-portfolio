import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Phone, MapPin } from 'lucide-react';
import Magnetic from './Magnetic';

const Contact = () => {
  const email = 'j.bhairavshah@gmail.com';

  const socialLinks = [
    { icon: <Mail size={22} />, href: 'mailto:j.bhairavshah@gmail.com', label: 'Email' },
    { icon: <Linkedin size={22} />, href: 'https://linkedin.com/in/bhairav-j-shah', label: 'LinkedIn' },
    { icon: <Github size={22} />, href: 'https://github.com/BhairavJShah', label: 'GitHub' },
    { icon: <Phone size={22} />, href: 'tel:+918667603233', label: 'Phone' },
    { icon: <MessageSquare size={22} />, href: 'https://wa.me/918667603233', label: 'WhatsApp' },
  ];

  return (
    <footer id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="content-block">
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>

          {/* CTA Content — Centered */}
          <div style={{ textAlign: 'center', padding: 'clamp(3rem, 8vh, 8rem) 0' }}>

            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                color: 'var(--accent)',
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.4em',
                display: 'block',
                marginBottom: '2.5rem'
              }}
            >
              [ LET'S CONNECT ]
            </motion.span>

            {/* Massive Title — Staggered Lines */}
            <div style={{ marginBottom: '3rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0 }}
              >
                <h2 style={{
                  fontSize: 'clamp(2rem, 6vw, 5rem)',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  lineHeight: 1.1,
                  margin: 0
                }}>
                  LET'S BUILD
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h2
                  className="gradient-text"
                  style={{
                    fontSize: 'clamp(2rem, 6vw, 5rem)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    margin: 0,
                    background: 'linear-gradient(135deg, var(--accent), var(--text-main))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  SOMETHING
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 style={{
                  fontSize: 'clamp(2rem, 6vw, 5rem)',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  lineHeight: 1.1,
                  margin: 0
                }}>
                  EXTRAORDINARY.
                </h2>
              </motion.div>
            </div>

            {/* Email Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ marginBottom: '2.5rem' }}
            >
              <a
                href={`mailto:${email}`}
                className="contact-email"
                style={{
                  fontFamily: 'monospace',
                  fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                  color: 'var(--text-sub)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  borderBottom: '2px solid transparent',
                  paddingBottom: '4px'
                }}
              >
                {email}
              </a>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}
            >
              {socialLinks.map((link, i) => (
                <Magnetic key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="social-icon-btn"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--panel-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {link.icon}
                  </a>
                </Magnetic>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: 'var(--text-sub)',
                fontSize: '0.85rem',
                fontFamily: 'monospace',
                marginBottom: '1.5rem'
              }}
            >
              <MapPin size={14} />
              <span>19.0760°N, 72.8777°E — IST (UTC+5:30)</span>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.6rem 1.4rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--panel-border)',
                borderRadius: '100px',
                backdropFilter: 'blur(10px)',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--text-sub)'
              }}
            >
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
                display: 'inline-block'
              }} />
              Open to opportunities
            </motion.div>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: '6rem',
            borderTop: '1px solid var(--panel-border)',
            paddingTop: '2rem',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--text-sub)',
              opacity: 0.6,
              fontWeight: 500
            }}>
              © 2026 Bhairav J. Shah — Engineered with precision.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .contact-email:hover {
          color: var(--accent) !important;
          border-bottom-color: var(--accent) !important;
        }
        .social-icon-btn:hover {
          border-color: var(--accent) !important;
          color: var(--accent) !important;
          box-shadow: 0 0 20px var(--accent-soft);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Contact;
