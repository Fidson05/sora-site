import { useEffect, useRef, useState } from 'react';

export function useApparition({ seuil = 0.05, uneFois = true } = {}) {
  const reference = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = reference.current;
    if (!element) return;

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
        // Progrès fluide : déclenche dès que l'élément s'approche du bas de l'écran
        rootMargin: '0px 0px -20px 0px',
      },
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, [seuil, uneFois]);

  return { reference, visible };
}