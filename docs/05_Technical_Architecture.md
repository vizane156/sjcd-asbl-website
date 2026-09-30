# 05 — Architecture implémentée

## Stack et rendu

Next.js 15.5 (version du lockfile), React 19, TypeScript 5.9 strict ; CSS moderne.
Pages statiques rendues côté serveur. TypeScript reste en 5.9 pour la compatibilité
avec la version du framework. Mise à jour PostCSS forcée vers une version corrigée
via `overrides`, vérifiée au build et par `npm audit`.

`app/page.tsx` compose la homepage. `app/[page]/page.tsx` utilise `lib/pages.ts` pour les
pages intérieures statiques. Route `/contact` indépendante et vraie 404 pour les inconnues.
Aucun service externe n’est requis. Le CMS reste une future intégration.

## Îlots clients

- `Navbar` : menu modal accessible et état au scroll.
- `motion` : import dynamique conditionnel Lenis/GSAP/ScrollTrigger, nettoyage et retour
  natif lors du changement de préférences. Aucun moteur 3D.
- `ContactDraft` : champs validés, brouillon local, Clipboard API avec repli téléchargeable.

Les données métier connues sont dans `lib/content.ts`. Les phrases éditoriales et
emplacements ne constituent pas une mission validée ni des réalisations réelles.

## Design

`specs/design-tokens.json` est la source de `app/tokens.css`. `scripts/build-tokens.mjs`
génère et vérifie la synchronisation. Nunito variable locale via `next/font/local`,
aucune requête Google ni pendant le build ni côté visiteur.

## Sécurité et vie privée

- Pas de formulaire envoyé, de secrets, de CMS, de paiement, de stockage de bénéficiaires.
- Pas de traceurs ni de consent banner sans objet.
- `noindex` partout et robots bloqué en préproduction ; cela ne protège pas un contenu privé.
- En-têtes nosniff, referrer et permissions ; configuration compatible avec le preview embarqué.
- Ne pas activer une politique anti-iframe globale sur la prévisualisation Arena.
- CSP, hébergement définitif, politique légale et protection des futurs formulaires restent
  à traiter selon l’infrastructure retenue. Ne pas présumer que Server Actions ou SSG
  suppriment tout risque de sécurité.

## Développement et vérification

Voir README pour les commandes. CI : JSON, présence des livrables, garde-fou secrets,
tokens, lint, types, tests, build, Playwright/axe et audit des dépendances bloquant.
Node 22. `npm run dev` et `npm run start` écoutent `0.0.0.0:3000`.
Aucun appel navigateur à une API localhost.

## À implémenter après validation

CMS, validation runtime du contenu, stockage sécurisé et réversibilité, intégration e-mail,
antispam, authentification des webhooks, métadonnées avec domaine canonique réel, sitemap
public, puis éventuels dons. Le fichier `specs/content-model.json` décrit une piste de
modèle ; il n’est pas un JSON Schema exécutable ni un validateur CMS déjà opérationnel.
