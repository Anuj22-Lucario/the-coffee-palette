import { BookOpen, Palette, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/data/cafe';

export default function MobileDock() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappMsg = whatsappLink('Hi The Coffee Palette! I have a question.');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div
        className="mx-auto flex max-w-md items-center justify-around px-4 py-3"
        style={{
          background: 'color-mix(in srgb, var(--bg-card) 85%, transparent)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <button
          onClick={() => scrollTo('#menu')}
          className="flex flex-col items-center gap-1"
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl transition-all active:scale-90"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            <BookOpen size={20} />
          </div>
          <span className="text-[10px] font-semibold" style={{ color: 'var(--text-secondary)' }}>Menu</span>
        </button>

        <button
          onClick={() => scrollTo('#booking')}
          className="flex flex-col items-center gap-1"
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all active:scale-90"
            style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
          >
            <Palette size={22} />
          </div>
          <span className="text-[10px] font-semibold" style={{ color: 'var(--accent)' }}>Reserve</span>
        </button>

        <a
          href={whatsappMsg}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1"
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl transition-all active:scale-90"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            <MessageCircle size={20} />
          </div>
          <span className="text-[10px] font-semibold" style={{ color: 'var(--text-secondary)' }}>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
