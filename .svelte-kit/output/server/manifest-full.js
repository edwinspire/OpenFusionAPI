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
		client: {start:"_app/immutable/entry/start.BG9Ze9dW.js",app:"_app/immutable/entry/app.CbVju1yM.js",imports:["_app/immutable/entry/start.BG9Ze9dW.js","_app/immutable/chunks/tN4c6_Cl.js","_app/immutable/chunks/hFSWOasN.js","_app/immutable/chunks/_qRdeSML.js","_app/immutable/entry/app.CbVju1yM.js","_app/immutable/chunks/hFSWOasN.js","_app/immutable/chunks/BdWqek70.js","_app/immutable/chunks/CYTIQcpr.js","_app/immutable/chunks/_qRdeSML.js","_app/immutable/chunks/Cw0ldSUd.js","_app/immutable/chunks/NqFZHUJD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/openfusionapi",
				pattern: /^\/openfusionapi\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
