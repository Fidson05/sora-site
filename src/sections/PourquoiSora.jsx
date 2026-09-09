import {
  Zap,
  Wallet,
  PackageSearch,
  MessageSquareQuote,
  ShieldCheck,
  Tag,
} from 'lucide-react';
import { avantages } from '../data/contenu';
import Apparition from '../components/Apparition';

/**
 * Ce qui distingue SORA.
 *
 * Les icônes sont associées ici plutôt que dans `contenu.js` : un
 * fichier de textes ne devrait pas importer de composants React.
 */
const icones = {
  Zap,
  Wallet,
  PackageSearch,
  MessageSquareQuote,
  ShieldCheck,
  Tag,
};

export default function PourquoiSora() {
  return (
    <section className="section bg-white">
      <div className="conteneur">
        <Apparition className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Pourquoi SORA</h2>
          <p className="text-lg text-texte-moyen leading-relaxed">
            Ce que tu ne trouveras pas en commandant seul depuis
            Madagascar.
          </p>
        </Apparition>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {avantages.map((avantage, index) => {
            const Icone = icones[avantage.icone];

            return (
              // Décalage court : six éléments à 120 ms feraient
              // attendre presque une seconde le dernier.
              <Apparition
                key={avantage.titre}
                delai={(index % 3) * 100}
                className="flex gap-4"
              >
                <div className="w-11 h-11 shrink-0 rounded-bouton bg-orange-light flex items-center justify-center">
                  {/* Une icône inconnue ne doit pas casser la page :
                      on n'affiche rien plutôt que de planter. */}
                  {Icone && <Icone size={20} className="text-orange" />}
                </div>

                <div>
                  <h3 className="text-lg mb-1.5">{avantage.titre}</h3>
                  <p className="text-texte-moyen leading-relaxed">
                    {avantage.description}
                  </p>
                </div>
              </Apparition>
            );
          })}
        </div>
      </div>
    </section>
  );
}