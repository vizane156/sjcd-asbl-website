# 07 — État de livraison et recette

## Livré — interface de préproduction

- [x] Next.js / React / TypeScript / CSS moderne.
- [x] Homepage narrative complète et responsive.
- [x] Direction Lumière, Nunito locale, tokens générés.
- [x] Lenis/GSAP adaptatifs, tilt limité, navigation native de secours.
- [x] Menu mobile clavier, focus, Échap, resize.
- [x] Pages intérieures et conformité explicitement incomplètes.
- [x] Contact : préparation, copie et téléchargement **locaux**, sans envoi.
- [x] Vraie 404, noindex, robots de préproduction.
- [x] Tests de contrats et suite navigateur ; CI configurée.

## Vérifications exécutées

- Build production réussi ; contrôle TypeScript et ESLint.
- 5 tests Node : tokens, contrastes de palette, placeholders, absence d’envoi et police locale.
- 9 tests Playwright sur Chromium : accueil à 320/390/768/1440 px, menu mobile,
  brouillon et absence de POST, pages intérieures/noindex/404, mode sans JS,
  Lenis/GSAP et retour au mouvement réduit. Audit axe-core des règles WCAG sélectionnées.
- Captures locales desktop/mobile inspectées ; corrections de débordement et contraste.

Les résultats Chromium ne constituent pas une certification WCAG. Safari, Firefox,
lecteurs d’écran, mobile réel, 200–400 % zoom manuel et performance en réseau limité
restent à vérifier avant une mise en ligne institutionnelle.

## Étapes suivantes

1. **Validation artistique** : palette, flamme provisoire, densité, wording proposé.
2. **Données SJCD** : numéro d’enregistrement, siège, contacts ; mission, domaines,
   programmes, chiffres sourcés, rapports et droits à l’image.
3. **Publication** : choix CMS et hébergeur, activation e-mail, sécurité, droit applicable.
4. **Recette finale** : contenus réels relus, audit manuel, performance terrain,
   sauvegarde/restauration, transfert des comptes, domaine et indexation.

Le nom développé et la RDC sont désormais renseignés. Le statut légal est déclaré par
l’utilisateur, pas vérifié indépendamment sur pièce. Aucune obligation propre à la Belgique
ou au Luxembourg ne doit être appliquée par défaut à cette association congolaise.
