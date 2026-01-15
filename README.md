# L'Optic du Brulhois - Site Vitrine

Site vitrine Next.js optimisé SEO pour l'Optic du Brulhois, opticienne à Layrac.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
optic_brulhois_front/
├── app/                    # Pages et layouts Next.js
│   ├── page.tsx           # Page d'accueil
│   ├── services/          # Page services
│   ├── marques/           # Page marques
│   ├── layout.tsx         # Layout principal avec SEO
│   ├── globals.css        # Styles globaux
│   ├── sitemap.ts         # Sitemap XML
│   └── robots.ts          # Robots.txt
├── components/            # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CTA.tsx
│   ├── ContactForm.tsx
│   └── Coordonnees.tsx
├── data/                  # Données JSON
│   └── site-data.json     # Services, marques, coordonnées
└── public/                # Assets statiques
```

## 📝 Configuration

### Modifier les données

Éditez le fichier `data/site-data.json` pour modifier :
- Coordonnées du magasin
- Services proposés
- Marques disponibles
- Horaires d'ouverture

### Configuration Google Maps

1. Rendez-vous sur [Google Maps](https://www.google.com/maps)
2. Recherchez l'adresse du magasin
3. Cliquez sur "Partager" > "Intégrer une carte"
4. Copiez l'URL de l'iframe dans `site-data.json` > `googleMapsUrl`
5. Copiez le lien Google Maps dans `googleMapsLink`

## 🔧 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **React Hook Form** - Gestion des formulaires

## 📧 Configuration du formulaire de contact

Le formulaire de contact utilise actuellement un lien `mailto:`. Pour une solution professionnelle, configurez un service d'email :

### Option 1 : EmailJS (gratuit)
1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email
3. Intégrez l'API dans `components/ContactForm.tsx`

### Option 2 : Resend (recommandé)
1. Créez un compte sur [Resend](https://resend.com/)
2. Créez une API route dans `app/api/contact/route.ts`
3. Utilisez l'API dans le formulaire

## 📄 Licence

Tous droits réservés - L'Optic du Brulhois

