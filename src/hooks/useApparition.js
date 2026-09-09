import { useEffect, useRef, useState } from 'react';

/**
 * Déclenche une animation quand l'élément entre dans l'écran.
 *
 * Utilise `IntersectionObserver`, l'outil natif du navigateur :
 * aucune bibliothèque, aucun écouteur de défilement à chaque pixel.
 *
 * ⚠️ Respecte `prefers-reduced-motion`. Certaines personnes
 * désactivent les animations dans leur système, souvent pour des
 * raisons médicales — les ignorer rendrait le site pénible pour
 * elles.
 */
export function useApparition({ seuil = 0.15, uneFois = true } = {}) {
  const reference = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = reference.current;
    if (!element) return;

    // Animations désactivées : on affiche tout d'emblée.
    const reduit = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduit) {
      setVisible(true);
      return;
    }

    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          setVisible(true);
          if (uneFois) observateur.unobserve(element);
        } else if (!uneFois) {
          setVisible(false);
        }
      },
      {
        threshold: seuil,
        // Déclenche un peu avant que l'élément touche le bas de
        // l'écran : l'animation a le temps de se jouer pendant que
        // le visiteur défile, plutôt que de commencer trop tard.
        rootMargin: '0px 0px -80px 0px',
      },
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, [seuil, uneFois]);

  return { reference, visible };
}