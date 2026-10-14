import { PawPrint, Music, Palette, TreePalm, Quote } from 'lucide-react';
import { bentoFeatures, reviews } from '@/data/cafe';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof PawPrint> = {
  PawPrint,
  Music,
  Palette,
  TreePalm,
};

export default function BentoVibes() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="vibes" className="relative py-20 lg:py-28" style={{ background: 'var(--bg-secondary)' }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Cafe Vibes & Customer Love
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tight sm:text-4xl lg:text-5xl" style={{ color: 'var(--text-primary)' }}>
            More Than Just a Cafe
          </h2>
        </div>

        {/* Bento grid */}
        <div
          ref={ref}
          className={`grid gap-4 sm:gap-5 lg:grid-cols-4 lg:grid-rows-2 reveal ${visible ? 'visible' : ''}`}
        >
          {/* Feature cards */}
          {bentoFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Palette;
            const isLarge = i === 0 || i === 3;
            return (
              <div
                key={feature.title}
                className={`card-surface group relative overflow-hidden rounded-2xl p-6 transition-all hover:scale-[1.02] ${isLarge ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Decorative glow */}
                <div
                  className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-50 transition-opacity group-hover:opacity-100"
                  style={{ background: 'var(--accent-soft)' }}
                />
                <div className="relative">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-700" style={{ color: 'var(--text-primary)' }}>
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Review cards */}
          {reviews.map((review, i) => (
            <div
              key={i}
              className="card-surface relative overflow-hidden rounded-2xl p-6 transition-all hover:scale-[1.02]"
            >
              <Quote
                size={32}
                className="absolute top-4 right-4 opacity-20"
                style={{ color: 'var(--accent)', transform: 'scaleX(-1)' }}
              />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                "{review.text}"
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-800"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {review.author}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {review.context}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
