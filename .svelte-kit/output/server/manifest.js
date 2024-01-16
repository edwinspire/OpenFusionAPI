export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "openfusionapi/_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","icono01.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.TQB9awvF.js","app":"_app/immutable/entry/app.JGbbyNQH.js","imports":["_app/immutable/entry/start.TQB9awvF.js","_app/immutable/chunks/entry.nGQ4ykUv.js","_app/immutable/chunks/scheduler.Ly_6oTbo.js","_app/immutable/chunks/index.FpCNGm9y.js","_app/immutable/chunks/paths.GRaQ88R9.js","_app/immutable/entry/app.JGbbyNQH.js","_app/immutable/chunks/scheduler.Ly_6oTbo.js","_app/immutable/chunks/index.xPy3Tc2Z.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
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
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
