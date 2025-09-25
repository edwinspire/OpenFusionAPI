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
		client: {start:"_app/immutable/entry/start.DUwgedvP.js",app:"_app/immutable/entry/app.BP_mVnrq.js",imports:["_app/immutable/entry/start.DUwgedvP.js","_app/immutable/chunks/DVLLDUTe.js","_app/immutable/chunks/4Urf6zDG.js","_app/immutable/chunks/DCzOQYYH.js","_app/immutable/entry/app.BP_mVnrq.js","_app/immutable/chunks/DCzOQYYH.js","_app/immutable/chunks/4Urf6zDG.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Bsh-lCe-.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
