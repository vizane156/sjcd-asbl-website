# Dossier images — où déposer les photos

**C'est ici que vous déposez les photos et le logo.** Tout ce qui est placé dans
`public/images/` est servi par le site aux adresses `/images/...`.

Le dossier est volontairement vide au départ : aucune image n'est inventée, aucun
visuel de banque d'images n'est utilisé à la place d'une photo de terrain.

---

## 1. Où déposer chaque image

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

Extensions acceptées : `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.
Les fichiers `.heic` (iPhone), `.tif`, `.bmp` **ne s'affichent pas** dans les
navigateurs : exportez-les d'abord en `.jpg`.

---

## 2. Comment les déposer

**Depuis GitHub (le plus simple, sans logiciel) :**

1. Ouvrez le dossier concerné sur GitHub (par exemple `public/images/projets/chandelier-360/`).
2. Cliquez sur **Add file → Upload files**.
3. Glissez vos photos, puis **Commit changes**.

**Avec Git en ligne de commande :**

```bash
cp ~/MesPhotos/*.jpg public/images/projets/chandelier-360/
npm run images:sync     # détecte les fichiers, met à jour le registre
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

## 4. Droits à l'image — règle non négociable

Une photo où une personne est **identifiable** ne peut pas être publiée sans
**autorisation écrite** (règlement intérieur : protection et sauvegarde ; voir
`/partenariats` § « Image et témoignages »).

- Conservez les autorisations signées dans les archives de SJCD (hors dépôt public,
  jamais dans ce dépôt : ce sont des données personnelles).
- Notez pour chaque photo un identifiant d'autorisation (`consentRef`), par exemple
  « AUT-2026-012 », sans le nom de la personne.
- **Enfants et personnes vulnérables :** autorisation renforcée, et jamais de nom
  complet associé à la photo.
- Photos de banque d'images, captures ou images générées par IA : acceptées
  uniquement comme **illustrations**, clairement étiquetées « Illustration » sur le
  site — jamais présentées comme des réalisations réelles de SJCD.

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
  affiche un cadre « Photo SJCD à venir », jamais une fausse photo.
- **`recue`** — le fichier est là, la légende et les droits ne sont pas encore
  renseignés. L'image n'est **pas** affichée.
- **`publiee`** — fichier présent, texte alternatif rédigé, droits documentés.
  L'image est affichée sur le site.

Aucune image ne devient « publiée » toute seule : c'est une décision éditoriale.
