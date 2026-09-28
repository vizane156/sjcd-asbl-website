# Direction créative — Lumière

**28 septembre 2026 · proposition implémentée, à valider visuellement par SJCD.**
Ce document remplace les choix esthétiques du premier cadrage. L’identité et le pays
proviennent du nouveau brief utilisateur ; l’objet social et les actions restent à fournir.

## 1. Direction artistique

**Future Institutional / Human / Premium / Immersive.** Le mot « Chandelier » inspire une
flamme abstraite : transmission, attention et espoir. Il s’agit d’une interprétation
créative, pas d’une affirmation sur la symbolique officielle de l’organisation.

La nuit crée la profondeur ; les grandes séquences claires donnent de l’air à la lecture.
Nunito apporte la chaleur humaine sans photographie de terrain inventée. Le rythme repose
sur l’alternance : hero immersif → texte éditorial → bento → projets → données → galerie.

**Logo :** une marque temporaire en SVG. Le logo fourni ultérieurement par SJCD primera.
**Images :** compositions abstraites labellisées « Photo SJCD à venir », aucun faux reportage.

## 2. Palette

| Rôle | Couleur | Usage |
|---|---|---|
| Nuit profonde | `#070a12` | Hero, footer, panneaux |
| Bleu nuit | `#0b1020` | Fond institutionnel |
| Papier | `#f7f5f0` | Présentation, projets, partenariats |
| Encre | `#111726` | Texte sur papier |
| Brume | `#aeb8cc` | Texte secondaire sur nuit |
| Flamme | `#f4a53a` | CTA et repères sur nuit |
| Ambre foncé | `#9a5a0c` | Petits textes sur papier |
| Corail / bleu ciel | `#ff6b3d` / `#6fb7ff` | Compositions visuelles uniquement |

Les couples de texte sont vérifiés par `npm test`, puis dans le DOM via axe-core.
Ne pas diminuer l’opacité d’un libellé sans recalculer son contraste.

## 3. Typographie et tokens

**Nunito variable 200–1000**, sous-ensemble latin local (~40 Ko). Aucun appel Google
Fonts, y compris pendant le build. Le français et ses caractères accentués sont couverts.

| Niveau | Traitement |
|---|---|
| Hero SJCD | Expressif, 900, jusqu’à 14rem, ajusté mobile |
| H1 éditorial | `clamp(2.4rem, 5.5vw, 4.5rem)`, 800 |
| H2 | `clamp(2rem, 4vw, 3.25rem)`, 800 |
| H3 | `clamp(1.25rem, 2vw, 1.6rem)`, 800 |
| Texte | 16–18 px, interligne 1.65 |
| Chapeau | 18–22 px |
| Petits textes | 14 px |
| Labels | 12 px, espacés ; marqueurs de préproduction plus petits et contrastés |
| Boutons | Nunito 800, hauteur ≥ 52 px (navbar 44 px) |
| Métadonnées | 14 px, couleur secondaire |

Espacements xs→2xl : 8 / 16 / 24 / 40 / 64 / 96 px ; sections fluides 80–160 px.
Rayons : 8 / 16 / 28 / pill. Ombres réservées aux surfaces flottantes.
Mouvement : 160 / 320 / 700 ms ; easing décéléré et courbe aller-retour.

Source : `specs/design-tokens.json` → `npm run tokens:build` → `app/tokens.css`.
Le format JSON est celui du projet, sans prétendre à une conformité DTCG.

## 4. Navigation

Desktop : logo temporaire, cinq ancres, CTA Collaborer. Transparent au sommet, fond
translucide après 24 px. Pas de masquage automatique qui ferait perdre le focus clavier.
Mobile : menu dans un `dialog` natif, boucle Tab/Shift+Tab, fermeture Échap, restitution
du focus. Le redimensionnement ferme le menu. Avec JavaScript désactivé, les liens restent
accessibles dans une navigation alternative.
Footer : vraies pages secondaires ; pas de faux liens juridiques.

## 5. Homepage narrative

1. **Hero plein écran** : SJCD, nom complet, proposition éditoriale courte, flamme SVG,
   deux CTA fonctionnels, indicateur de défilement (deux cycles seulement).
2. **Présentation** : phrase de mission explicitement à valider, informations connues
   et informations manquantes distinguées.
3. **Domaines** : bento asymétrique, emplacements numérotés. Une seule carte à tilt.
4. **Projets** : trois gabarits immersifs image/contenu alternés, aucun faux bouton détail.
5. **Impact** : tirets, jamais zéros simulant une statistique. Catégories elles-mêmes à valider.
6. **Histoires** : galerie native horizontale, focusable, scroll-snap local.
7. **Partenariats** : emplacements sans logo, renvoi vers le parcours contact.
8. **Actualités** : cartes éditoriales non cliquables tant qu’aucune publication n’existe.
9. **CTA** : collaborer, soutenir, contacter ; tous ouvrent le parcours adapté.
10. **Footer** : identité, navigation, contact, informations et statut de préproduction.

## 6. Composants et intention des animations

| Composant | Rôle / animation |
|---|---|
| Navbar | Continuité ; transparent → glass après scroll |
| HeroFlame | SVG en couches, profondeur sans moteur WebGL |
| SmoothScrollProvider | Chargement adaptatif de Lenis + GSAP ; cleanup intégral |
| Titres hero | Révélation courte par masque, texte présent côté serveur |
| Texte de présentation | Accentuation progressive, jamais opacité illisible |
| Section headers / cartes | Translation de 20–22 px, une fois, sans cacher le contenu |
| TiltCard | Maximum 3°, réservé au domaine principal, pointeur fin |
| Project media | Clip reveal et parallax interne ±4 %, sans photo fictive |
| Galerie | Défilement natif au clavier / tactile, snap horizontal uniquement |
| Buttons / Links | Déplacement de flèche, légère élévation, soulignement |
| ContactDraft | Validation native, état brouillon, copie, téléchargement, statut annoncé |
| PageShell / Footer | Structure commune aux pages intérieures |

## 7. Transitions et adaptations

- Navigation entre pages : View Transitions API **cross-document**, fondu 180 ms si
  supportée ; sinon navigation native immédiate. Pas de promesse de morphing non livré.
- Desktop ≥960 px, pointeur précis, pas de mouvement réduit, appareil ≥4 cœurs si cette
  information est exposée, pas de Save-Data/2G : Lenis + ScrollTrigger.
- Le changement de préférence de mouvement en cours de session annule les timelines.
- Mobile/tablette : scroll natif, pas de chargement des trois bibliothèques de motion.
- Réseau non détectable : repli sur les capacités connues ; ces API ne couvrent pas tous
  les navigateurs. Aucune promesse de détection parfaite d’un appareil lent.
- Pas de scroll-snap vertical avec Lenis : évite deux mécanismes concurrents de défilement.
- Pas de Three.js/Spline, vidéo, son, ni carrousel automatique. L’expérience ne dépend
  d’aucun effet et fonctionne sans JavaScript.

## 8. Pages intérieures et limites explicites

Gabarits statiques : présentation, domaines, projets, impact, partenariats, actualités,
conformité, plan du site. Ils exposent honnêtement les contenus restant à recevoir.
Pas de fiches de projets inventées ni de documents de téléchargement factices.

Contact : le serveur ne reçoit rien. L’utilisateur prépare un brouillon local, le copie
ou le télécharge. La page dit clairement **aucun message envoyé**. Sans JavaScript, les
champs restent désactivés pour empêcher un formulaire GET accidentel.

Les obligations légales, le numéro d’enregistrement, le siège et les contacts restent à
valider. Les anciennes références Belgique/Luxembourg ne définissent pas le droit de SJCD.

## 9. Recette

Contrôles automatisés : TypeScript, ESLint, build production, contrats, contrastes,
Playwright + axe-core. Tests sur Chromium, largeurs 320, 390, 768, 1440.
Les tests automatisés ne remplacent pas l’audit WCAG complet ni les essais sur appareils
réels, Safari, Firefox et lecteur d’écran.

Budget observé au build : ~106 Ko de JavaScript initial compressé pour l’accueil,
hors chunks de motion différés ; une police ~40 Ko. Pas de mesure terrain de LCP/INP
ni de score Lighthouse revendiqué à ce stade.
