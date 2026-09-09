import TexteLegal from '../components/TexteLegal';

/**
 * Politique de confidentialité.
 *
 * Affiche le même document que `/conditions` : les deux parties
 * vivent ensemble. Cette adresse existe séparément parce que le Play
 * Store en réclame une, dédiée à la confidentialité.
 */
export default function Confidentialite() {
  return <TexteLegal titre="Conditions générales et confidentialité" />;
}