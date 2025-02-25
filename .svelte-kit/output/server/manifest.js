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
		client: {start:"_app/immutable/entry/start.BkOzCRr-.js",app:"_app/immutable/entry/app.Cfzoy2Qh.js",imports:["_app/immutable/entry/start.BkOzCRr-.js","_app/immutable/chunks/CBsPOryi.js","_app/immutable/chunks/DjyvYX2W.js","_app/immutable/chunks/CT05arC_.js","_app/immutable/entry/app.Cfzoy2Qh.js","_app/immutable/chunks/DjyvYX2W.js","_app/immutable/chunks/C0Js0cnM.js","_app/immutable/chunks/XVIFFu7M.js","_app/immutable/chunks/CRvmTqUx.js","_app/immutable/chunks/CT05arC_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
