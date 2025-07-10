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
		client: {start:"_app/immutable/entry/start.DFXx4P-C.js",app:"_app/immutable/entry/app.CArtaRXy.js",imports:["_app/immutable/entry/start.DFXx4P-C.js","_app/immutable/chunks/NqRUNRG6.js","_app/immutable/chunks/RmypHVIN.js","_app/immutable/chunks/CRgqGwYg.js","_app/immutable/chunks/uXX3DZMo.js","_app/immutable/entry/app.CArtaRXy.js","_app/immutable/chunks/CRgqGwYg.js","_app/immutable/chunks/RmypHVIN.js","_app/immutable/chunks/uXX3DZMo.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C59RdGt4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
