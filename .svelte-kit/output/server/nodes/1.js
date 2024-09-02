

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BIWyxTXm.js","_app/immutable/chunks/scheduler.C-wHf1eG.js","_app/immutable/chunks/index.CvKDy3Dh.js","_app/immutable/chunks/entry.CwYybQHj.js"];
export const stylesheets = [];
export const fonts = [];
