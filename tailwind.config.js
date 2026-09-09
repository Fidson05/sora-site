/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Mêmes couleurs que l'application Flutter.
        // L'orange est réservé à l'action, le marine porte la
        // structure — si les deux se mélangent, le visiteur ne sait
        // plus sur quoi appuyer.
        orange: {
          DEFAULT: '#F4623A',
          dark: '#D94A22',
          light: '#FFEEE8',
        },
        marine: {
          DEFAULT: '#1B2A4E',
          light: '#2A3D6B',
        },
        fond: '#FAFAFC',
        surface: '#FFFFFF',
        'surface-alt': '#F2F3F7',
        bordure: '#E5E7EB',

        // Trois niveaux de texte. S'ils se rapprochent, l'œil doit
        // tout lire pour trouver l'information.
        texte: {
          fort: '#23262E',
          moyen: '#565E6C',
          faible: '#9AA1AE',
        },

        // Étiquettes d'origine, comme dans l'application.
        dispo: '#12A150',
        shein: '#1B2A4E',
      },

      fontFamily: {
        // Plus Jakarta Sans, chargée depuis Google Fonts dans
        // index.html. Même police que l'application.
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        card: '20px',
        bouton: '16px',
      },

      boxShadow: {
        douce: '0 4px 20px rgba(27, 42, 78, 0.06)',
        carte: '0 2px 12px rgba(27, 42, 78, 0.05)',
      },

      maxWidth: {
        contenu: '1140px',
      },
    },
  },
  plugins: [],
};