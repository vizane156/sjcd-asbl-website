# Analyse approfondie — `sjcd-asbl-website`

> **Mise à jour — 28/09/2026.** Ce document conserve le cadrage initial, antérieur au
> nouveau brief. Pour l’état livré et les arbitrages actuels, lire
> [la direction Lumière](docs/08_Direction_Lumiere.md) et le README. Identité confirmée par l’utilisateur :
> **Sanctuaire de Jeunes Chandelier pour le Développement (SJCD ASBL), RDC**.
> D1 reste partiellement ouvert (registre, siège), D2 est renseigné ; D7 est une proposition.
> Nunito remplace Newsreader/Inter. Le motion adaptatif remplace les interdictions générales
> du premier cadrage. Le CMS, l’envoi d’e-mails et les dons ne sont pas implémentés.
> Les considérations juridiques anciennes sont des pistes, pas un avis applicable à SJCD :
> vérifier le droit congolais, le registre compétent et l’applicabilité du RGPD.


> Audit réalisé le **28 septembre 2026** sur le dépôt `vizane156/sjcd-asbl-website`,
> branche `arena/01a0e887-sjcd-asbl-website` (basée sur `main` @ `ed0c100`).

---

## 1. Résumé exécutif

**Le dépôt ne contient pas encore de projet : il contient l'annonce d'un projet.**

L'audit établit trois constats majeurs :

1. **Le dépôt est vide à 100 % du point de vue code.** Un seul commit (`ed0c100`, « first commit »), un seul fichier : `README.md` (2 210 octets, 36 lignes). Aucun `package.json`, aucun code source, aucun asset, aucune config.
2. **Le `README.md` est un index de spécification, pas une documentation de code.** Il décrit 12 livrables (7 documents, 1 prompt maître, 3 spécifications JSON, 1 fichier `.docx`) — **aucun n'est présent dans le dépôt**, ni dans l'historique Git, ni sur GitHub.
3. **L'intention du projet est en revanche parfaitement lisible** : un site institutionnel haut de gamme pour une ASBL nommée **SJCD**, en français, orienté *confiance → impact → partenariat → action*, dont l'esthétique est résumée par le mot-clé « 2050 ».

**Conséquence pratique :** le projet en est à la **phase 0 documentaire**, avant même l'initialisation technique. Le chemin critique n'est pas le code — c'est **la donnée institutionnelle réelle de SJCD** (chiffres d'impact, statuts, programmes, contacts, partenaires, mentions légales), aujourd'hui explicitement marquée `TODO`.

---

## 2. Méthode d'audit

Ce que j'ai inspecté, pour que les conclusions soient vérifiables :

| Vérification | Commande / source | Résultat |
|---|---|---|
| Contenu du dépôt | `find . -type f -not -path "./.git/*"` | **1 fichier** (`README.md`) |
| Historique | `git log --all --oneline` | **1 commit** (`ed0c100 first commit`) |
| Objets Git orphelins | `git fsck --lost-found` | **aucun** (rien à récupérer) |
| Stash / tags / notes | `git stash list`, `git tag -l`, `git notes list` | **vides** |
| Branches | `git branch -a` + API GitHub | `main` uniquement, aucune branche de travail |
| Issues / PR / Releases | `gh issue list`, `gh pr list`, `gh release list` | **aucune** |
| Arbre distant | `gh api .../git/trees/main?recursive=1` | **1 entrée** : `README.md` |
| Sites publiés | `has_pages`, `homepage` | `false`, `null` |
| Métadonnées du dépôt | `gh api repos/...` | public, **sans licence**, sans topics, **1 Ko** |
| Autres dépôts du compte | `gh repo list vizane156` | 2 dépôts : celui-ci + le profil (`vizane156/vizane156`) |
| Existence publique de SJCD | recherches web (FR, ASBL, ONG, RDC/Belgique) | **aucune trace exploitable** |

**Chronologie :** dépôt créé le **27/09/2026 à 08:58:50 UTC**, README poussé à **09:01:31 UTC**, dernier `pushed_at` : **09:01:31 UTC**. Le dépôt a donc **1 jour** et n'a connu **aucune activité depuis sa création**.

**Lecture du `README.md` :** hachage local `57377742e1acd54fddbd3e87fb817e194331ef75` — **identique** au blob distant. La copie de travail est donc synchrone avec GitHub : il n'existe pas de version « plus riche » quelque part en amont.

---

## 3. État factuel du dépôt

```
/home/user/sjcd-asbl-website
├── .git/           → 1 commit, 1 branche (main), 0 tag, 0 stash
└── README.md       → 2 210 octets, 36 lignes
```

Détails de l'unique commit :

| Champ | Valeur |
|---|---|
| SHA | `ed0c100e2c186163b87eadd568e3b26d7e5e0795` |
| Message | `first commit` |
| Auteur | Vital Zagabe `<vitalzagabe156@gmail.com>` |
| Date | dim. 27 sept. 2026, 10:58:28 +0200 |
| Statistiques | `1 file changed, 35 insertions(+)` |

Description GitHub officielle du dépôt :

> *« Official institutional website of SJCD ASBL, focused on impact, transparency, partnerships and fundraising. »*

**Absent du dépôt (et notable) :**

- pas de `LICENSE` → statut juridique du code indéterminé ;
- pas de `.gitignore` → la première génération d'un projet Node.js polluerait l'historique ;
- pas de `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, modèles d'issues/PR ;
- pas de CI/CD (`.github/workflows`), pas de Dependabot, pas de templates ;
- pas de `package.json`, `tsconfig.json`, `next.config.*`, pas de lockfile ;
- pas de dossier `public/` (donc **aucun logo, favicon ou asset de marque**) ;
- pas de `.env.example` (donc aucune convention de secrets établie).

**Détail de qualité :** le `README.md` se termine par un H1 orphelin `# sjcd-asbl-website`, résidu de la création automatique du dépôt. Il coexiste avec le H1 principal `# SJCD ASBL — Site institutionnel officiel` : deux H1 dans un fichier, à nettoyer.

---

## 4. Lecture du `README.md` : ce que le projet veut être

Le README, quoique court, est **dense en intentions**. Décodage :

### 4.1 Positionnement annoncé

| Axe | Formulation du README | Ce que cela implique concrètement |
|---|---|---|
| Nature | « vitrine institutionnelle de niveau international » | pas un blog, pas une app : un site de légitimité et de preuve |
| Registre | « premium, moderne, international » | typographie soignée, motion maîtrisé, densité visuelle faible, beaucoup d'air |
| Finalité | « crédibilité, impact et partenariats » | la conversion visée n'est pas l'achat mais **l'engagement** |
| Cibles d'action | « contacts, partenaires, bénévoles ou donateurs » | **4 personas de conversion distincts** → 4 parcours, pas un seul CTA |
| Esthétique | mot-clé **« 2050 »** | futurisme de *précision*, pas de *décor* |
| Garde-fou | « futuriste dans les interactions et la précision visuelle, mais **jamais gadget** » | contrainte d'arbitrage explicite : l'effet cède devant la sobriété |
| Qualité | « sobre, humain, crédible et **accessible** » | l'accessibilité est posée comme une exigence produit, pas une option |

### 4.2 La règle produit fondamentale

> *« Le site n'est pas une simple brochure. Il doit agir comme un **système de confiance** : preuve institutionnelle → preuve d'impact → opportunité de partenariat → action. »*

C'est **le cœur conceptuel du projet**. Ce n'est pas une phrase de style : c'est un **entonnoir de conversion en 4 étages**, qui doit se traduire dans l'architecture de l'information :

1. **Preuve institutionnelle** — qui est SJCD, statuts, gouvernance, transparence, mentions légales, rapports.
2. **Preuve d'impact** — chiffres, programmes, terrains, témoignages, photos documentées.
3. **Opportunité de partenariat** — pourquoi et comment travailler avec SJCD (institutions, bailleurs, entreprises).
4. **Action** — don, contact, bénévolat, adhésion.

**Implication de conception :** toute page du site devrait pouvoir être rattachée à l'un de ces 4 étages. Une page qui n'alimente aucun étage est une page à supprimer.

### 4.3 Le principe méthodologique implicite

La liste des livrables révèle une méthode **« spec-first » / docs-as-code** :

```
PRD  →  Sitemap + Contenu  →  UX/UI Design System  →  Modèle éditorial & CMS
     →  Architecture technique  →  SEO/A11y/Sécurité/Analytics  →  Roadmap & QA
     →  génération d'UI (v0.app)  →  implémentation Next.js
```

Autrement dit : **on conçoit entièrement sur le papier avant d'écrire une ligne de code**, et on utilise un prompt maître pour générer les maquettes. C'est une approche rigoureuse — et cohérente avec la revendication « premium » : on ne veut pas d'un site improvisé.

---

## 5. Écart entre l'annoncé et le réel

Le README déclare 12 livrables. Voici l'état réel de chacun :

| # | Livrable annoncé | Rôle attendu | État |
|---|---|---|---|
| 1 | `docs/01_PRD.md` | Cahier des charges produit | ❌ **absent** |
| 2 | `docs/02_Sitemap_And_Content.md` | Arborescence + contenu | ❌ **absent** |
| 3 | `docs/03_UX_UI_Design_System.md` | UX/UI, motion, typo, composants | ❌ **absent** |
| 4 | `docs/04_Content_CMS.md` | Modèle éditorial et CMS | ❌ **absent** |
| 5 | `docs/05_Technical_Architecture.md` | Architecture Next.js/React | ❌ **absent** |
| 6 | `docs/06_SEO_A11y_Security_Analytics.md` | SEO, accessibilité, sécurité, analytics | ❌ **absent** |
| 7 | `docs/07_Roadmap_QA.md` | Roadmap MVP + critères d'acceptation | ❌ **absent** |
| 8 | `prompts/01_v0_Master_Prompt.md` | Prompt maître pour v0.app | ❌ **absent** |
| 9 | `specs/content-model.json` | Modèle de contenu structuré | ❌ **absent** |
| 10 | `specs/design-tokens.json` | Tokens de design de départ | ❌ **absent** |
| 11 | `specs/sitemap.json` | Sitemap machine-readable | ❌ **absent** |
| 12 | `SJCD_Website_Master_Specification.docx` | Document maître consolidé | ❌ **absent** |
| — | `README.md` | Index et vision | ✅ **présent** |

**Taux de complétion documentaire : 1/13 (≈ 8 %). Taux de complétion logicielle : 0 %.**

### Interprétation

Ces documents ont très probablement été produits **hors du dépôt** — dans une conversation avec un assistant IA, un drive, ou un éditeur local — puis **seul leur index a été versionné**. C'est le risque classique : la « base de conception » évoquée par le README (« Statut : Base de conception et de développement ») **existe peut-être, mais elle n'est pas sous contrôle de version**. Elle est donc :

- non reproductible, non diffable, non relue en équipe ;
- invisible pour un futur développeur ou un prestataire (v0.app, agence) ;
- potentiellement perdue.

👉 **Première action à fort effet de levier : rapatrier ou reconstruire ces 12 livrables dans le dépôt.** Sans cela, le README reste une promesse non tenue, et toute reprise du projet repartira de zéro.

---

## 6. Architecture produit implicite (reconstruction)

En croisant les intitulés des livrables et la règle de confiance en 4 étages, voici l'architecture que le projet appelle — c'est un **modèle à valider**, pas un fait établi.

### 6.1 Pile technique attendue

| Couche | Choix induit par le README | Remarque |
|---|---|---|
| Framework | **Next.js** (App Router) + **React** | explicitement cité (« architecture technique Next.js/React ») |
| Langage | **TypeScript** | standard de facto, cohérent avec le profil du mainteneur |
| Styles | **Tailwind CSS** + **design tokens** pilotés par `specs/design-tokens.json` | le fichier de tokens sert de **source unique de vérité** |
| Rendu | SSG / ISR pour les pages de contenu, SSR si formulaire dynamique | enjeu : performance + SEO sur des pages essentiellement statiques |
| CMS | *headless* (modèle décrit dans `04_Content_CMS.md`) | indispensable : SJCD doit publier ses rapports et actualités sans développeur |
| Contenu | Markdown/MDX ou entrées CMS typées via `specs/content-model.json` | le JSON est le contrat entre éditorial et code |
| UI générée | **v0.app** via `prompts/01_v0_Master_Prompt.md` | accélérateur de maquette, **pas** une source de vérité |
| Hébergement | Vercel (cohérent avec l'écosystème Next.js) | à confirmer côté budget/association |
| Analytics | solution respectueuse de la vie privée + bandeau de consentement | sans consentement : pas de mesure en Europe |
| Formulaires | contact / partenariat / bénévolat / don | 4 entrées = 4 parcours à tracer |

### 6.2 Arborescence fonctionnelle déductible de la règle « système de confiance »

```
/                       Accueil — promesse + preuve d'impact immédiate
/qui-sommes-nous        Étage 1 — identité, histoire, mission, gouvernance, statuts
/programmes             Étage 2 — un programme = un problème + des chiffres + des preuves
/impact                 Étage 2 — tableau de bord des indicateurs, rapports annuels
/partenaires            Étage 3 — qui nous soutient, et pourquoi
/devenir-partenaire     Étage 3 — proposition de valeur, dossier de partenariat (PDF)
/nous-soutenir          Étage 4 — don, parrainage, legs ; transparence sur l'usage des fonds
/benevolat              Étage 4 — missions, candidature
/actualites             Preuve de vitalité (fraîcheur = signal de crédibilité)
/rapports               Transparence : comptes, rapports d'activité, audits
/contact                Action + mentions légales
/mentions-legales, /vie-privee, /cookies     Obligations RGPD + ASBL
```

⚠️ **Ceci est une reconstruction raisonnée, pas le sitemap réel du projet.** Le vrai sitemap est censé vivre dans `specs/sitemap.json` — absent.

### 6.3 Ce que l'on peut déduire du public visé

| Persona | Ce qu'il vient chercher | Preuve décisive à fournir | Action attendue |
|---|---|---|---|
| **Bailleur / institution** (UE, coopération, commune) | Capacité de gestion, gouvernance, résultats | statuts, comptes, rapports, indicateurs | demande de dossier / partenariat |
| **Entreprise mécène** | Alignement, visibilité, sérieux | rapport annuel, gouvernance, chiffres | prise de contact, convention |
| **Donateur individuel** | Confiance et transparence d'usage des fonds | répartition des dépenses, témoignages | don |
| **Bénévole** | Sens, concret, accessibilité de l'engagement | missions décrites, témoignages | candidature |
| **Journaliste / chercheur** | Faits, contact, archives | kit presse, contacts, données | demande d'information |
| **Bénéficiaire** | Accès à un service / aide | coordonnées, zones d'intervention | prise de contact |

**Point saillant :** ces six publics ont des besoins **contradictoires en densité d'information**. Le design « 2050 » devra organiser cette densité par profondeur (résumé → détail → document), pas en empilant tout sur la même page.

---

## 7. Spécificités d'une ASBL : ce que le site doit porter juridiquement

Le sigle **ASBL** (*association sans but lucratif*) désigne au moins **trois régimes distincts** : **Belgique** (Code des sociétés et des associations, livre 9), **Luxembourg**, et **République démocratique du Congo**. Le profil du mainteneur (RDC/Burundi) et le positionnement « international » du README ne permettent pas de trancher — **c'est une question bloquante** (voir §12).

Selon la juridiction retenue, le site devra intégrer :

- **Identification obligatoire** : dénomination sociale complète avec la mention « ASBL », siège social, numéro d'entreprise (BCE/KBO en Belgique), personne de contact responsable. Ces mentions doivent être accessibles **depuis toutes les pages** (pied de page).
- **Transparence comptable** : publication des comptes annuels et du rapport d'activité. Un site qui prétend vendre de la « transparence » tout en ne publiant aucun compte se contredit — c'est un risque de crédibilité majeur pour la cible « bailleurs ».
- **RGPD / vie privée** : politique de confidentialité, base légale des traitements (formulaires), durées de conservation, droits des personnes, registre des cookies, **consentement préalable** pour tout traceur non essentiel.
- **Collecte de dons** : conformité paiement (Stripe / Mollie / Bancontact), sécurité des transactions, et — si des reçus fiscaux sont promis — vérification de l'agrément permettant la **déductibilité fiscale** (l'agrément n'est pas automatique).
- **Contenus sensibles** : photographies de bénéficiaires (consentement, dignité, pas de misérabilisme — sujet éthique central pour une ONG), données de mineurs, récits de terrain.
- **Accessibilité** : l'engagement « accessible » du README doit être traduit en objectif testable (WCAG 2.2 niveau AA est la référence usuelle, et un standard en Europe pour le secteur public/parapublic).

C'est exactement le périmètre de `docs/06_SEO_A11y_Security_Analytics.md`. **Ce fichier manquant porte des obligations, pas seulement des bonnes pratiques.**

---

## 8. Risques, incohérences et angles morts

### Risques élevés

| # | Risque | Pourquoi c'est sérieux | Mitigation |
|---|---|---|---|
| **R1** | **La base documentaire est hors dépôt** (12/13 livrables absents) | Perte, non-reproductibilité, reprise impossible, désaccord futur sur « ce qui était prévu » | Rapatrier ou reconstruire les livrables, commit par commit |
| **R2** | **Le contenu réel n'existe pas** (tout est `TODO`) | Aucun design ne sauve une page « chiffres d'impact : à définir ». La donnée est le **chemin critique**, pas le code | Campagne de collecte de données auprès de SJCD **avant** de maquetter |
| **R3** | **Identité publique de SJCD introuvable** | L'acronyme « SJCD » est ambigu et déjà utilisé par d'autres entités en ligne → concurrence sur le nom, SEO à froid, risque de confusion de marque | Valider le nom complet, le pays, le registre ; définir les mots-clés de marque |
| **R4** | **Juridiction de l'ASBL non précisée** | Détermine mentions légales, comptes à publier, régime des dons, obligations de transparence | Question bloquante remontée à SJCD |
| **R5** | **Périmètre non budgété** | 7 documents de spécification + CMS + design system + 4 parcours de conversion + exigences RGPD = **un projet de plusieurs semaines**, pour une structure associative | Découper un MVP strict : 5–6 pages qui prouvent l'impact, le reste en phase 2 |
| **R6** | **Langues non définies** | « international » + Belgique ⇒ FR / NL / EN au minimum. Le monolinguisme est un choix à assumer, pas un oubli : il change l'URL, le SEO (`hreflang`), le CMS et le coût | Trancher explicitement (voir §12) |

### Risques modérés

| # | Risque | Détail |
|---|---|---|
| R7 | **Dérive « 2050 »** | Le risque esthétique n°1 : un futurisme gadget qui écrase la sobriété. Il faut un **arbitre écrit** : contraste AA, `prefers-reduced-motion`, budget d'animation, aucune interaction bloquante, tolérance aux vieux appareils et aux connexions lentes (réalité des audiences africaines) |
| R8 | **Incohérence v0.app ↔ design tokens** | Si les maquettes v0.app ne dérivent pas des tokens JSON, on obtient deux design systems divergents → dette de refonte. Règle : **les tokens sont la source unique**, v0.app consomme, ne décide pas |
| R9 | **Performance & poids** | Le public béninois/congolais/burundais navigue souvent en 3G et sur forfait data. Un site « premium » lourd est un site inaccessible pour une partie de l'audience visée. Objectif : budget de performance explicite |
| R10 | **Dépendance à un seul mainteneur** | 1 auteur, 1 commit, aucun CI : pas de filet de sécurité. Ajouter lint + build + tests de lien dès l'initialisation |
| R11 | **Gouvernance du dépôt** | Pas de licence ni de `CONTRIBUTING` : flou si un bénévole ou une agence contribue |

### Angles morts (absents du README, mais nécessaires)

- **Mesure de succès** : aucun KPI n'est défini (nb de demandes de partenariat ? dons ? taux de contact ?). Sans KPI, le critère d'acceptation du MVP est indéfini.
- **Accessibilité : aucun niveau cible chiffré** (« accessible » sans référentiel n'est pas testable).
- **Sécurité** : la liste mentionne « security » dans un titre de document, mais rien sur les secrets, l'anti-spam des formulaires, la protection des données.
- **Cycle de vie éditorial** : qui écrit, qui valide, à quelle fréquence ? Un site institutionnel meurt par abandon de contenu. Le README le frôle (doc 04 CMS) sans le traiter.
- **Kit de marque** : aucun logo, aucune charte, aucune couleur. `design-tokens.json` est censé pallier, mais les tokens doivent dériver d'une identité, pas la précéder.
- **Multilinguisme** (voir R6).
- **Cycle de vie du don / relation donateur** : reçu, remerciement, reporting — un don est le début d'une relation, pas une transaction.

---

## 9. Le vrai chemin critique : les données `TODO`

Le README désigne lui-même le blocage :

> *« chiffres d'impact, programmes, statuts, coordonnées officielles, partenaires, logos, témoignages, rapports et contenus juridiques »*

Ordonnons ces données par **criticité décroissante** (ce qui débloque quoi) :

| Priorité | Donnée | Débloque | Sans elle… |
|---|---|---|---|
| **P0** | Nom complet, signification de l'acronyme, pays/régime juridique, objet social | Mentions légales, nom de domaine, identité | Rien ne peut être publié |
| **P0** | Numéro d'entreprise, siège, contact officiel, responsable de publication | Conformité, pied de page | Site non conforme |
| **P0** | 5–8 chiffres d'impact vérifiables (bénéficiaires, zones, années, budgets) | Page d'accueil, page impact, pitch partenaires | La « preuve d'impact » — cœur du concept — est vide |
| **P0** | Liste des programmes (nom, problème, action, résultat, zone, durée) | Pages programmes, navigation | Le site n'a pas de contenu substantiel |
| **P1** | Identité visuelle : logo, couleurs, typographie | `design-tokens.json`, maquettes | Le design ne peut pas démarrer proprement |
| **P1** | Comptes / rapports annuels publiables + gouvernance | Étage « preuve institutionnelle » | Discours de transparence non étayé |
| **P1** | Partenaires et logos (avec autorisation d'usage écrite) | Page partenaires, crédibilité | Crédibilité affaiblie |
| **P1** | Témoignages (bénéficiaires, partenaires) + consentements signés | Humanisation, conversion | Site sans voix |
| **P2** | Photothèque de terrain (droits à l'image réglés) | Design émotionnel | Site « 2050 » sans humain |
| **P2** | Langues cibles et juridiction des traductions | IA & SEO multilingue | Refonte d'architecture plus tard |
| **P2** | Canaux de don acceptés, statut fiscal des dons | Page « nous soutenir » | Parcours don inopérant |

👉 **P0 = 4 blocs.** Tant qu'ils ne sont pas fournis et validés, aucune maquette sérieuse ne peut être finalisée : on produirait du décor, pas du contenu. **C'est le message principal de cette analyse.**

---

## 10. Plan d'action recommandé

### Phase 0 — Rétablir la vérité documentaire (bloquant, avant tout code)

1. Récupérer les 12 livrables existants s'ils existent ailleurs, et les **committer**.
2. S'ils n'existent pas : les reconstruire dans cet ordre de valeur — `01_PRD`, `02_Sitemap_And_Content`, `specs/sitemap.json`, `specs/content-model.json`, `03_UX_UI_Design_System`, `specs/design-tokens.json`, `05_Technical_Architecture`, `06_SEO_A11y_Security_Analytics`, `07_Roadmap_QA`, `04_Content_CMS`, `prompts/01_v0_Master_Prompt`.
3. Créer les fichiers d'hygiène : `.gitignore`, `LICENSE`, `.github/workflows/ci.yml`, `.env.example`.
4. Nettoyer le H1 orphelin du README et y ajouter un **tableau d'état des livrables** (le README deviendra le tableau de bord du projet).

**Critère d'acceptation :** `ls docs specs prompts` retourne les 12 fichiers annoncés ; chaque `TODO` est listé de façon centralisée et traçable.

### Phase 1 — Socle technique

5. Initialiser Next.js (App Router) + TypeScript + Tailwind, `eslint` + `prettier`, CI build/lint.
6. Brancher les **design tokens** comme source unique (CSS variables générées depuis `design-tokens.json`).
7. Poser la coquille : layout, header/footer avec mentions légales, navigation, page 404, `sitemap.xml`, `robots.txt`, métadonnées SEO par défaut.
8. Accessibilité dès la première ligne : navigation clavier, contrastes, `prefers-reduced-motion`, structure sémantique.

**Critère d'acceptation :** build vert, déploiement de prévisualisation fonctionnel, audit Lighthouse/Axe sur la coquille ≥ cible fixée.

### Phase 2 — Contenu et preuve

9. Implémenter le modèle de contenu et les 5–6 pages du **MVP** : Accueil, Qui sommes-nous, Programmes, Impact, Devenir partenaire / Nous soutenir, Contact.
10. Brancher le CMS pour que SJCD publie en autonomie (actualités, rapports).
11. Remplacer chaque `TODO` par la donnée validée.

**Critère d'acceptation :** zéro `TODO` en production sur les pages du MVP ; les 4 étages de la règle de confiance sont visibles et navigables.

### Phase 3 — Conversion, conformité, mesure

12. Formulaires (contact, partenariat, bénévolat, don) + anti-spam + accusé de réception + traçabilité RGPD.
13. Mentions légales, vie privée, cookies, bandeau de consentement, analytics respectueux de la vie privée.
14. SEO : données structurées `Organization`/`NGO`, métadonnées, maillage interne, `hreflang` si multilingue.
15. QA : tests d'accessibilité, budget de performance (3G), tests multi-navigateurs, tests de contenu juridique.

### Phase 4 — Après lancement

16. Gouvernance éditoriale : qui met à jour quoi, à quelle fréquence ; rapport d'impact annuel.
17. Mesure : tableau de bord des KPI (demandes de partenariat, dons, contacts, bénévolat).
18. Améliorations incrémentales guidées par la donnée, pas par l'esthétique.

---

## 11. Structure de dépôt cible proposée

```
sjcd-asbl-website/
├─ README.md                     # vision + tableau d'état des livrables (source de vérité)
├─ ANALYSE_PROJET.md             # ce document (audit fondateur)
├─ LICENSE                       # à trancher avec SJCD
├─ .gitignore  .env.example  .editorconfig
├─ .github/workflows/ci.yml      # lint + build + tests
├─ docs/
│  ├─ 01_PRD.md
│  ├─ 02_Sitemap_And_Content.md
│  ├─ 03_UX_UI_Design_System.md
│  ├─ 04_Content_CMS.md
│  ├─ 05_Technical_Architecture.md
│  ├─ 06_SEO_A11y_Security_Analytics.md
│  └─ 07_Roadmap_QA.md
├─ prompts/01_v0_Master_Prompt.md
├─ specs/
│  ├─ content-model.json
│  ├─ design-tokens.json
│  └─ sitemap.json
└─ app/ …                        # (phase 1) Next.js : app/, components/, lib/, public/, messages/
```

---

## 12. Décisions à obtenir de SJCD (bloquantes)

À faire trancher **avant** la phase 1 — chacune change l'architecture :

1. **Que signifie « SJCD » ?** Nom légal complet, et pays du siège (Belgique / Luxembourg / RDC) → détermine les obligations légales.
2. **Quel est l'objet social exact**, et quels sont les 3 programmes prioritaires à mettre en avant ?
3. **Quels chiffres d'impact sont vérifiables** et publiables (avec source et période) ?
4. **Langues du site** : FR seul, FR/NL, ou FR/NL/EN ?
5. **Quel est l'objectif n°1 du site à 6 mois** : crédibilité, partenariats, dons, ou recrutement de bénévoles ? (Un objectif principal, pas quatre.)
6. **Qui est propriétaire et administrateur** du futur site (domaine, hébergement, CMS, comptes) ?
7. **Existe-t-il une identité visuelle** (logo, charte) ou faut-il la créer ?
8. **Y a-t-il un budget** (design, développement, hébergement, traduction, photographie) et une échéance ?
9. **Qui valide les contenus** avant publication (nom et rôle du responsable éditorial) ?
10. **Collecte de dons** : quels moyens de paiement, et quel statut fiscal pour les donateurs ?

---

## 13. Conclusion

Ce dépôt contient **une vision claire et un plan de conception solide — mais ni contenu, ni code, ni preuve**.

Le projet est bien pensé : la règle « preuve institutionnelle → preuve d'impact → partenariat → action » est un vrai cadre de conception, et la discipline documentaire annoncée est supérieure à la moyenne des sites associatifs. **Le risque n'est donc pas l'ambition : c'est l'ordre des opérations et la disponibilité des données.**

Deux erreurs sont à éviter :

- **Construire le design avant d'avoir les faits** → un magnifique site vide, contradictoire avec la promesse de transparence.
- **Laisser la documentation hors du dépôt** → une base de conception qui s'évapore, et un projet qui redémarre à chaque nouvelle session.

**Le geste fondateur à poser maintenant est modeste et non technique :** faire entrer dans Git les 12 livrables annoncés, et obtenir de SJCD les 4 blocs de données P0. Le code, lui, est la partie facile — Next.js, des tokens, six pages, des formulaires. C'est le contenu qui fera la crédibilité, et c'est le contenu qui manque.

---

*Analyse produite le 28/09/2026 — fondée sur l'unique commit `ed0c100` et sur l'état du dépôt distant au même instant. Les sections 6 et 8 contiennent des reconstructions raisonnées, explicitement distinguées des constats vérifiables des sections 2, 3 et 5.*
