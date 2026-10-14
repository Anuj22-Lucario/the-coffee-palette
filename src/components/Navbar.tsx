import { useEffect, useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { CAFE_INFO } from '@/data/cafe';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Book a Session', href: '#booking' },
  { label: 'Cafe Vibes', href: '#vibes' },
  { label: 'Visit Us', href: '#location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg-primary)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 var(--border)' : 'none',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5"
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            <Coffee size={20} strokeWidth={2} />
          </div>
          <span className="font-display text-lg font-800 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            The Coffee Palette
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:opacity-100"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => handleNavClick('#booking')}
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 lg:block"
            style={{
              background: 'var(--accent)',
              color: 'var(--bg-primary)',
            }}
          >
            Reserve
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border lg:hidden"
            style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 border-t animate-fade-in lg:hidden"
          style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-4 py-3 text-left text-base font-medium"
                style={{ color: 'var(--text-primary)' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#booking')}
              className="mt-2 rounded-full px-5 py-3 text-sm font-semibold"
              style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
