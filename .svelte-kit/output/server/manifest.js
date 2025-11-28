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
		client: {start:"_app/immutable/entry/start.Czqy4-Zh.js",app:"_app/immutable/entry/app.XB3v77aC.js",imports:["_app/immutable/entry/start.Czqy4-Zh.js","_app/immutable/chunks/CPmj_BIo.js","_app/immutable/chunks/B4Rj5sUg.js","_app/immutable/chunks/BAlscmhK.js","_app/immutable/entry/app.XB3v77aC.js","_app/immutable/chunks/B4Rj5sUg.js","_app/immutable/chunks/Dn8iUkoW.js","_app/immutable/chunks/CZiLlwy6.js","_app/immutable/chunks/BAlscmhK.js","_app/immutable/chunks/Cnr3hXjd.js","_app/immutable/chunks/n3ReB10a.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
