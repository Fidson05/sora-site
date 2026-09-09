import { Link } from 'react-router-dom';
// `Facebook` a été retiré de lucide-react : les logos de marques
// vivent désormais dans un paquet séparé. `Globe` fait l'affaire.
import { MessageCircle, Globe, MapPin, Download } from 'lucide-react';
import {
  marque,
  contacts,
  lienWhatsapp,
  telechargement,
} from '../data/contenu';

export default function PiedDePage() {
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-marine text-white">
      <div className="conteneur py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/logo.png"
                alt=""
                className="w-10 h-10 object-contain bg-white rounded-xl p-1.5"
              />
              <span className="text-xl font-extrabold">{marque.nom}</span>
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              {marque.slogan}. {marque.accroche}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              Nous joindre
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={lienWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle size={17} />
                {contacts.telephoneAffiche}
              </a>

              <a
                href={contacts.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Globe size={17} />
                Facebook
              </a>

              <div className="flex items-center gap-2.5 text-white/70">
                <MapPin size={17} />
                {contacts.ville}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              Informations
            </h3>
            <div className="flex flex-col gap-3">
              {/* Un seul lien : les deux adresses montrent le même
                  document, en afficher deux dans le menu ferait
                  croire à deux textes différents. */}
              <Link
                to="/conditions"
                className="text-white/70 hover:text-white transition-colors"
              >
                Conditions et confidentialité
              </Link>
              <a
                href={telechargement.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Download size={16} />
                Télécharger
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/50">
          <p>© {annee} {marque.nom}. Tous droits réservés.</p>
          {/* Le numéro de version aide quand un client signale un
              problème : on sait tout de suite s'il est à jour. */}
          <p>Application version {telechargement.version}</p>
        </div>
      </div>
    </footer>
  );
}