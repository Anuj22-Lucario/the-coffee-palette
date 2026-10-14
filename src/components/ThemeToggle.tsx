import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border overflow-hidden"
      style={{ borderColor: 'var(--border)' }}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{
          transform: theme === 'dark' ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ color: 'var(--accent)' }}
        >
          <Moon size={18} strokeWidth={2} />
        </div>
      </div>
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{
          transform: theme === 'light' ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ color: 'var(--accent)' }}
        >
          <Sun size={18} strokeWidth={2} />
        </div>
      </div>
    </button>
  );
}
