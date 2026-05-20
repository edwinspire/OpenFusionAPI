import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CIvBIxmc.js","_app/immutable/chunks/DOEngSfd.js","_app/immutable/chunks/ePMCR8rz.js","_app/immutable/chunks/Cx4HTGD3.js","_app/immutable/chunks/CVIsI3BM.js"];
export const stylesheets = [];
export const fonts = [];
