import { useState, useEffect, useCallback } from 'react';
import { Star, ArrowRight, Coffee, Palette, UtensilsCrossed, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroCards, CAFE_INFO, whatsappLink } from '@/data/cafe';

const cardIcons = [Palette, Coffee, UtensilsCrossed];

export default function Hero() {
  const [activeCard, setActiveCard] = useState(0);

  const nextCard = useCallback(() => {
    setActiveCard((prev) => (prev + 1) % heroCards.length);
  }, []);

  const prevCard = useCallback(() => {
    setActiveCard((prev) => (prev - 1 + heroCards.length) % heroCards.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextCard, 5000);
    return () => clearInterval(timer);
  }, [nextCard]);

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bookingMsg = whatsappLink(
    `Hi The Coffee Palette! I'd like to book an Art & Table Date. Could you share available slots?`
  );

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-20" style={{ background: 'var(--bg-primary)' }}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-20 -right-40 h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{ background: 'var(--accent-soft)' }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ background: 'var(--accent-soft)', opacity: 0.5 }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-8 lg:min-h-[calc(100vh-5rem)] lg:py-12">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 animate-fade-up">
          {/* Rating badge */}
          <div
            className="inline-flex w-fit items-center gap-2.5 rounded-full border px-4 py-2"
            style={{
              borderColor: 'var(--border)',
              background: 'var(--accent-soft)',
            }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill={i < 4 ? 'var(--accent)' : 'none'}
                  strokeWidth={1.5}
                  style={{ color: 'var(--accent)' }}
                />
              ))}
            </div>
            <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
              {CAFE_INFO.rating}★ Rated
            </span>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              ({CAFE_INFO.reviewCount} Google Reviews)
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-800 leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl" style={{ color: 'var(--text-primary)' }}>
            Where Handcrafted
            <br />
            Coffee Meets
            <br />
            <span className="text-gradient italic">Canvas Art</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-md text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            Lucknow's premiere art-cafe experience in Gomti Nagar. Paint, Sip & Unwind.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={bookingMsg}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                scrollToBooking();
              }}
              className="group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
            >
              <Palette size={18} />
              Book Art & Table Date
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={scrollToMenu}
              className="flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all hover:scale-105"
              style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            >
              <Coffee size={18} style={{ color: 'var(--accent)' }} />
              Explore Interactive Menu
            </button>
          </div>

          {/* Stats strip */}
          <div className="mt-4 flex items-center gap-6">
            <div>
              <div className="font-display text-2xl font-800" style={{ color: 'var(--text-primary)' }}>
                20+
              </div>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Menu Items</div>
            </div>
            <div className="h-8 w-px" style={{ background: 'var(--border)' }} />
            <div>
              <div className="font-display text-2xl font-800" style={{ color: 'var(--text-primary)' }}>
                3
              </div>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Art Experiences</div>
            </div>
            <div className="h-8 w-px" style={{ background: 'var(--border)' }} />
            <div>
              <div className="font-display text-2xl font-800" style={{ color: 'var(--text-primary)' }}>
                {CAFE_INFO.hours.split('–')[0].trim()}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Open Daily</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Interactive Card Carousel */}
        <div className="relative animate-scale-in">
          <div className="relative h-[380px] sm:h-[460px] lg:h-[540px]">
            {heroCards.map((card, i) => {
              const Icon = cardIcons[i];
              const isActive = i === activeCard;
              return (
                <div
                  key={card.title}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0) scale(1)' : `translateY(${i > activeCard ? '30px' : '-30px'}) scale(0.95)`,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div
                    className="relative h-full w-full overflow-hidden rounded-3xl border"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />

                    {/* Accent badge */}
                    <div
                      className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 backdrop-blur-md"
                      style={{ background: 'rgba(0,0,0,0.4)', color: '#E2A76F' }}
                    >
                      <Icon size={14} />
                      <span className="text-xs font-semibold">{card.accentText}</span>
                    </div>

                    {/* Card content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                      <h3 className="font-display text-2xl font-800 text-white sm:text-3xl">
                        {card.title}
                      </h3>
                      <p className="mt-2 max-w-xs text-sm text-white/80">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel controls */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {heroCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCard(i)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: i === activeCard ? '28px' : '8px',
                    background: i === activeCard ? 'var(--accent)' : 'var(--border)',
                  }}
                  aria-label={`Go to card ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevCard}
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextCard}
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
