import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CIYSei02.js","_app/immutable/chunks/CZiLlwy6.js","_app/immutable/chunks/B4Rj5sUg.js","_app/immutable/chunks/CgtJ9uAw.js","_app/immutable/chunks/n3ReB10a.js"];
export const stylesheets = [];
export const fonts = [];
