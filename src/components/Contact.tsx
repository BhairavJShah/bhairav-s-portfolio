import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Phone, MessageSquare } from 'lucide-react';
import '../styles/Global.css';

const Contact = () => {
  const socialLinks = [
    { 
      icon: <Mail size={24} />, 
      name: 'Email', 
      href: 'mailto:j.bhairavshah@gmail.com',
      sub: 'j.bhairavshah@gmail.com'
    },
    { 
      icon: <MessageSquare size={24} />, 
      name: 'WhatsApp', 
      href: 'https://wa.me/918667603233',
      sub: '+91 8667603233'
    },
    { 
      icon: <Linkedin size={24} />, 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/bhairav-j-shah',
      sub: 'bhairav-j-shah'
    },
    { 
      icon: <Github size={24} />, 
      name: 'GitHub', 
      href: 'https://github.com/BhairavJShah',
      sub: 'BhairavJShah'
    },
  ];

  return (
    <footer id="contact" style={{ backgroundColor: '#000', padding: '100px 20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 'var(--container-width)', margin: '0 auto' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ 
            color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', 
            margin: '0 auto 3rem', lineHeight: 1.8 
          }}
        >
          I am currently available for new opportunities. My inbox is always open.
        </motion.p>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem', 
            marginBottom: '4rem' 
          }}
        >
          {socialLinks.map((social, idx) => (
            <motion.a 
              key={idx}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border)',
                padding: '2rem 1rem',
                borderRadius: '20px',
                color: 'var(--text-secondary)',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1rem',
                transition: 'var(--transition)'
              }}
              whileHover={{ color: 'var(--text-primary)', borderColor: 'rgba(255, 255, 255, 0.2)', y: -5 }}
            >
              <div style={{ color: 'var(--accent-emerald)' }}>{social.icon}</div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>{social.name}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{social.sub}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{ 
            paddingTop: '3rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            color: 'var(--text-secondary)', fontSize: '0.9rem'
          }}
        >
          <p>© 2026 Bhairav J Shah. Built with React & Linux.</p>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="tel:+918667603233" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} /> +91 8667603233
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Resume <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container div:last-child {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Contact;
