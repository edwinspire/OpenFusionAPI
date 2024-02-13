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
		client: {"start":"_app/immutable/entry/start.CjYDUhBz.js","app":"_app/immutable/entry/app.G48IsHfV.js","imports":["_app/immutable/entry/start.CjYDUhBz.js","_app/immutable/chunks/entry.5IHvYwkv.js","_app/immutable/chunks/scheduler.WeVV6amk.js","_app/immutable/chunks/index.1dLOBi4E.js","_app/immutable/entry/app.G48IsHfV.js","_app/immutable/chunks/scheduler.WeVV6amk.js","_app/immutable/chunks/index.wV4ygrWq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
