import { Moon, Sun } from 'lucide-react';
import Magnetic from './Magnetic';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <div style={{ position: 'fixed', bottom: '2.5rem', right: '2.5rem', zIndex: 1000 }}>
      <Magnetic>
        <button
          onClick={toggleTheme}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'var(--card-bg)',
            border: '1px solid var(--panel-border)',
            backdropFilter: 'blur(20px)',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 30px var(--shadow)',
            transition: 'all 0.3s ease'
          }}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </Magnetic>
    </div>
  );
};

export default ThemeToggle;
