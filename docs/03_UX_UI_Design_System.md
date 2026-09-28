# 03 — Design system actuel (v2)

**Direction : Lumière · Nunito · Future Institutional.**

Le nouveau brief utilisateur remplace la proposition Newsreader/Inter/teal de la phase 0.
Le design complet, ses composants, états, adaptations et arbitrages sont décrits dans
[08_Direction_Lumiere.md](08_Direction_Lumiere.md).

- Source des variables : `specs/design-tokens.json`.
- CSS généré : `app/tokens.css`, jamais édité manuellement.
- Styles des composants : `app/globals.css`.
- Génération : `npm run tokens:build` ; vérification : `npm run tokens:check`.
- Statut : direction et symbole provisoires, en attente de validation visuelle par SJCD.
- Pas de maquette figée à maintenir séparément : l’interface responsive est la référence.

Accessibilité : cible WCAG 2.2 AA. Audit automatique dans les tests Playwright ; audit
manuel et multi-navigateur toujours requis avant de revendiquer une conformité complète.
