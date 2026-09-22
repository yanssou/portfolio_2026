import { about, shop } from "../constants";

const About = () => {
  return (
    <>
      <section className="px-5 pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium tracking-wide uppercase text-[var(--color-gold)] mb-4">
            À propos
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{shop.name}</h1>
          <p className="text-[var(--color-muted)] text-lg">{about.intro}</p>
        </div>
      </section>

      <section className="px-5 py-10 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[var(--color-muted)]">{about.story}</p>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Nos valeurs</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {about.values.map(({ title, description }) => (
              <div
                key={title}
                className="card-border rounded-xl p-6 bg-[var(--color-surface-alt)] transition-colors text-center"
              >
                <p className="font-semibold mb-2 text-[var(--color-gold)]">{title}</p>
                <p className="text-sm text-[var(--color-muted)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">L'équipe</h2>
          <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {about.team.map(({ name, role }) => (
              <div key={name} className="text-center">
                <div className="size-16 mx-auto mb-3 rounded-full flex items-center justify-center font-bold text-black bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)]">
                  {name.charAt(0)}
                </div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-[var(--color-muted)]">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">La boutique en images</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Vitrine", "Espace tournoi", "Rayon singles", "Comptoir"].map((label) => (
              <div
                key={label}
                className="aspect-square rounded-xl flex items-center justify-center bg-[var(--color-surface-alt)] border border-[var(--color-border)] text-sm text-[var(--color-muted)]"
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
