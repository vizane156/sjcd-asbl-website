# Phase 2 — Motion system et validation

## A. Changements réalisés

- `components/motion.tsx` : orchestration GSAP/ScrollTrigger en deux niveaux actifs, imports différés, reveals avec opacity, cleanup, révélation immédiate au focus, highlight, compteur conditionnel, Lenis enrichi, pointer halo/magnetic/tilt et press tactile délégué. `TiltCard` conserve son nom mais possède maintenant un wrapper GSAP distinct du plan rotatif CSS.
- `lib/motion/policy.ts` : politique centralisée. Universal sur mobile, Save-Data, réseau lent et faible CPU ; Enhanced seulement >=960px, hover/pointer fin, au moins quatre processeurs logiques lorsque connus, hors Save-Data/2G/3G/reduced-motion.
- `lib/motion/scroll.ts` : coordination Lenis/menu, stop/start, fixation du document, restauration de position, navigation d’ancre et focus.
- `components/Navbar.tsx` : verrouillage avant ouverture, fermeture animée 150ms, Échap/focus/ancres, déverrouillage au resize et unmount, exclusion Lenis du dialogue.
- `components/motion/primitives.tsx` : Reveal, RevealText, Stagger, AnimatedImage. Couches distinctes reveal / parallax / zoom. next/image pour une source photo autorisée, sinon placeholder explicite.
- `components/StoryRail.tsx` : galerie native, boutons précédent/suivant, états de bord, progression CSS, ResizeObserver et listener nettoyés.
- `components/ImpactValue.tsx` : aucune valeur publiée sans valeur/période/source ; cible count-up seulement pour chaîne numérique ; nom accessible stable, valeur visuelle aria-hidden.
- `components/SectionHeader.tsx` : utilisation de Reveal.
- `app/page.tsx` : intégration des primitives, images et galerie ; deux CTA magnétiques (hero Impact, CTA Collaborer), valeurs d’impact gardées non renseignées.
- `app/globals.css` : overflow partenaires corrigé, wrapper bento, couches image, navbar réduite au scroll, menu stagger, press tactile, interactions pointer, progression, protections reduced-motion et transition racine 180ms.
- `tests/contracts.test.mjs` : contrat de véracité mis à jour pour ImpactValue.
- `tests/e2e/motion.spec.ts` : 20 nouveaux tests navigateur ; les dix tests historiques restent actifs.

Palette, Nunito Sans, tokens et structure éditoriale conservés. Pas de migration ni nouvelle dépendance applicative.

## B. Nouveaux composants réels

Reveal, RevealText, Stagger, AnimatedImage, StoryRail, ImpactValue. SmoothScrollProvider, TiltCard et Navbar sont des composants existants refactorisés, pas de nouveaux composants.

## C. Motion system actif

Tier 1 : entrées mask du hero, fade/translate des textes et headers, stagger impact/bento/partenaires/news/stories, fade-scale des médias, highlight introduction, menu animé, press tactile. Presets réutilisables up/scale/clip. Les éléments déjà dans le viewport à l'initialisation ne sont pas masqués à nouveau. Un focus dans un reveal termine immédiatement ce reveal.

Tier 2 : Tier 1 + Lenis, parallax flamme 10% et médias ±3%, clip reveal des médias, tilt ±3°, halo suivant le pointeur, attraction de deux CTA ±3px, hover zoom 1.025 et élévation des cartes. Styles pointer et GSAP sur des couches distinctes.

Tier 3 : non activé. La flamme SVG existante transmet déjà le symbole de lumière. Sans récit ni média institutionnel supplémentaire, une scène WebGL aurait ajouté du coût et un décor redondant. Aucun moteur 3D installé, aucun canvas, aucune affirmation de 3D réelle.

Les reveals GSAP restent limités à l'accueil. Les pages intérieures conservent la navigation native et les transitions CSS interdocuments, pas de nouveau système de reveals.

## D. Desktop

Rotation réelle contrôlée via DOMMatrix (termes m13/m23 non nuls), retour à zéro après pointerleave ; halo alimenté en pourcentages ; translation calculée des CTA ; parallax calculé variable au scroll ; navbar blur actif ; clip-path échantillonné puis nettoyé ; View Transition observée à 180ms dans Chromium.

## E. Mobile

Lenis absent mais GSAP/ScrollTrigger présents. Opacité intermédiaire strictement entre 0 et 1 mesurée pendant l'entrée d'une statistique. Reveal des médias par scale/opacity, pas de parallax continu. Press tactile testé via événements tactiles Chromium CDP ; balayage horizontal réel émulé, snap et progression. Menu animé, focus et document verrouillés.

## F. Performance et accessibilité

Imports GSAP/ScrollTrigger différés ; Lenis chargé uniquement en Enhanced. Aucun Three.js. Pas de rendu React à chaque mouvement pointer. requestAnimationFrame à la demande pour pointer et progression ; ticker Lenis seulement en Enhanced. Nettoyage des listeners, GSAP contexts, ResizeObserver et styles. CSS initial lisible sans JS ; reduced-motion n'initialise pas le moteur et supprime transforms et View Transitions. Save-Data et 3G conservent Universal.

Le build annonce 113kB First Load JS pour l'accueil, hors coûts différés : ce n'est pas une mesure Core Web Vitals. Les utilisateurs mobiles téléchargent maintenant GSAP/ScrollTrigger, contrairement à la phase 1 ; c'est un compromis explicite pour des reveals cohérents. next/image est prêt mais la branche photo réelle n'a pas été validée avec un média institutionnel fourni. Pas de promesse de performance sur appareil physique à faible mémoire.

## G. Bugs corrigés

1. Tilt : transform GSAP sur wrapper, CSS sur inner. Rotation vérifiée, pas seulement variables.
2. Menu/Lenis : stop + body fixed + exclusion du dialogue + restitution de position ; testé à 1024px avec souris/Lenis, et avec gestes tactiles à 390px. Pas seulement overflow hidden.
3. Overflow 720px : colonnes minmax(0,1fr), min-width:0 et wrapping. scrollWidth égal au viewport pour les douze largeurs au fil des sections.
4. Régression ARIA introduite pendant refactor Impact : rôle du visuel accessible corrigé ; axe repasse sans supprimer de règle.
5. Press tactile : le pseudo-état :active seul ne suffisait pas au test tactile ; état délégué pointerdown/up/cancel ajouté et testé.

## H. Limites et absences

- Pas de 3D/WebGL (choix explicite).
- Pas de photos institutionnelles inventées. Placeholders conservés.
- Aucun compteur réel affiché : données absentes. Le count-up a été testé sur une fixture DOM de valeur 42, injectée uniquement par Playwright après hydration, jamais dans les contenus du site.
- Pas de shared-image transition personnalisée ; transition globale native seulement.
- Stories et actualités restent non cliquables faute de publications. Commandes de galerie actives, pas de faux liens.
- Pas de scroll-snap vertical global, conformément au brief.
- CMS, FR/EN opérationnel, financement/paiement et envoi du contact restent hors de cette implémentation motion.
- Aucun test Safari/Firefox ni téléphone physique, ni audit WCAG manuel complet ou mesure batterie/FPS.

## I. Résultats réels

- npm ci : réussi, 0 vulnérabilité lors de l'installation ; avertissement de support ESLint 9 à noter.
- lint : réussi.
- typecheck : réussi.
- tokens:check : réussi.
- tests Node : 5/5.
- build production : réussi, 17 routes générées.
- Playwright / Chromium 153 : 30/30, dernière exécution complète en 6,2 minutes.
- Responsive : 320, 375, 390, 414, 640, 720, 768, 960, 1024, 1280, 1440, 1920. Vérification de largeur au fil des sections, reveals et menus disponibles.
- Reduced-motion, Save-Data, 3G : tests réussis (signaux simulés, pas réseau physique ralenti).
- Axe : contrôles existants accueil et pages intérieures réussis, aucune règle désactivée.
- Captures desktop/mobile/hero inspectées. Artefacts temporaires dans test-results/ (ignorés par Git).

Reproduction standard : npm ci && npm run lint && npm run build && npm run typecheck && npm test && npm run test:e2e (Chromium Playwright disponible). Dans l'environnement Arena, Chromium a été installé uniquement sous .arena/browser, sans modifier les dépendances du projet ; le lancement utilise PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH et LD_LIBRARY_PATH.

## J. Synthèse

| Feature | Avant Phase 2 | Après Phase 2 | Desktop | Mobile | Vérifié |
|---|---|---|---|---|---|
| Lenis | Conditionnel, bug menu | Conservé, coordonné au verrouillage | Éligible | Natif | Oui |
| GSAP | Desktop seulement | Universal + Enhanced | Oui | Oui | Oui |
| ScrollTrigger | Desktop seulement | Reveals adaptatifs | Oui | Oui | Oui |
| Parallax | Flamme/placeholders | Couches isolées, amplitude limitée | Flamme/médias | Reveal alternatif | Oui |
| Scroll snap | Rail natif | Commandes + progression | Oui | Swipe natif | Oui |
| Micro-interactions | Partielles | Hover, press, focus, zoom | Oui | Press/menu | Oui |
| Tilt | Bloqué par GSAP | Wrapper distinct, rotation réelle | ±3° | Non | Oui |
| Magnetic CTA | Absent | Deux CTA seulement | ±3px | Non | Oui |
| Halo | Fixe | Suit le pointeur | Oui | Non | Oui |
| 3D | Absente | Non retenue | SVG | SVG | Absence confirmée |
| Page transitions | Native partielle | Racine/old/new 180ms, reduced off | Selon support | Selon support | Chromium |
| Mobile motion | Majoritairement absent | Hero/reveals/stagger/images/menu/press | — | Actif | Oui |
