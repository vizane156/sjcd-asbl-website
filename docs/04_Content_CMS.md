# 04 — Modèle éditorial et CMS

**Projet :** site institutionnel officiel de SJCD ASBL
**Document :** `docs/04_Content_CMS.md` — v1.0
**Statut :** base de travail — **à valider par SJCD**
**Source unique de vérité technique :** `specs/content-model.json`

---

## 1. Objectif : un site qui vit sans développeur

Le site institutionnel de SJCD doit pouvoir être **mis à jour par SJCD elle-même**,
durablement, sans compétence technique. C'est une contrainte de pérennité (C6 du PRD) :
un site que seule une personne sait modifier devient obsolète au premier départ.

Mais l'autonomie a un coût : elle exige un **modèle éditorial strict**. Sans structure,
un CMS produit un site incohérent en quelques mois. C'est pourquoi ce document définit
moins des champs que des **règles** : qui publie quoi, sous quelle forme, avec quelle
validation, et à quelle fréquence.

**Principe directeur :** *le CMS doit rendre le bon contenu facile et le mauvais contenu
difficile.* Si publier un chiffre non sourcé est plus simple que publier un chiffre
sourcé, c'est le modèle qui est fautif.

## 2. Choix de la plateforme (décision D6)

### 2.1 Critères

| Critère | Poids | Exigence |
|---|---|---|
| Utilisable par un non-technicien | 🔴 critique | interface d'édition claire, aperçu avant publication |
| Coût pour une ASBL | 🔴 critique | palier gratuit suffisant, pas de coût caché à la croissance |
| Intégration Next.js | 🟠 élevé | API typée, aperçu de brouillon, revalidation à la publication |
| Souveraineté et RGPD | 🟠 élevé | hébergement UE, sous-traitant identifié, données des éditeurs protégées |
| Charge d'exploitation | 🟠 élevé | pas d'équipe technique interne — éviter l'auto-hébergement |
| Modèle de contenu contraint | 🟠 élevé | champs obligatoires, validation, relations typées |
| Réversibilité | 🟡 moyen | export des données en formats ouverts (JSON/Markdown) |

### 2.2 Options comparées

| Option | Avantages | Inconvénients | Verdict |
|---|---|---|---|
| **CMS headless hébergé** (type Sanity, Storyblok, Prismic) | aucun serveur à gérer, interface soignée, aperçu intégré, palier gratuit | dépendance à un tiers, coût au-delà du palier gratuit | ✅ **recommandé** |
| **Payload CMS** (Next.js natif) | un seul déploiement, TypeScript de bout en bout, contrôle total | administration à opérer, mise à jour à suivre | 💡 bon si SJCD a un hébergeur fiable |
| **Directus / Strapi auto-hébergés** | souveraineté maximale, base SQL | véritable charge d'exploitation (base, sauvegardes, sécurité) | ⚠️ à éviter sans équipe |
| **Git-based** (Decap/Tina + Markdown) | gratuit, traçable, aucun service tiers | éditer dans Git déroute un non-technicien ; gestion des images et des brouillons laborieuse | ⚠️ acceptable en repli |
| **WordPress** | très répandu, hébergement simple | sécurité à maintenir, écosystème lourd, expérience d'édition disparate | ❌ hors périmètre (site headless) |

**Recommandation :** CMS headless hébergé, hébergement UE, palier gratuit, avec
**export régulier des contenus en JSON dans le dépôt** (sauvegarde et réversibilité).

⚠️ **Point de vigilance contractuel** : tout CMS hébergé implique un **sous-traitant au
sens du RGPD**. Un accord de traitement des données (DPA) doit être signé et archivé.
Voir `docs/06` §5.

## 3. Modèle de contenu

Le modèle est spécifié dans `specs/content-model.json`. Vue d'ensemble :

| Collection | Nature | Cardinalité | Rôle |
|---|---|---|---|
| `siteSettings` | singleton | 1 | identité légale, coordonnées, réseaux, textes globaux |
| `navigation` | singleton | 1 | structure des menus (en-tête, pied de page) |
| `homePage` | singleton | 1 | contenu de l'accueil, structuré par sections |
| `aboutPage` | singleton | 1 | mission, histoire, valeurs, gouvernance |
| `impactPage` | singleton | 1 | indicateurs, méthodologie |
| `partnershipPage` | singleton | 1 | proposition de valeur, processus |
| `contactPage` | singleton | 1 | coordonnées, blocs d'information |
| `program` | collection | 0..n | un document par programme |
| `impactMetric` | collection | 0..n | un document par indicateur chiffré |
| `report` | collection | 0..n | rapports et documents téléchargeables |
| `testimonial` | collection | 0..n | citations attribuées et autorisées |
| `partner` | collection | 0..n | partenaires et autorisations de logos |
| `person` | collection | 0..n | membres de l'équipe et de la gouvernance |
| `milestone` | collection | 0..n | étapes de l'histoire de l'organisation |
| `newsPost` | collection | 0..n | actualités *(v1.1)* |
| `legalPage` | collection | 0..n | mentions légales, vie privée, accessibilité |
| `faqItem` | collection | 0..n | questions fréquentes *(option)* |

### 3.1 Champs transversaux obligatoires

Tout document éditorial porte ces champs. Ils sont **la colonne vertébrale de la
traçabilité** du site :

| Champ | Type | Obligatoire | Rôle |
|---|---|---|---|
| `_id` | identifiant | oui | référence technique |
| `title` | texte | oui | titre interne et public |
| `slug` | slug | oui (collections) | URL ; unique, stable, jamais modifié sans redirection |
| `locale` | énum | oui | langue du document |
| `status` | énum | oui | `draft` · `review` · `published` · `archived` |
| `summary` | texte court (≤ 180 car.) | oui | résumé réutilisé en liste, carte et métadonnée SEO |
| `seo` | objet | non | titre, description, image de partage explicites |
| `lastReviewedAt` | date | oui | **date de dernière vérification de l'exactitude** |
| `sourceRefs` | liste | oui si fait chiffré | liens ou références des sources |
| `consentRef` | texte | oui si personne identifiable | référence de l'autorisation écrite |
| `internalNotes` | texte | non | notes non publiées |

### 3.2 Règles de validation (appliquées par le CMS)

Ces règles ne sont pas des recommandations : elles doivent être **implémentées comme
contraintes**, de sorte qu'un contenu non conforme ne puisse pas être publié.

| # | Règle | Raison |
|---|---|---|
| V1 | `summary` : 40 à 180 caractères | qualité des listes et des métadonnées |
| V2 | `impactMetric` : `value`, `period`, `methodology` et `sourceRefs` obligatoires | **un chiffre sans période ni source n'est pas publiable** (règle de vérité, `docs/02` §4.4) |
| V3 | `testimonial` : `consentRef` obligatoire pour publier | protection des personnes |
| V4 | `partner` : `logoAuthorizationRef` obligatoire pour afficher un logo | droit des marques |
| V5 | Toute image de personne identifiable : `consentRef` obligatoire | droit à l'image, protection des mineurs |
| V6 | `slug` immuable après publication (sauf redirection créée) | pérennité des URL et du référencement |
| V7 | `person`: `role`, `organization`, `mandateStart` obligatoires | crédibilité de la gouvernance |
| V8 | Toute date publiée est une date réelle du CMS, jamais une date saisie en texte libre | exactitude |
| V9 | `status: published` exige `lastReviewedAt` < 12 mois | fraîcheur ; un contenu périmé repasse en revue |
| V10 | Aucun champ ne peut contenir de données personnelles de bénéficiaire | minimisation RGPD |

### 3.3 Le cas particulier des indicateurs d'impact

C'est la collection la plus sensible du site, et celle qui justifie le modèle. Structure
imposée d'un `impactMetric` :

```
value            nombre ou texte court      ← la valeur brute
unit             énum (personnes, %, FCFA/EUR, structures, tonnes…)
label            texte                      ← formulation publique, une phrase
period            texte + date de fin       ← JAMAIS implicite
scope            énum (organisation, programme, zone)
programRef       référence optionnelle      ← rattachement au programme
methodology      texte long obligatoire     ← comment ce chiffre a été obtenu
sourceRefs       liste obligatoire          ← rapport, registre, base interne
limitations      texte long optionnel       ← ce que le chiffre ne dit pas
verifiedBy       texte obligatoire          ← qui a validé
verifiedAt       date obligatoire
```

**Interdiction absolue :** aucune valeur d'un `impactMetric` ne peut être saisie en texte
libre dans une page. L'accueil et la page Impact **référencent** ces documents. Modifier
un chiffre se fait à un seul endroit, et l'effet est immédiat partout.

## 4. Rôles et permissions

| Rôle | Peut faire | Ne peut pas faire |
|---|---|---|
| **Éditeur·rice** | créer et modifier des brouillons, téléverser des médias | publier, archiver, modifier les paramètres du site |
| **Responsable éditorial·e** (D9) | tout ce qui précède + **publier** + envoyer en revue + archiver | modifier les rôles, supprimer des documents publiés |
| **Administrateur·rice technique** | gérer les utilisateurs, les champs, les intégrations, les redirections | — |
| **Contributeur·rice externe** (optionnel) | proposer un brouillon d'actualité | publier, accéder aux autres contenus |

**Règle des deux paires d'yeux** : un document est rédigé par une personne et publié par
une autre, ou au minimum relu par une autre. Aucun contenu factuel n'est publié par son
seul auteur. Pour une petite équipe, la règle s'assouplit pour les actualités, jamais pour
les chiffres d'impact, les mentions légales ou les témoignages.

⚠️ `TODO(SJCD)` : identifier nommément le·la responsable éditorial·e — **D9**. Sans cette
personne, l'autonomie éditoriale reste théorique et le site se figera.

## 5. Cycle de vie éditorial

### 5.1 Workflow

```
Brouillon ──▶ En revue ──▶ Publié ──▶ (Révision programmée) ──▶ Archivé
   │              │            │
   │              │            └── revalidation à 12 mois (V9)
   │              └── contrôle de conformité : sources, consentements, autorisations
   └── l'auteur peut voir l'aperçu
```

**Contrôle de conformité avant publication — check-list non négociable :**

- [ ] Toutes les données factuelles sont sourcées (`sourceRefs` renseigné).
- [ ] Tous les chiffres ont une période, une méthode et une validation.
- [ ] Toute personne identifiable dispose d'une autorisation écrite archivée.
- [ ] Tout logo de partenaire dispose d'une autorisation d'usage archivée.
- [ ] Les mentions légales et les liens de conformité sont présents si le pied de page change.
- [ ] Aucun `TODO(SJCD)` ne subsiste dans le contenu publié.
- [ ] Le texte est relu (orthographe, typographie française, ton tenu).
- [ ] L'aperçu mobile et l'aperçu desktop ont été vérifiés.
- [ ] Un contrôle d'accessibilité rapide a été fait (titres, contrastes, texte alternatif).

### 5.2 Calendrier de publication

Un site institutionnel meurt d'abandon. Le rythme est donc **contractualisé** :

| Contenu | Fréquence minimale | Responsable |
|---|---|---|
| Actualité | 1 par mois (ou 1 par trimestre en régime minimum) | éditeur·rice |
| Mise à jour des indicateurs d'impact | 1 fois par an (à la clôture des comptes) | responsable éditorial·e |
| Publication du rapport annuel | 1 fois par an | direction |
| Revue des partenaires et logos | 2 fois par an | direction |
| Vérification des mentions légales et de la vie privée | 1 fois par an | responsable éditorial·e |
| Contrôle des liens morts et des PDF | 1 fois par trimestre | éditeur·rice |
| Revue d'accessibilité | 1 fois par an (audit) | technique |
| Sauvegarde et export des contenus | 1 fois par mois (automatisé) | technique |

**Indicateur de santé éditoriale :** la date de dernière mise à jour, affichée sur chaque
page de contenu. Un site dont les pages affichent 3 ans d'ancienneté n'inspire pas
confiance — surtout quand il parle d'impact.

## 6. Structuration des médias

| Type | Format accepté | Contrainte | Règle |
|---|---|---|---|
| Photographie | JPEG/PNG source | ≤ 5 Mo à l'import | recadrage 3:2, 1:1 ou 16:9 ; conversion AVIF/WEBP automatique |
| Logo partenaire | SVG ou PNG transparent | ≤ 500 Ko | autorisation requise (V4) ; versions monochrome et couleur si possible |
| Document (rapport) | PDF | ≤ 10 Mo | **accessible** : balisé, titre renseigné, langue définie — sinon alternative HTML |
| Vidéo | jamais en hébergement direct | — | plateforme externe, **chargée uniquement après consentement** |
| Icône | SVG | ≤ 10 Ko | jeu unique, tracé 1,5 px, 24 px de référence |

**Nommage des fichiers** — en minuscules, sans accent ni espace, préfixé par la date :
`2026-03-rapport-annuel-2025.pdf`, `2026-02-programme-education-numerique-01.avif`.

**Texte alternatif obligatoire** : descriptif et utile (« Enfants travaillant sur des
ordinateurs portables dans la salle communautaire de Rumonge »), jamais « image »,
jamais « photo de », jamais le nom du fichier.

**Métadonnées** : retirer les données de géolocalisation EXIF des photographies avant
publication (protection des personnes photographiées, sécurité potentielle des lieux).

## 7. Migration et contenus initiaux

- [ ] Import du logo et des éléments de marque — `TODO(SJCD)` : D7
- [ ] Saisie des paramètres du site : nom légal, registre, siège, contacts — `TODO(SJCD)` : D1
- [ ] Saisie des programmes — `TODO(SJCD)` : D3
- [ ] Saisie des indicateurs d'impact avec méthode et sources — `TODO(SJCD)` : D4
- [ ] Création des pages de conformité — dépend de D1
- [ ] Import des rapports existants — `TODO(SJCD)`
- [ ] Import de la gouvernance et de l'équipe — `TODO(SJCD)`

## 8. Sauvegarde, réversibilité et continuité

| Mesure | Fréquence | Détail |
|---|---|---|
| Export automatisé des contenus en JSON | quotidien | déposé dans un stockage de sauvegarde, hors dépôt public |
| Sauvegarde des médias | quotidien | idem |
| Copie d'archive dans le dépôt Git (sans binaires lourds) | mensuel | contenu textuel uniquement, avec historique |
| Test de restauration | semestriel | procédure écrite et **réellement exécutée** une fois |
| Export de sortie | à la demande | si changement de CMS, les contenus sont exportables en JSON |

**Règle de réversibilité :** aucun contenu ne doit exister **uniquement** dans le CMS sans
moyen d'export. C'est la condition pour que la dépendance au prestataire reste acceptable.

## 9. Gouvernance éditoriale et éthique

**Dignité.** Aucune photographie, aucun témoignage, aucune donnée concernant une personne
ne peut être publié sans son consentement explicite et éclairé. Pour un mineur, le
consentement du représentant légal est requis en plus de l'assentiment de l'enfant.

**Exactitude.** Un chiffre publié engage l'organisation. En cas de doute, ne pas publier
et écrire `TODO(SJCD)`. La mention « environ » est préférable à une précision inventée.

**Transparence.** Les erreurs corrigées sont signalées : une correction discrète mais
documentée vaut mieux qu'une disparition silencieuse. La crédibilité se construit aussi
sur la manière de traiter ses erreurs.

**Cohérence.** Le site ne promet pas plus que ce que l'organisation peut tenir. Un site
qui affirme « transparence totale » tout en ne publiant aucun compte se discrédite
lui-même. Il vaut mieux écrire « nos comptes sont disponibles sur demande ».

---

*`specs/content-model.json` est la traduction technique de ce document. Les règles de
validation V1 à V10 y sont exprimées sous forme de contraintes, et doivent être
implémentées — un modèle non contraint ne produit aucun gain.*
