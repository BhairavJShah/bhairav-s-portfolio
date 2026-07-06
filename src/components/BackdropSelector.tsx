import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sparkles, Workflow, Grid, Wind, EyeOff, Check } from 'lucide-react';
import Magnetic from './Magnetic';

interface BackdropSelectorProps {
  activeBg: string;
  setActiveBg: (bg: string) => void;
}

const BACKDROPS = [
  { id: 'crystals', name: 'Space Crystals', icon: <Sparkles size={16} />, desc: '3D floating glass crystals' },
  { id: 'neural', name: 'Neural Net', icon: <Workflow size={16} />, desc: '3D interactive network mesh' },
  { id: 'voxel', name: 'Voxel Grid', icon: <Grid size={16} />, desc: '3D architecture waves' },
  { id: 'particles', name: 'Digital Dust', icon: <Wind size={16} />, desc: 'Responsive 2D particle swarm' },
  { id: 'none', name: 'Minimalist', icon: <EyeOff size={16} />, desc: 'Clean background solid color' }
];

export default function BackdropSelector({ activeBg, setActiveBg }: BackdropSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '2.5rem', left: '2.5rem', zIndex: 1000, display: 'flex', flexDirection: 'column-reverse', gap: '1rem' }}>
      
      {/* Trigger Button */}
      <Magnetic>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'var(--card-bg)',
            border: '1px solid var(--panel-border)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 30px var(--shadow)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          aria-label="Change Backdrop"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <Palette size={24} />
          </motion.div>
          
          {/* Subtle indicator dot that matches the accent theme */}
          {activeBg !== 'none' && (
            <span style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 10px var(--accent)'
            }} />
          )}
        </button>
      </Magnetic>

      {/* Selector Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--panel-border)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              borderRadius: '24px',
              padding: '1rem',
              width: '280px',
              boxShadow: '0 20px 50px var(--shadow)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              pointerEvents: 'auto'
            }}
          >
            <div style={{ 
              padding: '0.4rem 0.6rem 0.8rem 0.6rem', 
              borderBottom: '1px solid var(--panel-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>BACKDROP_ENGINE</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>Customize the ambient background</span>
            </div>

            {BACKDROPS.map((bg) => {
              const isSelected = activeBg === bg.id;
              return (
                <button
                  key={bg.id}
                  onClick={() => {
                    setActiveBg(bg.id);
                    // Subtle haptic response / click feedback by closing panel optionally
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.8rem 1rem',
                    background: isSelected ? 'var(--accent-soft)' : 'transparent',
                    border: isSelected ? '1px solid var(--accent-border)' : '1px solid transparent',
                    borderRadius: '16px',
                    color: isSelected ? 'var(--accent)' : 'var(--text-main)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'var(--panel-bg)';
                      e.currentTarget.style.borderColor = 'var(--panel-border)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  <div style={{
                    color: isSelected ? 'var(--accent)' : 'var(--text-sub)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {bg.icon}
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: isSelected ? 800 : 600 }}>{bg.name}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-sub)' }}>{bg.desc}</span>
                  </div>

                  {isSelected && (
                    <motion.div
                      layoutId="activeCheck"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      <Check size={16} />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
