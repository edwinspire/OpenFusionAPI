import * as universal from '../entries/pages/test/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.js";
export const imports = ["_app/immutable/nodes/4.BXjPUAmK.js","_app/immutable/chunks/DTm97VWh.js","_app/immutable/chunks/ui3iS3H_.js","_app/immutable/chunks/cW-HwO0N.js"];
export const stylesheets = [];
export const fonts = [];
