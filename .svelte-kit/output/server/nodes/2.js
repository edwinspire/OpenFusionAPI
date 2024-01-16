

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.WbqMzGL5.js","_app/immutable/chunks/scheduler.Ly_6oTbo.js","_app/immutable/chunks/index.xPy3Tc2Z.js","_app/immutable/chunks/paths.GRaQ88R9.js"];
export const stylesheets = [];
export const fonts = [];
