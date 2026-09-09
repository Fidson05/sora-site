import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Entete from './components/Entete';
import PiedDePage from './components/PiedDePage';

import Accueil from './pages/Accueil';
import Conditions from './pages/Conditions';
import Confidentialite from './pages/Confidentialite';
import RetourEnHaut from './components/RetourEnHaut';

export default function App() {
  return (
    <BrowserRouter>
      {/* N'affiche rien, remonte simplement en haut à chaque
          changement de page. Doit être à l'intérieur du routeur
          pour connaître l'adresse courante. */}
      <RetourEnHaut />

      {/* L'en-tête et le pied de page sont hors des routes : ils
          restent affichés quelle que soit la page. */}
      <Entete />

      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/confidentialite" element={<Confidentialite />} />

          {/* Toute adresse inconnue revient à l'accueil plutôt que
              d'afficher une page blanche. */}
          <Route path="*" element={<Accueil />} />
        </Routes>
      </main>

      <PiedDePage />
    </BrowserRouter>
  );
}