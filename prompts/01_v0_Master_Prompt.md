# Prompt maître — génération des maquettes du site SJCD ASBL

**Usage :** à coller dans v0.app (ou tout outil de génération d'interface) pour produire
les maquettes du site institutionnel de SJCD ASBL.
**Version :** 1.0 — 28/09/2026
**Document liés :** `docs/03_UX_UI_Design_System.md` (référence de conception),
`specs/design-tokens.json` (référence technique), `docs/02_Sitemap_And_Content.md` (contenu).

---

## Avertissement préalable — à lire avant d'utiliser ce prompt

Ce prompt contient **beaucoup de `TODO(SJCD)`**, et c'est volontaire. Les données
institutionnelles réelles n'existent pas encore (voir `docs/01_PRD.md` §8, D1 à D4).

⚠️ **Ne jamais remplacer un `TODO(SJCD)` par un contenu plausible inventé.** Un chiffre
crédible mais faux est le pire défaut possible pour un site dont la promesse est la
transparence. Les maquettes doivent montrer **la structure et la hiérarchie**, avec des
emplacements visibles là où la donnée manque — c'est même un résultat utile : cela rend
visible ce qu'il reste à obtenir.

---

## PROMPT — bloc à copier

> Tu conçois les maquettes du **site institutionnel officiel de SJCD ASBL**, une
> association sans but lucratif.
>
> ### Contexte et intention
>
> Le site doit agir comme un **système de confiance**, en quatre étages séquentiels :
> **preuve institutionnelle → preuve d'impact → opportunité de partenariat → action**.
> Ce n'est pas une brochure : chaque page doit lever une objection précise et rendre la
> suivante crédible. Publics visés : bailleurs institutionnels, entreprises mécènes,
> donateurs individuels, bénévoles, journalistes, bénéficiaires.
>
> **Mot-clé esthétique : « 2050 »** — futuriste par la **précision des interactions**,
> jamais par le décor. Ce qui doit produire l'effet du futur, ce n'est pas l'ornement,
> c'est l'alignement rigoureux, la typographie hiérarchisée, la densité d'information
> maîtrisée, la réactivité immédiate aux interactions et l'exactitude des données.
>
> Garde-fou absolu : **sobre, humain, crédible, accessible**. Toute animation doit avoir
> une justification fonctionnelle. Un effet décoratif est un défaut.
>
> ### Direction artistique
>
> **Palette.** Trois familles strictement hiérarchisées : encres froides bleu-noir
> profond (texte, structure, autorité) — jamais du noir pur ; papiers blancs légèrement
> chauds (fonds) ; **un seul accent**, un teal profond `#0E5E5A` (actions, focus, données).
> Une couleur ambre `#B4802A` réservée aux marqueurs de données, jamais aux boutons.
> Fonds sombres profonds `#0C1219` autorisés pour de rares sections de rupture,
> sur moins d'un quart de la hauteur d'une page.
>
> **Typographie.** Titres en **serif Newsreader** — la gravité institutionnelle et la
> chaleur humaine viennent de là. Texte et interface en **Inter**. Chiffres d'impact,
> références et numéros légaux en **IBM Plex Mono** : la monospace signale « donnée
> vérifiable ». Échelle fluide, longueur de ligne 60 à 75 caractères, interlignage 1,6
> pour le corps de texte. Respecter la typographie française : espaces insécables avant
> `: ; ? !`, guillemets « », tiret cadratin —.
>
> **Espacement.** Unité de base 4 px, échelle 4/8/12/16/24/32/48/64/96/128. Beaucoup de
> blanc : les grands espacements au-dessus des titres de section sont le principal levier
> de l'impression premium.
>
> **Surfaces.** Bordures avant ombres. Rayons 2 px (données), 12–20 px (cartes),
> 6 px ou 999 px (boutons). Ombres réservées aux éléments flottants, toujours très
> diffuses. Grille de 12 colonnes, largeur de contenu 1200 px, largeur de lecture 720 px.
>
> **Mouvement.** Discret et rapide : 120 ms pour les changements d'état, 240 ms pour les
> entrées. Opacité et translations verticales de 8 à 16 px seulement. **Interdits :**
> rotations, rebonds, parallaxe lourde, carrousels automatiques, vidéo en lecture
> automatique, mise à l'échelle au-delà de 1,05. Respecter `prefers-reduced-motion`.
>
> **Photographie.** Documentaire, située, digne. Lumière naturelle, personnes actrices et
> non victimes. **Jamais** de banque d'images générique, jamais d'image de détresse, jamais
> de misérabilisme.
>
> ### Contrainte d'accessibilité — non négociable
>
> Niveau **WCAG 2.2 AA**. Contraste ≥ 4,5:1 pour le texte et ≥ 3:1 pour les éléments
> d'interface. Focus toujours visible, jamais supprimé. Tout utilisable au clavier. Cibles
> tactiles ≥ 44 px. Une seule `h1` par page, hiérarchie de titres sans saut. Libellés de
> formulaires toujours visibles (jamais un simple placeholder comme étiquette). Aucune
> information portée par la couleur seule.
>
> ### Gabarits à produire
>
> Pour chacun : **desktop (1440 px) et mobile (390 px)**.
>
> 1. **Accueil** — bandeau d'annonce optionnel et fermable ; héros avec affirmation en une
>    phrase (titre ≤ 10 mots), visuel documentaire, action primaire et secondaire ;
>    **3 à 4 chiffres d'impact** en monospace, chacun avec sa période visible
>    (« au 31/12/2025 ») et sa source ; 2 paragraphes « qui est SJCD » ; 3 cartes de
>    programmes ; bandeau discret de preuve institutionnelle (numéro d'enregistrement en
>    monospace) ; 2 témoignages attribués ; CTA final à 3 voies.
> 2. **Qui sommes-nous** — mission, histoire en frise chronologique sobre, valeurs avec
>    définitions concrètes, ancrage géographique, gouvernance, bloc de transparence avec
>    documents téléchargeables.
> 3. **Programmes (liste)** — grille de cartes (nom, domaine, zone, un chiffre de
>    résultat, statut) et **état vide** correctement traité.
> 4. **Programme (détail)** — structure fixe en 7 blocs : titre + résumé, le problème,
>    notre réponse, le public, les résultats (tableau de données), durée et financement,
>    perspective. Avec fil d'Ariane.
> 5. **Impact** — tableau d'indicateurs (valeur, période, méthode, source), section
>    « comment nous comptons » avec les limites assumées, répartition par programme et par
>    zone, bibliothèque de rapports, histoires d'impact.
> 6. **Devenir partenaire** — proposition de valeur, contenu adapté par profil
>    (institutionnel, entreprise, ONG, collectivité), formats de collaboration, processus
>    en étapes, dossier téléchargeable, formulaire qualifiant.
> 7. **Contact** — coordonnées complètes, formulaire avec menu d'objet de la demande et
>    **case de consentement non pré-cochée**, repère d'accès (pas de carte interactive).
> 8. **Pages de conformité** — mentions légales, politique de confidentialité,
>    accessibilité : texte légal dense mais lisible.
> 9. **États** — 404 utile et orientante, erreur, état vide, chargement, succès de formulaire.
>
> ### Bibliothèque de composants à décliner avec tous leurs états
>
> `SiteHeader` (état actif persistant), `MobileNav` (plein écran, cibles ≥ 44 px),
> `SiteFooter` (identité légale, navigation secondaire, contact), `Breadcrumbs`,
> `SkipLink`, `Hero`, `ImpactStat` et `ImpactStatGroup` (valeur + période + source
> **obligatoires**), `ProgramCard`, `ProofBadge`, `TestimonialCard`, `DataTable`,
> `DocumentCard` (format, poids et date affichés), `Accordion`, `Timeline`, `Alert`,
> `Button` (primaire, secondaire, tertiaire, danger × 5 états), `Link` (souligné hors
> navigation), `TextInput`, `TextArea`, `Select`, `Checkbox`, `ConsentCheckbox`,
> `FormStatus`, `CookieBanner` (refus aussi accessible que l'acceptation),
> `EmptyState`, `ErrorState`.
>
> ### Règles de contenu
>
> Tout contenu factuel inconnu doit apparaître sous la forme explicite `TODO(SJCD)`,
> **jamais remplacé par une valeur plausible inventée**. Aucun chiffre sans période et
> sans source. Aucun logo de partenaire si l'autorisation n'est pas confirmée. Aucune
> photographie de personne identifiable sans mention d'autorisation. Le ton est digne,
> humain et factuel : pas de superlatif non étayé, pas de misérabilisme, pas de
> sensationnalisme.
>
> ### Ce qu'il ne faut surtout pas faire
>
> Dégradés flashy, néons, verre dépoli partout, ombres portées lourdes, coins très
> arrondis généralisés, animations spectaculaires, carrousel automatique, compteurs
> animés qui suggèrent un chiffre non vérifié, illustrations génériques, icônes de trois
> styles différents, textes en capitales, boutons sans libellé clair, mises en page qui
> exigent le desktop.
>
> ### Livrable attendu
>
> Pour chaque gabarit : structure sémantique, hiérarchie visuelle complète et états
> interactifs. Accompagner d'une **planche de composants** (tous les états) et d'une
> **planche de couleurs** avec les ratios de contraste vérifiés. Signaler explicitement
> chaque `TODO(SJCD)` restant.

---

## Après la génération — contrôle obligatoire

- [ ] Les jetons de couleur et de typographie correspondent à `specs/design-tokens.json`.
- [ ] Les contrastes annoncés sont réellement atteints (vérification à l'outil, pas à l'œil).
- [ ] Chaque chiffre affiché porte une période et une source.
- [ ] Chaque `TODO(SJCD)` est resté visible et n'a pas été remplacé par un contenu inventé.
- [ ] Les états sont tous dessinés (vide, erreur, chargement, succès, désactivé).
- [ ] Le mobile n'est pas une réduction du desktop : il est conçu pour l'usage au pouce.
- [ ] Aucun composant n'invente un style absent du design system.
- [ ] Le résultat sert bien les 4 étages du système de confiance.

## Note sur l'usage des outils de génération

Les maquettes générées sont un **accélérateur de conception**, en aucun cas une source de
vérité. En cas de divergence entre une maquette et `docs/03` ou `specs/design-tokens.json`,
**la documentation gagne** — sinon deux design systems concurrents apparaissent, et la
refonte devient inévitable. Les maquettes retenues servent de référence visuelle pour
l'implémentation Next.js, jamais de code de production.
