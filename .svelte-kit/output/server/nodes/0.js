import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D1Q4Au8n.js","_app/immutable/chunks/CvswCkPh.js","_app/immutable/chunks/MUVTLG2n.js","_app/immutable/chunks/B7zrJ6I6.js"];
export const stylesheets = [];
export const fonts = [];
