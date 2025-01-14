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
		client: {"start":"_app/immutable/entry/start.0mKqhWl6.js","app":"_app/immutable/entry/app.gg2hiDx9.js","imports":["_app/immutable/entry/start.0mKqhWl6.js","_app/immutable/chunks/entry.CGVI_ncg.js","_app/immutable/chunks/runtime.CfgX6eQG.js","_app/immutable/chunks/index.CX0t67y6.js","_app/immutable/chunks/index-client.BCAZJJkF.js","_app/immutable/entry/app.gg2hiDx9.js","_app/immutable/chunks/runtime.CfgX6eQG.js","_app/immutable/chunks/render.DWIGZODM.js","_app/immutable/chunks/disclose-version.DE3B7_8X.js","_app/immutable/chunks/props.CQel5Sq1.js","_app/immutable/chunks/index-client.BCAZJJkF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
