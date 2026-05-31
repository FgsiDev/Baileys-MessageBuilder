import { createRequire } from "module";
const require = createRequire(import.meta.url);
const _mod = require("./index.js");

export const update = _mod.update;
export const enableAutoUpdate = _mod.enableAutoUpdate;
export const disableAutoUpdate = _mod.disableAutoUpdate;

export default _mod;
