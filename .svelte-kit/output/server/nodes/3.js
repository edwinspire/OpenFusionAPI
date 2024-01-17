import * as universal from '../entries/pages/openfusionapi/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/openfusionapi/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/openfusionapi/+page.js";
export const imports = ["_app/immutable/nodes/3.FE1rc3Hq.js","_app/immutable/chunks/scheduler.UwzdDBGz.js","_app/immutable/chunks/index.CANFt7zj.js","_app/immutable/chunks/index.z52hrgir.js","_app/immutable/chunks/index.MKYabAOY.js"];
export const stylesheets = ["_app/immutable/assets/index.aRPGLL7T.css"];
export const fonts = ["_app/immutable/assets/fa-brands-400.vfWL-IA9.woff2","_app/immutable/assets/fa-brands-400.7WSgTNmj.ttf","_app/immutable/assets/fa-regular-400.DjrD39cY.woff2","_app/immutable/assets/fa-regular-400.TBaJECdl.ttf","_app/immutable/assets/fa-solid-900.wCNuHzbQ.woff2","_app/immutable/assets/fa-solid-900.zNLXiXYJ.ttf","_app/immutable/assets/fa-v4compatibility.Gkfbzimj.woff2","_app/immutable/assets/fa-v4compatibility.BdHZVUy0.ttf"];
