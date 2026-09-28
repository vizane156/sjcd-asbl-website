<!--
  Gabarit de pull request — SJCD ASBL
  Voir CONTRIBUTING.md et docs/07_Roadmap_QA.md §8.1 (« définition de terminé »).
-->

## Nature du changement

- [ ] `feat` — nouvelle fonctionnalité ou page
- [ ] `fix` — correction de bug ou d'erreur de contenu
- [ ] `content` — contenu éditorial
- [ ] `docs` — documentation ou spécification
- [ ] `a11y` — accessibilité
- [ ] `chore` — outillage, dépendances, configuration

## Description

<!-- Que fait ce changement, et pourquoi ? -->

## Rattachement au système de confiance

<!-- Obligatoire. Sélectionner l'étage ou les étages servis par ce changement. -->

- [ ] **Étage 1 — Preuve institutionnelle** (qui est SJCD, gouvernance, conformité)
- [ ] **Étage 2 — Preuve d'impact** (programmes, résultats, rapports)
- [ ] **Étage 3 — Opportunité de partenariat** (proposition de valeur, dossier)
- [ ] **Étage 4 — Action** (contact, don, bénévolat)
- [ ] Transverse (outillage, design system, performance, sécurité)

> Un changement qui ne sert aucun étage doit être justifié explicitement ci-dessous.

## Vérifications techniques

- [ ] `npm run lint` sans erreur
- [ ] `npm run typecheck` sans erreur
- [ ] `npm run build` réussi
- [ ] `npm run test` au vert
- [ ] Aucun nouveau problème d'accessibilité (axe-core + contrôle clavier manuel)
- [ ] Budget de performance non dégradé (`docs/05` §10)
- [ ] États traités : vide, chargement, erreur, succès, contenu très long
- [ ] Responsive vérifié de 320 px à 1920 px
- [ ] `prefers-reduced-motion` respecté

## Exactitude du contenu

- [ ] **Chaque chiffre publié est daté et sourcé** (période + source vérifiable)
- [ ] Aucun `TODO(SJCD)` introduit sans responsable identifié
- [ ] Tout contenu factuel nouveau est validé par SJCD
- [ ] Toute personne identifiable dispose d'une autorisation écrite archivée
- [ ] Tout logo de partenaire dispose d'une autorisation d'usage archivée
- [ ] Textes relus : orthographe, typographie française, ton digne et factuel

## Conformité et sécurité

- [ ] Aucun secret, aucune clé d'API, aucun fichier d'environnement committé
- [ ] Aucune donnée personnelle de bénéficiaire
- [ ] Aucun traceur chargé avant consentement
- [ ] Mentions légales et liens de conformité intacts
- [ ] Aucun `dangerouslySetInnerHTML` ajouté sans justification écrite
- [ ] Toute dépendance ajoutée est justifiée (poids, maintenance, licence)

## Captures d'écran

<!-- Pour tout changement visuel : avant / après, desktop et mobile.
     Si la donnée est encore manquante, le montrer telle qu'elle apparaît. -->

## Points en suspens

<!-- TODO(SJCD) restants, décisions bloquantes concernées (D1 à D15), sujets à arbitrer. -->
