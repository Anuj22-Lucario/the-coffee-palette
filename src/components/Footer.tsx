import { MapPin, Clock, Phone, Navigation, Coffee, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { CAFE_INFO, whatsappLink } from '@/data/cafe';

export default function Footer() {
  const callLink = `tel:${CAFE_INFO.phone}`;
  const whatsappMsg = whatsappLink('Hi The Coffee Palette! I have a question.');

  return (
    <footer id="location" className="relative pt-20 pb-24 lg:pb-12" style={{ background: 'var(--bg-primary)' }}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full blur-[120px]"
        style={{ background: 'var(--accent-soft)', opacity: 0.4 }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left — Brand & info */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                <Coffee size={22} />
              </div>
              <span className="font-display text-xl font-800" style={{ color: 'var(--text-primary)' }}>
                The Coffee Palette
              </span>
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Where handcrafted coffee meets canvas art. Lucknow's premiere art-cafe experience — paint, sip & unwind in the heart of Gomti Nagar.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Address</div>
                  <div className="text-sm" style={{ color: 'var(--text-primary)' }}>{CAFE_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Timings</div>
                  <div className="text-sm" style={{ color: 'var(--text-primary)' }}>{CAFE_INFO.hours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Phone</div>
                  <div className="text-sm" style={{ color: 'var(--text-primary)' }}>{CAFE_INFO.phoneDisplay}</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Right — Live Location Card */}
          <div className="animate-fade-up delay-200">
            <div className="card-surface overflow-hidden rounded-3xl" style={{ boxShadow: '0 10px 40px var(--shadow-glow)' }}>
              {/* Map preview */}
              <div className="relative h-48 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Gomti+Nagar+Lucknow&output=embed"
                  className="h-full w-full"
                  style={{ border: 0, filter: 'saturate(0.8) brightness(0.9)' }}
                  loading="lazy"
                  title="Cafe location map"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--bg-card))' }}
                />
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-display text-lg font-700" style={{ color: 'var(--text-primary)' }}>
                  Find Us in Gomti Nagar
                </h3>
                <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {CAFE_INFO.address}
                </p>

                {/* Action buttons */}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CAFE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all hover:scale-[1.02]"
                    style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
                  >
                    <Navigation size={16} />
                    Open in Google Maps
                  </a>
                  <a
                    href={callLink}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border py-3 text-sm font-bold transition-all hover:scale-[1.02]"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  >
                    <Phone size={16} style={{ color: 'var(--accent)' }} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} The Coffee Palette. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Gomti Nagar, Lucknow · {CAFE_INFO.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}
