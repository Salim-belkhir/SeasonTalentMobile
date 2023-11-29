# Season Talent

L'Application de Recrutement Saisonnier est un projet développé en équipe de 3 membres sur une période de 2 mois et demi. Cette application mobile basée sur React Native et Redux permet aux recruteurs de trouver des candidats pour des emplois saisonniers en ajoutant et en gérant des offres d'emploi.

## Auteurs

- [BELKHIR Salim][Salim_github]
- [FASKA Rachid][Rachid_github]
- [HAKEMI Ayoub][Ayoub_github]

[Salim_github]: https://github.com/Salim-belkhir
[Rachid_github]: https://github.com/playerRC
[Ayoub_github]: https://github.com/ayoubbibo

## Gestion de projet

Pour collaborer à trois sur ce projet, nous avons utilisé directement les projets Github.
Le projet est accessible à partir de ce lien : [Projet IWA sur Github][Project]

[Project]: https://github.com/users/Salim-belkhir/projects/1/views/2

## Technologies Utilisées

- React Native
- JavaScript
- Redux
- Expo

## Installation

- react version: 18.2.0

- react-native version: 0.72.5

Suivez ces étapes pour installer l'application localement sur votre ordinateur :

1. Assurez-vous d'avoir Node.js installé. Si ce n'est pas le cas, vous pouvez le télécharger depuis [le site officiel de Node.js](https://nodejs.org/).

2. npm est livré avec Node.js. Si vous avez déjà installé Node.js, vous avez également npm.

3. Assurez-vous d'avoir Expo CLI installé. Si ce n'est pas le cas, vous pouvez l'installer en utilisant la commande suivante :

```bash
npm install -g expo-cli
```

4. React Native CLI est un outil en ligne de commande qui vous permet de créer des applications React Native. Vous pouvez l'installer en utilisant la commande suivante :

```bash
npm install -g react-native-cli
```

5. Assurez-vous d'avoir un émulateur Android ou iOS installé sur votre ordinateur. Vous pouvez également utiliser votre appareil physique pour tester l'application.

6. Clonez ce dépôt sur votre ordinateur en utilisant la commande suivante :

```bash
git clone https://github.com/votre-utilisateur/SeasonTalentMobile.git
```

7. Accédez au répertoire du projet :

```bash
cd SeasonTalentMobile
```

8. Installez les dépendances en utilisant npm (Node Package Manager) :

```bash
npm install
```

## Lancement de l'Application

Une fois que toutes les dépendances sont installées, vous pouvez lancer l'application en suivant ces étapes :

1. Assurez-vous que vous êtes toujours dans le répertoire du projet.

2. Lancez l'application Expo en utilisant la commande suivante :

```bash
npx expo start -c
```

3. Suivez les instructions affichées dans votre terminal pour ouvrir l'application sur un émulateur ou un appareil physique. Vous pouvez utiliser l'application Expo Go sur votre appareil mobile pour le tester en temps réel.

## Fonctionnalités Principales
- Authentification avec Firebase Google Auth.
- Les recruteurs peuvent ajouter, éditer et supprimer des offres d'emploi.
- Les recruteurs peuvent rechercher des offres d'emploi et les filtrer par localisation , date de debut et fin et un ecart de salaire.
  -Un recruteur a un etablissement Principal de base mais il peut ajouter d'autres etablissements et les gerer.CRUD
- Les candidats sont disponibles pour les embaucher sur des offres d'emploi.
- On peut filtrer les candidats par leur disponibilité et leur localisation et leur compétences.
- On peut voir les candidats favoris
- On peut voir les candidats qui ont ete embauchés dans l'archive
- On a un systeme de recommandation de candidats en fonction de l'offre d'emploi et de la disponibilité du candidat.

## Pour les developpeurs

### Intégrer/Mettre à jour une police personnalisée

Pour intégrer une police personnalisée, vous devez suivre ces étapes :

1. Placez votre fichier de police dans le répertoire `assets/fonts/` de votre projet. Si le répertoire n'existe pas, créez-le.

2. Dans votre fichier `react-native.config.js`, ajoutez le code suivant :

```
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
};
```

3. Exécutez la commande suivante pour lier les actifs :

```
npx react-native-asset
```

### Remarques Importantes :

Afin de pouvoir utiliser l'authentification Google avec Firebase il a fallu avoir une version en prebuild de l'application sur l'appareil mobile, vu que nos tests ont été faites sur une platforme IOS.

Il faut avoir un mac pour pouvoir "build" l'application sur un appareil IOS.
Donc un build Xcode est disponible dans le dossier "ios" de ce repository.
