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
		client: {start:"_app/immutable/entry/start.CHo0wpJr.js",app:"_app/immutable/entry/app.CyHCrDpl.js",imports:["_app/immutable/entry/start.CHo0wpJr.js","_app/immutable/chunks/GL5SXsf0.js","_app/immutable/chunks/B3nxRSZf.js","_app/immutable/chunks/DlOinecX.js","_app/immutable/entry/app.CyHCrDpl.js","_app/immutable/chunks/B3nxRSZf.js","_app/immutable/chunks/XLxa6Tkj.js","_app/immutable/chunks/B_7j9MNG.js","_app/immutable/chunks/DlOinecX.js","_app/immutable/chunks/CltXrmJD.js","_app/immutable/chunks/nCzLOiUw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
