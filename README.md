# Baileys Mbuilder

> **By Nixel** | Published by FongsiDev

Advanced WhatsApp Interactive Message Builder built for creating buttons, carousels, native flows, and AI rich response payloads using Baileys with fluent chaining, flexible payload customization, and scalable architecture for modern bot development.

---

## ✨ Features

- **Button (v1)** — Single-row button messages with up to 3 buttons
- **ButtonV2 (v2)** — Multi-row button messages with configurable layout
- **Carousel** — Rich horizontal card carousel with images, text, and buttons
- **AIRich** — AI-powered rich response with hyperlinks, LaTeX, citations, code blocks, tables
- **Auto-Update** — Built-in auto-update mechanism from official repo
- **Hot Reload** — Proxy-based default export always points to latest module version

---

## 📦 Installation

```bash
npm install baileys-mbuilder
```

> `postinstall` automatically downloads the latest `MessageBuilder.js` from the official repo.

### Dependencies

| Package   | Type                                     |
| --------- | ---------------------------------------- |
| `baileys` | peer (wajib sudah terinstall di project) |
| `sharp`   | langsung terinstall otomatis             |

---

## 🚀 Quick Start

```js
// Default import (recommended — supports hot-reload / auto-update)
import MB from "baileys-mbuilder";

// ── Simple Button ────────────────────────
const msg = new MB.Button()
  .text("Hello! Click below.")
  .button("Click Me", "click_1")
  .button("Cancel", "cancel_1")
  .footer("Footer here")
  .build();

// ── Multi-row Button ─────────────────────
const msg2 = new MB.ButtonV2()
  .text("Choose:")
  .row((r) => r.button("A", "a").button("B", "b"))
  .row((r) => r.button("C", "c"))
  .build();

// ── Carousel ─────────────────────────────
const msg3 = new MB.Carousel()
  .card((c) =>
    c
      .image("https://example.com/img.jpg")
      .title("Card Title")
      .text("Description")
      .button("Detail", "detail_1"),
  )
  .build();

// ── AI Rich Response ─────────────────────
const msg4 = new MB.AIRich()
  .text("Visit [Google](https://google.com) for details")
  .build();
```

---

## 🔄 Auto-Update System

Package ini punya sistem auto-update bawaan yang selalu menjaga versi terbaru dari MessageBuilder.

### Manual Update

```js
import MB from "baileys-mbuilder";

await MB.update();
console.log("Updated to version:", MB.VERSION);
```

### Enable Auto-Update (periodic check)

```js
import MB from "baileys-mbuilder";

// Cek update setiap 5 menit, dengan callback
MB.enableAutoUpdate(300000, (status) => {
  if (status === "updated") {
    console.log("Ada versi baru!");
  }
});

// Nonaktifkan
MB.disableAutoUpdate();
```

### Cara Kerja

1. Setiap interval, fetch dari repo untuk melihat perubahan
2. Bandingkan hash sha dengan file lokal dengan repo commit
3. Jika berbeda, download ulang & reload module via `import()`
4. Default export (Proxy) otomatis mengarah ke module terbaru

> **Catatan:** Named imports (`import MB from ...`) bersifat **static** — tidak akan berubah setelah auto-update, kecuali di panggil lagi
> Gunakan **default import** (`import MB from ...`) untuk selalu mendapatkan class/fungsi terbaru.

---

## 📚 API Documentation

### `Button` — Simple Button Builder

```js
new MB.Button();
```

| Method               | Description           |
| -------------------- | --------------------- |
| `.text(t)`           | Body text             |
| `.button(label, id)` | Tambah button (max 3) |
| `.footer(t)`         | Footer text           |
| `.header(t)`         | Header text           |
| `.viewOnce()`        | View-once mode        |
| `.build()`           | Generate payload      |

### `ButtonV2` — Multi-row Button Builder

```js
new MB.ButtonV2();
```

| Method           | Description                             |
| ---------------- | --------------------------------------- |
| `.text(t)`       | Body text                               |
| `.row(callback)` | Tambah row (callback punya `.button()`) |
| `.footer(t)`     | Footer text                             |
| `.header(t)`     | Header text                             |
| `.viewOnce()`    | View-once mode                          |
| `.build()`       | Generate payload                        |

### `Carousel` — Rich Card Carousel

```js
new MB.Carousel();
```

| Method            | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `.card(callback)` | Tambah card (callback punya `.image()`, `.title()`, `.text()`, `.button()`) |
| `.build()`        | Generate payload                                                            |

### `AIRich` — AI Rich Response

```js
new MB.AIRich();
```

| Method             | Description                                    |
| ------------------ | ---------------------------------------------- |
| `.text(t)`         | Set text dengan inline syntax                  |
| `.extract(bool)`   | Aktifkan/nonaktifkan ekstraksi (default: true) |
| `.hyperlink(bool)` | Aktifkan hyperlink `[text](url)`               |
| `.citation(bool)`  | Aktifkan auto citation                         |
| `.latex(bool)`     | Aktifkan LaTeX `[text\|...](url)`              |
| `.build()`         | Generate payload                               |

---

## 🔧 API Functions

| Function                              | Description                    |
| ------------------------------------- | ------------------------------ |
| `MB.update(callback?)`                | Force download & reload module |
| `MB.enableAutoUpdate(ms?, onUpdate?)` | Aktifkan periodic auto-update  |
| `MB.disableAutoUpdate()`              | Nonaktifkan auto-update        |

---

## 📄 License

MIT © FongsiDev

**Note:** The underlying MBuilder library (downloaded from repo) is Copyright © 2026 Nixel(Dev) & FgsiDev(Contributor)

---

## 👤 Author

- **Nixel** — Original author
- **FongsiDev** — npm package publisher

## 📞 Contact Support

- WhatsApp: [WhatsApp Number](https://wa.me/6282139672290)
- Channel: [WhatsApp Channel](https://whatsapp.com/channel/0029VbCV1ck8fewpdNb2TY2k)
