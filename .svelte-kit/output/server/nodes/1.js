

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B1DEis8A.js","_app/immutable/chunks/scheduler.AJpt-JiR.js","_app/immutable/chunks/index.B3bUjj0I.js","_app/immutable/chunks/entry.D2BBRCyN.js"];
export const stylesheets = [];
export const fonts = [];
