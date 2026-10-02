# SJCD ASBL — une présence institutionnelle, humaine et immersive

**Sanctuaire de Jeunes Chandelier pour le Développement** · République démocratique du Congo.

## Dernière itération — 01/10/2026

- **Un premier projet est publié** : *Chandelier 360° : Jeunesse, Compétences, Emploi et
  Entrepreneuriat*, statut **en préparation**, avec sa provenance, ses cibles et ses
  résultats attendus — et aucune réalisation déclarée.
- **Dossier de dépôt des images** `public/images/` : registre `specs/images.json`,
  garde-fous `npm run images:sync` et `npm run images:check`. Une image n'est publiée que
  si le fichier, la légende et les droits sont réunis.
- **Coordonnées institutionnelles publiées** (e-mail, téléphone, adresse à Kavimvira) et
  divorce de dates signalé : SJCD retient le 23 février 2022 ; la divergence avec l'acte
  d'adoption du 15 juin 2023 reste affichée comme non tranchée.
- La formalisation est confirmée « en cours » par SJCD : aucun statut juridique acquis
  n'est affirmé.

## Itération précédente — 29/09/2026

Fondations institutionnelles et homepage améliorées **dans l’architecture existante** :
identité Sanctuaire, ancrage Uvira / Sud-Kivu, Nunito Sans, CTA impact/soutien, impact en début
 de parcours, nouvelles sections territoire, transparence et financement.

[État exact, vérifications et suite des phases](docs/09_Fondations_Institutionnelles.md).
Les nouveaux textes ont des dictionnaires FR/EN ; **la traduction complète et le sélecteur
ne sont pas encore activés**. Les modèles CMS sont des interfaces et un fournisseur vide,
pas des contenus publiés ni une intégration CMS. Les dons ne sont pas opérationnels.

## État actuel

Une **interface réelle de préproduction** est implémentée avec Next.js, React et TypeScript.
Le nouveau brief utilisateur remplace les hypothèses du cadrage initial.

- Homepage complète : hero, présentation, domaines en bento, projets, impact,
  histoires, partenariats, actualités, appel à l’action, footer.
- Nunito Sans variable locale ; direction **Lumière**, bleu nuit / ambre / papier clair.
- Lenis + GSAP/ScrollTrigger chargés à la demande sur desktop adapté.
- Mobile, mouvement réduit, appareils modestes et connexions 2G/Save-Data : contenu
  lisible avec défilement natif. Aucune scène WebGL ni vidéo lourde.
- Menu mobile avec focus contenu, Échap et retour de focus ; galerie horizontale native.
- Pages institutionnelles réelles : qui sommes-nous, programmes, projets, transparence,
  partenariats, plus impact, actualités, contact et conformité.
- Contact : **brouillon local**, copie et téléchargement. **Aucun e-mail n’est envoyé.**
- Pas de CMS, de paiement, d’analytics ni de traceur applicatif.
- Préproduction non indexable (`noindex` + `robots.txt`). Ce n’est pas un contrôle d’accès.

Les pages intérieures sont des gabarits de contenu en attente d’informations, pas des
pages institutionnelles définitives. La flamme est une **proposition graphique**, non un
logo officiel. Une seule fiche projet est publiée, celle transmise par SJCD le 1er octobre
2026 ; elle porte le statut « en préparation ». Aucun partenaire, témoignage, chiffre
d’impact ou photo de terrain n’est inventé : les emplacements photo restent vides tant que
les fichiers et les droits ne sont pas réunis.

## Démarrer

Prérequis : Node.js 22 et npm. Le lockfile est versionné.

```bash
npm ci
npm run dev                 # http://localhost:3000, écoute sur 0.0.0.0
```

L’application n’exige aucun secret pour fonctionner. `.env.example` reste un inventaire
prévisionnel ; ses intégrations ne sont pas actives.

```bash
npm run tokens:check        # JSON ↔ CSS synchronisés
npm run images:optimize     # redimensionne les images déposées (1600 px, JPEG)
npm run images:sync         # images déposées dans public/images/ → registre à jour
npm run images:check        # aucune image publiée sans fichier, légende ni droits
npm run lint
npm run typecheck           # après dev ou build pour les types générés Next
npm test                    # contrats, contrastes, confidentialité, catalogue, images
npm run build
npm run start               # build de production
npx playwright install --with-deps chromium
npm run test:e2e            # démarre la version de production si nécessaire
```

`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` permet d’utiliser un Chromium local pour les tests.
Ce chemin n’intervient jamais dans l’application livrée.

## Architecture

```text
app/                 Homepage, pages statiques, contact, 404, robots
components/          Navbar, Footer, PageShell, ContactDraft, FlameMark, motion
lib/content.ts       Identité, coordonnées publiées et emplacements de contenu
lib/data/media.ts    Registre des images (specs/images.json) et adresses publiques
public/images/       Dépôt des photos et du logo — voir public/images/README.md
specs/images.json    Emplacements photo attendus, légendes, droits, statut
scripts/images.mjs   Détection des fichiers déposés et contrôle des droits
scripts/optimize-images.mjs  Redimensionnement et conversion JPEG des images déposées
lib/statuts.ts       Vérités institutionnelles extraites des statuts et du RI, sourcées par article
lib/data/            Gouvernance, programmes, documents, projets, indicateurs, partenariats
lib/pages.ts         Textes des pages intérieures simples, explicitement provisoires
specs/design-tokens.json  Source actuelle des variables CSS (v2)
app/tokens.css       Généré par npm run tokens:build
scripts/            Génération / contrôle de synchronisation des tokens
tests/              Contrats et parcours Playwright + axe-core
docs/08_Direction_Lumiere.md  Direction artistique et état fonctionnel
documents/administratifs/     Statuts et règlement intérieur (PDF)
```

CSS moderne sans Tailwind, composants serveur par défaut. Le mouvement, le menu et le
brouillon local sont isolés dans de petits composants clients. Aucun besoin d’installer
plusieurs moteurs de transitions ou une bibliothèque 3D pour cette première version.

## Documents administratifs — source de vérité

Les documents institutionnels de SJCD sont regroupés dans `documents/administratifs/` :

- [Statuts — version professionnelle 2026](documents/administratifs/STATUTS_SJCD_ASBL_Version_Professionnelle_2026.pdf)
- [Règlement intérieur — version professionnelle 2026](documents/administratifs/REGLEMENT_INTERIEUR_SJCD_ASBL_Version_Professionnelle_2026.pdf)

Ces deux textes sont la **source principale de vérité** du contenu institutionnel. Leur
analyse article par article est consignée dans
[docs/11 — Analyse des statuts et du règlement intérieur](docs/11_Analyse_Statuts_RI.md) :
ce qui est documenté, ce qui peut être synthétisé, ce qui manque, ce qui ne doit pas être
inventé, et les contradictions à trancher avant publication.

Chaque affirmation institutionnelle du site cite son article (`S art. 6`, `RI art. 36`…). Ce
qui n’est pas documenté est affiché comme manquant, jamais complété : aucun projet, chiffre
d’impact, partenaire, financement, certification ni statut juridique n’est inventé. Des tests
automatisés verrouillent ces règles (`npm test`).

Ces documents sont des **propositions de rédaction à faire valider** par SJCD et par un
conseil juridique, pas des textes déposés ni opposables : leur adoption formelle, leur
notarisation et leur dépôt ne sont pas attestés. Ils ne sont pas servis par l’application —
ce dossier est du docs-as-code, distinct de `app/` et de tout contenu publié — et aucun
téléchargement n’est exposé sur `/transparence`.

## Déposer des images

Les photos et le logo se déposent dans **`public/images/`** : le fichier
[public/images/README.md](public/images/README.md) indique le dossier et le nom attendus
pour chaque visuel, notamment les sept emplacements du projet Chandelier 360°. Après le
dépôt :

```bash
npm run images:sync     # détecte les fichiers et met le registre à jour
npm run images:check    # vérifie fichiers, légendes et droits (utilisé par la CI)
```

Une image est affichée **uniquement** si son statut est `publiee` : fichier présent, texte
alternatif rédigé, crédit renseigné et — selon la nature — licence (illustration) ou autorisation
écrite des personnes identifiables (photographie documentaire). Sinon le site affiche un cadre
« Photo SJCD à venir ».

Quatre illustrations générées par IA sont publiées pour Chandelier 360° (couverture, formation
numérique, atelier d'entrepreneuriat, activité entrepreneuriale). Elles portent l'étiquette
« Illustration » et la mention « ne représente pas une activité réalisée par SJCD ». Trois
emplacements restent en attente et sont affichés comme tels.

## Design et documentation

- [Direction artistique, palette, composants et mouvement](docs/08_Direction_Lumiere.md)
- [Design system actuel](docs/03_UX_UI_Design_System.md)
- [Architecture actuelle](docs/05_Technical_Architecture.md)
- [Recette et suites](docs/07_Roadmap_QA.md)
- [Analyse des statuts et du règlement intérieur](docs/11_Analyse_Statuts_RI.md)
- [Tokens](specs/design-tokens.json)

Les autres documents conservent les propositions de la phase documentaire, signalées
comme antérieures au nouveau brief. Le modèle CMS est descriptif, **pas un schéma de
validation déjà implémenté**. Les documents juridiques de `documents/administratifs/` sont
à faire valider ; le statut ASBL seul ne permet pas de déduire toutes les obligations
applicables.

## Avant publication

1. Recevoir le logo officiel, la mission validée et le numéro d’enregistrement. *(Coordonnées
   et adresse reçues le 1er octobre 2026 et publiées.)*
2. Renseigner les domaines, rapports et chiffres d’impact **avec période et source**. *(Une
   fiche projet est publiée ; ses résultats attendus ne sont pas des résultats obtenus.)*
3. Déposer les photos dans `public/images/` puis documenter les droits à l’image et les
   autorisations de logos ; les emplacements restent visibles comme vides jusque-là.
4. Choisir CMS, prestataire e-mail, hébergement et domaine.
5. Implémenter les envois, sécurité et politiques correspondant aux traitements réels.
6. Audit manuel lecteur d’écran, Safari/Firefox, mobile réel, performance réseau limité.
7. Validation éditoriale et juridique puis ouverture de l’indexation.

**Propriété intellectuelle :** aucune licence définitive ni cession de droits n’est
présumée. Voir la décision D11 ; les dépendances et polices gardent leurs licences propres.
