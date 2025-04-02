import * as universal from '../entries/pages/test/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.js";
export const imports = ["_app/immutable/nodes/4.B4lKIy-R.js","_app/immutable/chunks/CtSnc3u5.js","_app/immutable/chunks/BV3BPg_4.js","_app/immutable/chunks/XvywrR2y.js"];
export const stylesheets = [];
export const fonts = [];
