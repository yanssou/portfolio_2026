import { shop } from "../constants";

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

const Contact = () => {
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${shop.mapEmbedBbox}&marker=${shop.mapEmbedMarker}&layer=mapnik`;

  return (
    <section className="px-5 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Contact</h1>
        <p className="text-[var(--color-muted)] mb-10">
          Passe en boutique ou écris-nous, on répond vite.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <a
              href={shop.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-[var(--color-primary)] mt-0.5"><PinIcon /></span>
              <span>{shop.address}</span>
            </a>

            <a
              href={shop.phoneHref}
              className="flex items-center gap-3 hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-[var(--color-primary)]"><PhoneIcon /></span>
              <span>{shop.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${shop.email}`}
              className="flex items-center gap-3 hover:text-[var(--color-primary)] transition-colors"
            >
              <span className="text-[var(--color-primary)]"><MailIcon /></span>
              <span>{shop.email}</span>
            </a>

            <div className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] mt-0.5"><ClockIcon /></span>
              <ul className="space-y-1">
                {shop.hours.map(({ day, time }) => (
                  <li key={day} className="flex gap-2 text-sm">
                    <span className="text-[var(--color-muted)] w-40 shrink-0">{day}</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={shop.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="text-center px-6 py-3 rounded-full font-semibold text-black bg-[var(--color-primary)] hover:bg-[var(--color-gold)] transition-colors"
              >
                Discuter sur WhatsApp
              </a>
              <a
                href={shop.phoneHref}
                className="text-center px-6 py-3 rounded-full font-semibold border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
              >
                Appeler
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[var(--color-border)] h-72 md:h-full min-h-72">
            <iframe
              title="Localisation de la boutique"
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
