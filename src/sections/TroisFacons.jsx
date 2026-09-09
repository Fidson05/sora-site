import { Store, Sparkles, Link2, Check } from 'lucide-react';
import { faconsDeCommander } from '../data/contenu';
import Apparition from '../components/Apparition';

/**
 * Les trois façons de commander.
 *
 * C'est le concept central de SORA, et personne ne le comprend sans
 * explication. Cette section vient tôt sur la page.
 */

// Chaque façon a son icône et ses couleurs. Regroupés ici plutôt que
// dans `contenu.js` : ce sont des choix visuels, pas du texte à
// modifier.
const styles = {
  boutique: {
    Icone: Store,
    fondIcone: 'bg-dispo/10',
    couleurIcone: 'text-dispo',
    fondEtiquette: 'bg-dispo/10 text-dispo',
    bordure: 'border-dispo/25',
  },
  promotion: {
    Icone: Sparkles,
    fondIcone: 'bg-orange-light',
    couleurIcone: 'text-orange',
    fondEtiquette: 'bg-orange-light text-orange',
    bordure: 'border-bordure',
  },
  lien: {
    Icone: Link2,
    fondIcone: 'bg-marine/10',
    couleurIcone: 'text-marine',
    fondEtiquette: 'bg-marine/10 text-marine',
    bordure: 'border-bordure',
  },
};

export default function TroisFacons() {
  return (
    <section id="services" className="section bg-white">
      <div className="conteneur">
        <Apparition className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Trois façons de commander
          </h2>
          <p className="text-lg text-texte-moyen leading-relaxed">
            Selon ce que tu cherches et le temps que tu peux attendre.
            Chaque commande suit une seule de ces trois voies — jamais
            un mélange.
          </p>
        </Apparition>

        <div className="grid md:grid-cols-3 gap-6">
          {faconsDeCommander.map((facon, index) => {
            const style = styles[facon.id];
            const { Icone } = style;

            return (
              // Décalage de 120 ms entre les cartes : sans lui, les
              // trois arrivent d'un bloc et l'effet ressemble à un
              // sursaut plutôt qu'à une cascade.
              <Apparition
                key={facon.id}
                delai={index * 120}
                className={`carte border ${style.bordure} flex flex-col`}
              >
                <div
                  className={`w-12 h-12 rounded-bouton ${style.fondIcone} flex items-center justify-center mb-4`}
                >
                  <Icone size={22} className={style.couleurIcone} />
                </div>

                <h3 className="text-xl mb-2">{facon.titre}</h3>

                <div
                  className={`etiquette ${style.fondEtiquette} self-start mb-4`}
                >
                  {facon.etiquette}
                </div>

                <p className="text-texte-moyen leading-relaxed mb-5">
                  {facon.description}
                </p>

                {/* Les points remontent en bas de carte pour que les
                    trois cartes s'alignent, quelle que soit la
                    longueur du paragraphe. */}
                <ul className="mt-auto flex flex-col gap-2.5">
                  {facon.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className={`${style.couleurIcone} mt-0.5 shrink-0`}
                      />
                      <span className="text-sm text-texte-moyen">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </Apparition>
            );
          })}
        </div>
      </div>
    </section>
  );
}