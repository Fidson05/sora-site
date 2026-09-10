import { useApparition } from '../hooks/useApparition';

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
      className={`transition-[transform,opacity] duration-500 ease-out will-change-[transform,opacity] ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delai}ms` }}
    >
      {children}
    </Balise>
  );
}