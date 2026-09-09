import { Download, MessageCircle } from 'lucide-react';
import { marque, telechargement, lienWhatsapp } from '../data/contenu';
import Apparition from '../components/Apparition';

/**
 * Dernier appel au téléchargement.
 *
 * Quelqu'un qui a lu toute la page est convaincu ou presque : il ne
 * doit pas avoir à remonter chercher le bouton.
 */
export default function Telecharger() {
  return (
    <section className="section">
      <div className="conteneur">
        <Apparition className="relative overflow-hidden rounded-[2rem] bg-marine px-6 py-14 sm:px-14 sm:py-16 text-center">
          {/* Deux halos orange, décalés et flottants, pour que le
              bloc marine ne soit pas un simple rectangle plat. */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-orange/20 blur-3xl flottant"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-orange/10 blur-3xl flottant-lent"
          />

          <div className="relative max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Prêt à commander ?
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Télécharge {marque.nom} 
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={telechargement.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="bouton-principal"
              >
                <Download size={19} />
                Télécharger l'application
              </a>

              {/* Pour ceux qui n'ont pas Android : sans cette porte de
                  sortie, la page se termine sur une impasse. */}
              <a
                href={lienWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-bouton font-semibold text-white border border-white/25 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle size={19} />
                Commander sur WhatsApp
              </a>
            </div>

            <p className="text-sm text-white/50 mt-6">
              {telechargement.taille} · {telechargement.androidMinimum}
            </p>
          </div>
        </Apparition>
      </div>
    </section>
  );
}