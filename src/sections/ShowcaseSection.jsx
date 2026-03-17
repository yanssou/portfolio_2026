import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <a
              href="https://creascape.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="image-wrapper block hover:opacity-90 transition-opacity"
            >
              <img src="/images/creascape.png" alt="CreaScape - Le partenaire digital des paysagistes" />
            </a>
            <div className="text-content">
              <a
                href="https://creascape.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <h2 className="underline underline-offset-4">
                  CreaScape — Le partenaire digital des paysagistes
                </h2>
              </a>
              <p className="text-white-50 md:text-xl">
                Outil web conçu pour les professionnels du paysage : concevoir, chiffrer et présenter des massifs de vivaces en quelques clics. Calcul automatique des végétaux, du terreau et du temps de pose, avec génération de fiches PDF illustrées pour vos devis.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <a
              href="https://zenly-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project block group"
              ref={libraryRef}
            >
              <div className="image-wrapper bg-[#FFEFDB] transition-opacity duration-300 group-hover:opacity-90">
                <img
                  src="/images/zenly.png"
                  alt="Zentry - Redefine Gaming"
                />
              </div>
              <h2 className="underline underline-offset-4">Zentry — Redefine Gaming</h2>
            </a>

            <a
              href="https://callmerobyn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project block group"
              ref={ycDirectoryRef}
            >
              <div className="image-wrapper bg-[#FFE7EB] transition-opacity duration-300 group-hover:opacity-90">
                <img
                  src="/images/callmerobyn.png"
                  alt="Call Me Robyn - Escape games personnalisés"
                />
              </div>
              <h2 className="underline underline-offset-4">Call Me Robyn — Escape games personnalisés</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
