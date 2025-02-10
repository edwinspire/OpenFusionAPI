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
		client: {start:"_app/immutable/entry/start.B_qUd7W3.js",app:"_app/immutable/entry/app.BRw_kvic.js",imports:["_app/immutable/entry/start.B_qUd7W3.js","_app/immutable/chunks/DaKqvpP1.js","_app/immutable/chunks/CDZ4luzR.js","_app/immutable/chunks/RbJKWuIQ.js","_app/immutable/entry/app.BRw_kvic.js","_app/immutable/chunks/CDZ4luzR.js","_app/immutable/chunks/RjFDdsMz.js","_app/immutable/chunks/7JAFFi5O.js","_app/immutable/chunks/CJjEgAfb.js","_app/immutable/chunks/RbJKWuIQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
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
