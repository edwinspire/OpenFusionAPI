import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.FfA-0NUS.js","_app/immutable/chunks/scheduler.yl3IrFfE.js","_app/immutable/chunks/each.VyktvrLf.js","_app/immutable/chunks/index.OqqfaFZJ.js"];
export const stylesheets = ["_app/immutable/assets/2.d3lc-b3z.css"];
export const fonts = [];
