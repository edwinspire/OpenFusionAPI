import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.AOoL3ROL.js","_app/immutable/chunks/D7ZAR3H6.js","_app/immutable/chunks/B2lSYu-o.js","_app/immutable/chunks/BeF1RtnS.js","_app/immutable/chunks/BqyRS0Wp.js"];
export const stylesheets = [];
export const fonts = [];
