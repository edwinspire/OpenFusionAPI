export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","icono01.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Bp5wqmDX.js",app:"_app/immutable/entry/app.CIMKIqGT.js",imports:["_app/immutable/entry/start.Bp5wqmDX.js","_app/immutable/chunks/C2-irMma.js","_app/immutable/chunks/BV3BPg_4.js","_app/immutable/chunks/By5tLN6l.js","_app/immutable/entry/app.CIMKIqGT.js","_app/immutable/chunks/BV3BPg_4.js","_app/immutable/chunks/B_i_2Vqh.js","_app/immutable/chunks/CtSnc3u5.js","_app/immutable/chunks/BhObRiME.js","_app/immutable/chunks/By5tLN6l.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/openfusionapi/","/test/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
