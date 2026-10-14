import { useState } from 'react';
import { Coffee, Palette, ShoppingBag, Check, ChevronRight, ChevronLeft, Calendar, Clock, Users, MessageCircle, ArrowRight } from 'lucide-react';
import { bookingExperiences, timeSlots, whatsappLink, CAFE_INFO } from '@/data/cafe';

const iconMap: Record<string, typeof Coffee> = {
  Coffee,
  Palette,
  ShoppingBag,
};

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [guests, setGuests] = useState(2);

  const today = new Date().toISOString().split('T')[0];

  const canProceed = () => {
    if (step === 1) return experience !== '';
    if (step === 2) return date !== '' && timeSlot !== '';
    return true;
  };

  const selectedExp = bookingExperiences.find((e) => e.id === experience);

  const confirmMessage = whatsappLink(
    `Hi The Coffee Palette! I'd like to confirm a booking:\n\n` +
    `• Experience: ${selectedExp?.title || '—'}\n` +
    `• Date: ${date || '—'}\n` +
    `• Time: ${timeSlot || '—'}\n` +
    `• Guests: ${guests}\n\n` +
    `Please confirm availability. Thank you!`
  );

  const handleNext = () => {
    if (canProceed() && step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const reset = () => {
    setStep(1);
    setExperience('');
    setDate('');
    setTimeSlot('');
    setGuests(2);
  };

  return (
    <section id="booking" className="relative py-20 lg:py-28" style={{ background: 'var(--bg-primary)' }}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full blur-[120px]"
        style={{ background: 'var(--accent-soft)', opacity: 0.6 }}
      />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Booking Wizard
          </span>
          <h2 className="mt-3 font-display text-3xl font-800 tracking-tight sm:text-4xl lg:text-5xl" style={{ color: 'var(--text-primary)' }}>
            Reserve Your Art Session
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: 'var(--text-secondary)' }}>
            Three quick steps. Pick your experience, choose a slot, and confirm instantly via WhatsApp.
          </p>
        </div>

        {/* Wizard card */}
        <div className="card-surface rounded-3xl p-6 sm:p-8 lg:p-10 animate-scale-in" style={{ boxShadow: '0 10px 40px var(--shadow-glow)' }}>
          {/* Step indicator */}
          <div className="mb-8 flex items-center justify-center gap-2 sm:gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 sm:gap-4">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all"
                  style={{
                    background: s <= step ? 'var(--accent)' : 'var(--bg-tertiary)',
                    color: s <= step ? 'var(--bg-primary)' : 'var(--text-muted)',
                    border: s === step ? '2px solid var(--accent)' : '2px solid transparent',
                  }}
                >
                  {s < step ? <Check size={16} /> : s}
                </div>
                {s < 3 && (
                  <div
                    className="h-0.5 w-8 sm:w-16 rounded-full transition-all"
                    style={{ background: s < step ? 'var(--accent)' : 'var(--border)' }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="min-h-[280px]">
            {/* STEP 1: Choose Experience */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="mb-1 font-display text-xl font-700" style={{ color: 'var(--text-primary)' }}>
                  Choose Your Experience
                </h3>
                <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  What kind of visit are you planning?
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {bookingExperiences.map((exp) => {
                    const Icon = iconMap[exp.icon] || Coffee;
                    const selected = experience === exp.id;
                    return (
                      <button
                        key={exp.id}
                        onClick={() => setExperience(exp.id)}
                        className="group relative overflow-hidden rounded-2xl border p-5 text-left transition-all hover:scale-[1.02]"
                        style={{
                          borderColor: selected ? 'var(--accent)' : 'var(--border)',
                          background: selected ? 'var(--accent-soft)' : 'var(--bg-tertiary)',
                        }}
                      >
                        {selected && (
                          <div className="absolute top-3 right-3">
                            <Check size={16} style={{ color: 'var(--accent)' }} />
                          </div>
                        )}
                        <div
                          className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl"
                          style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                        >
                          <Icon size={22} />
                        </div>
                        <h4 className="font-display text-base font-700" style={{ color: 'var(--text-primary)' }}>
                          {exp.title}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {exp.description}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                          <Clock size={11} />
                          {exp.duration}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Date, Time, Guests */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="mb-1 font-display text-xl font-700" style={{ color: 'var(--text-primary)' }}>
                  Select Date, Time & Guests
                </h3>
                <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  When would you like to visit?
                </p>

                {/* Date */}
                <div className="mb-5">
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    <Calendar size={15} style={{ color: 'var(--accent)' }} />
                    Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{
                      borderColor: 'var(--border)',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                {/* Time slots */}
                <div className="mb-5">
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    <Clock size={15} style={{ color: 'var(--accent)' }} />
                    Time Slot
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTimeSlot(slot)}
                        className="rounded-lg border px-3.5 py-2 text-sm font-medium transition-all"
                        style={{
                          borderColor: timeSlot === slot ? 'var(--accent)' : 'var(--border)',
                          background: timeSlot === slot ? 'var(--accent)' : 'var(--bg-tertiary)',
                          color: timeSlot === slot ? 'var(--bg-primary)' : 'var(--text-secondary)',
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    <Users size={15} style={{ color: 'var(--accent)' }} />
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border text-lg font-bold"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                    >
                      −
                    </button>
                    <span className="font-display text-2xl font-800 w-12 text-center" style={{ color: 'var(--text-primary)' }}>
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border text-lg font-bold"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                    >
                      +
                    </button>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {guests === 1 ? 'guest' : 'guests'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Confirm */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="mb-1 font-display text-xl font-700" style={{ color: 'var(--text-primary)' }}>
                  Review & Confirm
                </h3>
                <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Check your details and tap to confirm on WhatsApp.
                </p>

                <div className="rounded-2xl border p-5 space-y-3" style={{ borderColor: 'var(--border)', background: 'var(--bg-tertiary)' }}>
                  <SummaryRow label="Experience" value={selectedExp?.title || '—'} />
                  <SummaryRow label="Duration" value={selectedExp?.duration || '—'} />
                  <SummaryRow label="Date" value={date || '—'} />
                  <SummaryRow label="Time" value={timeSlot || '—'} />
                  <SummaryRow label="Guests" value={`${guests} ${guests === 1 ? 'guest' : 'guests'}`} />
                </div>

                <a
                  href={confirmMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl py-4 text-base font-bold transition-all hover:scale-[1.02]"
                  style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
                >
                  <MessageCircle size={20} />
                  Confirm via WhatsApp
                  <ArrowRight size={18} />
                </a>

                <button
                  onClick={reset}
                  className="mt-3 w-full text-center text-sm font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Start over
                </button>
              </div>
            )}
          </div>

          {/* Navigation */}
          {step < 3 && (
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all disabled:opacity-40"
                style={{ color: 'var(--text-secondary)' }}
              >
                <ChevronLeft size={16} />
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center gap-1.5 rounded-xl px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{label}</span>
      <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{value}</span>
    </div>
  );
}
