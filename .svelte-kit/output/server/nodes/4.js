

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/openfusionapi/main/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.kAvl9GiW.js","_app/immutable/chunks/scheduler.UwzdDBGz.js","_app/immutable/chunks/index.CANFt7zj.js"];
export const stylesheets = [];
export const fonts = [];
