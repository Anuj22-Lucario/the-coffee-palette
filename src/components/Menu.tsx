import { useState, useMemo } from 'react';
import { Star, MessageCircle, Leaf } from 'lucide-react';
import { menuItems, MenuItem, whatsappLink } from '@/data/cafe';

const categories = ['Bestsellers', 'Artisanal Coffee', 'Cozy Comfort Food', 'Art Session Packages'] as const;

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('Bestsellers');

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="menu" className="relative py-20 lg:py-28" style={{ background: 'var(--bg-secondary)' }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Interactive Menu
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tight sm:text-4xl lg:text-5xl" style={{ color: 'var(--text-primary)' }}>
            Explore the Flavour Palette
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: 'var(--text-secondary)' }}>
            From artisanal coffee to wood-fired pizzas and creative art sessions — tap any dish to order instantly on WhatsApp.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex justify-center animate-fade-up delay-100">
          <div
            className="flex flex-wrap justify-center gap-2 rounded-2xl border p-2"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-tertiary)' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold transition-all"
                style={{
                  background: activeCategory === cat ? 'var(--accent)' : 'transparent',
                  color: activeCategory === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu grid */}
        <div key={activeCategory} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const orderMessage = whatsappLink(
    `Hi The Coffee Palette! I'd like to order:\n\n• ${item.name} — ₹${item.price}\n\nIs this available right now?`
  );

  return (
    <div
      className="group card-surface overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-up"
      style={{
        animationDelay: `${index * 0.08}s`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.badge && (
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold backdrop-blur-md"
              style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
            >
              <Star size={10} fill="currentColor" />
              {item.badge}
            </span>
          )}
          {item.veg && (
            <span
              className="flex h-6 w-6 items-center justify-center rounded-md border-2"
              style={{ borderColor: '#7BA05B', background: 'rgba(0,0,0,0.4)' }}
            >
              <Leaf size={12} style={{ color: '#7BA05B' }} />
            </span>
          )}
        </div>

        {/* Price */}
        <div
          className="absolute bottom-3 right-3 rounded-lg px-2.5 py-1 text-sm font-bold backdrop-blur-md"
          style={{ background: 'rgba(0,0,0,0.5)', color: 'var(--accent)' }}
        >
          ₹{item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-700" style={{ color: 'var(--text-primary)' }}>
          {item.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {item.description}
        </p>

        {/* WhatsApp order button */}
        <a
          href={orderMessage}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-semibold transition-all hover:scale-[1.02]"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--accent)',
            background: 'var(--accent-soft)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = 'var(--bg-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent-soft)';
            e.currentTarget.style.color = 'var(--accent)';
          }}
        >
          <MessageCircle size={16} />
          Quick WhatsApp Order
        </a>
      </div>
    </div>
  );
}
