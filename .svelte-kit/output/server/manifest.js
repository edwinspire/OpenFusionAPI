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
		client: {start:"_app/immutable/entry/start.BQ9lqZ-x.js",app:"_app/immutable/entry/app.DaLenbSi.js",imports:["_app/immutable/entry/start.BQ9lqZ-x.js","_app/immutable/chunks/DhZsIUAe.js","_app/immutable/chunks/ui3iS3H_.js","_app/immutable/chunks/ubnSgG2v.js","_app/immutable/entry/app.DaLenbSi.js","_app/immutable/chunks/ui3iS3H_.js","_app/immutable/chunks/UKy8bjY1.js","_app/immutable/chunks/DTm97VWh.js","_app/immutable/chunks/C3oDqW1A.js","_app/immutable/chunks/ubnSgG2v.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
