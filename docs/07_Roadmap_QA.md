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

### Audit des dépendances : ce qui bloque, ce qui informe

Le site est servi par le serveur Next : les dépendances de **production** sont du
code exécuté côté visiteur et côté serveur (rendu des pages, Server Components,
optimisation des images). Ce sont elles qui peuvent exposer un défaut, et ce sont
donc elles que la CI bloque (`npm audit --omit=dev`). Les outils de développement (ESLint et sa
chaîne) font l'objet d'une veille informative, sans blocage : un avis sans
correctif publié ne doit pas empêcher une mise en ligne.

Exception connue et datée — **04/10/2026** : `braces <= 3.0.3` (avis
GHSA-vfj7-8cjw-p6xm, déni de service par motif très imbriqué), atteint via
`micromatch` → `fast-glob` → `@next/eslint-plugin-next` → `eslint-config-next`.
Aucune version corrigée n'est publiée ; la seule « correction » proposée par npm
est un rétrogradage majeur d'ESLint. La dépendance n'est pas livrée au public.
À revoir dès la publication d'un `braces` corrigé : retirer la présente
exception et relancer l'audit bloquant sur l'ensemble de l'arbre.

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
