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

### Available templates

| Template | Description | Version | Status | Owner |
| -------- | ----------- | ------- | ------ | ----- |
${enRows}

---

## Français

### À propos

Ce dépôt contient des modèles Web bilingues et des mises en page réutilisables développés pour les projets de GRC.ca et les activités d'essai internes.

Le dépôt sert à organiser et maintenir des exemples de modèles pour la conception, le développement, la révision de l'accessibilité et l'intégration de contenu.

### Modèles disponibles

| Modèle | Description | Version | État | Responsable |
| ------ | ----------- | ------- | ---- | ----------- |
${frRows}
`;

fs.writeFileSync(path.join(__dirname, "README.md"), readme);
console.log("✅ README.md updated successfully!");
