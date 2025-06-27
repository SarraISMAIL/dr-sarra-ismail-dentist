# 🦷 Dr. Sarra ISMAIL -    Site Web Dentaire Professionnel
![Screen]([image-url]"screen1%20.png")
Un site web moderne et professionnel pour le cabinet dentaire du Dr. Sarra ISMAIL à Sfax, Tunisie.

## ✨ Fonctionnalités

### 🎬 Animation de Chargement
- Animation interactive avec émojis de dents
- Barre de progression fluide
- Transition élégante vers le site principal

### 🏠 Section Hero
- Présentation professionnelle du Dr. Sarra ISMAIL
- Design avec gradient bleu moderne
- Boutons d'appel à l'action interactifs
- Animations fluides avec Framer Motion

### 👨‍⚕️ Section À Propos
- Présentation détaillée du docteur et de son expertise
- Statistiques impressionnantes (2000+ patients, 15+ années d'expérience)
- Spécialisations en dentisterie moderne
- Design avec cartes interactives

### 🦷 Section Services
- 6 services dentaires complets :
  - Dentisterie Esthétique
  - Soins Conservateurs
  - Implantologie
  - Orthodontie
  - Parodontologie
  - Urgences Dentaires 24/7
- Section technologies de pointe
- Cartes interactives avec effets hover

### 📧 Formulaire de Rendez-vous avec Email
- **Fonctionnalité Email Complète** : Envoi automatique d'emails au Dr. Sarra ISMAIL
- **Validation en Temps Réel** : Validation des champs avec feedback visuel
- **Gestion d'Erreurs** : Messages d'erreur clairs et informatifs
- **Confirmation de Succès** : Feedback immédiat après envoi
- **Format Professionnel** : Emails formatés avec toutes les informations patient

### 📞 Section Contact
- Informations de contact complètes
- Horaires d'ouverture détaillés
- Localisation à Sfax, Tunisie
- Numéro d'urgence 24/7

## 🛠️ Technologies Utilisées

- **⚡ Next.js 15** - Framework React avec TypeScript
- **🎨 Tailwind CSS** - Framework CSS utilitaire pour design responsive
- **✨ Framer Motion** - Bibliothèque d'animations fluides
- **🎯 Lucide React** - Icônes modernes et élégantes
- **📧 EmailJS** - Service d'envoi d'emails côté client
- **📱 Design Responsive** - Optimisé pour mobile et desktop

## 🚀 Installation et Configuration

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [repository-url]
cd dentist-app

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.local.example .env.local
```

### Configuration Email (EmailJS)

1. **Créer un compte EmailJS** :
   - Aller sur [EmailJS.com](https://www.emailjs.com/)
   - Créer un compte gratuit (200 emails/mois)

2. **Configurer le service email** :
   - Ajouter Gmail comme service
   - Connecter l'email : `sarraismailabdallah@gmail.com`

3. **Créer le template email** :
   - Utiliser le template fourni dans `EMAIL_SETUP.md`
   - ID recommandé : `appointment_template`

4. **Mettre à jour `.env.local`** :
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=appointment_template
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_DOCTOR_EMAIL=sarraismailabdallah@gmail.com
```

### Démarrage
```bash
# Mode développement
npm run dev

# Build production
npm run build
npm start
```

## 📧 Fonctionnalité Email Détaillée

### Validation du Formulaire
- **Nom** : Requis, minimum 2 caractères
- **Email** : Format email valide requis
- **Téléphone** : Format tunisien (+216 74 285 147 ou 74 285 147)
- **Service** : Optionnel, liste prédéfinie
- **Message** : Optionnel

### Contenu de l'Email
L'email envoyé au docteur contient :
- 📋 Informations complètes du patient
- 🦷 Service dentaire demandé
- 💬 Message personnalisé du patient
- 📅 Date et heure de la demande
- 📧 Email de réponse automatique

### Gestion d'Erreurs
- ✅ Validation en temps réel
- 🔴 Messages d'erreur clairs en français
- 🔄 Retry automatique en cas d'échec
- 📱 Feedback visuel sur mobile

## 🎨 Design et UX

### Palette de Couleurs
- **Primaire** : Bleu professionnel (#2563eb)
- **Secondaire** : Cyan frais (#06b6d4)
- **Accent** : Vert santé (#10b981)
- **Fond** : Blanc pur avec gradients subtils

### Animations
- **Chargement** : Dents flottantes avec rotation
- **Scroll** : Animations au défilement
- **Hover** : Effets interactifs sur les cartes
- **Form** : Feedback visuel en temps réel

### Responsive Design
- 📱 **Mobile First** : Optimisé pour smartphones
- 💻 **Desktop** : Expérience enrichie sur grand écran
- 📐 **Breakpoints** : sm, md, lg, xl
- 🔄 **Orientation** : Portrait et paysage

---

**Développé avec ❤️ pour l'excellence dentaire à Sfax** 🦷✨
