import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { questions, lienWhatsapp } from '../data/contenu';
import Apparition from '../components/Apparition';

/**
 * Questions fréquentes.
 *
 * Chaque réponse ici, c'est un message de moins à écrire sur
 * WhatsApp. Les questions sont celles qu'on pose déjà.
 */
export default function Questions() {
  // Une seule ouverte à la fois : six réponses dépliées feraient une
  // page interminable où l'on ne retrouve plus sa question.
  const [ouverte, setOuverte] = useState(null);

  return (
    <section id="questions" className="section bg-white">
      <div className="conteneur">
        <Apparition className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Les questions qu'on nous pose
          </h2>
          <p className="text-lg text-texte-moyen leading-relaxed">
            Si la tienne n'y est pas, écris-nous.
          </p>
        </Apparition>

        <div className="max-w-3xl flex flex-col gap-3">
          {questions.map((item, index) => {
            const estOuverte = ouverte === index;

            return (
              <Apparition key={item.question} delai={index * 70}>
                <div
                  className={`rounded-card border transition-colors duration-200 ${
                    estOuverte
                      ? 'border-orange/30 bg-orange-light/40'
                      : 'border-bordure bg-surface hover:border-texte-faible/40'
                  }`}
                >
                  <button
                    onClick={() => setOuverte(estOuverte ? null : index)}
                    className="w-full flex items-center gap-4 text-left p-5"
                    aria-expanded={estOuverte}
                  >
                    <span className="flex-1 font-semibold text-texte-fort">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-texte-faible transition-transform duration-300 ${
                        estOuverte ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* La réponse se déplie en hauteur plutôt que
                      d'apparaître d'un coup : le mouvement guide
                      l'œil vers le texte qui arrive. */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      estOuverte
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 -mt-1 text-texte-moyen leading-relaxed">
                        {item.reponse}
                      </p>
                    </div>
                  </div>
                </div>
              </Apparition>
            );
          })}
        </div>

        <Apparition
          delai={200}
          className="max-w-3xl mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-card bg-surface-alt"
        >
          <p className="flex-1 text-texte-moyen">
            Une autre question ? Notre équipe répond sur WhatsApp.
          </p>

          <a
            href={lienWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bouton-secondaire !py-3 shrink-0"
          >
            <MessageCircle size={18} />
            Nous écrire
          </a>
        </Apparition>
      </div>
    </section>
  );
}