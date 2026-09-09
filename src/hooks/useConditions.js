import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

/**
 * Lit le texte légal depuis Firestore.
 *
 * Une seule lecture, pas d'écoute en temps réel : un texte légal
 * change deux fois par an, écouter en permanence serait du
 * gaspillage.
 *
 * Le même texte alimente l'application et le site. Corrigé depuis
 * l'admin, il change des deux côtés — c'est tout l'intérêt.
 */
export function useConditions() {
  const [texte, setTexte] = useState('');
  const [miseAJour, setMiseAJour] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    let annule = false;

    async function charger() {
      try {
        const snapshot = await getDoc(doc(db, 'settings', 'conditions'));

        if (annule) return;

        if (!snapshot.exists()) {
          setErreur(true);
        } else {
          const donnees = snapshot.data();
          setTexte(donnees.texte || '');
          setMiseAJour(
            donnees.miseAJour ? donnees.miseAJour.toDate() : null,
          );
        }
      } catch {
        if (!annule) setErreur(true);
      } finally {
        if (!annule) setChargement(false);
      }
    }

    charger();

    // Évite de modifier l'état d'un composant déjà retiré de l'écran.
    return () => {
      annule = true;
    };
  }, []);

  return { texte, miseAJour, chargement, erreur };
}