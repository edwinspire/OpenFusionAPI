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
		client: {start:"_app/immutable/entry/start.nHTa-L8r.js",app:"_app/immutable/entry/app.RXIIojpI.js",imports:["_app/immutable/entry/start.nHTa-L8r.js","_app/immutable/chunks/CKsRkVAu.js","_app/immutable/chunks/MUVTLG2n.js","_app/immutable/chunks/DzwSP_ww.js","_app/immutable/entry/app.RXIIojpI.js","_app/immutable/chunks/MUVTLG2n.js","_app/immutable/chunks/CEsmn3Ip.js","_app/immutable/chunks/CvswCkPh.js","_app/immutable/chunks/NnkxpKGZ.js","_app/immutable/chunks/DzwSP_ww.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
