import { AlertCircle, MessageCircle } from 'lucide-react';
import { useConditions } from '../hooks/useConditions';
import { lienWhatsapp } from '../data/contenu';

/**
 * Affiche le texte légal, mis en forme.
 *
 * Un document de trente-huit articles affiché d'un bloc est
 * illisible. On repère les titres et les puces pour donner du relief.
 *
 * [debut] et [fin] permettent de n'afficher qu'une partie : les
 * conditions et la confidentialité vivent dans le même document
 * Firestore, mais méritent deux pages séparées — noyer la
 * confidentialité au milieu des conditions la rendrait introuvable,
 * et le Play Store demande une adresse dédiée.
 */
export default function TexteLegal({ titre, debut, fin }) {
  const { texte, miseAJour, chargement, erreur } = useConditions();

  if (chargement) {
    return (
      <div className="conteneur pt-32 pb-24">
        <div className="animate-pulse flex flex-col gap-3">
          <div className="h-8 w-2/3 bg-surface-alt rounded" />
          <div className="h-4 w-full bg-surface-alt rounded mt-6" />
          <div className="h-4 w-11/12 bg-surface-alt rounded" />
          <div className="h-4 w-4/5 bg-surface-alt rounded" />
        </div>
      </div>
    );
  }

  if (erreur || !texte.trim()) {
    return (
      <div className="conteneur pt-32 pb-24">
        <h1 className="text-3xl mb-4">{titre}</h1>
        <div className="carte flex items-start gap-4 max-w-2xl">
          <AlertCircle size={20} className="text-orange shrink-0 mt-0.5" />
          <div>
            <p className="text-texte-moyen mb-4">
              Le texte n'a pas pu être chargé. Réessaie dans un moment,
              ou écris-nous.
            </p>
            <a
              href={lienWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bouton-secondaire !py-3"
            >
              <MessageCircle size={18} />
              Nous écrire
            </a>
          </div>
        </div>
      </div>
    );
  }

  const extrait = decouper(texte, debut, fin);

  return (
    <div className="conteneur pt-32 pb-24">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl mb-3">{titre}</h1>

        {miseAJour && (
          <p className="text-sm text-texte-faible mb-10">
            Dernière mise à jour : {formaterDate(miseAJour)}
          </p>
        )}

        <article>{mettreEnForme(extrait)}</article>
      </div>
    </div>
  );
}

/**
 * Isole la portion du document située entre deux repères.
 *
 * Si un repère n'est pas trouvé, on renvoie tout : mieux vaut
 * afficher trop que rien du tout sur une page légale.
 */
function decouper(texte, debut, fin) {
  let extrait = texte;

  if (debut) {
    const index = extrait.indexOf(debut);
    if (index !== -1) extrait = extrait.slice(index);
  }

  if (fin) {
    const index = extrait.indexOf(fin);
    if (index > 0) extrait = extrait.slice(0, index);
  }

  return extrait;
}

/**
 * Transforme le texte brut en éléments lisibles.
 *
 * Les titres sont repérés à leur majuscule initiale, comme dans
 * l'application : c'est le repère le plus fiable sur un document
 * rédigé à la main.
 */
function mettreEnForme(texte) {
  const lignes = texte.split('\n');
  const elements = [];

  lignes.forEach((ligne, index) => {
    const propre = ligne.trim();

    if (!propre) return;

    if (propre === '---' || propre === '___') {
      elements.push(
        <hr key={index} className="my-8 border-bordure" />,
      );
      return;
    }

    const estTitre =
      propre.startsWith('ARTICLE') ||
      propre.startsWith('PARTIE') ||
      propre.startsWith('PRÉAMBULE') ||
      propre.startsWith('DISPOSITIONS') ||
      propre.startsWith('CONDITIONS GÉNÉRALES') ||
      propre.startsWith('POLITIQUE');

    if (estTitre) {
      elements.push(
        <h2
          key={index}
          className="text-lg font-bold text-texte-fort mt-9 mb-3 leading-snug"
        >
          {propre}
        </h2>,
      );
      return;
    }

    if (propre.startsWith('- ') || propre.startsWith('• ')) {
      elements.push(
        <div key={index} className="flex gap-3 mb-2.5 pl-1">
          <span className="text-texte-faible mt-2 shrink-0">
            <span className="block w-1.5 h-1.5 rounded-full bg-texte-faible" />
          </span>
          <p className="text-texte-moyen leading-relaxed">
            {propre.slice(2)}
          </p>
        </div>,
      );
      return;
    }

    elements.push(
      <p key={index} className="text-texte-moyen leading-relaxed mb-3">
        {propre}
      </p>,
    );
  });

  return elements;
}

function formaterDate(date) {
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}