# Itération — fondations institutionnelles et homepage

**29 septembre 2026. Périmètre : phases 1 et 2 du dernier brief.**

## Inspection et décisions

Le dépôt contient déjà une application Next.js App Router, des composants serveur, une
navigation mobile modale, un parcours de brouillon local, une couche Lenis/GSAP adaptative,
un générateur de tokens, des tests Node/Playwright et une documentation détaillée.

Ce socle est conservé. Aucun nouveau projet, CMS, serveur d’envoi ou moteur d’animation.
Le projet utilise déjà du CSS natif : pas de migration Tailwind/shadcn sans nécessité
fonctionnelle. Une migration décorative ajouterait du risque sans améliorer l’usage.

## Informations du dernier brief (source : utilisateur)

- Le nom à afficher devient **Sanctuaire de Jeunes Chandelier pour le Développement**.
- Organisation congolaise de la société civile : jeunesse, développement communautaire,
  impact social, forte présence à **Uvira / Sud-Kivu**.
- Uvira n’est **pas** présentée comme une adresse légale de siège.
- La dénomination légale exacte et les documents restent à contrôler avant publication.
- Cette note prévaut sur les anciens documents mentionnant « Sanctuaire ».

## Changements réalisés

- Nunito Sans variable locale, remplaçant Nunito sans appel vers Google.
- Palette nuit / ambre / papier conservée ; rayon des grandes cartes réduit à 18 px.
- Navigation enrichie avec Accueil, Programmes & Projets, Transparence et Partenariats ;
  CTA Soutenir SJCD. Menu mobile jusqu’à 1279 px pour éviter l’entassement des liens.
- Hero : « Découvrir notre impact » vers la section impact, « Soutenir SJCD » vers le
  brouillon de soutien existant. Ni paiement ni envoi ne sont simulés.
- Impact déplacé juste après le hero. Les indicateurs inconnus restent des tirets.
- Sections Ancrage territorial, Transparence et Financement ajoutées, avec des états
  TODO explicites. Aucun faux rapport, montant, taux de financement ni projet publié.
- `SectionHeader` extrait pour les nouvelles sections.
- Métadonnées Open Graph / Twitter sans URL canonique ou image inventées.

## Architecture de contenu et langues

`lib/models.ts` définit les interfaces bilingues pour projets, programmes, articles,
témoignages, indicateurs, documents, partenaires, membres et opportunités de financement.
Les montants inconnus valent `null` et non zéro ; budget et source restent liés.
`lib/repository.ts` définit une frontière de fournisseur CMS et retourne des collections
vides. Ce n’est pas une intégration CMS, ni un moteur de validation de publication.
Les emplacements visuels ne sont pas des enregistrements institutionnels publiés.

`lib/i18n/foundation.ts` centralise les textes **FR/EN des nouveaux blocs et du hero**.
Le site complet reste français dans cette phase : aucune fausse version anglaise ni
sélecteur sans traduction. Étape suivante : dictionnaires pour tous les composants
existants, routage `/en`, `lang` par locale, sélecteur conservant la page, `hreflang`,
URLs canoniques et sitemap lorsque le domaine est confirmé.

## Recette et limites

Tests Node et build/typecheck/lint. Suite Playwright adaptée aux nouveaux CTA et à
l’ordre narratif. Le contrôle axe `target-size`, auparavant exclu, est réactivé.
Captures desktop/mobile inspectées. Les tests Chromium ne remplacent pas une recette
Safari/Firefox/lecteur d’écran ou un audit WCAG 2.2 AA complet.

## Prochaines phases — non livrées ici

- Pages métier enrichies, catalogue filtrable, fiches projets/articles.
- Version anglaise complète et navigation FR/EN.
- Transparence documentaire et politique de protection validées.
- Catalogue de financement avec budgets, fonds acquis, restes à financer et pièces.
- Dons, CMS, publication, e-mails : après validation des données et services.
- SEO de production et audit performance terrain après domaine/contenus officiels.
