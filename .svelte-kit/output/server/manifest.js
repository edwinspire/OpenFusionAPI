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
		client: {start:"_app/immutable/entry/start.CTPIHdTJ.js",app:"_app/immutable/entry/app.LfD6Bl4g.js",imports:["_app/immutable/entry/start.CTPIHdTJ.js","_app/immutable/chunks/Hg2N08JW.js","_app/immutable/chunks/DEPZzkVW.js","_app/immutable/chunks/CoybkcQi.js","_app/immutable/chunks/pqA6rLzh.js","_app/immutable/entry/app.LfD6Bl4g.js","_app/immutable/chunks/CoybkcQi.js","_app/immutable/chunks/DEPZzkVW.js","_app/immutable/chunks/pqA6rLzh.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/D_q_JPzT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
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
