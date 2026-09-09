import Hero from '../sections/Hero';
import TroisFacons from '../sections/TroisFacons';
import CommentCaMarche from '../sections/CommentCaMarche';
import Captures from '../sections/Captures';
import PourquoiSora from '../sections/PourquoiSora';
import Questions from '../sections/Questions';
import Telecharger from '../sections/Telecharger';

/**
 * La page d'accueil n'est qu'un assemblage de sections.
 *
 * Chaque section vit dans son propre fichier : modifier les questions
 * fréquentes ne doit pas obliger à défiler dans huit cents lignes.
 */
export default function Accueil() {
  return (
    <>
      <Hero />
      <TroisFacons />
      <CommentCaMarche />
      <Captures />
      <PourquoiSora />
      <Questions />
      <Telecharger />
    </>
  );
}