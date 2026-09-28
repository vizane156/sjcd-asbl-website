# 02 — Sitemap et contenu

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
**Document :** `docs/02_Sitemap_And_Content.md` — v1.0
**Statut :** base de travail — **à valider par SJCD**
**Documents liés :** `specs/sitemap.json` (version machine), `docs/01_PRD.md` §2 et §6

---

## 1. Principe d'architecture : la profondeur avant la largeur

Le site ne se développe pas par ajout de pages, mais par **approfondissement des
preuves**. Chaque page apporte une preuve, et chaque preuve existe à trois niveaux :

| Niveau | Format | Fonction | Temps de lecture |
|---|---|---|---|
| **N1 — Affirmation** | une phrase, un chiffre, un titre | capter en 5 secondes | 5 s |
| **N2 — Explication** | 2 à 4 paragraphes, une illustration | convaincre un lecteur attentif | 60–90 s |
| **N3 — Preuve** | PDF, rapport, comptes, source citée, lien externe | lever le doute d'un vérificateur | 3–20 min |

**Règle :** tout contenu factuel important existe aux trois niveaux. Un chiffre
d'impact sans lien vers sa source (N3) est un chiffre qui ne convaincra pas un bailleur.

## 2. Arborescence v1.0

```
/                           Accueil
├── /qui-sommes-nous        Étage 1 — identité, mission, gouvernance
│   └── /gouvernance        (ancre ou sous-page) statuts, organes, transparence
├── /programmes             Étage 2 — catalogue des programmes
│   └── /programmes/[slug]  une page par programme
├── /impact                 Étage 2 — indicateurs, rapports, redevabilité
├── /devenir-partenaire     Étage 3 — proposition de valeur + formulaire qualifiant
├── /contact                Étage 4 + conformité
│
├── /mentions-legales       Obligation légale (C7)
├── /confidentialite        RGPD — politique de vie privée
├── /accessibilite          Déclaration d'accessibilité (bonne pratique, gage de sérieux)
├── /plan-du-site          Plan du site HTML (SEO + usabilité)
└── /404                    Page introuvable utile et orientante
```

**Justification de la sobriété :** six pages publiques principales seulement. C'est un
choix, pas un manque. Un site de crédibilité échoue par pages vides, pas par manque de
pages. Chaque page ajoutée doit être alimentable — par SJCD, durablement.

## 3. Navigation

### 3.1 En-tête (desktop)

```
[SJCD]   Qui sommes-nous   Programmes   Impact   Devenir partenaire   [Contact]  [Nous soutenir ▸]
```

- **5 entrées maximum** : la lisibilité prime sur l'exhaustivité.
- Le libellé d'appel à l'action est `TODO(SJCD)` : « Devenir partenaire » (objectif A),
  « Faire un don » (objectif B) ou « Nous rejoindre » (objectif D) selon la décision **D8**.
- Sélecteur de langue affiché **uniquement** si D5 confirme le multilinguisme.
- État actif persistant : l'utilisateur sait toujours où il se trouve.

### 3.2 En-tête (mobile)

Barre compacte, menu plein écran, cibles tactiles ≥ 44 × 44 px, fermeture explicite,
piège de focus maîtrisé, `Échap` pour fermer. Le changement de langue (si activé) est
accessible dans le menu, pas caché derrière une icône ambiguë.

### 3.3 Pied de page — conformité et confiance

Structure en trois zones :

| Zone | Contenu | Fonction |
|---|---|---|
| **Identité** | nom légal complet avec la mention « ASBL », siège social, numéro d'entreprise/registre, adresse | **obligation légale** — D1 requis, C7 |
| **Navigation secondaire** | Qui sommes-nous, Programmes, Impact, Partenaires, Contact, Mentions légales, Confidentialité, Accessibilité, Plan du site | conformité + rattrapage de navigation |
| **Contact + soutien** | e-mail, téléphone, adresse postale, appel à l'action principal | conversion + joignabilité |

Le pied de page affiche `TODO(SJCD)` pour toutes les valeurs d'identification tant que
D1 n'est pas tranché. **Aucune valeur inventée ne doit y figurer.**

## 4. Contenu page par page

> Convention : `TODO(SJCD)` = donnée à fournir et valider. `[N1/N2/N3]` renvoie au
> niveau de profondeur (§1).

---

### 4.1 Accueil — `/`

**Rôle :** prouver en 30 secondes que SJCD est sérieux et utile, puis orienter chaque
public vers son étage. C'est la page la plus difficile du site : elle doit être à la fois
chaleureuse (humaine) et rigoureuse (institutionnelle).

| # | Section | Contenu | Statut |
|---|---|---|---|
| 1 | **Bandeau d'annonce** (optionnel) | information ponctuelle majeure : rapport publié, campagne en cours. Affiché une seule fois, fermable | optionnel |
| 2 | **Héros** | Affirmation en une phrase : ce que SJCD fait et pour qui. Un titre ≤ 10 mots. Un sous-titre de 20–30 mots. Un visuel documentaire (jamais une banque d'images générique). Un CTA primaire + un CTA secondaire | `TODO(SJCD)` : phrase d'affirmation + visuel (D3, D7) |
| 3 | **Preuve d'impact immédiate** | **3 à 4 chiffres clés** : personnes accompagnées, zones couvertes, années d'action, programmes actifs. Chaque chiffre daté (« au 31/12/2025 ») et relié à sa source | `TODO(SJCD)` : **D4 — bloquant** |
| 4 | **Qui est SJCD** | 2 paragraphes max. Mission, valeurs, ancrage géographique. Lien vers `/qui-sommes-nous` [N3] | `TODO(SJCD)` : objet social (D3) |
| 5 | **Programmes en bref** | 3 cartes : nom du programme, une phrase, une photo documentée, un chiffre de résultat. Lien vers la fiche complète | `TODO(SJCD)` : D3 |
| 6 | **Preuve institutionnelle** | Bandeau discret : « Enregistrée le [date] sous le numéro [n°] », statuts téléchargeables [N3] | `TODO(SJCD)` : D1 |
| 7 | **Témoignages** | 2 à 3 citations courtes, attribuées (nom, rôle, lieu), avec autorisation écrite | `TODO(SJCD)` + consentements |
| 8 | **Partenaires** | Logos avec autorisation écrite. Si aucun : section supprimée, jamais remplie de faux | `TODO(SJCD)` : D15 |
| 9 | **Appel à l'action final** | 3 voies claires : soutenir / devenir partenaire / nous contacter | `TODO(SJCD)` : D8 |

**Interdits sur cette page :** carrousel automatique, vidéo en lecture automatique,
compteur animé jusqu'à un chiffre non vérifié, logo de partenaire non autorisé.

---

### 4.2 Qui sommes-nous — `/qui-sommes-nous`

**Rôle :** étage 1. Répondre à « qui êtes-vous, et est-ce sérieux ? ».

| # | Section | Contenu | Statut |
|---|---|---|---|
| 1 | **Notre mission** | Objet social, formulation officielle + reformulation claire pour un non-spécialiste | `TODO(SJCD)` : D3 |
| 2 | **Notre histoire** | Dates fondatrices, étapes clés. Frise chronologique sobre. Chaque date exacte | `TODO(SJCD)` |
| 3 | **Nos valeurs** | 3 à 5 valeurs, chacune avec une définition opérationnelle concrète — pas de liste de mots abstraits | `TODO(SJCD)` |
| 4 | **Notre ancrage** | Zones d'intervention : carte ou liste, communes/quartiers/régions nommés | `TODO(SJCD)` |
| 5 | **Notre gouvernance** | Organes (assemblée générale, conseil d'administration), composition, mandats, principe de non-lucrativité | `TODO(SJCD)` : D1 |
| 6 | **Notre équipe** | Équipe permanente et bénévole. Photographies uniquement avec accord | `TODO(SJCD)` |
| 7 | **Transparence** | Statuts [N3], rapport d'activité le plus récent, comptes si publiables. Cette section est **la plus discriminante** pour un bailleur | `TODO(SJCD)` : voir §5 |
| 8 | **Comment nous soutenir** | Renvoi vers l'action principale | `TODO(SJCD)` : D8 |

⚠️ **Cohérence critique :** si SJCD ne peut pas publier ses comptes, la section 7 doit
être formulée honnêtement (« nos comptes sont disponibles sur demande ») et **non**
laisser croire à une publication qui n'existe pas. Le site promet la transparence : il
ne peut pas se contredire lui-même.

---

### 4.3 Programmes — `/programmes`

**Rôle :** étage 2. Montrer le travail réel, de façon vérifiable.

**Page liste :** une carte par programme — nom, domaine, zone, public visé, un chiffre de
résultat, statut (en cours / clôturé). Filtrage volontairement limité (par domaine ou zone)
et jamais indispensable à la lecture.

**Page détail — `/programmes/[slug]`** : structure **fixe et obligatoire** pour tous les
programmes, afin de permettre la comparaison :

| # | Bloc | Contenu |
|---|---|---|
| 1 | **Titre + résumé** | une phrase : le problème traité et le résultat obtenu |
| 2 | **Le problème** | contexte documenté, chiffré si possible, sourcé |
| 3 | **Notre réponse** | activités concrètes, méthodes, partenaires opérationnels |
| 4 | **Le public** | qui est accompagné, combien, où, avec quels critères d'accès |
| 5 | **Résultats** | indicateurs datés et sourcés. Résultats négatifs ou partiels mentionnés — c'est un signal de sérieux |
| 6 | **Durée et financement** | période, bailleur ou source de financement si publiable |
| 7 | **Perspective** | ce qui suit, ce qui manque, ce qui pourrait être amplifié |

`TODO(SJCD)` : contenu intégral de chaque programme (D3), incluant les résultats chiffrés (D4).

---

### 4.4 Impact — `/impact`

**Rôle :** étage 2, approfondi. C'est la page qu'un bailleur lira en détail.

| # | Section | Contenu | Statut |
|---|---|---|---|
| 1 | **Chiffres clés** | Tableau daté : indicateur, valeur, période, méthode de comptage, source | `TODO(SJCD)` : **D4** |
| 2 | **Comment nous comptons** | Méthodologie de collecte, limites connues, ce que les chiffres ne disent pas. **Section rare et très crédibilisante** | `TODO(SJCD)` |
| 3 | **Répartition par programme** | Contribution de chaque programme aux résultats globaux | `TODO(SJCD)` |
| 4 | **Répartition par zone** | Où l'impact se produit | `TODO(SJCD)` |
| 5 | **Évolution dans le temps** | Comparaison N/N-1/N-2, avec explication des variations | `TODO(SJCD)` |
| 6 | **Rapports** | Bibliothèque documentaire : rapport annuel, rapport d'activité, comptes | `TODO(SJCD)` |
| 7 | **Histoires d'impact** | 1 à 3 récits documentés, dignes, avec consentement. Jamais misérabilistes | `TODO(SJCD)` |

**Règle de vérité :** un indicateur sans période ni méthode de comptage est un
indicateur non publiable. Un chiffre non vérifiable détruit la confiance qu'il devait
créer — c'est le risque le plus grave du projet.

---

### 4.5 Devenir partenaire — `/devenir-partenaire`

**Rôle :** étage 3. Le cœur de la conversion si l'objectif retenu est A (D8).

| # | Section | Contenu | Statut |
|---|---|---|---|
| 1 | **Pourquoi s'associer** | Proposition de valeur en une phrase, orientée bénéfice réciproque | `TODO(SJCD)` |
| 2 | **Profils de partenaires** | Contenu adapté par profil : institutionnel/bailleur · entreprise/mécénat · ONG/opérateur terrain · collectivité | `TODO(SJCD)` |
| 3 | **Formats de collaboration** | Types d'engagement : financement de programme, co-construction, mécénat de compétences, partenariat opérationnel, plaidoyer | `TODO(SJCD)` |
| 4 | **Ce que nous apportons** | Capacité terrain, ancrage, redevabilité, reporting aux partenaires | `TODO(SJCD)` |
| 5 | **Ce que nous attendons** | Conditions d'un partenariat réussi, cadres de conformité, exclusions | `TODO(SJCD)` |
| 6 | **Processus** | Les étapes concrètes : prise de contact → échange → cadrage → convention → reporting | `TODO(SJCD)` |
| 7 | **Dossier de partenariat** | PDF téléchargeable [N3]. Contenu type : présentation, gouvernance, comptes, références | `TODO(SJCD)` |
| 8 | **Formulaire qualifiant** | Voir §6 ci-dessous | — |

---

### 4.6 Contact — `/contact`

**Rôle :** étage 4 + conformité.

| # | Section | Contenu | Statut |
|---|---|---|---|
| 1 | **Coordonnées** | Adresse postale complète, e-mail, téléphone (format international), horaires | `TODO(SJCD)` : coordonnées officielles |
| 2 | **Formulaire** | Objet de la demande (menu : partenariat, bénévolat, don, presse, autre), nom, e-mail, organisation, message, consentement RGPD | — |
| 3 | **Accès** | Plan d'accès ou repère géographique. **Aucune carte interactive chargée avant consentement** (RGPD) | `TODO(SJCD)` |
| 4 | **Responsable de publication** | Nom et qualité du responsable légal | `TODO(SJCD)` : D9 |
| 5 | **Urgence / bénéficiaires** | Si une permanence ou un numéro dédié existe, le distinguer clairement | `TODO(SJCD)` |

## 5. Contenus obligatoires transversaux

| Contenu | Où | Base | Statut |
|---|---|---|---|
| Mentions légales | `/mentions-legales` + pied de page | obligation légale ASBL (C7) | `TODO(SJCD)` : D1 |
| Politique de confidentialité | `/confidentialite` | RGPD | à rédiger sur base du registre des traitements |
| Déclaration d'accessibilité | `/accessibilite` | bonne pratique ; gage de sérieux institutionnel | à rédiger |
| Gestion du consentement | toutes les pages | RGPD — aucun traceur avant consentement | à implémenter |
| Statistiques de transparence | `/qui-sommes-nous` §7 | promesse produit | `TODO(SJCD)` : disponibilité des comptes |

## 6. Spécification des formulaires

Quatre formulaires, un seul point de vérité : chaque formulaire déclare sa **finalité**,
sa **base légale**, sa **durée de conservation** et son **responsable**.

| Formulaire | Emplacement | Champs obligatoires | Finalité | Conservation |
|---|---|---|---|---|
| **Contact général** | `/contact` | nom, e-mail, objet, message, consentement | répondre à une demande | `TODO(SJCD)` — proposer 24 mois |
| **Partenariat** | `/devenir-partenaire` | nom, organisation, type d'organisation, pays, e-mail, nature de l'intérêt, message, consentement | qualifier et recontacter | `TODO(SJCD)` — proposer 36 mois |
| **Bénévolat** (v1.1) | `/benevolat` | nom, e-mail, disponibilité, compétences, motivation, consentement | instruire une candidature | `TODO(SJCD)` — proposer 12 mois |
| **Newsletter** (v1.1) | pied de page | e-mail, consentement explicite | information institutionnelle | jusqu'au désabonnement |

Règles communes :

- **Consentement** : case non pré-cochée, finalité explicite, lien vers `/confidentialite`.
- **Minimisation** : ne collecter que ce qui est strictement nécessaire à la finalité.
- **Anti-spam** : solution non intrusive et sans transfert de données hors UE si possible
  (voir `docs/06` §4). Doit rester utilisable au clavier et avec un lecteur d'écran.
- **Accusé de réception** : toute soumission réussie envoie une confirmation automatique.
- **Aucune donnée sensible** : ne jamais demander de données de santé, d'identité
  officielle ou d'information sur un bénéficiaire via un formulaire public.
- **Aucune donnée personnelle dans les analytics** : pas de paramètre d'URL, pas d'e-mail.

## 7. Inventaire de contenu à fournir par SJCD

Table de travail pour la collecte. C'est le **chemin critique** du projet : le code est
plus rapide que la donnée.

| ID | Contenu requis | Bloque | Priorité |
|---|---|---|---|
| C-01 | Nom légal complet + signification de « SJCD » | tout | **P0** |
| C-02 | Pays, forme juridique, numéro de registre, date de création | mentions légales | **P0** |
| C-03 | Siège social et coordonnées officielles | pied de page, contact | **P0** |
| C-04 | Objet social exact (texte des statuts) | mission | **P0** |
| C-05 | 3 à 5 programmes : problème, actions, public, zone, résultats | pages Programmes | **P0** |
| C-06 | 3 à 4 chiffres d'impact datés et sourcés | Accueil, Impact | **P0** |
| C-07 | Logo (vectoriel) et, si existante, charte graphique | design system | **P1** |
| C-08 | Rapport annuel / d'activité le plus récent (PDF) | crédibilité | **P1** |
| C-09 | Gouvernance : organes, membres, mandats | transparence | **P1** |
| C-10 | Bilan et compte de résultats publiable, ou décision explicite de non-publication | transparence | **P1** |
| C-11 | Photothèque de terrain, droits à l'image réglés | design | **P1** |
| C-12 | 2 à 3 témoignages avec autorisation écrite | preuve humaine | **P1** |
| C-13 | Partenaires + autorisations d'usage des logos | crédibilité | **P2** |
| C-14 | Responsable de publication (nom, qualité) | conformité | **P1** |
| C-15 | Langues cibles | architecture | **P1** |
| C-16 | Moyens de don et statut fiscal | page dons | **P2** |
| C-17 | Domaine et accès administrateur | mise en ligne | **P0** |

## 8. Règles éditoriales

**Ton** — digne, humain, factuel. On documente des capacités et des résultats, jamais
la misère. Les personnes sont des acteurs, pas des victimes.

**Voix** — l'institution parle d'elle-même à la troisième personne (« SJCD accompagne… »).
Interdits : « nous sommes la meilleure ONG », « unique en son genre », « depuis toujours »,
tout superlatif non étayé.

**Typographie française** — espaces insécables avant `: ; ! ?` et à l'intérieur des
guillemets « » ; tiret cadratin — pour l'incise ; majuscules accentuées (À, É).

**Longueur** — titres ≤ 10 mots. Paragraphes ≤ 4 lignes. Une idée par section.
Le niveau N1 doit tenir en 5 secondes.

**Accessibilité rédactionnelle** — phrases courtes, voix active, pas de jargon non
expliqué, sigles développés à la première occurrence, texte alternatif descriptif et utile
(pas « image » ni « photo de »), libellés de liens explicites (jamais « cliquez ici »).

**Fraîcheur** — toute page porte une date de dernière mise à jour. Un rapport de 3 ans
présenté comme actuel détruit la confiance.

---

*Le `specs/sitemap.json` est la version machine de ce document : les deux doivent rester
synchronisés. Toute page ajoutée ici doit être ajoutée là.*
