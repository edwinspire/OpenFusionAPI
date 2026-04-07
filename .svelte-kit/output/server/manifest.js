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
		client: {start:"_app/immutable/entry/start.BBm101Xb.js",app:"_app/immutable/entry/app.DS2VEVT-.js",imports:["_app/immutable/entry/start.BBm101Xb.js","_app/immutable/chunks/DGOdB56C.js","_app/immutable/chunks/B2lSYu-o.js","_app/immutable/chunks/DXAQfczl.js","_app/immutable/entry/app.DS2VEVT-.js","_app/immutable/chunks/B2lSYu-o.js","_app/immutable/chunks/Dd14JFq7.js","_app/immutable/chunks/D7ZAR3H6.js","_app/immutable/chunks/DXAQfczl.js","_app/immutable/chunks/D9JG7qii.js","_app/immutable/chunks/BqyRS0Wp.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
