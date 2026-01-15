# Guide d'installation rapide

## Prérequis

- Node.js 18+ installé
- npm ou yarn

## Installation

1. **Installer les dépendances**
```bash
npm install
```

2. **Lancer le serveur de développement**
```bash
npm run dev
```

3. **Ouvrir le navigateur**
```
http://localhost:3000
```

## Configuration avant déploiement

### 1. Mettre à jour les données du site

Éditez `data/site-data.json` avec les vraies informations :
- Adresse complète
- Numéro de téléphone
- Email
- Horaires réels
- URL Google Maps (voir instructions ci-dessous)

### 2. Configurer Google Maps

1. Allez sur [Google Maps](https://www.google.com/maps)
2. Recherchez l'adresse exacte du magasin
3. Cliquez sur "Partager" puis "Intégrer une carte"
4. Copiez l'URL de l'iframe dans `site-data.json` > `googleMapsUrl`
5. Copiez le lien de partage dans `googleMapsLink`

### 3. Mettre à jour les coordonnées GPS

Dans `app/layout.tsx`, ligne 91-92, remplacez les coordonnées par les vraies :
```typescript
"latitude": 44.XXXXXX,  // Coordonnée réelle
"longitude": 0.XXXXXX,  // Coordonnée réelle
```

### 4. Configurer Google Search Console

1. Créez un compte sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété (le domaine du site)
3. Choisissez la méthode de vérification "Balise HTML"
4. Copiez le code de vérification
5. Dans `app/layout.tsx`, ligne 61, remplacez :
```typescript
google: "VOTRE_CODE_ICI",
```

### 5. Créer les images

Ajoutez dans le dossier `public/` :
- `favicon.ico` - Icône du site (16x16 ou 32x32)
- `og-image.jpg` - Image pour les réseaux sociaux (1200x630px)

## Build de production

```bash
npm run build
npm start
```

## Déploiement

### Vercel (recommandé pour Next.js)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Vercel détectera automatiquement Next.js
4. Cliquez sur "Deploy"

### Autres plateformes

Le site peut être déployé sur :
- Netlify
- AWS
- Google Cloud Platform
- Votre propre serveur

Consultez la [documentation Next.js](https://nextjs.org/docs/deployment) pour plus d'informations.

## Après le déploiement

Consultez `DOCUMENTATION-SEO.md` pour les actions à effectuer après la mise en ligne du site.

