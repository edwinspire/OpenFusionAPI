import * as universal from '../entries/pages/test/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.js";
export const imports = ["_app/immutable/nodes/4.Dp-9FZ9e.js","_app/immutable/chunks/scheduler.CMydny4p.js","_app/immutable/chunks/index.DDvhOMj1.js"];
export const stylesheets = [];
export const fonts = [];
