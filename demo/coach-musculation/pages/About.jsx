import { about, coach } from "../constants";

const About = () => {
  return (
    <>
      <section className="px-5 pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium tracking-wide uppercase text-[var(--color-accent)] mb-4">
            À propos
          </p>
          <h1 className="font-display text-4xl md:text-5xl uppercase mb-6">{coach.name}</h1>
          <p className="text-[var(--color-muted)] text-lg">{about.intro}</p>
        </div>
      </section>

      <section className="px-5 py-10 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[var(--color-muted)]">{about.story}</p>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl uppercase mb-6 text-center">Certifications</h2>
          <ul className="space-y-3">
            {about.certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-3 border-l-4 border-[var(--color-primary)] p-4 bg-[var(--color-surface-alt)]"
              >
                <span className="font-display text-lg text-[var(--color-primary)] shrink-0">/</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl uppercase mb-8 text-center">Ma méthode</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {about.values.map(({ title, description }) => (
              <div
                key={title}
                className="border-t-4 border-[var(--color-primary)] p-6 bg-[var(--color-surface-alt)] transition-colors"
              >
                <p className="font-display text-2xl uppercase mb-2 text-[var(--color-accent)]">{title}</p>
                <p className="text-sm text-[var(--color-muted)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl uppercase mb-8 text-center">En images</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Séance en salle", "Bilan physique", "Suivi nutrition", "Coaching en ligne"].map((label) => (
              <div
                key={label}
                className="aspect-square flex items-center justify-center bg-[var(--color-surface-alt)] border border-[var(--color-border)] text-sm text-[var(--color-muted)] text-center px-3"
              >
                Photo — {label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
