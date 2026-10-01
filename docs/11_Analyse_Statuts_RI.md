# 11 — Analyse ligne par ligne des statuts et du règlement intérieur

**Sources analysées** (documents du dépôt, `documents/administratifs/`) :

| Réf. | Document | Pages | Volume | Version |
| --- | --- | --- | --- | --- |
| **S** | `STATUTS_SJCD_ASBL_Version_Professionnelle_2026.pdf` | 23 | 6 472 mots | « Version professionnelle consolidée » |
| **RI** | `REGLEMENT_INTERIEUR_SJCD_ASBL_Version_Professionnelle_2026.pdf` | 17 | 5 241 mots | Version 1.0 |

Méthode : extraction intégrale du texte des deux PDF, lecture article par article
(S : 49 articles + 2 annexes statutaires ; RI : 76 articles + 3 annexes), puis classement
de chaque affirmation du site dans l'une des cinq catégories ci-dessous.

> **Règle appliquée** : une information n'est publiée sur le site que si elle est
> littéralement présente dans S ou RI, ou signalée explicitement comme manquante.
> Aucune donnée n'est déduite d'un usage, d'une ressemblance ou d'une intention.

---

## 0. Avertissement préalable — le statut juridique n'est pas établi

Ce point conditionne tout le reste et doit être lu avant les sections 1 à 5.

Les deux documents **se présentent eux-mêmes comme non définitifs** :

- **S, page de garde** : « Statut du document : Version professionnelle consolidée
  **soumise à relecture juridique et notariale avant adoption et dépôt** » ;
  « **Document de travail institutionnel.** Présenté pour validation par les organes
  compétents » ; « Date d'adoption : **à compléter** lors de l'Assemblée générale compétente ».
- **S, article 49** : les statuts entrent en vigueur « sous réserve de l'accomplissement des
  formalités légales requises pour **l'obtention, la reconnaissance ou la pleine opposabilité
  de la personnalité juridique** ».
- **RI, page de garde** : « Date d'adoption : *(blanc)* » ; « Entrée en vigueur : *(blanc)* ».
- **RI, article 76 et page d'adoption** : lieu, date, référence de la décision et les trois
  signatures sont **tous laissés en blanc**.

**Conséquence pour le site** : SJCD ne peut être présentée ni comme « légalement
établie », ni comme « enregistrée », ni comme disposant d'une personnalité juridique
opposable. La formulation retenue est factuelle et prudente :

> « Association sans but lucratif de droit congolais. Statuts et règlement intérieur
> en cours de finalisation juridique : adoption formelle, notarisation et dépôt non
> attestés par les documents disponibles. »

Aucun numéro d'enregistrement n'est affiché : **il n'existe dans aucun des deux documents**.

---

## 1. Ce qui est explicitement documenté

Ces éléments sont publiables tels quels, avec leur référence d'article.

### 1.1 Identité et ancrage

| Fait | Valeur littérale | Source |
| --- | --- | --- |
| Dénomination | « SANCTUAIRE DE JEUNES CHANDELIER POUR LE DÉVELOPPEMENT » | S art. 1 ; 27 occurrences |
| Sigle | « SJCD ASBL » | S art. 1 |
| Forme juridique visée | Association sans but lucratif de droit congolais | S art. 1, 2 |
| Caractère | « apolitique, **non confessionnelle**, à caractère social, éducatif et de développement communautaire » | S art. 2 |
| Siège social | « ville d'**Uvira**, Province du **Sud-Kivu**, République Démocratique du Congo » | S art. 3 |
| Ressort territorial | vocation nationale, ensemble du territoire de la RDC | S art. 4 |
| Durée | indéterminée | S art. 5 |
| Exercice social | du 1ᵉʳ janvier au 31 décembre | S art. 40 |
| Date de création déclarée | **23 février 2022** | S préambule |
| Non-lucrativité | aucun partage de bénéfices ; excédent réinvesti dans l'objet social | S art. 2, 42 |

### 1.2 Objet social (S art. 6) — les huit domaines littéraux

> « contribuer au développement intégral de la jeunesse et à l'amélioration durable des
> conditions sociales et communautaires, notamment par l'éducation, le développement des
> compétences, la prévention, l'accompagnement et l'engagement citoyen. »

a) éducation et développement des compétences, y compris compétences de vie, leadership,
employabilité et entrepreneuriat ;
b) développement de la confiance en soi, des capacités d'expression orale, de prise de parole
en public et de participation citoyenne ;
c) santé sexuelle et reproductive, information et prévention (IST, grossesses précoces ou non
désirées, comportements à risque) ;
d) protection, accompagnement et inclusion des personnes vulnérables (enfants, jeunes
vulnérables, veuves, orphelins, personnes exposées à l'exclusion ou à la violence) ;
e) prévention et réduction de la violence, de la délinquance juvénile, des abus, de
l'exploitation et des discriminations ;
f) développement communautaire, mobilisation citoyenne, solidarité, initiatives sociales ou
économiques ;
g) recherche, documentation, sensibilisation, production de connaissances, partage de
bonnes pratiques ;
h) mise en réseau, coopération, partenariats, participation à des initiatives nationales,
régionales ou internationales.

### 1.3 Vision (S art. 7)

> « contribuer à l'émergence d'une jeunesse **éclairée, responsable, autonome, résiliente**
> et capable de transformer positivement son environnement. »

Complété par : leadership responsable, promotion de la dignité humaine, participation à la
vie des communautés, contribution au développement social, économique et culturel de la RDC,
ouverture aux échanges et à la coopération internationale.

### 1.4 Mission (S art. 8)

> « SJCD ASBL est une organisation de développement de la jeunesse, fondée sur des valeurs
> d'intégrité, de dignité humaine, de solidarité et de responsabilité, respectueuse de la
> diversité des convictions. »

> « créer et soutenir des espaces d'éducation, de développement des compétences, de
> prévention, de protection et de participation permettant aux jeunes de devenir des acteurs
> responsables du changement social. »

Troisième alinéa : accès à une information fiable en santé sexuelle et reproductive,
protection des personnes vulnérables, initiatives communautaires durables.

### 1.5 Objectifs (S art. 9)

Un objectif global (épanouissement et développement intégral de la jeunesse) et
**10 objectifs spécifiques** numérotés, repris intégralement dans
`lib/statuts.ts → specificObjectives`.

### 1.6 Principes et valeurs (S art. 10)

**10 valeurs** numérotées : intégrité et honnêteté ; dignité humaine, égalité, respect et
non-discrimination ; solidarité, responsabilité et service de la communauté ; liberté de
conscience et respect de la diversité des convictions ; participation des jeunes et
responsabilisation des bénéficiaires ; transparence, redevabilité et bonne gouvernance ;
protection contre les abus, l'exploitation, le harcèlement et la violence ; apprentissage
continu, innovation et adaptation aux réalités locales ; neutralité politique ; respect des
lois, de l'ordre public et des bonnes mœurs.

### 1.7 Dimension spirituelle — le cadrage exact (S préambule)

Point sensible traité explicitement :

- L'association « **reconnaît la diversité des convictions** et **ne subordonne pas l'accès à
  ses activités à l'appartenance à une religion déterminée** ».
- Elle « **peut**, dans le cadre de ses activités éducatives et communautaires, **mobiliser
  des ressources spirituelles, éthiques, culturelles, philosophiques ou religieuses**
  compatibles avec ses valeurs et avec les lois de la RDC », dans un esprit de « respect
  mutuel, de liberté de conscience et de non-discrimination ».
- RI art. 37.8 clôt toute réunion associative « dans le respect de la liberté de conscience
  et des convictions de chacun ».

**Traduction éditoriale** : la symbolique de la lumière et du chandelier est une identité
graphique et historique légitime ; SJCD **n'est pas** une organisation confessionnelle et ne
doit jamais être présentée comme telle. Les termes « sanctuaire » et « chandelier » ne sont
accompagnés d'aucune doctrine, d'aucune affiliation religieuse ni d'aucune pratique cultuelle
dans les documents.

### 1.8 Gouvernance (S art. 20 à 38, RI art. 25 à 33, RI annexe 1)

**Deux organes statutaires, et deux seulement** (S art. 20) :

1. **Assemblée générale** — « organe souverain » (S art. 21). 8 attributions (S art. 22) :
   orientations stratégiques ; adoption/modification/interprétation des statuts ; élection,
   renouvellement et révocation du CA ; approbation des rapports et comptes annuels ;
   adoption du budget ; fixation des cotisations ; dissolution, fusion, opérations
   fondamentales ; questions réservées par la loi.
   Session ordinaire **au moins une fois par an** (S art. 23). Quorum : **la moitié plus un**
   des membres effectifs en règle (S art. 24). Procès-verbal obligatoire (S art. 26).

2. **Conseil d'administration** — « organe de gouvernance et d'exécution stratégique »,
   **composé de dix membres élus** parmi les membres effectifs par l'AG (S art. 27).
   Mandat de **trois ans, renouvelable une fois** (S art. 28). 9 attributions (S art. 29).
   Réunion **au moins une fois par trimestre** ; quorum : moitié plus un des administrateurs
   en fonction (S art. 30).

**Les dix fonctions du CA** (S art. 27, détail S art. 31 à 37, RI art. 25 à 33) :

| # | Fonction | Responsabilité | Limite de contrôle | Source |
| --- | --- | --- | --- | --- |
| 1 | Président | Principal représentant légal et institutionnel ; convoque et préside le CA ; signe les actes officiels | Ne peut intervenir seul dans les actes financiers ou contractuels soumis à double validation | S 31, RI 25 |
| 2 | Vice-président | Assiste le Président, le remplace en cas d'absence, d'empêchement ou de vacance temporaire | Agit dans les limites de sa délégation | S 32, RI 26 |
| 3 | Secrétaire général | Mémoire institutionnelle : registres, PV, correspondance, archivage, suivi des décisions | Coordination avec tous les organes | S 33, RI 27 |
| 4 | Secrétaire général adjoint | Assiste et supplée le SG | Ne remplace pas un autre poste sans délégation expresse | S 33, RI 28 |
| 5 | Trésorier | Suivi financier, budget, comptabilité, justificatifs, rapports financiers | Séparation des tâches et contrôles internes | S 34, RI 29 |
| 6 | Trésorier adjoint | Assiste et supplée le Trésorier | Ne remplace pas le Conseiller | S 34, RI 30 |
| 7 | Coordinateur | **Direction opérationnelle** des activités et programmes ; coordonne équipes, calendriers, suivi, reporting | **N'est pas le représentant légal** ; représente les partenaires opérationnels sur mandat écrit | S 35, RI 31 |
| 8 | Porte-parole | Communication institutionnelle, médias, contenus, visibilité | **Aucun engagement juridique, financier ou politique sans mandat exprès** | S 36, RI 32 |
| 9 | Conseiller | Avis stratégiques, institutionnels, techniques ou juridiques ; anticipation des risques | Fonction consultative | S 37, RI 33 |
| 10 | Conseiller adjoint | Assiste le Conseiller, suit les recommandations, le supplée | Dans les limites de la mission confiée | S 37, RI 33 |

**Les trois couches distinctes** que le site doit expliquer (et non aplatir en une liste) :

| Couche | Qui | Nature |
| --- | --- | --- |
| **Gouvernance et représentation** | Assemblée générale, Conseil d'administration, Président | Décision, contrôle, représentation légale |
| **Administration** | Secrétaire général (+ adjoint) | Mémoire institutionnelle, registres, actes |
| **Coordination opérationnelle** | Coordinateur | Mise en œuvre des programmes, sous l'autorité du CA |

**Commissions, départements et groupes de travail** : peuvent être créés par le CA mais
« **ne constituent pas des organes statutaires** sauf modification expresse des statuts »
(S art. 20, RI art. 34). Ils reçoivent un mandat précisant objet, responsable, durée,
livrables et mode de compte rendu (RI art. 34) et rendent compte au Coordinateur ou au CA
(RI art. 35).

### 1.9 Membres (S art. 12 à 19, RI art. 5 à 13)

Deux catégories : **membres effectifs** (droit de vote, une voix chacun — S art. 12, 14) et
**membres d'honneur** (personnes physiques ou morales ; « ne disposent pas automatiquement
du droit de vote » et ne peuvent diriger l'association du seul fait de cette qualité —
S art. 12 ; RI art. 13 : voix consultative possible en AG, S art. 21). Admission par le CA
sur demande (S art. 13, RI art. 6). Cotisations fixées par l'AG (S art. 16) avec exonération
totale ou partielle possible, « notamment pour des raisons sociales ou lorsque l'association
souhaite favoriser l'inclusion de jeunes vulnérables » (S art. 16, RI art. 10). Discipline
proportionnée et contradictoire (S art. 18, RI art. 12). Aucun droit individuel sur le
patrimoine (S art. 19).

### 1.10 Rencontres régulières de membres (RI art. 36 à 39)

> « SJCD **peut** tenir des réunions régulières de membres, notamment des **rencontres
> hebdomadaires ou thématiques**. Le calendrier détaillé est arrêté périodiquement par le
> Coordinateur en concertation avec le Conseil d'administration. »

> « Ces réunions constituent un espace **d'information, de formation, de partage, de débat
> constructif et de préparation des activités**. Elles **ne peuvent se substituer aux organes
> statutaires** pour les décisions qui relèvent de leur compétence exclusive. »

Déroulement recommandé en 8 temps (RI art. 37) : accueil et présences ; actualités et
annonces ; enseignement, formation ou partage de connaissances ; activité de développement
des compétences ou de participation citoyenne ; échanges et débat respectueux ; collecte des
suggestions et préoccupations ; rappel des responsabilités et échéances ; clôture dans le
respect de la liberté de conscience. Règles de prise de parole : courtoisie, factualité,
temps de parole équilibré, interdiction des attaques personnelles, intimidations,
humiliations, discriminations et perturbations volontaires (RI art. 38). Formations
encouragées : internes, débats, ateliers, mentorat, leadership, apprentissages pratiques ;
les formations en santé sexuelle et reproductive ou en protection doivent être « animées
selon des standards professionnels adaptés » (RI art. 39).

### 1.11 Transparence, finances et protection

- Ressources possibles (S art. 39) : cotisations ; dons, legs et libéralités autorisés ;
  subventions, financements et appuis publics ou privés ; contributions de partenaires,
  fondations, institutions nationales ou internationales ; recettes d'activités génératrices
  de revenus **accessoires** ; aides matérielles et contributions en nature ; toute autre
  ressource licite. **Ce sont des catégories de ressources, pas des financements obtenus.**
- Comptes annuels soumis à l'AG ; comptabilité et justificatifs conservés ; contrôle
  financier interne par séparation des responsabilités ; audit ou contrôle externe lorsque la
  loi, un bailleur ou l'importance des opérations l'exige (S art. 40 ; RI art. 48 à 54).
- Interdiction absolue de distribution de bénéfices, dividendes, excédents ou actifs aux
  membres, administrateurs ou dirigeants (S art. 42). Remboursements de frais, salaires et
  honoraires réguliers ne sont pas une distribution.
- Conflits d'intérêts : déclaration obligatoire et abstention (S art. 42 ; RI art. 55 à 57).
- Protection / safeguarding : importance particulière accordée à la protection des enfants,
  des jeunes et des personnes vulnérables ; mécanismes de prévention, signalement, traitement
  des plaintes, confidentialité, référencement (S art. 45 ; RI art. 44 à 47). Principe de
  **tolérance zéro** (RI art. 44). Représailles interdites contre un signalement de bonne
  foi (RI art. 46).
- Droit de plainte ouvert à « toute personne concernée par les activités de SJCD », canaux
  multiples, traitement impartial, médiation interne volontaire (RI art. 65 à 68).
- Données et image : photographies, vidéos, voix et témoignages d'un bénéficiaire
  utilisables **uniquement** avec consentement et conformément à la loi et aux politiques
  internes ; attention renforcée pour les enfants et personnes vulnérables (S art. 46 ;
  RI art. 60).
- Archivage et traçabilité documentaire (RI art. 62 à 64).
- Partenariats : cohérence obligatoire avec l'objet et les valeurs ; accord écrit pour les
  engagements significatifs précisant objet, responsabilités, ressources, confidentialité,
  visibilité et dispositions de protection ; droit de refus du CA en cas de risque pour
  l'intégrité, l'indépendance, la réputation ou la conformité (S art. 44 ; RI art. 42).
  Catégories d'acteurs visées (S art. 44) : autorités publiques, collectivités, organisations
  de la société civile, institutions académiques, entreprises, fondations, agences de
  coopération, organisations internationales.
- Cycle de gestion de projet en 8 étapes (RI art. 40) : identification du besoin ;
  formulation des objectifs et résultats attendus ; estimation des ressources et du budget ;
  analyse des risques, y compris de protection ; validation par l'organe compétent ; mise en
  œuvre et suivi ; documentation des résultats et leçons apprises ; rapportage et clôture.
- Check-list d'ouverture d'activité en 10 points (RI annexe 2).
- Hiérarchie normative interne en 4 niveaux : législation → statuts → règlement intérieur →
  politiques et procédures (RI préambule). En cas de contradiction, **les statuts prévalent**
  (S art. 49, RI préambule).
- Extension territoriale : antennes ou points focaux dans d'autres provinces possibles, sous
  mandat du CA (S art. 3 ; RI art. 69). International possible à moyen ou long terme, sous
  réserve de la législation locale, des autorisations et d'une étude de conformité
  juridique, fiscale, financière et institutionnelle ; une structure locale distincte peut
  être nécessaire (S art. 4 ; RI art. 70).
- Dissolution : AG extraordinaire, majorité des deux tiers minimum ; actif net attribué à une
  organisation sans but lucratif ou une œuvre d'intérêt général d'objectifs similaires ;
  aucune distribution aux membres (S art. 48). Modification des statuts : deux tiers des
  membres effectifs présents ou représentés (S art. 47).

### 1.12 Noms présents dans les documents

**Trois noms seulement** figurent dans l'ensemble des deux documents, tous dans la
« Déclaration finale » des statuts (page 23) :

| Fonction statutaire | Nom tel qu'écrit |
| --- | --- |
| Président | MIBUTO Patrick |
| Secrétaire général | Vital ZAGABE Neophite |
| Trésorier | Nabindu ZAGABE |

Le bloc de signature du RI est **entièrement vide**. Voir §5.4 pour la décision de
publication.

---

## 2. Ce qui peut être synthétisé

Synthèses autorisées parce qu'elles ne font que reformuler ou regrouper du texte existant,
sans ajouter de fait. Chacune reste rattachée à ses articles dans le code
(`lib/statuts.ts`, champ `sources`).

1. **Les 6 programmes du site** sont un regroupement de l'article 6 et des objectifs de
   l'article 9. Correspondance exacte :

   | Programme affiché | Fondement littéral |
   | --- | --- |
   | Développement et autonomisation de la jeunesse | S 6 a), S 9.1, S 9.6 |
   | Éducation, formation et développement des compétences | S 6 a), S 9.1, S 9.8 |
   | Leadership, confiance en soi et prise de parole en public | S 6 b), S 9.3, S 9.6 |
   | Santé sexuelle et reproductive | S 6 c), S 9.2 |
   | Protection et soutien aux personnes vulnérables | S 6 d), S 6 e), S 9.4, S 9.5 |
   | Développement communautaire et engagement citoyen | S 6 f), S 9.7, S 9.10 |

   Les domaines S 6 g) (recherche et production de connaissances) et S 6 h) (mise en réseau
   et coopération) ne sont pas des programmes distincts : ils sont présentés comme
   **transversaux**, ce qu'ils sont littéralement.

2. **La grille de valeurs** regroupe les 10 principes de S art. 10 en 7 entrées lisibles
   (intégrité/moralité ; solidarité et entraide ; respect et dignité humaine ; responsabilité
   personnelle ; éducation et développement continu ; expression et liberté de parole ;
   santé et bien-être), chacune rattachée à son numéro d'article. La neutralité politique, la
   transparence et le respect des lois sont conservés séparément car ce sont des principes de
   fonctionnement, non des valeurs d'accompagnement.

3. **La « méthode projet »** publiée sur `/projets` est la reformulation du cycle en 8 étapes
   de RI art. 40 et de la check-list de RI annexe 2. Elle décrit un **processus interne**, pas
   des projets réalisés.

4. **La méthodologie des indicateurs** (période, indicateur, valeur, unité, source, date de
   mise à jour) découle de S art. 40 et RI art. 53 (traçabilité, justification,
   rapprochement) et de RI art. 63 (numérotation et datation des versions). C'est un cadre de
   publication, pas une donnée.

5. **L'ambition territoriale en trois phases** (ancrage local → développement national →
   ouverture internationale) est la mise en séquence de S art. 3, 4 et RI art. 69, 70.
   **Les phases 2 et 3 sont des dispositions statutaires, pas des réalisations** : elles sont
   affichées comme telles, au conditionnel, sans antenne ni bureau nommé.

6. **Les formes de collaboration** de `/partenariats` (technique, institutionnel,
   communautaire, mise en œuvre, consortium, appui matériel, appui financier, partage de
   compétences, formation, recherche) sont le développement des catégories de S art. 44 et
   S art. 39.4 et 39.6. Aucun partenaire n'est nommé.

---

## 3. Ce qui manque

Données **absentes des deux documents** et donc non publiables. Le site affiche un état vide
professionnel pour chacune d'elles (`TODO(SJCD)` explicite, jamais un contenu simulé).

### 3.1 Identité légale

- Numéro d'enregistrement, autorité d'enregistrement, date et référence de l'enregistrement.
- Preuve de la personnalité juridique (notarisation, dépôt, déclaration, publication).
- Adresse physique précise du siège à Uvira (rue, quartier, commune) : seul « ville d'Uvira »
  est documenté.
- Coordonnées officielles : e-mail, téléphone, site, comptes de réseaux sociaux.
  (RI art. 59 prévoit des comptes officiels gérés par des personnes habilitées, mais
  **aucun compte n'est identifié**.)
- Responsable de la publication et hébergeur pour les mentions légales.

### 3.2 Dates et adoption

- **Date d'adoption réelle des statuts** : la page de garde dit « à compléter », la
  déclaration finale dit 15/06/2023 (voir §5.1).
- **Date d'adoption du RI** : entièrement blanche.
- Numéro de la résolution d'adoption : blanc.
- Nombre de membres effectifs présents ou représentés à l'AG : blanc.
- Les dix lignes de signature de l'acte d'adoption des statuts : blanches.

### 3.3 Gouvernance

- **Composition réelle et actuelle du Conseil d'administration** : les dix fonctions sont
  prévues par les statuts, mais **sept des dix postes ne sont pourvus d'aucun nom** dans les
  documents (Vice-président, SG adjoint, Trésorier adjoint, Coordinateur, Porte-parole,
  Conseiller, Conseiller adjoint).
- Date de début et de fin de chaque mandat.
- Existence effective de commissions, départements ou groupes de travail.
- Nombre de membres effectifs (S art. 13 renvoie au « minimum légal requis » sans le chiffrer).
- Montant et périodicité des cotisations (S art. 16 les renvoie à une décision de l'AG).

### 3.4 Programmes et projets

- **Aucun projet** : aucun titre, aucun lieu, aucune période, aucun budget, aucun résultat.
- **Aucun programme en cours d'exécution** : l'article 6 définit des domaines d'intervention
  statutaires, pas des programmes opérationnels nommés, budgétés ou datés.
- Aucun territoire d'intervention au-delà du siège : aucune localité, zone de santé, quartier
  ou province d'intervention n'est cité.
- Aucun calendrier d'activité, **y compris pour les rencontres de membres** : ni jour, ni
  heure, ni lieu (voir §5.3).
- Aucun public chiffré, aucune cible de bénéficiaires.

### 3.5 Transparence

- Aucun rapport d'activités, aucun compte annuel, aucun rapport financier.
- Aucun procès-verbal.
- Les **neuf autres documents internes** annoncés par S annexe B et RI annexe 3 n'existent
  pas dans le dépôt : code de conduite / charte éthique ; politique de protection et de
  safeguarding ; manuel de procédures administratives et financières ; politique de gestion
  des conflits d'intérêts ; politique de communication et d'utilisation de l'image ;
  procédure de gestion des plaintes et signalements ; procédure de gestion documentaire et
  de protection des données ; politique RH / bénévolat et volontariat ; plan stratégique
  pluriannuel.
- Aucun indicateur : **aucune valeur, aucune unité, aucune période, aucune source**.
- Aucun point focal de protection identifié (RI art. 46 en prévoit un, sans le nommer).

### 3.6 Partenariats et financements

- Aucun partenaire nommé, aucun logo, aucune convention.
- Aucun bailleur, aucune subvention, aucun montant, aucune devise.
- Aucune opportunité de financement.

### 3.7 Contenus éditoriaux

- Aucune actualité, aucun communiqué, aucune publication.
- Aucun témoignage, aucune histoire de terrain, aucune photographie d'activité.
- Aucun logo officiel (la flamme du site reste une proposition graphique).

---

## 4. Ce qui ne doit surtout pas être inventé

Liste de contrôle négative. Chacun de ces points est vérifié par un test automatisé
(`tests/contracts.test.mjs`) et non par la seule vigilance éditoriale.

| Interdiction | Fondement |
| --- | --- |
| **Aucun projet**, réel ou plausible, même « exemple » ou « pilote » | §3.4 — rien dans S ni RI |
| **Aucun chiffre d'impact** : jeunes accompagnés, bénéficiaires, communautés, années d'action, pourcentages | §3.5 — aucune valeur dans S ni RI |
| **Aucun partenaire nommé ni logo affiché** | §3.6 — S 44 et RI 42 définissent un régime, pas une liste |
| **Aucun financement, montant, budget ni bailleur** | §3.6 — S 39 liste des *types* de ressources |
| **Aucune certification, label, agrément, prix ou accréditation** | inexistant dans les deux documents |
| **Aucun statut juridique affirmé** : « enregistrée », « reconnue d'utilité publique », « légalement établie », « agréée » | §0 — documents non adoptés ni déposés |
| **Aucun numéro d'enregistrement**, même partiel | §3.1 |
| **Aucune affiliation religieuse**, aucune doctrine, aucune pratique cultuelle, aucune dénomination | S 2 (« non confessionnelle »), S préambule |
| **Aucun bureau, antenne, représentation ni opération hors d'Uvira** présenté comme existant | S 3, 4 ; RI 69, 70 : facultés, pas des faits |
| **Aucune activité présentée comme permanente** si les documents ne l'affirment pas | S 11 (« peut notamment »), RI 36 (« peut tenir ») |
| **Aucun témoignage ni histoire de bénéficiaire** | RI 60 : consentement obligatoire, aucun recueil documenté |
| **Aucune photographie générée présentée comme une photo d'activité réelle** | RI 60 ; règle éditoriale du dépôt |
| **Aucun nom de dirigeant au-delà des trois documentés**, aucune fonction attribuée à une personne non citée | §1.12 |
| **Aucun horaire, jour ou lieu de rencontre** | §5.3 |
| **Aucune date d'adoption ou d'entrée en vigueur** présentée comme certaine | §5.1, §5.2 |
| **Aucune transformation d'une commission ou d'un groupe de travail en organe statutaire** | S 20, RI 34 |
| **Aucune confusion entre les rencontres de membres et l'AG ou le CA** | RI 36 alinéa 2 |
| **Aucun envoi de formulaire présenté comme fonctionnel** tant qu'aucun service n'existe | état actuel du dépôt |

---

## 5. Contradictions et points à arbitrer avant publication

Cinq points bloquants. Ils relèvent de SJCD et de son conseil juridique, pas du site.

### 5.1 Statuts : « non adoptés » en page de garde, « adoptés » en page finale

- Page de garde : « soumise à relecture juridique et notariale **avant adoption et dépôt** »,
  « Date d'adoption : **à compléter** ».
- Acte d'adoption : « Les présents statuts **ont été examinés et adoptés** par l'Assemblée
  générale compétente », « Date de l'Assemblée générale : **15/06/2023** », « Lieu : Institut
  AKSANTI KILOMONI KAVIMVIRA », « Type de réunion : Assemblée générale **constitutive /
  extraordinaire** ».
- Déclaration finale : « Fait à Uvira, le 15/06/2023 », avec les trois noms de §1.12.
- Mais : résolution d'adoption **blanche**, nombre de membres présents **blanc**, les dix
  signatures **blanches**, et « Mention notariale : les signatures et la forme authentique
  des présents statuts **sont à établir** ».

**À arbitrer** : les statuts sont-ils adoptés ou non ? Le site retient la position prudente
(§0) et n'affiche aucune date d'adoption. Si l'adoption du 15/06/2023 est confirmée par un
procès-verbal, la page de garde doit être corrigée et la date pourra être publiée avec sa
source.

### 5.2 Deux dates de naissance : 23 février 2022 et 15 juin 2023

- Préambule : « **Créée le 23 février 2022** ».
- Acte d'adoption : Assemblée générale « **constitutive** / extraordinaire » du 15/06/2023.

Une assemblée *constitutive* est celle qui crée l'association ; elle ne peut pas être
postérieure de seize mois à la création déclarée. **À arbitrer** : le 23/02/2022 est-il la
date de création de fait (groupe fondateur, premières activités) et le 15/06/2023 la date de
formalisation statutaire ? Le site n'affiche **aucune des deux dates comme date de création
officielle** ; il mentionne 2022 comme année de création déclarée par le préambule, avec sa
source, et signale la formalisation de 2023 comme non attestée.

### 5.3 Rencontres hebdomadaires : « hebdomadaire » est documenté, « samedi » ne l'est pas

Le cahier des charges demande de présenter des rencontres « chaque samedi ». Or :

- le mot « **samedi** » n'apparaît **nulle part** dans les 40 pages des deux documents
  (vérification par recherche plein texte sur les deux PDF extraits) ;
- RI art. 36 dit que SJCD « **peut** tenir » des rencontres « hebdomadaires **ou
  thématiques** » et que « le calendrier détaillé est arrêté périodiquement par le
  Coordinateur en concertation avec le Conseil d'administration » ;
- aucune heure, aucune durée, aucun lieu, aucune fréquence effective ne sont indiqués.

**Décision appliquée** : le site présente un encadré « Rencontres de jeunes » fondé sur
RI art. 36 à 39 — nature, finalités (dialogue, formation, sensibilisation, développement
personnel, leadership, prise de parole, santé sexuelle et reproductive, citoyenneté),
déroulement en 8 temps, règle de non-substitution aux organes statutaires — avec le jour,
l'horaire et le lieu marqués **« à confirmer par SJCD »**. La mention « samedi » n'est pas
publiée. Il suffira d'ajouter le jour et le lieu dans `lib/data/programs.ts`
(`weeklyGathering`) dès qu'ils seront documentés.

### 5.4 Publication des trois noms de dirigeants

Les trois noms de §1.12 figurent dans la déclaration finale des statuts, donc dans un
document administratif du dépôt — mais dans un document **non signé, non notarié et dont
l'adoption est contestée** (§5.1). Publier un nom comme « Président de SJCD » revient à
tenir la gouvernance pour constituée.

**Décision appliquée** : les noms sont publiés dans `/qui-sommes-nous` et `/transparence`,
**avec leur fonction statutaire, la source exacte (« statuts, déclaration finale ») et la
réserve d'adoption**, et derrière un interrupteur unique
`lib/data/governance.ts → publishOfficeHolders`. Le passer à `false` retire les trois noms
de tout le site sans autre modification. **À confirmer par SJCD** : ces trois personnes
occupent-elles toujours ces fonctions, et autorisent-elles la publication de leur nom ?

### 5.5 Incohérences de rédaction à corriger dans les documents eux-mêmes

Points mineurs, sans incidence sur le site, mais à signaler à SJCD :

- S art. 34 : « Le Trésorier adjoint […] ne remplace pas **le Conseiller** » — la phrase
  semble confondre le périmètre du Trésorier adjoint avec celui du Secrétaire général adjoint
  (S art. 33), lequel porte la même règle de non-substitution.
- S art. 27 fixe le CA à **dix membres** et énumère exactement dix fonctions ; S art. 27
  alinéa final ajoute que « des fonctions techniques, commissions ou responsables thématiques
  peuvent être créés **en dehors du nombre statutaire de dix administrateurs** ». La
  formulation est correcte mais gagnerait à préciser que ces responsables ne sont pas
  administrateurs, pour éviter toute ambiguïté de quorum (S art. 30).
- S art. 25 autorise le règlement intérieur à prévoir une **voix prépondérante du Président**
  pour les matières ordinaires ; le RI **ne contient aucune disposition en ce sens**. La
  règle n'est donc pas applicable en l'état.
- RI art. 36 renvoie au Coordinateur l'arrêt du calendrier des rencontres, alors que le
  Coordinateur est l'une des dix fonctions du CA dont la désignation n'est pas attestée
  (§3.3).
- Titre XV du RI : « activités hors de **l'Uvira** » — formulation à corriger en « hors
  d'Uvira ».

---

## 6. Traçabilité implémentée

| Élément du site | Fichier | Champ de source |
| --- | --- | --- |
| Identité, objet, vision, mission, objectifs, valeurs | `lib/statuts.ts` | `sources: ['S art. N']` sur chaque entrée |
| Gouvernance, organes, fonctions, mandats | `lib/data/governance.ts` | `sources` par organe et par fonction |
| Programmes | `lib/data/programs.ts` | `sources` par programme, objectif, public, activité |
| Documents publiés | `lib/data/documents.ts` | `source`, `version`, `status`, `publication` |
| Projets, indicateurs, partenaires, actualités | `lib/data/*.ts` | tableaux **vides** + état vide |
| Rencontres de jeunes | `lib/data/programs.ts` → `weeklyGathering` | `sources: ['RI art. 36'…]`, jour/lieu `null` |

Vérification automatisée (`npm test`) : chaque programme et chaque fonction de gouvernance
doit citer au moins un article ; les tableaux de projets, indicateurs, partenaires et
actualités doivent rester vides tant qu'aucune source officielle n'est fournie ; aucune
valeur chiffrée ne peut apparaître sans période et source.
