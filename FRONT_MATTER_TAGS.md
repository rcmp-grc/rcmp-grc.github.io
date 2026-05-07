# Front Matter Tags — Guide / Guide des balises de front matter

> **English** | [Français ci-dessous](#french)

---

## English Guide

These are called **front matter tags** (also known as **page variables**). They are written at the very top of any Markdown (`.md`) content file, between two sets of triple dashes (`---`). Jekyll reads them and makes them available throughout the templates as `{{ page.TAGNAME }}`.

### Basic structure

```yaml
---
layout: default
title: My Page Title
description: A short summary of this page.
lang: en
---
```

---

### All available tags

#### `layout`
**What it does:** Tells Jekyll which HTML template to use to wrap this page's content.  
**Accepted values:**
- `default` — standard content page with a constrained-width container and breadcrumb.
- `super_landing` — full-width landing page with a hero image banner and intro text displayed inside it. No breadcrumb. Used for high-level topic or campaign pages.

**Example:**
```yaml
layout: super_landing
```

---

#### `hero`
**What it does:** Sets the background image for the hero banner on `super_landing` pages. The image is applied via `data-bgimg-srcset` at a 992px breakpoint. Only used when `layout: super_landing`.  
**Accepted value:** A path or URL to an image file.  
**Example:**
```yaml
hero: /assets/img/hero-firearms.jpg
```

---

#### `intro`
**What it does:** A block of HTML or text displayed inside the hero banner, directly below the `<h1>` title, on `super_landing` pages. Typically used for a short introductory sentence or call-to-action. Only used when `layout: super_landing`.  
**Example:**
```yaml
intro: "<p>Explore our programs, services, and resources.</p>"
```

---

#### `title`
**What it does:** Sets the main heading of the page. It appears as the `<h1>` on the page and in the browser tab title (as *Title - RCMP.ca* or *Titre - GRC.ca*).  
**Example:**
```yaml
title: Criminal Record Checks
```

---

#### `description`
**What it does:** Provides a short plain-text summary of the page. Used in the `<meta name="description">` tag (for search engines and social sharing previews) and in `dcterms.description`.  
**Example:**
```yaml
description: Learn how to request a criminal record check in Canada.
```

---

#### `lang`
**What it does:** Sets the language of the page. Controls which version of the header, footer, breadcrumb, and all labels (buttons, links, date labels, etc.) are displayed.  
**Accepted values:** `en` for English, `fr` for French.  
**Example:**
```yaml
lang: en
```

---

#### `lang_url`
**What it does:** The URL of the equivalent page in the other language. Used by the language toggle button in the header so users can switch between English and French.  
**Example:**
```yaml
lang_url: /fr/verification-casier-judiciaire.html
```

---

#### `lead`
**What it does:** An optional short introductory sentence that appears **above** the `<h1>` page title, styled as a lead paragraph (`<p class="wb-rd lead">`). If this tag is not provided, only the plain `<h1>` is shown — the wrapping `<hgroup>` is not rendered.  
**Example:**
```yaml
lead: A service for individuals and organizations.
```
**Renders as:**
```html
<hgroup class="mrgn-tp-md">
  <p class="wb-rd lead mrgn-tp-0 mrgn-bttm-0">A service for individuals and organizations.</p>
  <h1 id="wb-cont" property="name">Criminal Record Checks</h1>
</hgroup>
```

---

#### `date_modified`
**What it does:** The date this page was last updated. Displayed at the bottom of the page in the "Date modified" section and used in the `dcterms.modified` metadata tag. If omitted, Jekyll falls back to the site build date.  
**Format:** `YYYY-MM-DD`  
**Example:**
```yaml
date_modified: 2026-05-04
```

---

#### `issued`
**What it does:** The original publication date of this page. Used in the `dcterms.issued` metadata tag. If omitted, Jekyll falls back to the site build date.  
**Format:** `YYYY-MM-DD`  
**Example:**
```yaml
issued: 2026-01-15
```

---

#### `author`
**What it does:** The author of the page content. Used in the `<meta name="author">` tag.  
**Example:**
```yaml
author: RCMP Web Team
```

---

#### `creator`
**What it does:** The creator of the page. Used in the `dcterms.creator` metadata tag. Typically the organizational unit responsible for the content.  
**Example:**
```yaml
creator: Royal Canadian Mounted Police
```

---

#### `subject`
**What it does:** Keywords or topic descriptors for the page. Used in the `dcterms.subject` metadata tag. Helpful for discoverability and cataloguing.  
**Example:**
```yaml
subject: criminal records, background checks, police certificates
```

---

#### `breadcrumbs`
**What it does:** Defines the navigation trail (breadcrumb) shown below the header. Each item can have a `label` (visible text) and an optional `url` (relative path after the language base URL). If a `url` is provided, the breadcrumb item is a clickable link; if omitted, it renders as plain text (typically used for the current page).  
**Maximum depth:** 7 items (indices 0–6).  
**Example:**
```yaml
breadcrumbs:
  - label: "Services"
    url: "services"
  - label: "Criminal Records"
    url: "criminal-records"
  - label: "Criminal Record Checks"
```
**Note:** The root breadcrumb (*RCMP.ca* or *GRC.ca*) is always added automatically — you do not need to include it.

---

#### `custom_css`
**What it does:** Overrides the default stylesheet (`/assets/css/rcmp.css`) with a custom CSS file for this specific page. Useful for pages that need unique styling.  
**Example:**
```yaml
custom_css: /assets/css/special-page.css
```

---

#### `is_homepage`
**What it does:** When set to `true`, suppresses the breadcrumb navigation entirely. Use this only on the site's root home page.  
**Example:**
```yaml
is_homepage: true
```

---

---

<a name="french"></a>

## Guide en français

Ces éléments s'appellent des **balises de front matter** (aussi appelées **variables de page**). Elles sont inscrites tout en haut de chaque fichier de contenu Markdown (`.md`), entre deux paires de triples tirets (`---`). Jekyll les lit et les rend disponibles dans les gabarits sous la forme `{{ page.NOM_DE_LA_BALISE }}`.

### Structure de base

```yaml
---
layout: default
title: Titre de ma page
description: Un court résumé de cette page.
lang: fr
---
```

---

### Toutes les balises disponibles

#### `layout`
**Rôle :** Indique à Jekyll quel gabarit HTML utiliser pour encadrer le contenu de la page.  
**Valeurs acceptées :**
- `default` — page de contenu standard avec un conteneur à largeur limitée et un fil d'Ariane.
- `super_landing` — page d'accueil pleine largeur avec une bannière hero et du texte d'introduction à l'intérieur. Pas de fil d'Ariane. Utilisé pour les pages thématiques ou de campagne de haut niveau.

**Exemple :**
```yaml
layout: super_landing
```

---

#### `hero`
**Rôle :** Définit l'image d'arrière-plan de la bannière hero sur les pages `super_landing`. L'image est appliquée via `data-bgimg-srcset` à un point de rupture de 992 px. Utilisé uniquement avec `layout: super_landing`.  
**Valeur acceptée :** Un chemin ou une URL vers un fichier image.  
**Exemple :**
```yaml
hero: /assets/img/hero-armes-a-feu.jpg
```

---

#### `intro`
**Rôle :** Bloc de HTML ou de texte affiché dans la bannière hero, directement sous le titre `<h1>`, sur les pages `super_landing`. Généralement utilisé pour une courte phrase d'introduction ou un appel à l'action. Utilisé uniquement avec `layout: super_landing`.  
**Exemple :**
```yaml
intro: "<p>Explorez nos programmes, services et ressources.</p>"
```

---

#### `title`
**Rôle :** Définit le titre principal de la page. Il apparaît comme balise `<h1>` sur la page et dans l'onglet du navigateur (sous la forme *Titre - GRC.ca* ou *Title - RCMP.ca*).  
**Exemple :**
```yaml
title: Vérification de casier judiciaire
```

---

#### `description`
**Rôle :** Fournit un court résumé en texte simple de la page. Utilisé dans la balise `<meta name="description">` (pour les moteurs de recherche et les aperçus de partage social) ainsi que dans `dcterms.description`.  
**Exemple :**
```yaml
description: Apprenez comment demander une vérification de casier judiciaire au Canada.
```

---

#### `lang`
**Rôle :** Définit la langue de la page. Contrôle la version de l'en-tête, du pied de page, du fil d'Ariane et de toutes les étiquettes (boutons, liens, libellés de date, etc.) qui s'affichent.  
**Valeurs acceptées :** `en` pour l'anglais, `fr` pour le français.  
**Exemple :**
```yaml
lang: fr
```

---

#### `lang_url`
**Rôle :** URL de la page équivalente dans l'autre langue. Utilisé par le bouton de bascule de langue dans l'en-tête pour permettre aux utilisateurs de passer de l'anglais au français et vice-versa.  
**Exemple :**
```yaml
lang_url: /en/criminal-record-checks.html
```

---

#### `lead`
**Rôle :** Courte phrase d'introduction facultative qui s'affiche **au-dessus** du titre `<h1>` de la page, stylisée comme un paragraphe d'introduction (`<p class="wb-rd lead">`). Si cette balise est absente, seul le `<h1>` ordinaire est affiché — la balise `<hgroup>` n'est pas générée.  
**Exemple :**
```yaml
lead: Un service destiné aux particuliers et aux organisations.
```
**Rendu HTML :**
```html
<hgroup class="mrgn-tp-md">
  <p class="wb-rd lead mrgn-tp-0 mrgn-bttm-0">Un service destiné aux particuliers et aux organisations.</p>
  <h1 id="wb-cont" property="name">Vérification de casier judiciaire</h1>
</hgroup>
```

---

#### `date_modified`
**Rôle :** Date de la dernière mise à jour de cette page. Affichée en bas de page dans la section « Date de modification » et utilisée dans la balise de métadonnées `dcterms.modified`. Si elle est omise, Jekyll utilise la date de compilation du site.  
**Format :** `AAAA-MM-JJ`  
**Exemple :**
```yaml
date_modified: 2026-05-04
```

---

#### `issued`
**Rôle :** Date de publication initiale de la page. Utilisée dans la balise de métadonnées `dcterms.issued`. Si elle est omise, Jekyll utilise la date de compilation du site.  
**Format :** `AAAA-MM-JJ`  
**Exemple :**
```yaml
issued: 2026-01-15
```

---

#### `author`
**Rôle :** Auteur du contenu de la page. Utilisé dans la balise `<meta name="author">`.  
**Exemple :**
```yaml
author: Équipe Web de la GRC
```

---

#### `creator`
**Rôle :** Créateur de la page. Utilisé dans la balise de métadonnées `dcterms.creator`. Il s'agit généralement de l'unité organisationnelle responsable du contenu.  
**Exemple :**
```yaml
creator: Gendarmerie royale du Canada
```

---

#### `subject`
**Rôle :** Mots-clés ou descripteurs thématiques de la page. Utilisé dans la balise de métadonnées `dcterms.subject`. Utile pour la découvrabilité et le catalogage.  
**Exemple :**
```yaml
subject: casiers judiciaires, vérifications des antécédents, certificats de police
```

---

#### `breadcrumbs`
**Rôle :** Définit le fil d'Ariane affiché sous l'en-tête. Chaque élément peut avoir un `label` (texte visible) et une `url` facultative (chemin relatif après l'URL de base de la langue). Si une `url` est fournie, l'élément devient un lien cliquable ; sinon, il s'affiche en texte brut (généralement utilisé pour la page courante).  
**Profondeur maximale :** 7 éléments (indices 0 à 6).  
**Exemple :**
```yaml
breadcrumbs:
  - label: "Services"
    url: "services"
  - label: "Casiers judiciaires"
    url: "casiers-judiciaires"
  - label: "Vérification de casier judiciaire"
```
**Remarque :** Le premier élément du fil d'Ariane (*GRC.ca* ou *RCMP.ca*) est toujours ajouté automatiquement — vous n'avez pas à l'inclure.

---

#### `custom_css`
**Rôle :** Remplace la feuille de style par défaut (`/assets/css/rcmp.css`) par un fichier CSS personnalisé pour cette page spécifique. Utile pour les pages nécessitant un style unique.  
**Exemple :**
```yaml
custom_css: /assets/css/page-speciale.css
```

---

#### `is_homepage`
**Rôle :** Lorsque défini à `true`, supprime entièrement le fil d'Ariane. À utiliser uniquement sur la page d'accueil racine du site.  
**Exemple :**
```yaml
is_homepage: true
```