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
		client: {start:"_app/immutable/entry/start.kwSL2Isa.js",app:"_app/immutable/entry/app.kwfOE0XU.js",imports:["_app/immutable/entry/start.kwSL2Isa.js","_app/immutable/chunks/DHmOq_1e.js","_app/immutable/chunks/BQnhpQ0d.js","_app/immutable/chunks/Brg_41Fn.js","_app/immutable/chunks/CNv6DyJr.js","_app/immutable/entry/app.kwfOE0XU.js","_app/immutable/chunks/Brg_41Fn.js","_app/immutable/chunks/BQnhpQ0d.js","_app/immutable/chunks/CNv6DyJr.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CXcGlUym.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
