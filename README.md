# SJCD ASBL — une présence institutionnelle, humaine et immersive

**Salon de Jeunes Chandelier pour le Développement** · République démocratique du Congo.

## Dernière itération — 29/09/2026

Fondations institutionnelles et homepage améliorées **dans l’architecture existante** :
identité Salon, ancrage Uvira / Sud-Kivu, Nunito Sans, CTA impact/soutien, impact en début
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
- Pages institutionnelles, projets, impact, partenariats, actualités, contact et conformité.
- Contact : **brouillon local**, copie et téléchargement. **Aucun e-mail n’est envoyé.**
- Pas de CMS, de paiement, d’analytics ni de traceur applicatif.
- Préproduction non indexable (`noindex` + `robots.txt`). Ce n’est pas un contrôle d’accès.

Les pages intérieures sont des gabarits de contenu en attente d’informations, pas des
pages institutionnelles définitives. La flamme est une **proposition graphique**, non un
logo officiel. Aucun partenaire, projet, témoignage, chiffre ou photo de terrain n’est inventé.

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
npm run lint
npm run typecheck           # après dev ou build pour les types générés Next
npm test                    # 5 contrôles de contrats, contrastes, confidentialité
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
lib/content.ts       Identité et emplacements de contenu
lib/pages.ts         Textes des pages intérieures, explicitement provisoires
specs/design-tokens.json  Source actuelle des variables CSS (v2)
app/tokens.css       Généré par npm run tokens:build
scripts/            Génération / contrôle de synchronisation des tokens
tests/              Contrats et parcours Playwright + axe-core
docs/08_Direction_Lumiere.md  Direction artistique et état fonctionnel
```

CSS moderne sans Tailwind, composants serveur par défaut. Le mouvement, le menu et le
brouillon local sont isolés dans de petits composants clients. Aucun besoin d’installer
plusieurs moteurs de transitions ou une bibliothèque 3D pour cette première version.

## Design et documentation

- [Direction artistique, palette, composants et mouvement](docs/08_Direction_Lumiere.md)
- [Design system actuel](docs/03_UX_UI_Design_System.md)
- [Architecture actuelle](docs/05_Technical_Architecture.md)
- [Recette et suites](docs/07_Roadmap_QA.md)
- [Tokens](specs/design-tokens.json)

Les autres documents conservent les propositions de la phase documentaire, signalées
comme antérieures au nouveau brief. Le modèle CMS est descriptif, **pas un schéma de
validation déjà implémenté**. Les documents juridiques sont à faire valider ; le statut
ASBL seul ne permet pas de déduire toutes les obligations applicables.

## Avant publication

1. Recevoir logo officiel, mission validée, siège, registre et coordonnées.
2. Renseigner domaines, projets, rapports, chiffres **avec période et source**.
3. Obtenir droits à l’image et autorisations de logos ; remplacer les emplacements.
4. Choisir CMS, prestataire e-mail, hébergement et domaine.
5. Implémenter les envois, sécurité et politiques correspondant aux traitements réels.
6. Audit manuel lecteur d’écran, Safari/Firefox, mobile réel, performance réseau limité.
7. Validation éditoriale et juridique puis ouverture de l’indexation.

**Propriété intellectuelle :** aucune licence définitive ni cession de droits n’est
présumée. Voir la décision D11 ; les dépendances et polices gardent leurs licences propres.
