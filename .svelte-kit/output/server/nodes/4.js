import * as universal from '../entries/pages/test/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.js";
export const imports = ["_app/immutable/nodes/4.Cw9r_kRv.js","_app/immutable/chunks/disclose-version.DE3B7_8X.js","_app/immutable/chunks/runtime.CfgX6eQG.js","_app/immutable/chunks/legacy.CNaPTmXt.js"];
export const stylesheets = [];
export const fonts = [];
