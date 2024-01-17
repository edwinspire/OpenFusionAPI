

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.s1GR5PMp.js","_app/immutable/chunks/scheduler.nD9zd5-l.js","_app/immutable/chunks/index.oOrYjJdV.js"];
export const stylesheets = [];
export const fonts = [];
