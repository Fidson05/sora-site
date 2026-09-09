import { etapes } from '../data/contenu';
import Apparition from '../components/Apparition';

/**
 * Le parcours, en quatre étapes.
 *
 * Cette section rassure quelqu'un qui hésite à envoyer de l'argent
 * par Mobile Money à un service qu'il ne connaît pas encore. C'est
 * probablement la section la plus utile de la page.
 */
export default function CommentCaMarche() {
  return (
    <section id="comment" className="section">
      <div className="conteneur">
        <Apparition className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Comment ça marche</h2>
          <p className="text-lg text-texte-moyen leading-relaxed">
            Quatre étapes, de ton choix jusqu'à la remise du colis.
          </p>
        </Apparition>

        <div className="relative">
          {/* Trait horizontal reliant les étapes. Uniquement sur grand
              écran : empilées, les cartes n'ont pas besoin d'être
              reliées, l'ordre de lecture suffit. */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-bordure"
          />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {etapes.map((etape, index) => (
              // Les étapes apparaissent dans l'ordre où on les lit :
              // le décalage renforce l'idée de progression.
              <Apparition
                key={etape.numero}
                delai={index * 140}
                className="text-center lg:text-left"
              >
                <div className="flex justify-center lg:justify-start">
                  <div className="w-14 h-14 rounded-full bg-orange text-white flex items-center justify-center text-xl font-extrabold ring-8 ring-fond">
                    {etape.numero}
                  </div>
                </div>

                <h3 className="text-lg mt-5 mb-2">{etape.titre}</h3>
                <p className="text-texte-moyen leading-relaxed">
                  {etape.description}
                </p>
              </Apparition>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}