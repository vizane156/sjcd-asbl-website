# 07 — Roadmap, QA et critères d'acceptation

**Projet :** site institutionnel officiel de SJCD ASBL
**Document :** `docs/07_Roadmap_QA.md` — v1.0
**Statut :** base de travail
**Documents liés :** `docs/01_PRD.md` §9 (critères d'acceptation), `docs/05_Technical_Architecture.md`

---

## 1. État du projet au 28/09/2026

| Élément | État |
|---|---|
| Dépôt Git | ✅ créé, public, branche `main` + branche de travail |
| Base documentaire | ✅ **constituée** (ce dossier, `specs/`, `prompts/`) |
| Code source | ❌ inexistant — phase 1 non commencée |
| Données institutionnelles SJCD | ❌ **aucune** — c'est le blocage principal |
| Identité visuelle | ❌ inconnue (D7) |
| Décisions D1–D15 | 4 bloquantes ouvertes, 0 tranchée |

**Diagnostic :** le projet est passé de « 8 % documenté, 0 % codé » à **« documenté, prêt à
coder »**. Le facteur limitant n'est plus la préparation technique : c'est **la collecte
des données réelles de SJCD**. Voir §7.

---

## 2. Phase 0 — Base documentaire et décisions *(en cours)*

**Objectif :** disposer d'une base écrite, versionnée et cohérente, avant toute ligne de code.

| # | Livrable | État |
|---|---|---|
| 0.1 | `README.md` — vision + tableau d'état des livrables | ✅ |
| 0.2 | `docs/01_PRD.md` — cahier des charges | ✅ |
| 0.3 | `docs/02_Sitemap_And_Content.md` — architecture et contenu | ✅ |
| 0.4 | `docs/03_UX_UI_Design_System.md` — design system | ✅ (jetons à valider selon D7) |
| 0.5 | `docs/04_Content_CMS.md` — modèle éditorial | ✅ (plateforme à choisir : D6) |
| 0.6 | `docs/05_Technical_Architecture.md` — architecture | ✅ |
| 0.7 | `docs/06_SEO_A11y_Security_Analytics.md` — qualité et conformité | ✅ |
| 0.8 | `docs/07_Roadmap_QA.md` — ce document | ✅ |
| 0.9 | `specs/design-tokens.json` | ✅ |
| 0.10 | `specs/content-model.json` | ✅ |
| 0.11 | `specs/sitemap.json` | ✅ |
| 0.12 | `prompts/01_v0_Master_Prompt.md` | ✅ |
| 0.13 | Fichiers d'hygiène : `.gitignore`, `.env.example`, `.editorconfig`, `LICENSE`, `CONTRIBUTING.md` | ✅ |
| 0.14 | Gabarit de pull request + intégration continue | ✅ |
| 0.15 | **Trancher D1, D2, D3, D4, D8** avec SJCD | 🔴 **ouvert — bloquant** |
| 0.16 | Trancher D5 (langues), D6 (CMS), D7 (identité), D12 (budget) | 🟠 ouvert |
| 0.17 | Valider juridiquement ce document-ci et `docs/06` | 🟠 ouvert |

**Critère de sortie de phase 0 :** D1 à D4 et D8 tranchés ; D5, D6, D7 arbitrées ;
la documentation ne contient plus de contradiction interne.

---

## 3. Phase 1 — Socle technique

**Objectif :** une coquille de site propre, accessible, rapide, sans contenu réel.

| # | Tâche | Critère de fin |
|---|---|---|
| 1.1 | Initialiser Next.js (App Router) + TypeScript strict + Tailwind | `npm run dev` fonctionne |
| 1.2 | ESLint + Prettier + `lint-staged` + Husky | pre-commit bloque tout fichier non conforme |
| 1.3 | Chaîne de jetons : JSON → CSS → thème Tailwind + test de synchronisation | `npm run tokens:check` passe |
| 1.4 | Polices auto-hébergées, sous-ensembles, `next/font` | ≤ 70 Ko, aucun appel tiers |
| 1.5 | Coquille racine : `layout.tsx`, `lang`, métadonnées par défaut | — |
| 1.6 | `SiteHeader`, `MobileNav`, `SiteFooter`, `SkipLink` | navigation complète au clavier, focus visibles, `Échap` ferme le menu |
| 1.7 | Bibliothèque de composants : `Button`, `Link`, `Alert`, `EmptyState` | tous les états définis et documentés |
| 1.8 | Pages d'échafaudage des 6 pages du MVP | navigables, contenu factice explicitement marqué |
| 1.9 | `not-found.tsx`, `error.tsx` | 404 renvoie bien un code 404 |
| 1.10 | `sitemap.ts`, `robots.ts`, métadonnées SEO, JSON-LD `NGO` | validateurs du W3C et de Google sans erreur |
| 1.11 | Intégration continue : déploiement de prévisualisation | toute PR produit une URL de prévisualisation |
| 1.12 | Audit initial : Lighthouse + axe-core + budget de performance | objectifs de `docs/05` §10 atteints sur la coquille |

**Critère de sortie :** build vert, CI complète active, coquille conforme aux objectifs
d'accessibilité et de performance, déployée en prévisualisation.

---

## 4. Phase 2 — Contenu et preuve

**Objectif :** les 6 pages du MVP, avec les **données réelles** de SJCD.

| # | Tâche | Dépendance |
|---|---|---|
| 2.1 | Intégration du CMS et des schémas du modèle de contenu | D6 |
| 2.2 | Chaîne de revalidation par webhook signé + aperçu de brouillon | 2.1 |
| 2.3 | Saisie des paramètres du site (identité légale, contacts) | **D1, D2** |
| 2.4 | Page Accueil complète | D3, D4, D7 |
| 2.5 | Page Qui sommes-nous (mission, histoire, gouvernance, transparence) | D3, D9 |
| 2.6 | Pages Programmes (liste + fiches détaillées en 7 blocs) | D3, D4 |
| 2.7 | Page Impact (indicateurs, méthodologie, rapports) | **D4** |
| 2.8 | Page Devenir partenaire (+ dossier de partenariat PDF) | D8 |
| 2.9 | Page Contact + coordonnées | D1 |
| 2.10 | Pages de conformité : mentions légales, vie privée, accessibilité | D1 |
| 2.11 | Traitement des médias : photographies recadrées, optimisées, EXIF nettoyées | D7, consentements |
| 2.12 | **Passe de suppression des `TODO(SJCD)`** | toutes les précédentes |

**Critère de sortie :** les 6 pages sont complètes, `TODO(SJCD)` = 0, chaque chiffre est
daté et sourcé, chaque personne et chaque logo disposent d'une autorisation archivée.

---

## 5. Phase 3 — Conversion, conformité, mesure

| # | Tâche | Critère de fin |
|---|---|---|
| 3.1 | `ContactForm` et `PartnershipForm` | soumission réelle reçue, accusé de réception envoyé, aucune donnée dans les journaux |
| 3.2 | Anti-spam (Turnstile ou équivalent) + limitation de débit | bloquant pour les robots, transparent pour un utilisateur, utilisable au clavier |
| 3.3 | Gestion du consentement + politique de confidentialité + registre des traitements | aucun traceur avant consentement, choix modifiable, refus aussi simple que l'acceptation |
| 3.4 | Analytics respectueux de la vie privée | événements de `docs/06` §6.2 remontés, aucune donnée personnelle |
| 3.5 | Audit SEO complet : métadonnées, données structurées, maillage, redirections | validateurs sans erreur, aucune URL publiée en 404 |
| 3.6 | Audit d'accessibilité manuel : clavier, lecteur d'écran, zoom 200 %, contraste | 0 violation critique ou sérieuse |
| 3.7 | Tests bout en bout des parcours principaux | tous les parcours passent |
| 3.8 | Test de performance sur réseau bridé (3G) sur mobile | budget respecté sur toutes les pages |
| 3.9 | Rédaction de la documentation d'exploitation (déploiement, sauvegarde, restauration, incident) | procédures testées au moins une fois |
| 3.10 | **Recette finale et validation par SJCD** | `docs/01_PRD.md` §9 satisfait intégralement |

**Critère de sortie :** mise en production de la v1.0.

---

## 6. Phase 4 — Après le lancement

| # | Tâche | Fréquence |
|---|---|---|
| 4.1 | Publication d'une actualité | mensuelle |
| 4.2 | Mise à jour des indicateurs d'impact | annuelle |
| 4.3 | Publication du rapport annuel | annuelle |
| 4.4 | Vérification des liens morts et des PDF | trimestrielle |
| 4.5 | Sauvegarde et export des contenus | mensuelle (automatisée) |
| 4.6 | Test de restauration | semestrielle |
| 4.7 | Audit d'accessibilité | annuelle |
| 4.8 | Revue des dépendances et des vulnérabilités | mensuelle |
| 4.9 | Rapport d'indicateurs (5 lignes) | mensuelle |
| 4.10 | Revue du design system et des jetons | annuelle |

**Version 1.1 envisagée :** actualités, bibliothèque de rapports, page dons (sous réserve
de D10), page bénévolat, page partenaires.
**Version 1.2 envisagée :** multilinguisme (si D5), kit presse, témoignages vidéo.

---

## 7. Le chemin critique : les données de SJCD

⚠️ **Le projet ne peut pas avancer au-delà de la tâche 2.3 sans ces éléments.** Le code
est la partie la plus rapide du projet ; la donnée institutionnelle est la plus lente.
Il est donc rationnel de **lancer la collecte dès maintenant, en parallèle du
développement de la coquille**.

### Priorité 0 — débloque tout

| ID | Donnée | Décision liée | Bloque |
|---|---|---|---|
| P0-1 | Nom légal complet + signification de « SJCD » | D1, D2 | mentions légales, identité, référencement, maquettes |
| P0-2 | Pays, forme juridique, numéro de registre, date de création | D1 | conformité, pied de page |
| P0-3 | Siège social et coordonnées officielles | D1 | contact, pied de page |
| P0-4 | Objet social exact (texte des statuts) | D3 | mission, accueil |
| P0-5 | 3 à 5 programmes : problème, actions, public, zone, résultats | D3 | pages Programmes |
| P0-6 | 3 à 4 chiffres d'impact **datés et sourcés** | D4 | Accueil, Impact — **cœur du concept** |
| P0-7 | Objectif principal du site à 6 mois | D8 | priorisation, libellé du CTA |
| P0-8 | Domaine et accès administrateur | D12, D13 | mise en ligne |

### Priorité 1 — débloque la qualité

| ID | Donnée | Décision liée |
|---|---|---|
| P1-1 | Logo (vectoriel) et charte graphique si existante | D7 |
| P1-2 | Rapport annuel / d'activité le plus récent (PDF) | — |
| P1-3 | Gouvernance : organes, membres, mandats | D9 |
| P1-4 | Comptes publiable, ou décision explicite de non-publication | — |
| P1-5 | Photothèque de terrain avec droits réglés | D7 |
| P1-6 | 2 à 3 témoignages avec autorisation écrite | D15 |
| P1-7 | Responsable éditorial nommé | D9 |
| P1-8 | Langues cibles | D5 |
| P1-9 | Personne responsable de la sécurité et contact dédié | — |

### Priorité 2 — débloque la version 1.1

| ID | Donnée | Décision liée |
|---|---|---|
| P2-1 | Partenaires + autorisations d'usage des logos | D15 |
| P2-2 | Moyens de don et statut fiscal | D10 |
| P2-3 | Budget global et échéance | D12 |
| P2-4 | Plateforme CMS choisie | D6 |

---

## 8. Assurance qualité

### 8.1 Définition de « terminé »

Une tâche est terminée lorsque **tous** ces points sont vrais :

- [ ] Le code est sur une branche, avec une pull request relue.
- [ ] Lint, types, tests et build passent en intégration continue.
- [ ] Aucun nouveau problème d'accessibilité (vérification automatique **et** contrôle clavier).
- [ ] Le budget de performance n'est pas dégradé.
- [ ] Les états prévus sont traités : vide, chargement, erreur, succès, très longue chaîne, contenu manquant.
- [ ] Le responsive est vérifié de 320 px à 1920 px.
- [ ] Aucun secret, aucune donnée personnelle, aucun `TODO(SJCD)` introduit sans responsable identifié.
- [ ] La documentation concernée est mise à jour.
- [ ] Le contenu est relu (orthographe, typographie française, ton, exactitude).

### 8.2 Niveaux de test

| Niveau | Outil | Portée | Déclencheur |
|---|---|---|---|
| Unitaire | Vitest | utilitaires, formats, validation Zod, transformations de contenu | à chaque commit |
| Composant | Testing Library | rendu, états, comportement accessible des composants | à chaque commit |
| Bout en bout | Playwright | parcours : navigation, formulaire, consentement, langue | à chaque PR |
| Accessibilité | axe-core + Playwright | toutes les pages publiques | à chaque PR |
| Performance | Lighthouse CI | accueil, impact, programme, contact | à chaque PR |
| Visuel (option) | captures de référence | régression de mise en page | à chaque PR |
| Manuel | humain | clavier seul, lecteur d'écran, zoom, contenu, juridique | avant chaque livraison |

### 8.3 Matrice de vérification multi-navigateurs et multi-appareils

| Cible | Vérification minimale |
|---|---|
| Chrome (desktop récent) | référence de développement |
| Firefox | rendu, formulaires, focus |
| Safari (macOS et iOS) | polices, `clamp()`, `dvh`, position fixe, gestes |
| Chrome Android (milieu de gamme) | performance réelle, cibles tactiles, clavier virtuel |
| Écran 320 px de large | absence de défilement horizontal, lisibilité |
| Zoom 200 % | aucun contenu perdu |
| Mode contraste élevé | informations lisibles |
| Mouvement réduit activé | aucune animation, contenu intact |
| JavaScript désactivé | contenu essentiel lisible, message clair pour les formulaires |

### 8.4 Tests de contenu (non automatisables — les plus importants)

- [ ] Chaque chiffre est vérifiable auprès de sa source déclarée.
- [ ] Aucun contenu de démonstration n'a survécu à la mise en production.
- [ ] Aucune donnée personnelle inutile n'est collectée dans un formulaire.
- [ ] Les mentions légales correspondent au statut réel de l'organisation (validation juridique).
- [ ] Aucun logo de partenaire sans autorisation.
- [ ] Le ton reste digne : aucune formulation misérabiliste ni superlatif non étayé.

---

## 9. Matrice de traçabilité — du concept aux tests

Traçabilité des 4 étages du système de confiance jusqu'à la vérification.

| Étage | Pages | Livrable | Test correspondant |
|---|---|---|---|
| **1. Preuve institutionnelle** | Qui sommes-nous, pied de page, mentions légales | `docs/02` §4.2 | présence et exactitude des mentions ; validité du JSON-LD ; présence des statuts |
| **2. Preuve d'impact** | Impact, Programmes, Accueil §3 et §5 | `docs/02` §4.3–4.4 | **chaque indicateur a une période et une source** (test de contenu) ; rapports téléchargeables |
| **3. Opportunité de partenariat** | Devenir partenaire | `docs/02` §4.5 | formulaire qualifiant fonctionnel ; dossier téléchargeable ; contenu par profil |
| **4. Action** | Contact, formulaires | `docs/02` §4.6, §6 | soumission réelle reçue ; accusé de réception ; conformité du consentement |

**Test utilisateur de validation du concept :** présenter l'accueil à 5 personnes issues
des publics cibles. Objectif : qu'elles identifient (a) ce que fait SJCD, (b) un chiffre
d'impact crédible, (c) l'action à entreprendre. Si l'un des trois échoue pour plus d'une
personne, la page d'accueil doit être retravaillée.

## 10. Jalons

| Jalon | Contenu | Condition de franchissement |
|---|---|---|
| **J0 — Base documentaire** | phase 0 | ✅ atteint (sauf décisions SJCD) |
| **J1 — Décisions P0** | D1, D2, D3, D4, D8 tranchées | 🔴 en attente de SJCD |
| **J2 — Coquille** | phase 1, déployée en prévisualisation | objectifs a11y et performance tenus |
| **J3 — Contenu v1.0** | phase 2, 6 pages avec données réelles | `TODO(SJCD)` = 0 |
| **J4 — Conformité** | phase 3, formulaires, RGPD, SEO, audits | 0 violation critique, budgets tenus |
| **J5 — Mise en ligne** | recette finale validée par SJCD | `docs/01_PRD.md` §9 satisfait |
| **J6 — Autonomie** | SJCD publie seule | un contenu publié sans assistance technique |

---

## 11. Conditions d'arrêt et signaux d'alerte

Une roadmap n'est utile que si elle dit aussi quand s'inquiéter.

| Signal | Signification | Réaction |
|---|---|---|
| Les données P0 ne sont pas fournies | le projet est gelé sans l'être officiellement | livrer la coquille et les pages avec emplacements explicites ; ne **jamais** inventer de contenu |
| Le périmètre grossit à chaque échange | dérive classique | toute demande hors MVP passe par une révision du PRD et un arbitrage explicite |
| Les chiffres d'impact changent sans explication | problème d'exactitude | geler la publication, documenter la source retenue |
| Le site n'est pas mis à jour après le lancement | échec prévisible | gouvernance éditoriale (D9) et calendrier de `docs/04` §5.2 |
| Les maquettes divergent du design system | dette de refonte | rappeler que `specs/design-tokens.json` est la source unique |
| Une urgence impose des images ou des témoignages non consentis | risque éthique et juridique | refus ; expliquer l'exigence, proposer une alternative |

---

*Cette roadmap est un plan, pas un engagement de délai : les échéances dépendent des
décisions D1 à D4, D8 et D12, et donc de SJCD. La partie technique peut avancer en
parallèle sans attendre, jusqu'à la tâche 2.2 incluse.*
