import TexteLegal from '../components/TexteLegal';

/**
 * Conditions générales et confidentialité.
 *
 * Une seule page pour tout le document : le découper en deux
 * obligeait à maintenir un repère de séparation, fragile dès que le
 * texte évolue.
 */
export default function Conditions() {
  return <TexteLegal titre="Conditions générales et confidentialité" />;
}