import { captures } from '../data/contenu';
import Apparition from '../components/Apparition';

export default function Captures() {
  return (
    <section id="apercu" className="section">
      <div className="conteneur">
        <Apparition className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">
            À quoi ça ressemble
          </h2>
          <p className="text-lg text-texte-moyen leading-relaxed">
            Quelques écrans de l'application.
          </p>
        </Apparition>
      </div>

      {/* Défilement horizontal avec accélération fluide (-webkit-overflow-scrolling) */}
      <div className="overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-none [webkit-overflow-scrolling:touch]">
        <div className="conteneur">
          <div className="flex gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-y-10">
            {captures.map((capture, index) => (
              <Apparition
                key={capture.fichier}
                delai={index * 60} // Délai plus court sur mobile pour un effet réactif
                as="figure"
                className="shrink-0 w-[220px] sm:w-auto flex flex-col"
              >
                <div className="flex h-[320px] sm:h-[340px] items-end justify-center">
                  <img
                    src={capture.fichier}
                    alt={`${capture.titre} — ${capture.legende}`}
                    loading="lazy"
                    width={220}
                    height={340}
                    className="h-full max-h-[320px] sm:max-h-[340px] w-auto max-w-[200px] sm:max-w-[220px] object-contain transition-transform duration-300 sm:hover:-translate-y-2 sm:hover:scale-105 will-change-transform"
                  />
                </div>

                <figcaption className="mt-auto pt-4 text-center sm:text-left">
                  <p className="font-semibold text-texte-fort text-sm">
                    {capture.titre}
                  </p>
                  <p className="text-xs text-texte-moyen mt-0.5 leading-snug">
                    {capture.legende}
                  </p>
                </figcaption>
              </Apparition>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}