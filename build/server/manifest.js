const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.FNEmD88y.js","app":"_app/immutable/entry/app.MzFICV_-.js","imports":["_app/immutable/entry/start.FNEmD88y.js","_app/immutable/chunks/scheduler.VPnpRSS7.js","_app/immutable/chunks/singletons.Vp4AMWtK.js","_app/immutable/chunks/index.Fhrmk7yd.js","_app/immutable/entry/app.MzFICV_-.js","_app/immutable/chunks/scheduler.VPnpRSS7.js","_app/immutable/chunks/index.w2oo4tN0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Ru8_gcHW.js')),
			__memo(() => import('./chunks/1-_VllFffy.js')),
			__memo(() => import('./chunks/2-9ljWbuqA.js')),
			__memo(() => import('./chunks/3-6SgNKVGe.js'))
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

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
