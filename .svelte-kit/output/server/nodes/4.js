import * as universal from '../entries/pages/test/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.js";
export const imports = ["_app/immutable/nodes/4.P85eGkPh.js","_app/immutable/chunks/XVIFFu7M.js","_app/immutable/chunks/DjyvYX2W.js","_app/immutable/chunks/DZjEhjqc.js"];
export const stylesheets = [];
export const fonts = [];
