import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { marque, menu, telechargement } from '../data/contenu';

/**
 * Barre du haut, fixe.
 *
 * Le menu d'ancres ne s'affiche que sur la page d'accueil : sur la
 * page des conditions, cliquer sur « Questions » ne mènerait nulle
 * part.
 */
export default function Entete() {
  const [ouvert, setOuvert] = useState(false);
  const [defile, setDefile] = useState(false);

  const { pathname } = useLocation();
  const surAccueil = pathname === '/';

  useEffect(() => {
    // Fond transparent en haut de page, opaque dès qu'on défile :
    // sans ça, le menu se confondrait avec la grande image du haut.
    const surDefilement = () => setDefile(window.scrollY > 20);
    window.addEventListener('scroll', surDefilement);
    return () => window.removeEventListener('scroll', surDefilement);
  }, []);

  // Referme le menu quand on change de page.
  useEffect(() => setOuvert(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        defile || ouvert
          ? 'bg-white/95 backdrop-blur border-b border-bordure'
          : 'bg-transparent'
      }`}
    >
      <div className="conteneur">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            {/* Le logo a un fond blanc opaque : sur un en-tête clair,
                ses angles droits se voient. On arrondit le cadre et
                on lui donne le même fond que la page. */}
            <img
              src="/logo.png"
              alt=""
              className="w-10 h-10 object-contain rounded-xl bg-surface-alt p-1"
            />
            <span className="text-xl font-extrabold text-texte-fort tracking-tight">
              {marque.nom}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {surAccueil &&
              menu.map((item) => (
                <a
                  key={item.ancre}
                  href={item.ancre}
                  className="text-sm font-medium text-texte-moyen hover:text-texte-fort transition-colors"
                >
                  {item.libelle}
                </a>
              ))}

            <a
              href={telechargement.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="bouton-principal !px-5 !py-2.5 text-sm"
            >
              <Download size={17} />
              Télécharger
            </a>
          </nav>

          <button
            onClick={() => setOuvert(!ouvert)}
            className="md:hidden p-2 -mr-2 text-texte-fort"
            aria-label="Menu"
          >
            {ouvert ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {ouvert && (
        <div className="md:hidden bg-white border-t border-bordure">
          <div className="conteneur py-4 flex flex-col gap-1">
            {surAccueil &&
              menu.map((item) => (
                <a
                  key={item.ancre}
                  href={item.ancre}
                  onClick={() => setOuvert(false)}
                  className="py-3 text-texte-moyen font-medium"
                >
                  {item.libelle}
                </a>
              ))}

            <a
              href={telechargement.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="bouton-principal mt-3"
            >
              <Download size={18} />
              Télécharger l'application
            </a>
          </div>
        </div>
      )}
    </header>
  );
}