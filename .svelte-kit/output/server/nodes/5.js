import * as universal from '../entries/pages/test/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/test/+page.js";
export const imports = ["_app/immutable/nodes/5.lB15zZDD.js","_app/immutable/chunks/scheduler.UwzdDBGz.js","_app/immutable/chunks/index.CANFt7zj.js"];
export const stylesheets = [];
export const fonts = [];
