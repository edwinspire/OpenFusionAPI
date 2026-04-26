import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CmbJvP0n.js","_app/immutable/chunks/B_7j9MNG.js","_app/immutable/chunks/B3nxRSZf.js","_app/immutable/chunks/Cp0Exfx0.js","_app/immutable/chunks/nCzLOiUw.js"];
export const stylesheets = [];
export const fonts = [];
