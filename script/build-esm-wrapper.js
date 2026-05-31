#!/usr/bin/env node
// scripts/build-esm-wrapper.js
// Generate lib/index.mjs sebagai ESM wrapper dari lib/index.js (CJS)

"use strict";

const fs = require("fs");
const path = require("path");

const LIB_DIR = path.join(__dirname, "../lib");
const CJS_FILE = path.join(LIB_DIR, "index.js");
const MJS_FILE = path.join(LIB_DIR, "index.mjs");

if (!fs.existsSync(CJS_FILE)) {
  console.error("[build-esm-wrapper] lib/index.js not found. Run tsc first.");
  process.exit(1);
}

// Baca exports dari CJS untuk generate named exports di wrapper
// Wrapper sederhana: import CJS lalu re-export semua
const wrapper = `// Auto-generated ESM wrapper — do not edit
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const _mod = require("./index.js");

export const update = _mod.update;
export const enableAutoUpdate = _mod.enableAutoUpdate;
export const disableAutoUpdate = _mod.disableAutoUpdate;

export default _mod;
`;

fs.mkdirSync(LIB_DIR, { recursive: true });
fs.writeFileSync(MJS_FILE, wrapper, "utf8");
console.log("[build-esm-wrapper] Generated lib/index.mjs");
