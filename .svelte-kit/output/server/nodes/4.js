import * as universal from '../entries/pages/test/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.js";
export const imports = ["_app/immutable/nodes/4.aDhscES-.js","_app/immutable/chunks/scheduler.T1Qci29S.js","_app/immutable/chunks/index.eN9X5dgL.js"];
export const stylesheets = [];
export const fonts = [];
