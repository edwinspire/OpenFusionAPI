const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.f-TQ_pwk.js","app":"_app/immutable/entry/app.SiFX-zqP.js","imports":["_app/immutable/entry/start.f-TQ_pwk.js","_app/immutable/chunks/entry.EepAoiSL.js","_app/immutable/chunks/scheduler.nD9zd5-l.js","_app/immutable/chunks/index.-IQdiT1l.js","_app/immutable/entry/app.SiFX-zqP.js","_app/immutable/chunks/scheduler.nD9zd5-l.js","_app/immutable/chunks/index.oOrYjJdV.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-1ezG1Usw.js')),
			__memo(() => import('./chunks/1-HMvKFslA.js')),
			__memo(() => import('./chunks/2-gVhzAdz2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/openfusionapi","/test"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
