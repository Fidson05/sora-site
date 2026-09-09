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
  apiKey: "AIzaSyAkxBFGJowIA5Qmn-YI9LRNBNXEMUfLDcE",
  authDomain: "smdg-f82d0.firebaseapp.com",
  projectId: 'smdg-f82d0',
  storageBucket: "smdg-f82d0.firebasestorage.app",
  messagingSenderId: "736529987850",
  appId: "1:736529987850:web:e334483c1f8090e0dd62f3",
};

const application = initializeApp(configuration);

export const db = getFirestore(application);