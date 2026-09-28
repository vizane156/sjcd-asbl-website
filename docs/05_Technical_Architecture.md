# 05 — Architecture technique

**Projet :** site institutionnel officiel de SJCD ASBL
**Document :** `docs/05_Technical_Architecture.md` — v1.0
**Statut :** proposition technique
**Documents liés :** `specs/design-tokens.json`, `specs/content-model.json`, `docs/04_Content_CMS.md`

---

## 1. Principes d'architecture

| # | Principe | Conséquence |
|---|---|---|
| A1 | **Statique par défaut** | Chaque page publique est prérendue. Le serveur ne calcule rien au chargement pour un visiteur. |
| A2 | **Zéro dépendance non justifiée** | Chaque paquet ajouté doit répondre à un besoin non couvert par la plateforme ou par 50 lignes de code. |
| A3 | **Les jetons pilotent le style** | Aucune valeur de couleur, d'espacement ou de durée n'est écrite en dur dans un composant. |
| A4 | **Le contenu est un contrat typé** | Le modèle de contenu est décrit une fois et génère les types. Un contenu non conforme échoue au build. |
| A5 | **Accessibilité et performance sont des tests** | Elles se vérifient en intégration continue, pas à l'œil. |
| A6 | **Un seul dépôt, un seul déploiement** | Pas de microservices, pas de back-end séparé : la complexité est le principal ennemi de la pérennité. |
| A7 | **Réversible** | Le CMS est remplaçable, l'hébergeur est remplaçable, les contenus sont exportables. |
| A8 | **Aucun secret dans le code** | Variables d'environnement et coffre du fournisseur uniquement. |

## 2. Pile technique

| Couche | Choix | Version cible | Justification |
|---|---|---|---|
| Framework | **Next.js** (App Router) | 15+ | imposé par le brief ; rendu hybride, routage par dossier, excellent SEO |
| UI | **React** | 19+ | imposé par le brief ; composants serveur par défaut |
| Langage | **TypeScript** (mode strict) | 5.6+ | sécurité de typage sur le modèle de contenu |
| Styles | **Tailwind CSS** | 4+ | rapide, sans CSS mort, cohérent avec les jetons via variables CSS |
| Polices | **next/font** auto-hébergé | — | aucun appel tiers, `font-display: swap` |
| Contenu | **CMS headless** (D6) | — | autonomie éditoriale de SJCD |
| Validation de schéma | **Zod** | 3+ | validation des données de formulaire et du contenu |
| Formulaires | Server Actions + Zod | — | pas d'API manuelle à écrire ni à sécuriser |
| E-mail | Fournisseur transactionnel (Resend / Postmark) | — | accusés de réception, notification interne |
| Anti-spam | Turnstile ou équivalent | — | alternative RGPD à reCAPTCHA, accessible |
| Tests | Vitest + Testing Library + Playwright + axe-core | — | unitaire, intégration, bout en bout, accessibilité |
| Qualité | ESLint + Prettier + `lint-staged` + Husky | — | filet de sécurité pour un mainteneur seul |
| Analytics | Plausible / Umami / Matomo | — | sans cookie, respectueux de la vie privée |
| Hébergement | Vercel (ou équivalent) | — | cohérent avec Next.js, déploiement de prévisualisation gratuit |

*Le choix final du CMS et de l'hébergement dépend de **D6** et **D12**.*

## 3. Stratégie de rendu

| Type de page | Stratégie | Revalidation | Raison |
|---|---|---|---|
| Accueil, Qui sommes-nous, Impact, Programmes, Devenir partenaire | **SSG** + `revalidate` | à la publication via webhook CMS (ISR à la demande) | contenu stable, performance maximale |
| Détail de programme | **SSG** + `generateStaticParams` | à la publication | pages peu nombreuses, régénération ciblée |
| Contact, pages légales | **SSG** | à la publication | statiques par nature |
| Traitement de formulaire | **Server Action** (dynamique) | — | seule partie nécessitant un serveur |
| Recherche interne (v1.1+) | statique indexé côté client, ou route dynamique | — | hors périmètre MVP |
| Aperçu CMS (brouillons) | **dynamique**, `noindex`, protégé | — | relecture avant publication |

**Bénéfices attendus :** temps de réponse proches du fichier statique, coût d'hébergement
minimal, résistance aux pics de trafic, aucune surface d'attaque serveur sur les pages
publiques.

**Repli de dégradation :** si le CMS est indisponible, les pages déjà générées restent
servies. C'est une garantie de continuité importante : le site ne « tombe » pas avec son
back-office.

## 4. Arborescence du projet

```
sjcd-asbl-website/
├─ app/
│  ├─ layout.tsx                  # coquille racine : lang, polices, métadonnées
│  ├─ page.tsx                    # Accueil
│  ├─ globals.css                 # import Tailwind + variables issues des jetons
│  ├─ (site)/                     # groupe : pages avec en-tête et pied de page
│  │  ├─ qui-sommes-nous/page.tsx
│  │  ├─ programmes/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/page.tsx
│  │  ├─ impact/page.tsx
│  │  ├─ devenir-partenaire/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ mentions-legales/page.tsx
│  │  ├─ confidentialite/page.tsx
│  │  ├─ accessibilite/page.tsx
│  │  └─ plan-du-site/page.tsx
│  ├─ not-found.tsx               # 404 utile
│  ├─ error.tsx                   # frontière d'erreur
│  ├─ sitemap.ts                  # sitemap.xml généré
│  ├─ robots.ts                   # robots.txt généré
│  ├─ opengraph-image.tsx         # image de partage générée
│  └─ api/
│     └─ revalidate/route.ts      # webhook de revalidation du CMS (signé)
├─ components/
│  ├─ layout/                     # SiteHeader, MobileNav, SiteFooter, Breadcrumbs, SkipLink
│  ├─ content/                    # Hero, ImpactStat, ProgramCard, TestimonialCard, DataTable…
│  ├─ forms/                      # ContactForm, PartnershipForm, champs, états
│  ├─ ui/                         # Button, Link, Alert, Accordion, EmptyState…
│  └─ seo/                        # JSON-LD, métadonnées
├─ lib/
│  ├─ cms/                        # client CMS, requêtes typées, transformations
│  ├─ content/                    # schémas Zod, types du modèle de contenu
│  ├─ seo/                        # génération de métadonnées, données structurées
│  ├─ forms/                      # actions serveur, validation, anti-spam, e-mail
│  ├─ analytics/                  # chargement conditionnel après consentement
│  ├─ consent/                    # gestion du consentement
│  └─ utils/                      # helpers (dates, formats, nombres, chaînes)
├─ content/                       # export JSON des contenus (sauvegarde, réversibilité)
├─ i18n/                          # messages par locale (prêt si D5 active le multilinguisme)
├─ public/                        # images, logos, favicon, documents publics
├─ docs/                          # ce dossier
├─ prompts/                       # prompts de génération (v0.app)
├─ specs/                         # jetons, modèle de contenu, sitemap machine
├─ tests/
│  ├─ unit/
│  ├─ e2e/
│  └─ a11y/
├─ .github/workflows/ci.yml
├─ .env.example
└─ package.json
```

**Convention de nommage :** composants en `PascalCase.tsx`, modules utilitaires en
`kebab-case.ts`, identifiants métier en français, identifiants techniques en anglais.

## 5. Intégration des jetons de design

`specs/design-tokens.json` est la **source unique**. Chaîne de propagation :

```
specs/design-tokens.json
      │  (script de génération, exécuté au build et en pre-commit)
      ▼
app/globals.css  →  variables CSS  :root { --color-ink-700: … }
      │
      ▼
tailwind.config →  thème Tailwind : theme.extend.colors.ink[700] = 'var(--color-ink-700)'
      │
      ▼
Composants  →  classes utilitaires uniquement (bg-ink-700, text-body-m, duration-quick)
```

**Règles :**

1. Aucune valeur brute dans un composant. Un `#0E5E5A` en dur est un défaut de revue.
2. Le fichier `globals.css` généré n'est **pas** édité à la main : il est produit depuis le JSON.
3. Un changement de couleur se fait dans le JSON, puis se propage partout — y compris dans
   les maquettes v0.app, qui doivent être régénérées sur la même base.
4. Un test de CI vérifie que les jetons et le CSS généré sont synchronisés (échec si divergence).

## 6. Flux de contenu et revalidation

```
Éditeur·rice → CMS (brouillon) → relecture → publication
                                                │
                                                ├─▶ webhook signé → /api/revalidate
                                                │        │
                                                │        └─▶ revalidateTag('programs')
                                                │                  │
                                                │                  ▼
                                                └─▶        régénération ciblée
                                                           (quelques secondes)
```

**Exigences :**

- Le webhook est **signé** (secret partagé) et vérifié côté serveur ; toute requête non
  signée est rejetée (401) et journalisée.
- La revalidation est **ciblée par étiquette** (`tag`), pas globale : on ne régénère pas
  tout le site pour une actualité.
- Les **URL d'aperçu** sont protégées par un jeton à durée limitée et renvoient
  `noindex, nofollow`.
- Aucun contenu en brouillon n'est accessible sur une URL publique devinable.

## 7. Formulaires

**Implémentation :** Server Actions + validation Zod côté serveur, validation HTML
native côté client en complément (jamais en remplacement).

**Chaîne de traitement d'une soumission :**

1. **Filtrage anti-spam** — jeton Turnstile vérifié côté serveur, plus un contrôle de
   délai de remplissage et un pot-de-miel invisible. Jamais de CAPTCHA bloquant.
2. **Validation stricte** (Zod) — types, longueurs, formats, énumérations fermées.
3. **Normalisation** — échappement systématique ; aucune donnée utilisateur injectée en HTML.
4. **Limitation de débit** par adresse IP (mémoire ou service léger), seuil `TODO(SJCD)`.
5. **Envoi de deux e-mails** : notification interne vers la boîte de SJCD, accusé de
   réception vers l'expéditeur. L'accusé ne contient **aucune** donnée sensible.
6. **Journalisation minimale** : horodatage, type de formulaire, résultat. **Pas de contenu
   de message en clair dans les journaux.**
7. **Réponse** : statut de succès annoncé aux technologies d'assistance (`role="status"`),
   focus déplacé sur le message, formulaire vidé.

**Gestion des erreurs :** message générique côté public (« L'envoi a échoué, merci de
réessayer ou de nous écrire à … »), détail technique côté journal serveur uniquement.
Aucune trace de pile d'exécution exposée.

**Référence :** finalités et durées de conservation en `docs/02` §6 ; conformité en `docs/06` §5.

## 8. Multilinguisme (conditionné à D5)

**État par défaut : français uniquement.** L'architecture est préparée, non activée —
ce qui évite un coût et une complexité inutiles si D5 tranche pour le monolinguisme.

Si le multilinguisme est activé plus tard :

- Routage par segment de locale : `/`, `/nl/…`, `/en/…` (le français reste à la racine).
- `hreflang` complet et réciproque, `x-default` défini, `lang` correct sur chaque page.
- Textes d'interface dans `i18n/<locale>.json` ; contenus traduits dans le CMS avec
  **référence croisée** entre versions linguistiques.
- **Le français est la version de référence** : les traductions ne peuvent pas introduire
  de chiffres ou d'affirmations non validées. Une traduction se vérifie comme un contenu.
- Aucune traduction automatique non relue n'est publiée.
- Une page non traduite ne doit pas produire de 404 : elle affiche un message clair et
  renvoie vers la version disponible.

**Coût à anticiper :** le multilinguisme triple le travail **éditorial**, pas seulement le
travail technique. C'est la principale raison de repousser la décision.

## 9. Sécurité applicative

Voir `docs/06_…` §4 pour le détail et les en-têtes. Résumé des exigences d'architecture :

| Mesure | Implémentation |
|---|---|
| En-têtes de sécurité | `Content-Security-Policy` stricte, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` |
| Aucun secret côté client | Seules les variables `NEXT_PUBLIC_*` sont exposées ; revue systématique |
| Dépendances | Dependabot activé, audit automatisé, mise à jour mensuelle |
| Injection | Aucun HTML utilisateur, `dangerouslySetInnerHTML` interdit sans justification écrite |
| Webhooks | Signatures vérifiées, horodatage, limitation de débit |
| Journaux | Aucune donnée personnelle, aucune donnée de message |
| Sauvegardes | Chiffrées, accès restreint, test de restauration semestriel |

## 10. Budget de performance

Contrainte produit (C4), pas seulement technique : une partie du public navigue sur mobile
en Afrique centrale, avec une connexion limitée et un forfait data payant.

| Métrique | Cible | Seuil d'alerte |
|---|---|---|
| Poids total d'une page (hors PDF) | < 500 Ko | 800 Ko |
| JavaScript transféré | < 150 Ko compressé | 200 Ko |
| LCP (mobile, réseau bridé) | < 2,0 s | 2,5 s |
| INP | < 200 ms | 300 ms |
| CLS | < 0,05 | 0,1 |
| Requêtes HTTP au premier rendu | < 25 | 40 |
| Polices | ≤ 2 familles, ≤ 70 Ko au total, sous-ensembles | — |
| Images | AVIF/WEBP, `srcset`, chargement différé, dimensions explicites | — |

**Leviers :** composants serveur par défaut, aucun paquet d'animation lourd (CSS ou API
`View Transitions` natives), découpage du code, préconnexion aux seuls domaines réellement
utilisés, cartes et vidéos **chargées seulement après interaction ou consentement**.

**Contrainte d'arbitrage explicite :** en cas de conflit entre un effet visuel et le budget
de performance, **le budget gagne**. Cette règle est écrite ici pour éviter les débats en
fin de projet.

## 11. Environnements et déploiement

| Environnement | Rôle | Indexation | Données |
|---|---|---|---|
| **Local** | développement | `noindex` | contenu de test local |
| **Prévisualisation** | chaque pull request | `noindex` + protection par mot de passe | contenu de test |
| **Production** | public | indexable | contenu validé |

**Pipeline :** push → intégration continue (lint, types, tests, build, audit a11y) →
déploiement de prévisualisation → revue → fusion sur `main` → déploiement en production.

**Prérequis de mise en production :** nom de domaine (D12/D13), certificat TLS, accès
administrateurs transférés à SJCD, sauvegardes actives, supervision des erreurs, page
404 contrôlée, redirections en place, `TODO(SJCD)` = 0 sur les pages publiées.

## 12. Risques techniques et parades

| Risque | Impact | Parade |
|---|---|---|
| Le CMS hébergé ferme ou devient payant | perte d'autonomie éditoriale | export JSON mensuel versionné + modèle de contenu documenté + réversibilité testée |
| Le CMS impose des quotas d'API | site dégradé | rendu statique : les pages ne dépendent pas du CMS à chaque visite |
| Une dépendance devient vulnérable | faille de sécurité | Dependabot + audit mensuel + dépendances peu nombreuses |
| Perte du mainteneur unique | site non maintenu | documentation exhaustive (ce dossier), CI, conventions écrites, aucun savoir implicite |
| Dette visuelle : maquettes v0.app divergentes du design system | incohérence, refonte | les jetons sont la source unique ; v0.app génère et ne décide pas |
| Coût d'hébergement sous-estimé | budget imprévu | rendu statique sur palier gratuit/petit palier ; coût annuel documenté (`TODO(SJCD)` : D12) |

## 13. Modalités de travail

**Scripts `package.json` attendus :**

```jsonc
{
  "dev":            "next dev",
  "build":          "next build",
  "start":          "next start",
  "lint":           "eslint . --max-warnings=0",
  "typecheck":      "tsc --noEmit",
  "test":           "vitest run",
  "test:e2e":       "playwright test",
  "test:a11y":      "playwright test tests/a11y",
  "tokens:build":   "node scripts/build-tokens.mjs",
  "tokens:check":   "node scripts/build-tokens.mjs --check",
  "format":         "prettier --write ."
}
```

**Intégration continue — étapes bloquantes :**

1. `lint` — aucune erreur, aucun avertissement.
2. `typecheck` — aucune erreur.
3. `tokens:check` — jetons et CSS synchronisés.
4. `test` — tests unitaires au vert.
5. `build` — build de production réussi.
6. `test:e2e` + audit d'accessibilité sur les pages principales.
7. Vérification qu'aucun `TODO(SJCD)` n'apparaît dans une page publiée.

---

*Ce document décrit une architecture volontairement simple. Toute proposition ajoutant
un service, un back-end séparé ou une dépendance lourde doit démontrer que la complexité
supplémentaire est justifiée par un besoin réel — et non par une préférence technique.*
