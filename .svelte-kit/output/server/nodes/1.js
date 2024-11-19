

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C6Ufv0A8.js","_app/immutable/chunks/scheduler.AJpt-JiR.js","_app/immutable/chunks/index.B3bUjj0I.js","_app/immutable/chunks/entry.BWMf5uro.js"];
export const stylesheets = [];
export const fonts = [];
