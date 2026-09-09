import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Remonte en haut à chaque changement de page.
 *
 * React Router change le contenu sans toucher au défilement : en
 * cliquant sur « Conditions générales » depuis le pied de page, on
 * arrivait tout en bas d'un texte qui commence en haut.
 *
 * Ce composant n'affiche rien, il agit seulement.
 */
export default function RetourEnHaut() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Une ancre est une demande explicite d'aller à un endroit
    // précis : la contrarier serait pire que le défaut qu'on
    // corrige.
    if (hash) return;

    // `instant` et non `smooth` : sur un changement de page, voir
    // défiler tout le contenu précédent donne le tournis.
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}