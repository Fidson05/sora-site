import { Download, Zap, Store, Link2 } from 'lucide-react';
import { marque, telechargement, chiffres } from '../data/contenu';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
      {/* Halo orange : Masqué ou très léger sur mobile (hidden sm:block) pour éviter de faire ramer le GPU */}
      <div
        aria-hidden
        className="hidden sm:block absolute -top-40 -right-32 w-[560px] h-[560px] rounded-full bg-orange-light blur-2xl opacity-50 pointer-events-none"
      />

      <div className="conteneur relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <div
              className="etiquette bg-orange-light text-orange mb-5 entree"
              style={{ animationDelay: '0ms' }}
            >
              <Zap size={13} />
              Disponible sur Android
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] mb-5 entree"
              style={{ animationDelay: '100ms' }}
            >
              Commande d'ailleurs,{' '}
              <span className="text-orange">reçois ici</span>
            </h1>

            <p
              className="text-lg text-texte-moyen leading-relaxed mb-8 max-w-lg entree"
              style={{ animationDelay: '200ms' }}
            >
              {marque.accroche}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 mb-6 entree"
              style={{ animationDelay: '300ms' }}
            >
              <a
                href={telechargement.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="bouton-principal"
              >
                <Download size={19} />
                Télécharger l'application
              </a>

              <a href="#comment" className="bouton-secondaire">
                Comment ça marche
              </a>
            </div>

            <p
              className="text-sm text-texte-faible entree"
              style={{ animationDelay: '400ms' }}
            >
              {telechargement.taille} · {telechargement.androidMinimum} ·
              Version {telechargement.version}
            </p>

            <div
              className="flex gap-8 sm:gap-12 mt-10 pt-8 border-t border-bordure entree"
              style={{ animationDelay: '500ms' }}
            >
              {chiffres.map((chiffre) => (
                <div key={chiffre.libelle}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-texte-fort">
                    {chiffre.valeur}
                  </p>
                  <p className="text-sm text-texte-faible mt-0.5">
                    {chiffre.libelle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative entree"
            style={{ animationDelay: '250ms' }}
          >
            <div className="flex justify-center lg:justify-end">
              {/* Image Hero : Priorité haute (fetchpriority/loading eager) avec GPU acceleration */}
              <img
                src="/captures/accueil.png"
                alt="L'écran d'accueil de l'application SORA"
                width={520}
                height={680}
                loading="eager"
                fetchPriority="high"
                className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px] h-auto will-change-transform"
              />
            </div>

            <div className="hidden lg:flex absolute top-20 left-0 items-center gap-2 bg-white rounded-bouton px-4 py-3 shadow-douce border border-bordure flottant">
              <Store size={17} className="text-dispo" />
              <span className="text-sm font-semibold text-texte-fort">
                Stock local
              </span>
            </div>

            <div className="hidden lg:flex absolute bottom-24 right-0 items-center gap-2 bg-white rounded-bouton px-4 py-3 shadow-douce border border-bordure flottant-lent">
              <Link2 size={17} className="text-orange" />
              <span className="text-sm font-semibold text-texte-fort">
                Commande par lien
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}