import { useApparition } from '../hooks/useApparition';

/**
 * Enveloppe un bloc pour le faire apparaître au défilement.
 *
 * Glisse vers le haut en s'estompant. `delai` permet d'échelonner
 * plusieurs éléments : sans décalage, six cartes qui apparaissent en
 * même temps donnent un effet de sursaut plutôt que de cascade.
 */
export default function Apparition({
  children,
  delai = 0,
  className = '',
  as: Balise = 'div',
}) {
  const { reference, visible } = useApparition();

  return (
    <Balise
      ref={reference}
      className={`transition-all duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delai}ms` }}
    >
      {children}
    </Balise>
  );
}