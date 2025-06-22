# 🚀 web-kit

A sleek collection of reusable JavaScript ⚙️ utilities and CSS 🎨 layouts — plug-and-play via CDN or local.

---

## 🌐 CDN Access

Files are hosted on jsDelivr CDN, accessible with this URL pattern:

\```
https://cdn.jsdelivr.net/gh/Philip-Walsh/web-kit@main/<file-path>
\```

Use the `<file-path>` matching the directory and filename, like `js/utils.js` or `layout/base.css`.

---

## ⚡ Quick Start

### Load JS

\```html
<script src="https://cdn.jsdelivr.net/gh/Philip-Walsh/web-kit@main/js/utils.js"></script>
\```

### Load CSS

\```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Philip-Walsh/web-kit@main/layout/base.css" />
\```

---

## 🛠️ Utility Script

We provide a small helper script to fetch and load assets dynamically if you prefer programmatic control:

\```js
async function loadAsset(path, type = 'js') {
  const url = `https://cdn.jsdelivr.net/gh/Philip-Walsh/web-kit@main/${path}`;
  if (type === 'js') {
    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
  } else if (type === 'css') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }
}
\```

Use it like:

\```js
loadAsset('js/utils.js');
loadAsset('layout/base.css', 'css');
\```

---

## 📁 Structure

\```
web-kit/
├── js/           # JavaScript utilities and components
├── layout/       # CSS layout and style assets
├── components/   # Coming soon
└── README.md
\```

---

## 🤝 Contribute

Issues and PRs welcome!
