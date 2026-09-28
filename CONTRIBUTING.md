# Contribuer au site de SJCD ASBL

Merci de contribuer. Ce dépôt porte le **site institutionnel officiel** de SJCD ASBL :
la qualité perçue engage directement la crédibilité de l'association auprès des
partenaires, bailleurs et donateurs. Chaque contribution doit donc servir trois
exigences non négociables : **exactitude factuelle**, **accessibilité**, **sobriété**.

## 1. Avant de commencer

Lire, dans cet ordre :

| Fichier | Ce qu'on y trouve |
|---|---|
| `README.md` | vision et tableau d'état des livrables |
| `docs/01_PRD.md` | objectifs, périmètre, décisions ouvertes |
| `docs/05_Technical_Architecture.md` | stack, conventions de code, arborescence |
| `docs/03_UX_UI_Design_System.md` | design system : à respecter, à ne pas réinventer |
| `docs/06_SEO_A11y_Security_Analytics.md` | exigences a11y, sécurité, RGPD |
| `docs/07_Roadmap_QA.md` | définition de « terminé » |

## 2. Règle d'or : la donnée avant le décor

Toute information factuelle (chiffre d'impact, nom de partenaire, citation, date,
montant, statut juridique) doit être **sourcée et validée** par SJCD. Si ce n'est pas
le cas, écrire le marqueur :

```
TODO(SJCD): [nature de l'information manquante] — responsable : [nom] — voir D[x]
```

**Ne jamais inventer un chiffre, un témoignage, un partenaire ou une mention légale,
même « pour voir le rendu ».** Un chiffre plausible mais faux est le pire défaut
possible pour un site dont la promesse est la transparence.

Vérifier l'état des données à tout moment :

```bash
grep -rn "TODO(SJCD)" --include="*.md" --include="*.json" --include="*.tsx" .
```

## 3. Convention de branches

```
feat/<sujet>      nouvelle fonctionnalité ou page
fix/<sujet>       correction de bug ou d'erreur de contenu
content/<sujet>   ajout ou mise à jour de contenu éditorial
docs/<sujet>      documentation, spécifications, design system
a11y/<sujet>      correctifs d'accessibilité
chore/<sujet>     outillage, dépendances, configuration
```

Exemples : `feat/page-programmes`, `content/rapport-annuel-2026`, `a11y/navigation-clavier`.

## 4. Messages de commit

Format **Conventional Commits**, en français, à l'impératif :

```
<type>(<portée>): <description courte>

[corps optionnel : pourquoi, pas comment]

[références : Décision D5, TODO(SJCD), issue #12]
```

Types autorisés : `feat`, `fix`, `docs`, `content`, `style`, `refactor`, `perf`,
`test`, `chore`, `a11y`, `seo`.

## 5. Avant d'ouvrir une pull request

```bash
npm run lint          # aucune erreur
npm run typecheck     # aucune erreur TypeScript
npm run build         # build de production réussi
npm run test          # tests unitaires au vert
npm run test:a11y     # aucun nouveau problème d'accessibilité critique
```

Checklist de la PR :

- [ ] Le changement sert l'un des 4 étages de la règle de confiance (voir PRD §2).
- [ ] Aucun `TODO(SJCD)` introduit sans responsable identifié.
- [ ] Navigation clavier et focus visibles sur tout élément interactif.
- [ ] Contraste conforme WCAG 2.2 AA (≥ 4.5:1 pour le texte courant).
- [ ] Animations respectueuses de `prefers-reduced-motion`.
- [ ] Aucune dépendance ajoutée sans justification (poids & maintenance).
- [ ] Budget de performance respecté (voir `docs/05` §10).
- [ ] Aucun secret, aucune clé d'API, aucune donnée personnelle de bénéficiaire.
- [ ] Textes relus : orthographe, typographie française (espaces insécables, guillemets « »).
- [ ] Si la modification touche l'identité visuelle : validation explicite requise.

## 6. Interdits absolus

1. **Aucun secret dans le dépôt.** Utiliser `.env.local` (ignoré) et un gestionnaire
   de secrets en production.
2. **Aucune photographie de bénéficiaire** sans autorisation écrite d'utilisation de
   l'image, en particulier pour les mineurs. Voir `docs/06` §5.
3. **Aucun contenu juridique improvisé** : mentions légales, politique de
   confidentialité et régime des dons doivent être validés par SJCD.
4. **Aucun chiffre non vérifié**, y compris dans un contenu de démonstration.
5. **Aucun traceur** (analytics, pixel, police distante, carte embarquée) chargé
   avant le consentement de l'utilisateur.

## 7. Style de code et de contenu

**Code** — TypeScript strict ; composants serveur par défaut (`'use client'` seulement
si nécessaire) ; nommage en français pour le domaine métier, en anglais pour la
technique ; classes Tailwind ordonnées ; aucun style en ligne.

**Contenu** — français ; voussoiement de l'institution (« SJCD agit… », pas « nous ») ;
phrases courtes ; vocabulaire concret ; pas d'anglicismes inutiles ; pas de
superlatifs non étayés (« le meilleur », « unique ») ; typographie française
correcte (espaces insécables avant `: ; ? !`, guillemets « », tiret cadratin —).

**Ton** : digne, humain, factuel. Documenter la dignité des personnes, jamais la
misère. Décrire des capacités et des résultats, pas des victimes.

## 8. Signaler un problème de sécurité

Ne pas ouvrir d'issue publique. Contacter directement l'équipe de maintenance via
l'adresse interne. `TODO(SJCD): adresse de contact sécurité` — responsive sous 72 h.
