# Dossier images — où déposer les photos

**C'est ici que vous déposez les photos et le logo.** Tout ce qui est placé dans
`public/images/` est servi par le site aux adresses `/images/...`.

Le dossier est volontairement vide au départ : aucune image n'est inventée, aucun
visuel de banque d'images n'est utilisé à la place d'une photo de terrain.

---

## 1. Où déposer chaque image

> **Logo en relief 3D.** Une fois le logo officiel déposé, la commande `npm run logo:3d`
> produit un relief fidèle (aucune IA générative : la forme du logo est extrudée telle quelle).
> Voir § 6.

| Type de visuel | Dossier | Nom de fichier attendu |
| --- | --- | --- |
| Logo officiel de SJCD | `public/images/institution/` | `logo-sjcd.png` (ou `.svg`, `.webp`) |
| Photo du siège / du lieu d'activité | `public/images/institution/` | `siege-uvira.jpg` |
| Photos du projet **Chandelier 360°** | `public/images/projets/chandelier-360/` | voir la liste ci-dessous |
| Logos de partenaires (autorisation écrite obligatoire) | `public/images/partenaires/` | `logo-<nom-partenaire>.png` |
| Bannières et visuels d'interface | `public/images/site/` | `accueil-hero.jpg` |

### Projet Chandelier 360° — les 7 fichiers attendus

Vous pouvez **déposer vos propres noms de fichiers**, l'important est le préfixe
numérique : le numéro indique l'ordre d'affichage dans la galerie.

| Nom attendu | Ce que la photo doit montrer |
| --- | --- |
| `00-couverture.jpg` | Visuel principal de la fiche (formation, atelier ou groupe en activité) |
| `01-formation-numerique.jpg` | Session de formation numérique de jeunes |
| `02-atelier-entrepreneuriat.jpg` | Jeunes femmes participant à un atelier d'entrepreneuriat |
| `03-mentorat.jpg` | Mentor accompagnant un groupe de jeunes entrepreneurs |
| `04-presentation-projets.jpg` | Jeunes présentant leurs projets devant des professionnels |
| `05-activite-entrepreneuriale.jpg` | Petite activité lancée par un bénéficiaire |
| `06-groupe-participants.jpg` | Photo de groupe représentant la diversité des participants |

**Ces sept visuels sont traités comme des illustrations** : vous avez indiqué que les images
proviennent d’une banque d’images ou sont générées. Elles seront donc publiées avec
l’étiquette « Illustration » et la mention « ne représente pas une activité réalisée par
SJCD ». Si une photo a réellement été prise lors d’une activité de SJCD, dites-le : elle
passera en « photographie documentaire » et relèvera alors des règles de consentement du § 4.2.

Choisissez de préférence des images qui correspondent au contexte local (Afrique centrale,
jeunes, espaces de formation) : une illustration hors contexte donne une image fausse du
projet, même étiquetée.

Extensions acceptées : `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.
Les fichiers `.heic` (iPhone), `.tif`, `.bmp` **ne s'affichent pas** dans les
navigateurs : exportez-les d'abord en `.jpg`.

---

## 1 bis. État actuel du dossier

| Emplacement | État |
| --- | --- |
| `institution/logo-sjcd-complet.png` | **publié** — logo complet avec la dénomination (reçu le 3 octobre 2026) |
| `00-couverture.jpg` | **publiée** — salle de formation informatique |
| `01-formation-numerique.jpg` | **publiée** — atelier de formation numérique |
| `02-atelier-entrepreneuriat.jpg` | **publiée** — présentation d’une idée d’entreprise |
| `05-activite-entrepreneuriale.jpg` | **publiée** — jeune entrepreneure à son étal |
| `03-mentorat.jpg` | en attente |
| `04-presentation-projets.jpg` | en attente |
| `06-groupe-participants.jpg` | en attente |
| `institution/logo-sjcd.png` | **publié** — logo officiel reçu le 3 octobre 2026 (1 774 × 887, fond transparent) |
| `institution/siege-uvira.*` | en attente |

Les quatre visuels publiés sont des **illustrations générées par IA** (ChatGPT), fournies par SJCD
le 2 octobre 2026. Leurs fichiers sources PNG ont été retirés du dépôt après optimisation : ils
restent consultables dans l’historique Git.

## 2. Comment les déposer

**Depuis GitHub (le plus simple, sans logiciel) :**

1. Ouvrez le dossier concerné sur GitHub (par exemple `public/images/projets/chandelier-360/`).
2. Cliquez sur **Add file → Upload files**.
3. Glissez vos photos, puis **Commit changes**.

**Avec Git en ligne de commande :**

```bash
cp ~/MesPhotos/*.jpg public/images/projets/chandelier-360/
npm run images:optimize   # redimensionne à 1600 px et réexporte en JPEG (sources supprimées)
npm run images:dry-run    # pour voir ce que l’optimisation ferait, sans rien modifier
npm run images:sync       # détecte les fichiers, met à jour le registre
git add public/images specs/images.json
git commit -m "images: photos Chandelier 360"
git push
```

**Puis prévenez-moi.** Je regarde chaque photo, je rédige sa légende et son texte
alternatif, je vérifie les droits, et je publie la galerie sur `/projets`.

---

## 3. Règles de qualité et de poids

| Critère | Recommandation |
| --- | --- |
| Largeur | **1 600 px minimum** (2 000 px pour la couverture) |
| Poids du fichier | **moins de 600 Ko** — au-delà, compressez sur [squoosh.app](https://squoosh.app) |
| Format | JPEG qualité 80, ou WebP |
| Orientation | paysage de préférence (les cadres sont en 16/10 et 4/3) |
| Texte incrusté | à éviter (les légendes sont écrites dans le site, pas dans l'image) |

Le site redimensionne et convertit automatiquement les images (`next/image`) : la
source n'a pas besoin d'être parfaitement optimisée, mais une photo de 8 Mo reste
pénible à télécharger sur un réseau mobile à Uvira.

---

## 4. Droits et étiquetage — deux règles non négociables

### 4.1 Illustrations (cas de vos images actuelles)

Toute image de banque d’images ou générée est publiée comme **illustration** :

- étiquette « Illustration » visible sous l’image et sur la carte projet ;
- mention « ne représente pas une activité réalisée par SJCD » ;
- **source et licence obligatoires** dans le registre (`credit` et `licence`), par
  exemple « Unsplash — licence Unsplash » ou « Image générée par IA, 2026 » ;
- `npm run images:check` refuse une illustration publiée sans licence.

Conservez la facture ou la page de licence : c’est la preuve du droit d’usage.

### 4.2 Photographies documentaires (terrain)

Si une photo a réellement été prise lors d’une activité de SJCD, elle passe en
« documentaire ». Une personne **identifiable** ne peut alors pas être publiée sans
**autorisation écrite** (règlement intérieur : protection et sauvegarde ; voir
`/partenariats` § « Image et témoignages »).

- Conservez les autorisations signées dans les archives de SJCD (hors dépôt public,
  jamais dans ce dépôt : ce sont des données personnelles).
- Notez pour chaque photo un identifiant d’autorisation (`consentRef`), par exemple
  « AUT-2026-012 », sans le nom de la personne.
- **Enfants et personnes vulnérables :** autorisation renforcée, et jamais de nom
  complet associé à la photo.
- Ne jamais présenter une illustration comme une photo de terrain, ni l’inverse.

---

## 5. Registre des images

Le fichier `specs/images.json` décrit chaque emplacement attendu : dossier, nom,
texte alternatif, nature (documentaire ou illustration), référence de consentement
et statut.

```bash
npm run images:sync     # détecte les fichiers déposés et met à jour le registre
npm run images:check    # vérifie que tout ce qui est publié est valide (utilisé par la CI)
```

Statuts possibles :

- **`attendu`** — l'emplacement est prévu, le fichier n'est pas encore là. Le site
  affiche un cadre « Photo SJCD à venir », jamais une image de remplacement.
- **`recue`** — le fichier est là, la légende et les droits ne sont pas encore
  renseignés. L'image n'est **pas** affichée.
- **`publiee`** — fichier présent, texte alternatif rédigé, droits documentés.
  L'image est affichée sur le site.

Aucune image ne devient « publiée » toute seule : c'est une décision éditoriale.

---

## 6. Logo en relief 3D

> **Fait le 3 octobre 2026.** Le logo officiel a été déposé dans
> `public/images/institution/logo-sjcd.png` (1 774 × 887, 87,8 % transparent) et cinq reliefs
> ont été produits : `logo-sjcd-3d.png` (proposition principale), `-tons-clairs`, `-fin`,
> `-oblique`, `-sans-lisere`. Chacun existe en `.png` (transparent), `.webp` (web) et `-512.png`.
> La planche de comparaison est dans `demo/propositions-logo-3d.png`.


Le script `scripts/logo-3d.mjs` construit un relief à partir du PNG transparent : il empile la
silhouette exacte du logo pour créer l'épaisseur, pose une ombre portée, puis repose le logo
d'origine, intact, au premier plan. Aucun modèle génératif n'intervient — le résultat est une
transformation géométrique de votre fichier, pas une réinterprétation.

```bash
# 1. déposer le logo officiel
#    public/images/institution/logo-sjcd.png   (PNG, fond transparent)

# 2. produire le relief
npm run logo:3d

# réglages possibles
node scripts/logo-3d.mjs --depth 40              # relief plus épais
node scripts/logo-3d.mjs --angle 45              # autre orientation
node scripts/logo-3d.mjs --from "#05070f" --to "#f4a53a"
node scripts/logo-3d.mjs --flow                  # sans le contrôle de transparence
```

Sorties, dans `public/images/institution/` :

| Fichier | Usage |
| --- | --- |
| `logo-sjcd-3d.png` | version haute définition, fond transparent |
| `logo-sjcd-3d.webp` | version web, plus légère |
| `logo-sjcd-3d-512.png` | vignette pour les listes et le pied de page |

**Le fond doit être réellement transparent.** Le script refuse un PNG dont aucun pixel n'est
transparent, car le relief épouserait alors le rectangle de l'image au lieu de la forme du logo.
Pour détourer un logo existant : Photopea (gratuit, dans le navigateur) ou remove.bg.
