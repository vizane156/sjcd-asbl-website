# SJCD ASBL — Site institutionnel officiel

**Version :** 1.0 · **Statut :** base documentaire constituée, développement non commencé
**Positionnement :** site institutionnel premium, moderne, international — orienté crédibilité, impact et partenariats.

---

## Vision du produit

Créer le site officiel de SJCD ASBL comme une vitrine institutionnelle de niveau
international : raconter clairement qui est SJCD, démontrer son impact, publier ses
preuves de sérieux, attirer des partenaires et transformer les visiteurs qualifiés en
contacts, partenaires, bénévoles ou donateurs.

Le mot-clé esthétique est **« 2050 »** : futuriste dans les interactions et la précision
visuelle, mais jamais gadget. Le design reste sobre, humain, crédible et accessible.

## Règle produit fondamentale

> Le site n'est pas une simple brochure. Il doit agir comme un **système de confiance** :
> **preuve institutionnelle → preuve d'impact → opportunité de partenariat → action.**

Ce n'est pas un slogan : c'est l'**architecture de conversion** du site en quatre étages
séquentiels. Chaque étage lève une objection précise et rend le suivant crédible.
**Toute page qui n'alimente aucun étage est supprimée ou fusionnée.** Détail en
`docs/01_PRD.md` §2.

| Étage | Objection levée | Preuves mobilisées |
|---|---|---|
| **1. Preuve institutionnelle** | *Est-ce sérieux ?* | statuts, registre légal, gouvernance, historique, mentions légales |
| **2. Preuve d'impact** | *Est-ce que ça marche ?* | programmes, indicateurs datés et sourcés, rapports, témoignages |
| **3. Opportunité de partenariat** | *Pourquoi moi ?* | proposition de valeur par profil, formats, dossier de partenariat |
| **4. Action** | *Comment agir ?* | don, contact, bénévolat, demande de dossier |

---

## État du projet

| Domaine | État |
|---|---|
| Base documentaire et spécifications | ✅ **constituée** (ce dépôt) |
| Code source | ⬜ non commencé (phase 1) |
| **Données réelles de SJCD** | 🔴 **manquantes — c'est le chemin critique** |
| Identité visuelle | 🟠 inconnue (décision D7) |
| Décisions bloquantes (D1–D4, D8) | 🔴 **en attente de SJCD** |

**Diagnostic en une phrase :** le projet est prêt à être développé ; ce qui manque
désormais n'est pas du code, ce sont **les faits** — nom légal, programmes, chiffres
d'impact validés. Voir `docs/07_Roadmap_QA.md` §7 pour la liste des données à fournir,
par ordre de priorité.

⚠️ **Règle de vérité du projet :** aucune donnée factuelle n'est inventée. Toute
information à valider porte le marqueur `TODO(SJCD)`. Un chiffre crédible mais faux
détruirait la confiance que le site a précisément pour mission de construire.

```bash
# Voir toutes les données en attente
grep -rn "TODO(SJCD)" --include="*.md" --include="*.json" .
```

---

## Livrables

### Documentation — `docs/`

| Fichier | Contenu |
|---|---|
| [`01_PRD.md`](docs/01_PRD.md) | Cahier des charges : contexte, système de confiance, objectifs, KPI, personas, périmètre MVP, **registre des décisions D1–D15**, critères d'acceptation, risques |
| [`02_Sitemap_And_Content.md`](docs/02_Sitemap_And_Content.md) | Architecture de l'information, contenu page par page, contenus obligatoires, spécification des formulaires, inventaire du contenu à fournir |
| [`03_UX_UI_Design_System.md`](docs/03_UX_UI_Design_System.md) | Décodage de « 2050 », palette, typographie, grille, mouvement, inventaire des composants, exigences d'accessibilité |
| [`04_Content_CMS.md`](docs/04_Content_CMS.md) | Modèle éditorial, choix de plateforme CMS, rôles, cycle de vie, règles de validation, sauvegarde et réversibilité |
| [`05_Technical_Architecture.md`](docs/05_Technical_Architecture.md) | Stack Next.js, stratégie de rendu, arborescence, chaîne des jetons, formulaires, budget de performance, CI |
| [`06_SEO_A11y_Security_Analytics.md`](docs/06_SEO_A11y_Security_Analytics.md) | SEO et données structurées, WCAG 2.2 AA, en-têtes de sécurité, **RGPD et vie privée**, mesure d'audience |
| [`07_Roadmap_QA.md`](docs/07_Roadmap_QA.md) | Phases 0 à 4, **chemin critique des données**, assurance qualité, définition de « terminé », jalons, signaux d'alerte |

### Spécifications machine — `specs/`

| Fichier | Rôle |
|---|---|
| [`design-tokens.json`](specs/design-tokens.json) | **Source unique de vérité** du style : couleurs, typographie, espacement, mouvement, accessibilité |
| [`content-model.json`](specs/content-model.json) | Contrat typé entre l'éditorial et le code, avec les règles de validation V1–V10 |
| [`sitemap.json`](specs/sitemap.json) | Sitemap machine-readable, navigation, traçabilité des 4 étages |

### Génération d'interface — `prompts/`

| Fichier | Rôle |
|---|---|
| [`01_v0_Master_Prompt.md`](prompts/01_v0_Master_Prompt.md) | Prompt maître pour v0.app : direction artistique, gabarits, composants, interdits, contrôle après génération |

### Fondations du dépôt

| Fichier | Rôle |
|---|---|
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Conventions de branches, de commits, définition de « terminé », interdits absolus, style de code et de contenu |
| [`LICENSE`](LICENSE) | **Proposition** de régime de propriété intellectuelle — décision D11 à valider |
| [`ANALYSE_PROJET.md`](ANALYSE_PROJET.md) | Audit fondateur du dépôt : constats, risques, recommandations |
| [`.github/workflows/ci.yml`](.github/workflows/ci.yml) | Intégration continue : JSON, cohérence des livrables, lint, types, tests, build, garde-fou secrets |

---

## Décisions à obtenir de SJCD

Ces décisions sont **bloquantes** : rien de sérieux ne peut être maquetté ou publié sans elles.
Registre complet en `docs/01_PRD.md` §8.

| ID | Décision | Statut |
|---|---|---|
| **D1** | Nom légal complet, signification de « SJCD », pays et forme juridique | 🔴 bloquant |
| **D2** | Dénomination officielle affichée | 🔴 bloquant |
| **D3** | Objet social exact et programmes prioritaires | 🔴 bloquant |
| **D4** | Chiffres d'impact vérifiables (valeur, période, source) | 🔴 bloquant |
| **D8** | Objectif principal du site à 6 mois | 🔴 bloquant |
| D5 | Langues du site | 🟠 ouvert |
| D6 | Plateforme CMS et hébergement | 🟠 ouvert |
| D7 | Identité visuelle (logo, charte) | 🟠 ouvert |
| D9 | Responsable éditorial habilité à publier | 🟠 ouvert |
| D10 | Dons : moyens de paiement et statut fiscal | 🟡 différé (v1.1) |
| D11 | Régime de propriété intellectuelle | 🟡 proposition déposée |
| D12 | Domaine, budget et échéance | 🟠 ouvert |
| D13 | Administration de l'infrastructure | 🟠 ouvert |
| D15 | Autorisations de logos et droits à l'image | 🟠 ouvert |

---

## Périmètre de la version 1.0

Six pages, qui couvrent les quatre étages : **Accueil**, **Qui sommes-nous**,
**Programmes**, **Impact**, **Devenir partenaire**, **Contact** — plus les pages de
conformité (mentions légales, confidentialité, accessibilité, plan du site) et les états
système (404, erreur).

La sobriété est un choix assumé : un site de crédibilité échoue par pages vides, jamais
par manque de pages. Les versions 1.1 et 1.2 sont décrites en `docs/01_PRD.md` §6.

---

## Contraintes non négociables

| # | Contrainte |
|---|---|
| C1 | Aucune donnée factuelle inventée — marquage `TODO(SJCD)` systématique |
| C2 | Accessibilité **WCAG 2.2 AA**, testée en intégration continue |
| C3 | Conformité RGPD : aucun traceur avant consentement, minimisation des données |
| C4 | Budget de performance strict — une partie du public navigue en connexion limitée |
| C5 | Sobriété : le futurisme ne devient jamais gadget |
| C6 | Autonomie éditoriale de SJCD : un CMS utilisable par des non-techniciens |
| C7 | Mentions légales accessibles depuis toutes les pages |
| C8 | Dignité des personnes représentées — consentements écrits, aucune imagerie misérabiliste |

---

## Démarrage (phase 1 — à venir)

Le socle technique n'est pas encore initialisé. La procédure prévue est décrite en
`docs/05_Technical_Architecture.md` §2 et `docs/07_Roadmap_QA.md` §3.

```bash
# Prévisualiser les variables d'environnement attendues
cp .env.example .env.local
```

---

## Licence et propriété

Voir [`LICENSE`](LICENSE). Le code source n'est pas open source : c'est le site
institutionnel officiel d'une organisation. Régime proposé : **propriétaire, tous droits
réservés à SJCD ASBL**, avec distinction explicite entre le code, les contenus, les
polices et les dépendances tierces. Décision D11 à valider par SJCD.

---

## Contact

`TODO(SJCD)` — coordonnées officielles à fournir (D1).

---

*Ce dépôt suit une approche **docs-as-code** : les spécifications vivent avec le code,
versionnées et relues. En cas de divergence entre une maquette et `specs/design-tokens.json`,
**la documentation fait foi** — sinon deux design systems concurrents apparaissent et la
refonte devient inévitable.*
