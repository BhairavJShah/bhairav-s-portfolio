import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, ArrowUpRight, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="content-block">
        
        {/* Massive Background Text */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', zIndex: 0, opacity: 0.03, pointerEvents: 'none' }}>
          <h2 style={{ fontSize: '30vw', fontWeight: 900, color: 'var(--text-main)', lineHeight: 0.8 }}>CONTACT</h2>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4rem', alignItems: 'center' }}>
            
            <div style={{ gridColumn: 'span 7' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span style={{ color: 'var(--accent)', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.4em' }}>[ CONNECT_TERMINAL ]</span>
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.9, marginTop: '2rem', marginBottom: '3rem', color: 'var(--text-main)' }}>
                  READY TO <br/> <span style={{ color: 'var(--accent)' }}>INITIALIZE?</span>
                </h2>
                <p style={{ fontSize: '1.5rem', color: 'var(--text-sub)', lineHeight: 1.4, maxWidth: '600px' }}>
                  Currently available for high-velocity AI systems and full-stack development. Let’s build the future together.
                </p>
              </motion.div>
            </div>

            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { icon: <Mail size={24}/>, label: 'EMAIL', value: 'j.bhairavshah@gmail.com', href: 'mailto:j.bhairavshah@gmail.com' },
                { icon: <Linkedin size={24}/>, label: 'LINKEDIN', value: 'bhairav-j-shah', href: 'https://linkedin.com/in/bhairav-j-shah' },
                { icon: <Github size={24}/>, label: 'GITHUB', value: 'BhairavJShah', href: 'https://github.com/BhairavJShah' },
                { icon: <Phone size={24}/>, label: 'PHONE', value: '+91 86676 03233', href: 'tel:+918667603233' },
                { icon: <MessageSquare size={24}/>, label: 'WHATSAPP', value: 'Chat Now', href: 'https://wa.me/918667603233' }
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="glass-card" style={{ 
                    padding: '2rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-soft)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--card-bg)'; e.currentTarget.style.borderColor = 'var(--panel-border)'; }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                      <div style={{ color: 'var(--accent)' }}>{link.icon}</div>
                      <div>
                        <p style={{ color: 'var(--text-sub)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em' }}>{link.label}</p>
                        <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 700 }}>{link.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={20} color="var(--outline-stroke)" />
                  </div>
                </motion.a>
              ))}
            </div>

          </div>

          <div style={{ 
            marginTop: '10vh', 
            paddingTop: '3rem', 
            borderTop: '1px solid var(--panel-border)', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', fontWeight: 600 }}>© {new Date().getFullYear()} BHAIRAV SHAH. ALL RIGHTS RESERVED.</p>
            <div style={{ display: 'flex', gap: '3rem' }}>
              <span style={{ color: 'var(--outline-stroke)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em' }}>BUILT WITH VIBE CODING</span>
              <span style={{ color: 'var(--outline-stroke)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em' }}>V5.0 // 2026</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Contact;
