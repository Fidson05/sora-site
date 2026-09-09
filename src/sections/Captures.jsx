import { captures } from '../data/contenu';
import Apparition from '../components/Apparition';

/**
 * Aperçu de l'application.
 *
 * C'est la section qui convainc le plus : voir vaut mieux que lire.
 * Sur téléphone, les captures défilent horizontalement plutôt que de
 * s'empiler — cinq images l'une sous l'autre feraient une page
 * interminable.
 */
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

      {/* Le conteneur s'arrête ici pour que le défilement horizontal
          parte du bord de l'écran sur téléphone : une carte coupée au
          bord indique qu'il y en a d'autres. */}
      <div className="overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0">
        <div className="conteneur">
          {/* Cinq colonnes sur grand écran, trois sur tablette. Avec
              quatre, la cinquième capture se retrouverait seule sur
              une deuxième ligne. */}
          {/* Six colonnes sur grand écran. Chaque capture y fait
              environ 165 pixels : les couleurs se voient, les
              détails non. Le survol permet de regarder de plus
              près. */}
          <div className="flex gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-y-10">
            {captures.map((capture, index) => (
              <Apparition
                key={capture.fichier}
                delai={index * 90}
                as="figure"
                className="shrink-0 w-[240px] sm:w-auto flex flex-col"
              >
{/* Hauteur fixe sur le conteneur avec alignement par le bas (items-end) */}
<div className="flex h-[340px] items-end justify-center">
  <img
    src={capture.fichier}
    alt={`${capture.titre} — ${capture.legende}`}
    loading="lazy"
    className="h-full max-h-[340px] w-auto max-w-[220px] object-contain transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
  />
</div>

{/* Légende parfaitement alignée en bas grâce à mt-auto */}
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