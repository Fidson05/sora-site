import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * Connexion au projet Firebase, en lecture seule.
 *
 * ⚠️ Ces valeurs sont **publiques**. Elles sont visibles dans le code
 * source du navigateur, et c'est normal : ce n'est pas un secret,
 * c'est une adresse. Ce qui protège les données, ce sont les règles
 * Firestore — rien d'autre.
 *
 * Le site ne lit qu'un seul document : `settings/conditions`, dont la
 * règle autorise la lecture sans être connecté. Aucune
 * authentification n'est installée ici, donc aucun autre document
 * n'est accessible.
 */
const configuration = {
  apiKey: 'À_REMPLIR',
  authDomain: 'smdg-f82d0.firebaseapp.com',
  projectId: 'smdg-f82d0',
  storageBucket: 'À_REMPLIR',
  messagingSenderId: 'À_REMPLIR',
  appId: 'À_REMPLIR',
};

const application = initializeApp(configuration);

export const db = getFirestore(application);