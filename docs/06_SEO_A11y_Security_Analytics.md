# 06 — SEO, accessibilité, sécurité et analytics

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
**Document :** `docs/06_SEO_A11y_Security_Analytics.md` — v1.0
**Statut :** base de travail
**Nature :** ce document porte pour partie des **obligations légales**, pas seulement des bonnes pratiques.

---

## 1. Principe directeur

Ces quatre sujets sont traités ensemble parce qu'ils répondent à une même question :
**le site est-il digne de confiance du point de vue technique, comme il l'est du point de
vue éditorial ?** Un site dont la navigation exclut les personnes en situation de handicap,
qui trace ses visiteurs sans consentement ou qui expose des données personnelles détruit
la crédibilité que le contenu s'efforce de construire.

---

## 2. SEO

### 2.1 Objectif réaliste

Le SEO d'une ASBL locale n'est pas un enjeu de volume : c'est un enjeu de **marque** et
de **pertinence**. Trois objectifs, par ordre de priorité :

1. **Maîtriser son nom.** Une recherche sur « SJCD » ou « SJCD ASBL » doit renvoyer le
   site officiel en premier résultat. C'est un enjeu de légitimité, pas de trafic.
2. **Être trouvé sur son domaine d'action** par des partenaires potentiels (recherches
   de type « ONG [domaine] [zone] », « association [secteur] [pays] »).
3. **Être cité** par les acteurs institutionnels — annuaires d'ONG, plateformes de
   financement, sites de bailleurs. Le lien entrant vaut plus que le mot-clé.

⚠️ **Alerte de marque (R3 du PRD) :** l'acronyme « SJCD » est déjà porté par d'autres
entités en ligne. Sans nom complet, identité visuelle et cohérence, SJCD restera invisible
sur sa propre marque. **D1 et D2 sont des prérequis SEO, pas seulement juridiques.**

### 2.2 Technique

| Élément | Exigence |
|---|---|
| URL | minuscules, mots séparés par des tirets, sans accent ni identifiant, **sans extension**, stables pour toujours |
| Balise `title` | unique par page, 50–60 caractères, nom de l'organisation en fin (`… — SJCD ASBL`) |
| `meta description` | unique par page, 140–160 caractères, orientée bénéfice, jamais dupliquée |
| Hiérarchie | une seule `h1` par page, hiérarchie de titres sans saut |
| Canonical | URL canonique auto-référente sur chaque page ; paramètres de suivi ignorés |
| `hreflang` | uniquement si le multilinguisme est activé (D5) : réciproque, complet, `x-default` |
| `sitemap.xml` | généré dynamiquement, à jour, sans URL `noindex` ni brouillon |
| `robots.txt` | autorise l'indexation en production, la bloque sur les environnements de test |
| Redirections | toute URL modifiée donne lieu à une redirection 301 permanente — **jamais de 404 sur une URL publiée** |
| 404 | page personnalisée qui **ne renvoie pas** un code 200 |
| Performance | Core Web Vitals = facteur de classement → le budget `docs/05` §10 est un enjeu SEO |
| Mobile | conception mobile-first ; aucune fonctionnalité réservée au desktop |
| HTTPS | obligatoire, `www` et non-`www` unifiés sur une seule version canonique |

### 2.3 Données structurées (JSON-LD)

| Schéma | Où | Contenu |
|---|---|---|
| `NGO` (sous-type de `Organization`) | toutes les pages (une fois) | nom légal, `alternateName`, logo, URL, adresse, coordonnées, `foundingDate`, `sameAs` (profils officiels), identifiant d'enregistrement si licite |
| `WebSite` | accueil | nom, URL, langue |
| `BreadcrumbList` | sous-pages | fil d'Ariane cohérent avec l'affichage |
| `WebPage` / `AboutPage` | pages institutionnelles | à propos, fil d'Ariane |
| `Article` / `NewsArticle` | actualités (v1.1) | dates de publication et de modification, auteur |
| `FAQPage` | si FAQ publiée | questions/réponses réellement visibles sur la page |
| `Document` / `DigitalDocument` | rapports | titre, date, format, taille |

**Règles :** les données structurées doivent décrire **exactement** ce que la page affiche.
Baliser une information absente de la page est une pratique trompeuse et expose à une
sanction d'indexation. Toute donnée d'organisation non confirmée (D1) est **omise** du
balisage tant qu'elle n'est pas validée.

### 2.4 Contenu et maillage

- **Un sujet = une page.** Pas de contenu dupliqué entre programmes ou entre langues.
- **Maillage interne explicite** : chaque page de preuve est atteignable depuis l'accueil
  en deux clics au maximum, et les libellés de liens sont descriptifs.
- **Fraîcheur** : page Impact et rapports mis à jour au moins annuellement, avec date visible.
- **Ancres descriptives** : jamais « cliquez ici » (aussi une exigence d'accessibilité).
- **Fichiers** : nommer les PDF de façon lisible et signifiante (les URL de documents
  sont indexées) ; renseigner leurs métadonnées internes (titre, auteur, langue).
- **Veille de marque** : créer et tenir des profils officiels cohérents (au minimum un
  profil professionnel), les déclarer dans `sameAs`, et surveiller les mentions du nom.

### 2.5 Indicateurs SEO à suivre

Impressions et position sur les requêtes de marque · clics depuis les moteurs ·
nombre d'URL indexées (à surveiller : des URL parasites signalent un problème) ·
`TODO(SJCD)`: référencement en langue locale et dans les annuaires sectoriels.

---

## 3. Accessibilité

### 3.1 Engagement

**Niveau cible : WCAG 2.2 niveau AA**, sur l'ensemble des pages publiques et des parcours.
Le brief fondateur exige un site « accessible » : ce document le traduit en référentiel
**testable**, exempt d'interprétation. Ce niveau est également celui attendu des acteurs
publics et institutionnels en Europe — il conditionne l'accès à certains financements.

### 3.2 Exigences par domaine

| Domaine | Exigences |
|---|---|
| **Perception** | contraste ≥ 4,5:1 (texte) et ≥ 3:1 (grand texte, UI) ; aucune information portée par la couleur seule ; texte alternatif utile ; sous-titres pour toute vidéo ; contenu utilisable à 200 % de zoom et en orientation paysage |
| **Utilisation clavier** | tout élément interactif atteignable au clavier ; ordre logique ; focus toujours visible (jamais `outline: none` sans remplacement) ; aucun piège de focus ; `Échap` ferme les menus et modales ; lien « aller au contenu » |
| **Compréhension** | langue déclarée (`lang`) ; libellés explicites ; message d'erreur identifiant le champ **et** décrivant la correction ; pas de changement de contexte inattendu ; navigation cohérente entre les pages |
| **Robustesse** | balisage sémantique et valide ; rôles ARIA seulement en complément du HTML natif ; formulaires associés à leurs étiquettes ; régions et points de repère identifiables ; messages de statut annoncés |
| **Mouvement** | `prefers-reduced-motion` respecté ; aucun contenu clignotant > 3 fois/s ; aucun défilement automatique (WCAG 2.2.2) ; aucun délai de temps imposé |
| **Saisie** | cibles ≥ 24 px (WCAG 2.2) ; aucun glissement obligatoire ; aucune authentification cognitive complexe ; saisie assistée (`autocomplete`) sur les champs personnels |

### 3.3 Vérification

| Niveau | Outil | Fréquence |
|---|---|---|
| Automatique | axe-core via Playwright, Lighthouse CI | à chaque pull request |
| Semi-automatique | audit de contraste des jetons, vérification du HTML généré | à chaque pull request |
| Manuel | navigation au clavier seul, lecteur d'écran (NVDA ou VoiceOver), zoom 200 %, test en mode contraste élevé | à chaque nouvelle page |
| Externe | audit par un tiers, incluant des personnes utilisatrices | avant la v1.0 puis annuellement |

**Critère de blocage :** aucun déploiement en production avec une violation critique ou
sérieuse non corrigée. Un avertissement peut être accepté avec justification écrite et
date de correction.

### 3.4 Déclaration d'accessibilité

La page `/accessibilite` publie : le niveau visé, l'état de conformité, les limites
connues, la date du dernier audit, et **un moyen de signaler un problème d'accessibilité
avec un délai de réponse annoncé**. Cette page est en elle-même un signal de sérieux :
peu d'organisations en publient une.

---

## 4. Sécurité

### 4.1 En-têtes HTTP

| En-tête | Valeur cible | Rôle |
|---|---|---|
| `Content-Security-Policy` | stricte, par `nonce`, sans `unsafe-inline` ni `unsafe-eval` en production | empêche l'exécution de scripts injectés |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | force HTTPS |
| `X-Content-Type-Options` | `nosniff` | empêche l'interprétation abusive de type |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | limite la fuite d'URL |
| `Permissions-Policy` | caméra, micro, géolocalisation désactivés | réduit la surface |
| `X-Frame-Options` / `frame-ancestors` | `DENY` | anti-clickjacking |
| `Cross-Origin-Opener-Policy` | `same-origin` | isole le contexte |

### 4.2 Protection des données et des secrets

- **Aucun secret dans le dépôt.** Contrôle automatique en CI + `.gitignore` strict.
- Seules les variables `NEXT_PUBLIC_*` sont exposées au navigateur ; toute autre variable
  reste côté serveur. Toute introduction d'une `NEXT_PUBLIC_*` exige une revue explicite.
- Clés d'API à portée minimale (le jeton de lecture du CMS ne peut pas écrire).
- **Rotation** des secrets en cas de doute, de départ d'un contributeur ou d'exposition.

### 4.3 Surface applicative

| Menace | Parade |
|---|---|
| Injection (XSS) | échappement par défaut de React ; `dangerouslySetInnerHTML` interdit sans justification écrite ; CSP stricte |
| Spam et abus de formulaire | anti-spam sans CAPTCHA bloquant, limitation de débit, validation stricte, pot-de-miel |
| Énumération / scraping | limitation de débit, pas de contenu de valeur derrière une URL devinable |
| Webhook falsifié | signature vérifiée, horodatage, secret dédié, rejet et journalisation des requêtes non signées |
| Dépendance compromise | Dependabot, audit automatisé, nombre de dépendances minimal |
| Fuite par les journaux | aucune donnée personnelle ni contenu de message journalisé |
| Perte de données | sauvegardes chiffrées, test de restauration semestriel |

### 4.4 Réponse à incident

Une procédure écrite, même courte, est nécessaire : détection → confinement → évaluation
de l'impact sur les données personnelles → **notification à l'autorité de protection des
données sous 72 h si requis** → information des personnes concernées si le risque est
élevé → correction → retour d'expérience.

`TODO(SJCD)` : désigner une personne responsable de la sécurité et une adresse de contact
dédiée.

---

## 5. Vie privée et RGPD

### 5.1 Cadre

Le site traite des données personnelles à au moins six titres : soumissions de formulaire,
e-mails reçus, journaux serveur, mesure d'audience, comptes d'administration du CMS, et
**contenus publiés concernant des personnes identifiables** (témoignages, photographies,
membres de l'équipe). Chacun de ces traitements doit être documenté.

### 5.2 Registre des traitements

`TODO(SJCD)` : le registre doit être constitué par SJCD. Base minimale à documenter pour
chaque traitement : finalité, base légale, catégories de données, personnes concernées,
destinataires et sous-traitants, durée de conservation, mesures de sécurité.

| Traitement | Finalité | Base légale | Conservation proposée |
|---|---|---|---|
| Formulaire de contact | répondre à une demande | intérêt légitime | 24 mois |
| Formulaire de partenariat | qualifier une relation | intérêt légitime / consentement | 36 mois |
| Candidature bénévole | instruire une candidature | consentement | 12 mois après clôture |
| Newsletter | information institutionnelle | consentement | jusqu'au désabonnement |
| Mesure d'audience | améliorer le site | consentement (ou exemption si configuration sans cookie) | 14 mois |
| Journaux serveur | sécurité et diagnostic | intérêt légitime | 6 mois |
| Comptes du CMS | administration | intérêt légitime | durée de la fonction |

### 5.3 Consentement et traceurs

- **Aucun traceur non essentiel avant le choix explicite de l'utilisateur.** Ni analytics,
  ni police distante, ni carte, ni vidéo intégrée, ni pixel social.
- Refuser doit être **aussi simple et visible** qu'accepter : pas de bouton grisé, pas de
  « tout accepter » prédominant, pas de parcours à plusieurs clics.
- Le choix est **modifiable à tout moment** depuis le pied de page.
- Cases de consentement **non pré-cochées**, avec finalité expliquée.
- Les traceurs chargés après consentement sont **documentés** (nom, finalité, durée).

### 5.4 Droits des personnes

| Droit | Mise en œuvre |
|---|---|
| Information | politique de confidentialité claire, langue simple, accessible depuis toutes les pages |
| Accès et rectification | adresse de contact dédiée, réponse sous 30 jours |
| Effacement | procédure de suppression, y compris dans les sauvegardes à échéance |
| Opposition | possibilité de s'opposer à un traitement fondé sur l'intérêt légitime |
| Retrait du consentement | aussi simple que de le donner — en particulier pour la newsletter |
| Portabilité | export des données fournies par la personne, sur demande |
| Réclamation | mention de l'autorité de contrôle compétente |

### 5.5 Dignité des personnes dans les contenus publiés

C'est un enjeu éthique propre aux organisations de solidarité, et un risque juridique réel.

- **Autorisation écrite et éclairée** pour toute photographie ou témoignage d'une personne
  identifiable ; pour un mineur, accord du représentant légal **et** assentiment de l'enfant.
- L'autorisation précise : l'usage, les supports, la durée, et la possibilité de retrait.
- **Retrait facile et immédiat** : un moyen clair pour toute personne demandant le retrait
  d'une image ou d'un témoignage, traité sans délai.
- **Aucune donnée personnelle de bénéficiaire** dans un formulaire public, un journal ou
  une URL.
- **Usage digne** : jamais d'image de détresse, jamais de nom complet associé à une
  situation sensible, jamais de localisation précise d'une personne vulnérable.
- Les **métadonnées EXIF** (géolocalisation notamment) sont retirées des photographies
  avant publication.

### 5.6 Sous-traitants et transferts

Chaque prestataire technique (hébergeur, CMS, e-mail, analytics, paiement) est un
sous-traitant au sens du RGPD. Exigences :

- un **accord de traitement des données (DPA)** signé et archivé pour chacun ;
- un hébergement dans l'Union européenne privilégié ;
- en cas de transfert hors UE, identifier la base légale du transfert et les garanties ;
- la liste des sous-traitants est publiée dans la politique de confidentialité.

---

## 6. Analytics et mesure

### 6.1 Choix

**Analytics sans cookie et respectueux de la vie privée** : Plausible, Umami ou Matomo
auto-hébergé. Aucune donnée personnelle, aucun identifiant persistant, aucune revente.
Si la configuration retenue permet une exemption de consentement, elle doit être
**juridiquement vérifiée** avant mise en production ; à défaut, le consentement reste requis.

**Exclus d'office :** Google Analytics, pixels publicitaires, cartes de chaleur, tout
outil qui construit un profil ou enregistre une session.

### 6.2 Ce qu'on mesure

| Catégorie | Événements |
|---|---|
| Étage 1 | visites des pages institutionnelles, téléchargement des statuts |
| Étage 2 | visites de la page Impact, téléchargements de rapports, profondeur de lecture |
| Étage 3 | atteinte de la page Partenaires, téléchargement du dossier de partenariat, soumission de formulaire de partenariat |
| Étage 4 | soumissions de contact, clics vers le don, inscriptions newsletter |
| Technique | Core Web Vitals, erreurs 404, erreurs serveur, temps de réponse |

**Interdits :** envoyer une adresse e-mail, un nom, un contenu de message, un identifiant
de personne ou un paramètre d'URL contenant des données personnelles dans un outil de
mesure.

### 6.3 Rapport

Un rapport mensuel de 5 lignes, pas un tableau de bord. Un site institutionnel se pilote
avec peu d'indicateurs suivis réellement, pas avec beaucoup d'indicateurs ignorés.
`TODO(SJCD)` : désigner la personne qui reçoit et lit ce rapport.

---

## 7. Conformité — vue de synthèse

| Obligation | Source | Statut |
|---|---|---|
| Mentions légales accessibles (dénomination, siège, registre, responsable) | statut ASBL (C7) | 🔴 bloqué par **D1** |
| Politique de confidentialité publiée | RGPD | à rédiger |
| Registre des traitements | RGPD | `TODO(SJCD)` |
| Consentement préalable aux traceurs | RGPD | à implémenter |
| DPA signés avec les sous-traitants | RGPD | à établir selon D6 |
| Autorisations de droit à l'image | droit à l'image | `TODO(SJCD)` |
| Autorisations d'usage des logos partenaires | droit des marques | `TODO(SJCD)` : D15 |
| Accessibilité WCAG 2.2 AA | engagement produit + attendu des bailleurs | à implémenter et tester |
| Conformité du parcours de don et statut fiscal | droit fiscal | conditionne **D10** |
| Déclaration d'accessibilité publiée | bonne pratique | à rédiger |

---

*Les sections 2 (SEO) et 3 (accessibilité) sont aussi des exigences de conception : elles
doivent être prises en compte dès la maquette, jamais rattrapées après coup. Les sections
4, 5 et 6 comportent des obligations légales : elles nécessitent une validation par SJCD
et, pour le volet dons et données personnelles, un avis juridique.*
