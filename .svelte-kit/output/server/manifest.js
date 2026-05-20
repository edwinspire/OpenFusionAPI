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
		client: {start:"_app/immutable/entry/start.ssRMDdZr.js",app:"_app/immutable/entry/app.DET-F74r.js",imports:["_app/immutable/entry/start.ssRMDdZr.js","_app/immutable/chunks/B3VWyUvk.js","_app/immutable/chunks/ePMCR8rz.js","_app/immutable/chunks/B2n8QfRb.js","_app/immutable/entry/app.DET-F74r.js","_app/immutable/chunks/ePMCR8rz.js","_app/immutable/chunks/CZoUxpFQ.js","_app/immutable/chunks/DOEngSfd.js","_app/immutable/chunks/B2n8QfRb.js","_app/immutable/chunks/D1omp_sU.js","_app/immutable/chunks/CVIsI3BM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/openfusionapi/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
