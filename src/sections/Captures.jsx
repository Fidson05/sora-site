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

      <div className="overflow-x-auto pt-6 pb-6 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-none [webkit-overflow-scrolling:touch]">
        <div className="conteneur">
          <div className="flex gap-5 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-x-6 sm:gap-y-12 items-start">
            {captures.map((capture, index) => {
              return (
                <Apparition
                  key={capture.fichier}
                  delai={index * 60}
                  as="figure"
                  className="shrink-0 w-[180px] sm:w-auto min-w-0 flex flex-col items-center overflow-visible"
                >
                  {/* Téléphone */}
                  <div className="h-[350px] w-full flex items-end justify-center">
                    <img
                      src={capture.fichier}
                      alt={`${capture.titre} — ${capture.legende}`}
                      loading="lazy"
                      className="h-[350px] w-auto max-w-full object-contain transition-transform duration-300 origin-bottom sm:hover:-translate-y-2 sm:hover:scale-105 will-change-transform"
                    />
                  </div>

                  {/* Texte */}
                  <figcaption className="pt-4 text-center sm:text-left w-full min-h-[90px]">
                    <p className="font-semibold text-texte-fort text-sm">
                      {capture.titre}
                    </p>

                    <p className="text-xs text-texte-moyen mt-0.5 leading-snug">
                      {capture.legende}
                    </p>
                  </figcaption>
                </Apparition>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}