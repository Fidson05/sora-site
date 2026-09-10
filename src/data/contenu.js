/**
 * Tout le contenu du site, au même endroit.
 *
 * Changer un numéro, corriger une phrase, ajouter une question — tout
 * se fait ici. Sans ce fichier, il faudrait chercher dans sept
 * sections différentes, et on finirait par oublier un endroit.
 *
 * ⚠️ Les valeurs marquées À REMPLIR doivent être renseignées avant
 * la mise en ligne.
 */

export const contacts = {
  // Format international, sans espaces, sans le +.
  // C'est ce format qu'attend le lien wa.me.
  whatsapp: '261340657982',

  facebook: 'https://www.facebook.com/share/1E9aeBWWBh/?mibextid=wwXIfr',

  // Affiché tel quel sur la page. Peut être mis en forme
  // librement, il ne sert pas au lien.
  telephoneAffiche: '+261 34 06 579 82',

  ville: 'Toliara 601, Madagascar',
};

export const lienWhatsapp = `https://wa.me/${contacts.whatsapp}`;

/**
 * L'APK est sur Google Drive, pas sur l'hébergement du site.
 *
 * Firebase Hosting n'offre que 360 Mo de trafic par jour sur le
 * forfait gratuit : avec un fichier de 53 Mo, sept téléchargements
 * suffiraient à rendre le site inaccessible jusqu'au lendemain.
 */
export const telechargement = {
  // À REMPLIR — lien de partage Drive, en accès public
  lien: 'https://github.com/Fidson05/sora-apk/releases/download/v1.0.0/Sora.apk',

  version: '1.2.0',
  taille: '53 Mo',
  androidMinimum: 'Android 6.0 ou plus récent',
};

export const marque = {
  nom: 'SORA',
  slogan: "Commande d'ailleurs, reçois ici",
  accroche:
    'Achète sur SHEIN et ailleurs, paie en Ariary par Mobile Money, ' +
    'reçois à Madagascar. Et découvre nos produits déjà en stock, ' +
    'livrables tout de suite.',
};

/**
 * Chiffres affichés sous les boutons.
 *
 * ⚠️ À REMPLIR avec tes vraies valeurs. Ne jamais gonfler : un
 * client qui découvre que « 500 clients » en cache 47 se sent
 * trompé, et il a raison.
 *
 * Si les chiffres te paraissent trop modestes, remplace-les par des
 * arguments : « 0 Ar de frais cachés », « Mobile Money », « Toliara ».
 */
export const chiffres = [
  { valeur: '15 j', libelle: 'Délai moyen' },
  { valeur: '3', libelle: 'Façons de commander' },
  { valeur: '0 Ar', libelle: 'Frais cachés' },
];

/**
 * Les trois façons de commander.
 *
 * C'est le concept central de SORA, et personne ne le comprend sans
 * explication. Cette section doit venir tôt sur la page.
 */
export const faconsDeCommander = [
  {
    id: 'boutique',
    titre: 'Boutique',
    etiquette: 'Disponible tout de suite',
    couleur: 'dispo',
    description:
      "Des produits déjà à Madagascar. Tu commandes, " +
      'tu paies, tu récupères ou tu te fais livrer. Aucune attente, aucun frais de transport.',
    points: [
      'Prix en Ariary, sans conversion',
      'Aucun frais logistique',
      'Récupération ou livraison immédiate',
    ],
  },
  {
    id: 'promotion',
    titre: 'Promotions',
    etiquette: 'Environ 15 jours',
    couleur: 'shein',
    description:
      'Une sélection de produits SHEIN à prix réduit, que nous ' +
      'recommandons pour toi. Le prix est déjà converti en Ariary, tout ' +
      'compris.',
    points: [
      'Prix en Ariary, tout compris',
      'Sélection renouvelée régulièrement',
      'Livraison en 15 jours environ',
    ],
  },
{
id: 'lien',
titre: 'Commande par lien',
etiquette: 'Environ 15 à 20 jours',
couleur: 'marine',
description:
"Tu as trouvé un produit sur SHEIN ? Colle son lien dans " +
"l'application, indique son prix et obtiens automatiquement le " +
"devis complet en Ariary. Si tu choisis la livraison, les frais " +
"s'affichent automatiquement selon ton adresse.",
points: [
'Commande à partir du lien du produit',
'Devis complet affiché automatiquement',
'Frais de livraison calculés selon ton adresse',
],
},
];

/**
 * Le parcours, en quatre étapes.
 *
 * Rassure quelqu'un qui hésite à envoyer de l'argent par Mobile Money
 * à un service qu'il ne connaît pas encore.
 */
export const etapes = [
  {
    numero: '1',
    titre: 'Tu choisis',
    description:
      'Dans la boutique, dans les promotions, ou en collant le lien ' +
      "d'un produit trouvé ailleurs.",
  },
  {
    numero: '2',
    titre: 'Tu paies',
    description:
      'Par MVola, Orange Money ou Airtel Money.' +
      '',
  },
{
numero: '3',
titre: 'Suivi intégré dans l’application',
description:
'Une fois ta commande passée, suis son évolution directement dans ' +
"l’application, de l’achat jusqu’à l’arrivée de ton colis.",
},
  {
    numero: '4',
    titre: 'Tu récupères',
    description:
      'Sur place ou livré chez toi. Tu confirmes la réception dans ' +
      "l'application.",
  },
];

export const avantages = [
  {
    icone: 'Zap',
    titre: 'Du stock déjà sur place',
    description:
      'Notre boutique locale te livre sans attendre. Pas de délai, ' +
      'pas de frais de transport.',
  },
  {
    icone: 'Wallet',
    titre: 'Tout en Ariary',
    description:
      'Le prix affiché est le prix final, transport compris. Aucune ' +
      'mauvaise surprise au moment de payer.',
  },
  {
    icone: 'PackageSearch',
    titre: 'Un suivi étape par étape',
    description:
      "Tu vois où en est ta commande à tout moment. Nous " +
      "photographions même les colis à leur arrivée à Madagascar.",
  },
  {
    icone: 'MessageSquareQuote',
    titre: 'Des avis de vrais clients',
    description:
      'Seuls ceux qui ont reçu le produit peuvent le noter. Pas ' +
      "d'avis inventés.",
  },
  {
    icone: 'ShieldCheck',
    titre: 'Un paiement que tu connais',
    description:
      'Mobile Money, comme tu as l\'habitude. Nous ne stockons ' +
      'aucune donnée bancaire.',
  },
  {
    icone: 'Tag',
    titre: 'Des réductions régulières',
    description:
      'Prix barrés sur la boutique, codes promo pendant nos ' +
      'campagnes.',
  },
];

/**
 * Les questions qu'on te pose déjà sur WhatsApp.
 *
 * Chaque réponse ici, c'est un message de moins à écrire.
 */
export const questions = [
  {
    question: 'Combien de temps pour recevoir ma commande ?',
    reponse:
      'Les produits de la boutique sont disponibles tout de suite. ' +
      'Pour une commande venant de SHEIN ou d\'un autre site, compte ' +
      'environ 15 jours. Ce délai dépend du vendeur et du transport ' +
      'international, il reste donc indicatif.',
  },
  {
    question: 'Comment je paie ?',
    reponse:
      'Par Mobile Money : MVola, Orange Money ou Airtel Money. Après ' +
      'le virement, tu envoies la référence de la transaction dans ' +
      "l'application, et nous validons.",
  },
  {
    question: "Et si le produit ne correspond pas à la photo ?",
    reponse:
      "Pour un produit de notre boutique, nous en répondons : " +
      'signale-nous le problème et nous trouverons une solution. Pour ' +
      'un produit commandé à l\'étranger, nous achetons ce que tu ' +
      'demandes — les différences de taille ou de teinte par rapport ' +
      'au site étranger ne dépendent pas de nous. Mais si le produit ' +
      "reçu n'est pas le bon, ou s'il est arrivé abîmé, contacte-nous.",
  },
  {
    question: "L'application est-elle gratuite ?",
    reponse:
      'Oui. Tu ne paies que tes commandes. Le prix affiché comprend ' +
      'déjà notre service et le transport.',
  },
  {
    question: 'Est-ce disponible sur iPhone ?',
    reponse:
      "Pas encore. L'application existe pour Android. En attendant, " +
      'tu peux nous écrire sur WhatsApp pour passer commande.',
  },
];

/**
 * Captures d'écran.
 *
 * ⚠️ À placer dans `public/captures/`. Les noms de fichiers doivent
 * correspondre exactement.
 */
export const captures = [
  {
    fichier: '/captures/accueil_1.png',
    titre: 'Accueil',
    legende: 'La boutique et les promotions du moment.',
  },
    {
    fichier: '/captures/boutique.png',
    titre: 'Boutique',
    legende: 'Les produits déjà à Madagascar.',
  },
  {
    fichier: '/captures/lien.png',
    titre: 'Commande par lien',
    legende: 'Copiez le lien du produit SHEIN que vous souhaitez acheter. SORA s’occupe de la commande pour vous.',
  },
  {
    fichier: '/captures/paiement.png',
    titre: 'Paiement',
    legende: 'Mobile Money, avec le total détaillé.',
  },
    {
    fichier: '/captures/panier.png',
    titre: 'Panier',
    legende: 'Choisis ce que tu commandes maintenant.',
  },
  {
    fichier: '/captures/historique.png',
    titre: 'Historique',
    legende: 'Le suivi de toutes tes commandes.',
  },
];

/**
 * Menu du haut. Les ancres correspondent aux `id` des sections.
 */
export const menu = [
  { libelle: 'Comment ça marche', ancre: '#comment' },
  { libelle: 'Nos services', ancre: '#services' },
  { libelle: 'Aperçu', ancre: '#apercu' },
  { libelle: 'Questions', ancre: '#questions' },
];