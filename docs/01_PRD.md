# 01 — PRD : Cahier des charges produit

> **Mise à jour — 28/09/2026.** Ce document conserve le cadrage initial, antérieur au
> nouveau brief. Pour l’état livré et les arbitrages actuels, lire
> [la direction Lumière](08_Direction_Lumiere.md) et le README. Identité confirmée par l’utilisateur :
> **Sanctuaire de Jeunes Chandelier pour le Développement (SJCD ASBL), RDC**.
> D1 reste partiellement ouvert (registre, siège), D2 est renseigné ; D7 est une proposition.
> Nunito remplace Newsreader/Inter. Le motion adaptatif remplace les interdictions générales
> du premier cadrage. Le CMS, l’envoi d’e-mails et les dons ne sont pas implémentés.
> Les considérations juridiques anciennes sont des pistes, pas un avis applicable à SJCD :
> vérifier le droit congolais, le registre compétent et l’applicabilité du RGPD.


**Projet :** site institutionnel officiel de SJCD ASBL
**Document :** `docs/01_PRD.md` — v1.0
**Statut :** base de travail — **à valider par SJCD**
**Dernière mise à jour :** 28/09/2026

---

## 1. Contexte et problème

SJCD ASBL a besoin d'un site officiel qui fonctionne comme une **infrastructure de
confiance**, et non comme une brochure. Le problème à résoudre n'est pas « ne pas avoir
de site » : c'est **ne pas disposer de preuves publiques vérifiables** de son sérieux,
de son impact et de sa capacité de gestion.

Concrètement, un bailleur institutionnel, une entreprise mécène ou un donateur
individuel qui découvre SJCD aujourd'hui ne peut pas répondre à trois questions :

1. **Qui est cette organisation, légalement et humainement ?**
2. **Qu'a-t-elle réellement accompli, avec quels résultats mesurables ?**
3. **Comment et pourquoi travailler avec elle, et où va mon argent ?**

Tant que ces trois réponses ne sont pas accessibles en quelques minutes, toute
démarche de partenariat ou de collecte repose sur du relationnel — ce qui ne passe
pas l'échelle et exclut les financements institutionnels.

## 2. Le cadre conceptuel : le système de confiance

Règle produit fondamentale, héritée du brief fondateur :

> Le site n'est pas une simple brochure. Il doit agir comme un **système de confiance** :
> **preuve institutionnelle → preuve d'impact → opportunité de partenariat → action.**

Ce n'est pas un slogan : c'est l'**architecture de conversion** du site, en 4 étages
séquentiels. Chaque étage lève une objection spécifique et rend le suivant crédible.

| Étage | Question à laquelle il répond | Objection levée | Preuves mobilisées |
|---|---|---|---|
| **1. Preuve institutionnelle** | « Cette organisation existe-t-elle vraiment, et est-elle bien gouvernée ? » | `Est-ce sérieux ?` | statuts, registre légal, gouvernance, équipe, historique, mentions légales, siège |
| **2. Preuve d'impact** | « Que fait-elle concrètement, avec quels résultats ? » | `Est-ce que ça marche ?` | programmes, indicateurs chiffrés sourcés, rapports, photographies documentées, témoignages |
| **3. Opportunité de partenariat** | « Que puis-je y gagner, comment m'y associer ? » | `Pourquoi moi ?` | proposition de valeur par type de partenaire, formats de collaboration, dossier de partenariat |
| **4. Action** | « Que dois-je faire, maintenant ? » | `Comment agir ?` | don, contact, bénévolat, adhésion, demande de dossier |

**Règle de gouvernance éditoriale qui en découle :** toute page, toute section, tout
élément du site doit pouvoir être rattaché à un étage. Un contenu qui n'alimente aucun
étage est supprimé ou fusionné. Cette règle est le premier critère de revue de contenu.

## 3. Objectifs

### 3.1 Objectif principal (à trancher — D8)

⚠️ **Un site ne peut pas viser quatre objectifs simultanément.** Le brief annonce
quatre publics de conversion (contacts, partenaires, bénévoles, donateurs). Les traiter
à égalité dilue le message et l'architecture. Il faut **un objectif prioritaire à 6 mois**.

| Option | Objectif prioritaire | Effet sur l'architecture | Indicateur principal |
|---|---|---|---|
| A | **Partenariats institutionnels** | dossier de partenariat, gouvernance et impact très détaillés, formulaire qualifiant | nb de demandes de dossier / de rendez-vous qualifiés |
| B | **Collecte de dons** | transparence financière maximale, parcours de don court, preuve d'usage des fonds | nb de dons et montant moyen |
| C | **Crédibilité de marque** | site vitrine soigné, presse, rapports | temps de lecture, mentions, backlinks |
| D | **Recrutement de bénévoles** | missions décrites, témoignages, candidature simplifiée | nb de candidatures |

**Recommandation : A (partenariats institutionnels)** — c'est l'étage 3 du système de
confiance, celui qui débloque le plus de valeur et dont les preuves (étages 1 et 2)
servent aussi tous les autres objectifs. B et D deviennent des objectifs secondaires
naturels une fois les preuves en place.

### 3.2 Objectifs secondaires

- Permettre à SJCD de **publier en autonomie** (actualités, rapports) sans intervention technique.
- Réduire la dépendance au bouche-à-oreille en fournissant un support de présentation autoportant.
- Devenir la **source de référence** sur SJCD en ligne (maîtrise du nom, du discours, des chiffres).

### 3.3 Objectifs explicitement écartés du périmètre initial

- Refonte totale de l'identité de marque. `TODO(SJCD): existe-t-il un logo et une charte ? (D7)`
- Portail de services aux bénéficiaires (inscription, suivi de dossier).
- Espace privé / extranet pour les partenaires.
- Boutique solidaire ou e-commerce.
- Multilinguisme étendu au-delà des langues strictement nécessaires (voir D5).

## 4. Indicateurs de succès (KPI)

À instrumenter **dès la mise en ligne**, dans le respect du RGPD (aucun traceur non
consenti, aucune donnée personnelle inutile — voir `docs/06`).

| Étage | Indicateur | Cible indicative | Source de mesure |
|---|---|---|---|
| 1 | Taux d'atteinte de la page « Qui sommes-nous » | `TODO(SJCD)` — fixer après 1 mois de référence | analytics |
| 1 | Temps passé sur les pages de preuve institutionnelle | > 90 s | analytics |
| 2 | Taux d'atteinte de la page « Impact » | `TODO(SJCD)` | analytics |
| 2 | Téléchargements de rapports annuels | ≥ 30 / trimestre | analytics (événement) |
| 3 | **Demandes de partenariat qualifiées** | objectif principal — `TODO(SJCD)` | formulaire + suivi CRM |
| 3 | Téléchargements du dossier de partenariat | ≥ 20 / trimestre | analytics (événement) |
| 4 | Soumissions de formulaire de contact | ≥ 15 / mois | formulaire |
| 4 | Dons réalisés et montant moyen | `TODO(SJCD)` — conditionné à D10 | prestataire de paiement |
| 4 | Candidatures bénévoles | ≥ 5 / trimestre | formulaire |
| — | Performance : LCP mobile < 2,5 s en 3G/4G dégradée | 100 % des pages | Lighthouse CI |
| — | Accessibilité : 0 erreur critique, 0 violation sérieuse | 100 % des pages | axe-core en CI |
| — | `TODO(SJCD)` : zéro contenu non validé publié | 100 % | revue éditoriale |

## 5. Publics (personas) et besoins

| Persona | Contexte d'arrivée | Ce qu'il cherche en 30 s | Preuve décisive | Action visée |
|---|---|---|---|---|
| **Bailleur institutionnel** (UE, coopération, agence publique, commune) | envoi d'un collègue, recherche active de partenaires locaux | légitimité, capacité de gestion, conformité | statuts, comptes, rapports, indicateurs, gouvernance | demande de dossier / rendez-vous |
| **Entreprise mécène / RSE** | alignement de valeurs, budget à allouer | alignement, visibilité, sérieux de gestion | rapport annuel, gouvernance, chiffres, contreparties | prise de contact |
| **Donateur individuel** | recommandation, réseau personnel | où va l'argent, qui décide | répartition des dépenses, témoignages, équipe | don |
| **Bénévole / jeune engagé** | découverte, motivation personnelle | missions concrètes, accessibilité de l'engagement | missions décrites, témoignages, temps demandé | candidature |
| **Journaliste / chercheur** | vérification de faits | faits datés, contact joignable | kit presse, contacts, archives | demande d'information |
| **Bénéficiaire / communauté** | besoin direct, souvent sur mobile | accès à un service, zone couverte | coordonnées claires, zones d'intervention | prise de contact |
| **Autorité de contrôle / administrateur** | vérification de conformité | mentions légales complètes | pied de page, vie privée, registre | conformité |

**Contrainte de conception majeure :** ces publics ont des besoins **contradictoires en
densité d'information**. Le bailleur veut des comptes ; le bénéficiaire veut un numéro de
téléphone. La réponse n'est pas de tout empiler : c'est une **densité organisée par
profondeur** — résumé → section détaillée → document téléchargeable. Un même contenu
existe à trois niveaux de profondeur, jamais à un seul.

**Contrainte de contexte d'usage :** une part significative du public navigue sur mobile,
en Afrique centrale, avec une connexion limitée et un forfait data coûteux. Le « premium »
ne peut pas signifier « lourd ». Voir le budget de performance en `docs/05` §10.

## 6. Périmètre

### 6.1 MVP — version 1.0 (périmètre engagé)

Six pages, qui couvrent intégralement les 4 étages :

| # | Page | Étage(s) | Justification |
|---|---|---|---|
| 1 | **Accueil** | tous | promesse + preuve d'impact immédiate + orientation vers les 4 actions |
| 2 | **Qui sommes-nous** | 1 | identité, mission, histoire, gouvernance, transparence |
| 3 | **Programmes** | 2 | un programme = un problème, une action, des résultats, une zone |
| 4 | **Impact** | 2 | indicateurs chiffrés sourcés + rapports téléchargeables |
| 5 | **Devenir partenaire** | 3 | proposition de valeur par profil + formulaire qualifiant |
| 6 | **Contact** | 4 + conformité | coordonnées, formulaire, mentions légales, vie privée |

Éléments transversaux inclus : en-tête et pied de page conformes, mentions légales,
politique de confidentialité, gestion du consentement, plan du site, 404 soignée,
métadonnées SEO, données structurées `NGO`, formulaire de contact fonctionnel,
anti-spam, budget de performance et d'accessibilité tenus.

### 6.2 Version 1.1

Actualités, rapports (bibliothèque documentaire), nous soutenir / faire un don (sous
réserve de D10), devenir bénévole, page partenaires (logos), galerie.

### 6.3 Version 1.2 et au-delà

Multilinguisme (si D5 le confirme), kit presse, page équipe détaillée, témoignages
vidéo, tableau de bord d'impact interactif, formulaires avancés.

### 6.4 Hors périmètre

Voir §3.3. Toute demande d'ajout au périmètre MVP se traite en révisant ce document,
pas en l'ajoutant silencieusement.

## 7. Contraintes

### 7.1 Contraintes non négociables

| # | Contrainte | Origine | Conséquence |
|---|---|---|---|
| C1 | **Aucune donnée factuelle inventée** | exigence d'intégrité | tout fait non validé porte `TODO(SJCD)` |
| C2 | **Accessibilité WCAG 2.2 niveau AA** | engagement « accessible » du brief + norme sectorielle | testée en CI, non négociable à la livraison |
| C3 | **Conformité RGPD / vie privée** | régime applicable à l'UE et aux bailleurs | consentement préalable, minimisation, registre des traitements |
| C4 | **Budget de performance strict** (voir `docs/05` §10) | réalité des réseaux en Afrique centrale | images optimisées, aucune bibliothèque lourde, polices en sous-ensemble |
| C5 | **Sobriété esthétique** : le futurisme ne doit jamais devenir gadget | garde-fou explicite du brief | toute animation doit avoir une justification fonctionnelle |
| C6 | **Autonomie éditoriale de SJCD** | pérennité du site | un CMS utilisable par des non-techniciens est obligatoire, pas optionnel |
| C7 | **Conformité légale des mentions** | statut ASBL | mentions obligatoires accessibles depuis toutes les pages |
| C8 | **Dignité des personnes représentées** | éthique associative | consentements écrits, aucune imagerie misérabiliste |

### 7.2 Contraintes techniques

Next.js (App Router) + React + TypeScript — stack imposée par le brief.
Voir `docs/05_Technical_Architecture.md`.

### 7.3 Contraintes organisationnelles

- Mainteneur principal unique aujourd'hui → l'automatisation (CI, tests, lint) est un
  filet de sécurité indispensable, pas un luxe.
- `TODO(SJCD)`: compétences internes disponibles pour l'édition de contenu (D9).
- `TODO(SJCD)`: budget et échéance (voir D12).

## 8. Registre des décisions

Chaque décision est référencée par un identifiant **Dx** dans l'ensemble de la
documentation. C'est la table de traçabilité du projet.

| ID | Décision | Bloque | Statut | Responsable |
|---|---|---|---|---|
| **D1** | **Nom légal complet, signification de l'acronyme, pays et forme juridique (BE / LU / RDC)** | mentions légales, nom de domaine, conception entière | 🔴 **ouvert — bloquant** | SJCD |
| **D2** | Dénomination officielle affichée (« SJCD » seul ou déployé ?) | identité, SEO de marque | 🔴 **ouvert — bloquant** | SJCD |
| **D3** | Objet social exact et 3 programmes prioritaires à mettre en avant | pages Programmes, Accueil | 🔴 **ouvert — bloquant** | SJCD |
| **D4** | Chiffres d'impact vérifiables (valeur, période, source) | pages Impact et Accueil — cœur du concept | 🔴 **ouvert — bloquant** | SJCD |
| **D5** | Langues du site (FR seul / FR+NL / FR+NL+EN) | architecture i18n, SEO, CMS, coût | 🟠 ouvert | SJCD |
| **D6** | Plateforme CMS et hébergement | implémentation, budget récurrent | 🟠 ouvert | technique |
| **D7** | Identité visuelle : logo et charte existent-ils ? | design system, tokens | 🟠 ouvert | SJCD |
| **D8** | Objectif principal à 6 mois et cibles chiffrées | priorisation, critères d'acceptation | 🔴 **ouvert — bloquant** | SJCD |
| **D9** | Responsable éditorial habilité à valider une publication | gouvernance, CMS | 🟠 ouvert | SJCD |
| **D10** | Dons : moyens de paiement, statut fiscal, déductibilité | page « Nous soutenir » | 🟡 différé (v1.1) | SJCD + conseil juridique |
| **D11** | Régime de propriété intellectuelle du code | `LICENSE` | 🟡 proposition déposée | SJCD |
| **D12** | Domaine, budget global et échéance | planification | 🟠 ouvert | SJCD |
| **D13** | Infrastructure : domaine, e-mail, hébergement, comptes — qui administre ? | mise en production | 🟠 ouvert | SJCD |
| **D14** | Niveau d'accessibilité cible formellement contractualisé | recette | ✅ proposé : WCAG 2.2 AA | à valider |
| **D15** | Autorisations d'usage des logos partenaires et droits à l'image | pages Partenaires, galerie | 🟠 ouvert | SJCD |

**Établi par cette itération (décisions techniques, réversibles) :**

| ID | Décision | Rationale | Réversible ? |
|---|---|---|---|
| T1 | Next.js App Router + TypeScript strict + Tailwind CSS | imposé par le brief ; standard, outillage mature | coûteux |
| T2 | Design tokens comme source unique de vérité (JSON → CSS variables) | évite la divergence maquette / code | oui |
| T3 | FR par défaut, i18n prêt mais non activé | respecte D5 sans bloquer | oui |
| T4 | Rendu statique (SSG) + revalidation, SSR réservé aux formulaires | performance et coût d'hébergement | oui |
| T5 | Marquage systématique `TODO(SJCD)` des données non validées | traçabilité ; CI peut refuser une mise en production | oui |

## 9. Critères d'acceptation de la v1.0

La version 1.0 est acceptée lorsque **tous** les critères suivants sont satisfaits.

### Contenu et crédibilité

- [ ] Les 6 pages du MVP sont en ligne, complètes, relues et validées par SJCD.
- [ ] **Zéro `TODO(SJCD)` résiduel** dans les contenus publiés.
- [ ] Chaque chiffre affiché est daté et sourcé ; chaque source est vérifiable.
- [ ] Les 4 étages du système de confiance sont identifiables par un test utilisateur à 5 participants.
- [ ] Aucun logo de partenaire ni photographie de personne n'est publié sans autorisation écrite archivée.

### Conformité

- [ ] Mentions légales complètes et accessibles depuis toutes les pages (D1 requis).
- [ ] Politique de confidentialité + registre des traitements à jour.
- [ ] Aucun cookie ni traceur déposé avant consentement explicite.
- [ ] Formulaires : base légale, finalité, durée de conservation, information affichée.
- [ ] Anti-spam actif et testé sans dégrader l'accessibilité.

### Qualité technique

- [ ] 0 erreur de lint, 0 erreur de type, build de production reproductible.
- [ ] LCP < 2,5 s et CLS < 0,1 sur mobile, en conditions réseau dégradées.
- [ ] 0 violation d'accessibilité critique ou sérieuse (axe-core), audit clavier complet.
- [ ] Parcours complet testable au clavier seul et au lecteur d'écran.
- [ ] `prefers-reduced-motion` respecté sur toutes les animations.
- [ ] Tous les formulaires renvoient un accusé de réception et alimentent une trace exploitable.

### Exploitabilité

- [ ] SJCD publie un contenu de test (une actualité, un rapport) **sans aide technique**.
- [ ] Documentation à jour : README, PRD, sitemap, token, architecture.
- [ ] Procédure de sauvegarde et de restauration des contenus écrite et testée.
- [ ] Accès et propriété des comptes (domaine, hébergeur, CMS, analytics) transférés à SJCD (D13).

## 10. Risques projet

| Risque | Gravité | Mitigation |
|---|---|---|
| Les données P0 (D1–D4) ne sont jamais fournies → projet bloqué indéfiniment | 🔴 élevée | livrer le MVP avec des emplacements explicites et non publiables ; campagne de collecte dédiée ; ne pas maquetter de faux chiffres |
| Le périmètre déborde (demandes d'ajout continuelles) | 🟠 moyenne | toute demande hors MVP passe par une révision de ce PRD |
| Le design « 2050 » dérive vers le gadget | 🟠 moyenne | garde-fou C5 + arbitrage accessible/perf prioritaire en revue |
| Dérive du contenu après le lancement (site figé) | 🟠 moyenne | gouvernance éditoriale (D9) + calendrier de publication |
| Hébergement coûteux pour une ASBL | 🟡 faible | SSG + offre gratuite/petit palier, documentation du coût récurrent |
| Départ du mainteneur unique | 🔴 élevée | documentation exhaustive, CI, conventions écrites, aucun savoir implicite |

## 11. Ce qui doit se passer ensuite

1. **SJCD répond à D1, D2, D3, D4 et D8.** Rien de sérieux ne peut être maquetté sans cela.
2. Valider D5 (langues) et D7 (identité visuelle).
3. Dérouler la Phase 0 documentaire (`docs/07` §2) — déjà largement entamée.
4. Initialiser le socle technique sur les tokens et la coquille (§Phase 1 de `docs/07`).
5. Construire les 6 pages du MVP avec les données réelles.

---

*Document vivant. Toute modification de périmètre, d'objectif ou de KPI doit être
répercutée ici et dans `docs/07_Roadmap_QA.md`.*
