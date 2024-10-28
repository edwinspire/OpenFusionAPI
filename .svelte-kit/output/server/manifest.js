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
		client: {"start":"_app/immutable/entry/start.Dc7VT7Bl.js","app":"_app/immutable/entry/app.BmvWF8zk.js","imports":["_app/immutable/entry/start.Dc7VT7Bl.js","_app/immutable/chunks/entry.BHcgj6qE.js","_app/immutable/chunks/scheduler.CRfHRaee.js","_app/immutable/entry/app.BmvWF8zk.js","_app/immutable/chunks/scheduler.CRfHRaee.js","_app/immutable/chunks/index.D2DhM-K_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
