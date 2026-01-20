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

Le formulaire de contact utilise **Resend** pour envoyer des emails. 

### Configuration Resend

Consultez le fichier [CONFIGURATION-RESEND.md](./CONFIGURATION-RESEND.md) pour les instructions détaillées.

**Résumé rapide :**

1. **Configuration Resend :**
   - Créez un compte gratuit sur [Resend](https://resend.com/) (100 emails/jour)
   - Obtenez votre clé API

2. **Configuration reCAPTCHA v3 :**
   - Allez sur [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create)
   - Créez un nouveau site avec le type "reCAPTCHA v3"
   - Ajoutez votre domaine (ex: `localhost` pour le dev, `optic-brulhois.fr` pour la prod)
   - Copiez la **Site Key** et la **Secret Key**

3. **Créer le fichier `.env.local` :**
   
   Consultez le fichier [ENVIRONMENT.md](./ENVIRONMENT.md) pour les instructions détaillées.
   
   Créez un fichier `.env.local` à la racine du projet :
   ```env
   # Resend
   RESEND_API_KEY=re_votre_cle_api
   RESEND_FROM_EMAIL=onboarding@resend.dev
   RESEND_TO_EMAIL=contact@optic-brulhois.fr
   
   # reCAPTCHA v3
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=votre_site_key_ici
   RECAPTCHA_SECRET_KEY=votre_secret_key_ici
   ```

4. Redémarrez votre serveur de développement

## 🚀 Déploiement

### Checklist avant déploiement

- [ ] Toutes les variables d'environnement sont configurées dans Vercel
- [ ] Le code de vérification Google est mis à jour dans `app/layout.tsx` (ligne 73)
- [ ] Les images sont optimisées et présentes dans `public/images/`
- [ ] Le sitemap inclut toutes les pages (déjà configuré)
- [ ] Test du build : `npm run build` (doit réussir sans erreur)

### Variables d'environnement Vercel

Assurez-vous d'ajouter toutes les variables dans **Settings > Environment Variables** :
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_TO_EMAIL`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`

Consultez [ENVIRONMENT.md](./ENVIRONMENT.md) pour plus de détails.

## 📄 Licence

Tous droits réservés - L'Optic du Brulhois

