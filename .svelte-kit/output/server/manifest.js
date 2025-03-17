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
		client: {start:"_app/immutable/entry/start.C8Mv9vgF.js",app:"_app/immutable/entry/app.e1NquoRq.js",imports:["_app/immutable/entry/start.C8Mv9vgF.js","_app/immutable/chunks/B7Mf_3E5.js","_app/immutable/chunks/PUEqDy-u.js","_app/immutable/chunks/Ckfe0PON.js","_app/immutable/entry/app.e1NquoRq.js","_app/immutable/chunks/PUEqDy-u.js","_app/immutable/chunks/D19LWpFC.js","_app/immutable/chunks/CoXDN_iP.js","_app/immutable/chunks/CCuX5JMj.js","_app/immutable/chunks/Ckfe0PON.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
