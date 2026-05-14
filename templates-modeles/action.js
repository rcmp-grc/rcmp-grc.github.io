const fs = require("fs");
const path = require("path");

const dir = __dirname;
const templates = JSON.parse(fs.readFileSync(path.join(dir, "info.json"), "utf8"));

const enRows = templates.map((t) => `| ${t.en} | ${t.desc_en} | ${t.version} | ${t.status_en} | ${t.owner} |`).join("\n");

const frRows = templates.map((t) => `| ${t.fr} | ${t.desc_fr} | ${t.version} | ${t.status_fr} | ${t.owner} |`).join("\n");

const readme = `# RCMP-GRC Templates Repository

## English

### About

This repository contains bilingual web templates and reusable layouts developed for RCMP.ca projects and internal testing activities.

The repository is used to organize and maintain template examples for design, development, accessibility review, and content integration.

### Version numbering

Versions follow a \`vMAJOR.MINOR.PATCH\` format:

| Part | When it changes | Example |
| ---- | --------------- | ------- |
| MAJOR | Significant redesign or breaking structural change | \`v1.0.0\` → \`v2.0.0\` |
| MINOR | New features, sections, or layout changes | \`v1.0.0\` → \`v1.1.0\` |
| PATCH | Small fixes, typos, or content corrections | \`v1.0.0\` → \`v1.0.1\` |

All templates start at \`v0.0.0\` while in initial development. They move to \`v1.0.0\` once approved and production-ready.

### Status

| Status | Meaning |
| ------ | ------- |
| 🔵 Planning | Requirements being gathered, not yet started |
| 🟡 In development | Actively being built |
| 🔴 In review | Ready for accessibility or content review |
| 🟢 Live | Approved and in production |
| ⚪ On hold | Paused, pending decision or resources |

### Available templates

| Template | Description | Version | Status | Owner |
| -------- | ----------- | ------- | ------ | ----- |
${enRows}

---

## Français

### À propos

Ce dépôt contient des modèles Web bilingues et des mises en page réutilisables développés pour les projets de GRC.ca et les activités d'essai internes.

Le dépôt sert à organiser et maintenir des exemples de modèles pour la conception, le développement, la révision de l'accessibilité et l'intégration de contenu.

### Numérotation des versions

Les versions suivent le format \`vMAJEUR.MINEUR.CORRECTIF\` :

| Partie | Quand elle change | Exemple |
| ------ | ----------------- | ------- |
| MAJEUR | Refonte importante ou changement structurel | \`v1.0.0\` → \`v2.0.0\` |
| MINEUR | Nouvelles fonctionnalités ou changements de mise en page | \`v1.0.0\` → \`v1.1.0\` |
| CORRECTIF | Petites corrections ou ajustements de contenu | \`v1.0.0\` → \`v1.0.1\` |

Tous les modèles commencent à \`v0.0.0\` pendant le développement initial. Ils passent à \`v1.0.0\` une fois approuvés et prêts pour la production.

### État

| État | Signification |
| ---- | ------------- |
| 🔵 Planification | Exigences en cours de collecte, pas encore commencé |
| 🟡 En cours | En cours de développement |
| 🔴 En révision | Prêt pour la révision d'accessibilité ou de contenu |
| 🟢 En ligne | Approuvé et en production |
| ⚪ En attente | En pause, en attente d'une décision ou de ressources |

### Modèles disponibles

| Modèle | Description | Version | État | Responsable |
| ------ | ----------- | ------- | ---- | ----------- |
${frRows}
`;

fs.writeFileSync(path.join(__dirname, "README.md"), readme);
console.log("✅ README.md updated successfully!");
