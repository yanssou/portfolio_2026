import { coach } from "../constants";

const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </svg>
);

const Contact = () => {
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${coach.mapEmbedBbox}&marker=${coach.mapEmbedMarker}&layer=mapnik`;

  return (
    <section className="px-5 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl uppercase mb-2">Contact</h1>
        <p className="text-[var(--color-muted)] mb-10">
          En salle à Lyon ou en visio partout en France — écris-moi pour ton bilan gratuit.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] mt-0.5"><PinIcon /></span>
              <div>
                <a
                  href={coach.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  {coach.address}
                </a>
                <p className="text-xs text-[var(--color-muted)] mt-1">Séances en présentiel, sur rendez-vous</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] mt-0.5"><GlobeIcon /></span>
              <div>
                <p>Coaching en ligne</p>
                <p className="text-xs text-[var(--color-muted)] mt-1">Disponible partout en France, en visio</p>
              </div>
            </div>

            <a
              href={coach.phoneHref}
              className="flex items-center gap-3 hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-[var(--color-primary)]"><PhoneIcon /></span>
              <span>{coach.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${coach.email}`}
              className="flex items-center gap-3 hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-[var(--color-primary)]"><MailIcon /></span>
              <span>{coach.email}</span>
            </a>

            <div className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] mt-0.5"><ClockIcon /></span>
              <ul className="space-y-1">
                {coach.hours.map(({ day, time }) => (
                  <li key={day} className="flex gap-2 text-sm">
                    <span className="text-[var(--color-muted)] w-44 shrink-0">{day}</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={coach.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-brute text-center px-6 py-3 font-bold uppercase tracking-wide text-black bg-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors"
              >
                Discuter sur WhatsApp
              </a>
              <a
                href={coach.phoneHref}
                className="btn-brute text-center px-6 py-3 font-bold uppercase tracking-wide border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
              >
                Appeler
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[var(--color-border)] h-72 md:h-full min-h-72">
            <iframe
              title="Localisation de la salle"
              src={mapSrc}
              className="w-full h-full grayscale-[40%] contrast-[1.1]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
