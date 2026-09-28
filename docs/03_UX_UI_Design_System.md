# 03 — UX/UI, motion et design system

**Projet :** site institutionnel officiel de SJCD ASBL
**Document :** `docs/03_UX_UI_Design_System.md` — v1.0
**Statut :** base de travail — **à valider par SJCD**
**Source unique de vérité technique :** `specs/design-tokens.json`

---

## 1. Intention esthétique : décoder « 2050 »

Le brief fonde l'identité sur un mot-clé : **« 2050 »**, avec un garde-fou explicite —
*« futuriste dans les interactions et la précision visuelle, mais jamais gadget »* — et
quatre qualités à tenir : **sobre, humain, crédible, accessible**.

« 2050 » n'est donc **pas un style visuel** : c'est une **discipline de précision**. Ce
qui doit donner l'impression du futur, ce n'est pas le décor, c'est :

| Ce qui produit l'effet « 2050 » | Ce qui le détruit |
|---|---|
| Alignement optique rigoureux, grille tenue au pixel | Effets gratuits, ombres portées lourdes, dégradés criards |
| Typographie hiérarchisée, très lisible, respirante | Trois polices décoratives, textes en capitales serrées |
| Densité d'information maîtrisée : beaucoup d'air autour du peu qui compte | Tout afficher, tout animer |
| Réponse immédiate à l'interaction (< 200 ms), états de focus nets | Animations d'entrée qui retardent la lecture |
| Mouvement au service du sens : guider le regard, montrer une relation | Mouvement qui se regarde lui-même |
| Données précises, datées, sourcées — la précision factuelle | Chiffres ronds et faux |
| Fonctionnement impeccable hors ligne, en 3G, au clavier | Site lourd qui suppose la fibre et une souris |

**Le contrat de sobriété.** Toute proposition visuelle doit répondre à une question :
*« Qu'est-ce que cela change pour la compréhension ou la confiance ? »* Sans réponse, la
proposition est rejetée. C'est le premier critère d'arbitrage en revue de design et il
prime sur l'esthétique.

**Le contrat de tempérance.** « Premium » veut dire ici : **typographie soignée,
contrastes tenus, blancs généreux, un seul accent**. Le luxe, dans un site institutionnel,
c'est l'espace et la précision — pas l'ornement.

## 2. Principes de conception

| # | Principe | Traduction opérationnelle |
|---|---|---|
| **P1** | **La preuve avant la promesse** | Un chiffre sourcé vaut mieux que trois adjectifs. Chaque affirmation factuelle est reliée à sa source. |
| **P2** | **L'humain sans le pathos** | Photographie documentaire, regards dignes, contextes réels. Jamais de misérabilisme, jamais de banque d'images générique. |
| **P3** | **Profondeur plutôt que largeur** | Trois niveaux de lecture (N1/N2/N3, voir `docs/02` §1). On n'empile pas : on stratifie. |
| **P4** | **Sobriété d'abord** | Un accent coloré par écran. Une animation par interaction. Aucun effet sans fonction. |
| **P5** | **Accessible par construction** | Contraste, clavier, focus, lecteur d'écran, mouvement réduit : traités dès la maquette, jamais après. |
| **P6** | **Léger par respect** | Un budget de performance est une contrainte de design, pas un problème d'ingénieur. Voir `docs/05` §10. |
| **P7** | **Aucune impasse** | Tout état a un contenu : vide, chargement, erreur, succès. Un écran vide est un bug de conception. |
| **P8** | **Clair à 5 secondes** | Si un testeur ne comprend pas la nature de SJCD en 5 secondes, la page a échoué. |

## 3. Palette

### 3.1 Principe

Trois familles, strictement hiérarchisées :

1. **Encres froides** (`ink`) — structure, texte, autorité. Un bleu-noir profond, jamais du noir pur : la profondeur remplace la dureté.
2. **Papiers chauds** (`paper`) — fonds. Blancs légèrement chauds pour l'humain, sans virer au beige.
3. **Un accent unique** (`accent`, un teal profond) — action, focus, données. **Un seul accent** : c'est ce qui distingue la précision de la fantaisie.

Plus une couleur **chaude de soutien** (`highlight`, un ambre sobre) réservée aux
marqueurs de données et à de rares mises en valeur humaines — jamais pour un bouton.

### 3.2 Jetons de couleur

| Jeton | Valeur | Usage |
|---|---|---|
| `color.ink.1000` | `#070B10` | Titres sur fond clair, fonds sombres profonds |
| `color.ink.900` | `#0C1219` | Fond des sections sombres |
| `color.ink.700` | `#1E2A36` | Texte courant sur fond clair (contraste > 12:1) |
| `color.ink.500` | `#4A5A6A` | Texte secondaire (contraste ≈ 7:1 sur blanc) |
| `color.ink.300` | `#8A99A8` | Bordures, séparateurs, texte désactivé (≥ 3:1 pour l'UI) |
| `color.ink.100` | `#D6DCE3` | Bordures douces, fonds de substitution |
| `color.paper.0` | `#FFFFFF` | Fond principal |
| `color.paper.50` | `#F7F8F9` | Sections alternées |
| `color.paper.100` | `#EEF1F3` | Cartes, encarts |
| `color.accent.700` | `#0B4F4B` | Accent survolé / pressé |
| `color.accent.600` | `#0E5E5A` | **Accent principal** : boutons, liens, focus |
| `color.accent.400` | `#3E8F89` | Accent sur fond sombre |
| `color.accent.100` | `#DCEBE9` | Fond d'accent léger (badges, surlignage) |
| `color.highlight.500` | `#B4802A` | Données, mises en valeur rares (jamais un bouton) |
| `color.success.600` | `#1B7F4E` | Confirmation |
| `color.warning.600` | `#B4761A` | Avertissement |
| `color.danger.600` | `#B3261E` | Erreur de formulaire, alerte |

### 3.3 Règles d'usage

- **Jamais de couleur seule** pour porter une information : toujours doubler d'un texte,
  d'une icône ou d'une forme (accessibilité daltonisme).
- **Un seul accent par écran.** Deux accents qui se concurrencent annulent la hiérarchie.
- **Le rouge est réservé à l'erreur**, jamais à la décoration ni au marketing.
- **Fonds sombres** (`ink.900`/`ink.1000`) : optionnels, réservés aux sections de
  rupture (héros alternatif, citation forte, chiffres clés). Ils ne doivent pas dépasser
  ~25 % de la hauteur d'une page, sous peine de fatiguer la lecture.
- **Contraste minimal** : 4,5:1 pour le texte courant, 3:1 pour le texte large (≥ 24 px,
  ou ≥ 19 px en gras) et pour les composants d'interface. Vérifié en CI.

## 4. Typographie

### 4.1 Choix

| Rôle | Police | Justification |
|---|---|---|
| **Titres (display)** | **Newsreader** (serif, variable) | Gravité institutionnelle et chaleur humaine. Un serif dit « institution », pas « startup ». Il équilibre le futurisme technologique du reste : c'est lui qui apporte la crédibilité. |
| **Texte & interface** | **Inter** (sans-serif, variable) | Lisibilité exceptionnelle en petites tailles, chiffres tabulaires, support multilingue étendu. La précision. |
| **Données & code** | **IBM Plex Mono** | Chiffres d'impact, références, numéros légaux : la monospace signale « donnée vérifiable ». Usage parcimonieux. |

**Auto-hébergement obligatoire**, en sous-ensembles (latin + latin-ext), formats `woff2`,
`font-display: swap`, préchargement des deux graisses critiques uniquement. Aucun appel
à un CDN de polices tiers : c'est un transfert de données et un coût réseau inutiles.

**Repli si D7 impose une charte existante :** les polices de la charte priment, à
condition de respecter le budget de performance et une lisibilité équivalente.

### 4.2 Échelle typographique

Échelle fluide (`clamp()`), racine 16 px, ratio ≈ 1,25 en mobile et 1,333 en desktop.

| Jeton | Mobile | Desktop | Usage |
|---|---|---|---|
| `type.display.xl` | 36 px | 64 px | Titre du héros — un seul par page |
| `type.display.l` | 30 px | 44 px | Titre de section majeure |
| `type.display.m` | 24 px | 32 px | Titre de page, titre de carte principal |
| `type.heading.s` | 20 px | 24 px | Sous-titre, titre de carte |
| `type.body.l` | 18 px | 20 px | Chapeau, introduction |
| `type.body.m` | 16 px | 17 px | **Texte courant** |
| `type.body.s` | 14 px | 15 px | Légendes, métadonnées |
| `type.mono.l` | 28 px | 40 px | **Chiffres d'impact** |
| `type.mono.s` | 13 px | 13 px | Références, numéros de registre |

### 4.3 Règles

- **Longueur de ligne** : 60 à 75 caractères (mesure ≈ 34 rem). Jamais de texte pleine largeur.
- **Interlignage** : 1,6 pour le corps de texte, 1,15 pour les titres, 1,45 pour les tableaux.
- **Graisses** : 400 et 600 pour le texte, 500 et 600 pour les titres. Éviter les extrêmes.
- **Capitales** : jamais de paragraphe en capitales ; les capitales se limitent aux sigles
  et aux surtitres courts avec interlettrage augmenté (+0,08em).
- **Chiffres tabulaires** obligatoires dans les tableaux et les compteurs d'impact, pour
  éviter que les nombres « sautent » lorsqu'ils s'animent.
- **Veilles typographiques françaises** : espaces insécables avant `: ; ! ?`, guillemets
  « », tiret cadratin —, majuscules accentuées.

## 5. Espacement, grille et mise en page

**Unité de base : 4 px.** Échelle : `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.

| Jeton | Valeur | Usage type |
|---|---|---|
| `space.1` | 4 px | Écart interne minimal (icône ↔ libellé) |
| `space.2` | 8 px | Écart entre éléments liés |
| `space.3` | 12 px | Remplissage de petits composants |
| `space.4` | 16 px | Remplissage de boutons, écart de paragraphe |
| `space.6` | 24 px | Écart entre blocs d'une même section |
| `space.8` | 32 px | Écart interne de carte |
| `space.12` | 48 px | Écart entre sections (mobile) |
| `space.16` | 64 px | Écart entre sections (desktop) |
| `space.24` | 96 px | Respiration autour d'un chiffre clé |
| `space.32` | 128 px | Séparation de sections majeures (desktop large) |

**Grille :** 12 colonnes, gouttière 24 px (mobile 16 px), largeur maximale de contenu
`1200px`, largeur de lecture `720px`. Points de rupture : `480 · 768 · 1024 · 1280 · 1536`.
Approche **mobile-first** obligatoire.

**Rayons :** `2 · 6 · 12 · 20 · 999` px. Les cartes utilisent 12 ou 20 px ; les boutons
6 ou 999 px ; les encarts de données 2 px (angularité = précision).

**Bordures avant ombres.** La hiérarchie se construit par la bordure, l'espace et le
contraste — pas par l'ombre portée. Ombres réservées aux éléments flottants (menus,
modales, infobulles), toujours très diffuses et à faible opacité.

**Blancs généreux au-dessus des titres de section** (2 à 3 fois l'écart interne) :
c'est le principal levier de l'impression « premium ».

## 6. Mouvement

### 6.1 Règles non négociables

1. `prefers-reduced-motion: reduce` → **toutes** les animations sont neutralisées ou
   remplacées par un simple changement d'état instantané. Ce n'est pas optionnel.
2. **Aucun mouvement ne retarde la lecture.** Le contenu est lisible immédiatement ;
   l'animation d'entrée est un raffinement, jamais un préalable.
3. **Aucun carrousel automatique.** Le défilement automatique vole le contrôle et pose un
   problème d'accessibilité (WCAG 2.2.2). Si un carrousel est indispensable, il est
   manuel, avec boutons précédent/suivant, pause et navigation au clavier.
4. **Aucune lecture vidéo automatique avec son.**
5. **Aucun effet de défilement qui bloque la page** (parallaxe lourde, « scroll-jacking »).
6. **Une animation par interaction.** Deux mouvements simultanés suffisent à donner une
   impression d'agitation — l'inverse du sérieux recherché.

### 6.2 Jetons de mouvement

| Jeton | Durée | Usage |
|---|---|---|
| `motion.instant` | 120 ms | Changement d'état, survol, focus |
| `motion.quick` | 180 ms | Apparition d'un élément court |
| `motion.standard` | 240 ms | Entrée de carte, ouverture de menu |
| `motion.emphasis` | 320 ms | Transition de section, ouverture de modale |
| `motion.slow` | 480 ms | Révélation de chiffre d'impact (usage rare) |

**Courbes :** `standard` = `cubic-bezier(0.2, 0, 0, 1)` (départ franc, arrivée douce) ;
`entrance` = `cubic-bezier(0.16, 1, 0.3, 1)` ; `exit` = `cubic-bezier(0.4, 0, 1, 1)`.

**Mouvement autorisé :** opacité 0→1, translation verticale de 8 à 16 px au maximum,
mise à l'échelle 0,98→1 (très subtile), changement de couleur de bordure.
**Mouvement interdit :** rotations, rebonds, secousses, mise à l'échelle > 1,05,
déplacements horizontaux importants, flous animés, effets 3D.

**Chiffres d'impact :** le décompte animé est **déconseillé**. Si SJCD y tient, il doit
(a) être très court (< 600 ms), (b) afficher immédiatement la valeur finale si le
mouvement est réduit, (c) ne jamais servir à masquer un chiffre approximatif.

*Justification :* un chiffre qui s'anime suggère un chiffre qui se construit — donc une
communication. Un chiffre affiché net et daté suggère une donnée — donc une preuve. C'est
le second effet que le projet recherche.

## 7. Inventaire des composants

Chaque composant doit définir ses **états** : par défaut, survol, focus visible, actif,
désactivé, chargement, erreur, succès, **vide**, et son comportement avec `reduced-motion`
et en RTL (à blanc, non requis aujourd'hui).

### 7.1 Structure

| Composant | Rôle | Points d'attention |
|---|---|---|
| `SiteHeader` | navigation principale | sticky discret, état actif, variante translucide sur héros sombre, `Échap` ferme le menu mobile |
| `MobileNav` | menu plein écran | piège de focus, cibles ≥ 44 px, retour du focus à l'ouverture/fermeture |
| `SiteFooter` | mentions légales + navigation secondaire | **porte les données d'identification obligatoires (D1)** |
| `Breadcrumbs` | fil d'Ariane | obligatoire sur les sous-pages de programme ; données structurées `BreadcrumbList` |
| `LanguageSwitcher` | sélection de langue | masqué si D5 = FR seul |
| `SkipLink` | aller au contenu | premier élément focusable de toutes les pages, visible au focus |

### 7.2 Contenu

| Composant | Rôle | Points d'attention |
|---|---|---|
| `Hero` | affirmation principale | un seul par page ; titre ≤ 10 mots ; contraste garanti sur image |
| `ImpactStat` | chiffre clé | valeur + libellé + **période + source** ; monospace, chiffres tabulaires ; jamais un chiffre sans période |
| `ImpactStatGroup` | 3–4 chiffres | empilé en mobile, jamais rétréci sous 28 px |
| `ProgramCard` | résumé de programme | nom, domaine, zone, un chiffre de résultat, statut |
| `ProofBadge` | signal institutionnel | « Enregistrée sous le n° … » — valeur en monospace |
| `TestimonialCard` | citation | nom, rôle, lieu, autorisation ; guillemets français ; ne jamais tronquer une citation sans le signaler |
| `PartnerLogoWall` | logos de partenaires | **section supprimée si aucun partenaire** — jamais de faux logo ; niveau de gris par défaut, couleur au survol |
| `DataTable` | indicateurs d'impact | en-têtes explicites, `scope`, tri accessible, défilement horizontal avec indication, contenu lisible au lecteur d'écran |
| `DocumentCard` | PDF téléchargeable | format, poids et date affichés ; nouvelle fenêtre annoncée ; alternative HTML si possible |
| `Accordion` | FAQ, informations denses | `button` natif, `aria-expanded`, contenu présent dans le DOM |
| `Timeline` | histoire | dates en monospace, ordre chronologique marqué sémantiquement |
| `Alert` | information importante | 4 variantes, `role` adapté, jamais d'alerte purement colorée |

### 7.3 Interaction

| Composant | Rôle | Points d'attention |
|---|---|---|
| `Button` | action | variantes : primaire / secondaire / tertiaire / danger ; 5 états ; **jamais un bouton qui est un lien déguisé** |
| `Link` | navigation | souligné par défaut hors navigation : la couleur seule ne signale pas un lien (accessibilité) |
| `TextInput`, `TextArea` | saisie | `label` toujours visible (jamais un placeholder seul comme étiquette), aide et erreur associées par `aria-describedby` |
| `Select`, `Checkbox`, `RadioGroup` | choix | natifs si possible ; jamais de `div` cliquable |
| `ConsentCheckbox` | consentement RGPD | non pré-coché, finalité explicite, lien vers la politique |
| `FormStatus` | retour de soumission | annoncé via `role="status"` / `alert`, focus déplacé vers le message |
| `ContactForm`, `PartnershipForm` | formulaires | voir `docs/02` §6 |
| `CookieBanner` | consentement traceurs | refus aussi accessible que l'acceptation, aucun traceur avant choix, choix modifiable à tout moment |
| `Pagination` | listes longues | navigation au clavier, page courante annoncée |
| `EmptyState` | état vide | explique pourquoi c'est vide et propose l'action suivante |
| `ErrorState` | erreur | cause, action de reprise, moyen de contact humain |

## 8. Accessibilité — engagement de conception

Objectif : **WCAG 2.2 niveau AA**, vérifié automatiquement en CI et manuellement à la recette.

| Exigence | Règle de conception |
|---|---|
| Contraste | ≥ 4,5:1 (texte), ≥ 3:1 (texte large et UI). Jamais de texte gris clair sur blanc. |
| Focus | Toujours visible, jamais supprimé, contour ≥ 2 px avec décalage — y compris sur fond photographique |
| Clavier | Tout atteignable et utilisable au clavier seul, ordre logique, aucun piège de focus |
| Structure | Titres hiérarchisés sans saut de niveau, une seule `h1` par page, régions repérables, listes sémantiques |
| Images | Texte alternatif descriptif si porteur d'information, `alt=""` si décoratif. Jamais de texte essentiel en image |
| Formulaires | Étiquette visible et associée, erreurs explicites et textuelles, identification de l'erreur par le texte et non la couleur |
| Mouvement | `prefers-reduced-motion` respecté ; aucun contenu clignotant ; aucun défilement automatique |
| Cibles tactiles | ≥ 24 × 24 px minimum (WCAG 2.2), ≥ 44 × 44 px recommandé |
| Zoom | Utilisable à 200 % sans perte de contenu ni défilement horizontal |
| Langue | Attribut `lang` correct sur chaque page et sur chaque passage en langue étrangère |
| Liens | Libellé explicite hors contexte : jamais « cliquez ici », « en savoir plus » seul |
| Documents | PDF : titre, langue balisée, ordre de lecture correct — sinon fournir une alternative |

## 9. Contenu visuel

**Photographie.** Documentaire, située, digne. Lumière naturelle, cadrage respectueux,
personnes actrices de l'image. Interdits : banque d'images générique (visages
occidentaux pour illustrer l'Afrique), images de détresse, enfants non consentis,
photographies antérieures à 3 ans présentées comme actuelles.

**Traitement.** Recadrage cohérent, saturation légèrement maîtrisée, aucun filtre lourd.
Ratios normalisés : `3:2` (documentaire), `1:1` (portrait), `16:9` (bannière).

**Format.** `AVIF` puis `WEBP` puis `JPEG` en repli, tailles multiples, `srcset` et `sizes`
renseignés, `width`/`height` explicites pour éviter tout décalage de mise en page (CLS),
`loading="lazy"` sauf image du héros qui est préchargée avec priorité haute.

**Icônes.** Un seul jeu, tracé géométrique régulier (épaisseur 1,5 px), 24 px par défaut.
Icônes décoratives : `aria-hidden="true"`. Icônes seules dans un bouton : toujours
accompagnées d'un `aria-label`.

**Logo.** `TODO(SJCD)` : D7. En attendant, un logotype typographique sobre est utilisé et
**explicitement marqué comme provisoire**. Zones de dégagement, version monochrome,
taille minimale et variante sur fond sombre à documenter dès réception.

## 10. Maquettes de référence — gabarits à produire

| Gabarit | Contenu attendu |
|---|---|
| Accueil | héros, chiffres clés, programmes, preuve institutionnelle, témoignages, CTA final |
| Page institutionnelle | contenu éditorial riche + encart de transparence |
| Liste de programmes | grille de cartes, état vide prévu |
| Détail de programme | structure en 7 blocs (`docs/02` §4.3) + fil d'Ariane |
| Impact | tableau de données + bibliothèque de rapports + méthodologie |
| Page de conversion | proposition de valeur par profil + formulaire qualifiant |
| Contact | coordonnées + formulaire + cadre légal |
| Page de conformité | texte légal lisible (mentions, vie privée, accessibilité) |
| États | 404, erreur, vide, chargement, succès de formulaire |

**Livrables de design attendus :** maquettes desktop (1440) et mobile (390) pour chaque
gabarit ; spécimens des composants avec tous leurs états ; version sombre des sections
de rupture ; planche de contraste validée ; planche de mouvement (durées, courbes).

## 11. Ce que ce document ne décide pas

- **Les couleurs finales et la typographie** dépendent de D7 (identité visuelle existante ?).
  Les jetons ci-dessus sont une **proposition forte et cohérente**, pas un arbitrage de marque.
- **Le libellé du CTA principal** dépend de D8 (objectif prioritaire).
- **La présence d'un sélecteur de langue** dépend de D5.

Ces trois points sont réversibles sans refonte : ils sont isolés dans les jetons et les
libellés, précisément pour permettre l'arbitrage tardif sans dette technique.

---

*`specs/design-tokens.json` est la source de vérité pour l'implémentation. Toute
modification de couleur, de typographie, d'espacement ou de mouvement doit être faite
dans le JSON, puis propagée — jamais directement dans le code des composants.*
