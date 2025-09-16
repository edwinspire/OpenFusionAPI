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
		client: {start:"_app/immutable/entry/start.Cjj_Illv.js",app:"_app/immutable/entry/app.BblW-0Mk.js",imports:["_app/immutable/entry/start.Cjj_Illv.js","_app/immutable/chunks/2m4AkJgc.js","_app/immutable/chunks/DOjlRSnp.js","_app/immutable/chunks/C5twS6wJ.js","_app/immutable/entry/app.BblW-0Mk.js","_app/immutable/chunks/C5twS6wJ.js","_app/immutable/chunks/DOjlRSnp.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BUceh_mN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
