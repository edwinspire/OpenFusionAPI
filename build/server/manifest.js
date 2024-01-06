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
		client: {"start":"_app/immutable/entry/start.SbhtEBeX.js","app":"_app/immutable/entry/app.QoISWg6d.js","imports":["_app/immutable/entry/start.SbhtEBeX.js","_app/immutable/chunks/scheduler.VPnpRSS7.js","_app/immutable/chunks/singletons.aImoTtMQ.js","_app/immutable/chunks/index.Fhrmk7yd.js","_app/immutable/entry/app.QoISWg6d.js","_app/immutable/chunks/scheduler.VPnpRSS7.js","_app/immutable/chunks/index.w2oo4tN0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Ru8_gcHW.js')),
			__memo(() => import('./chunks/1-ID0i9qcA.js')),
			__memo(() => import('./chunks/2-9ljWbuqA.js')),
			__memo(() => import('./chunks/3-_1sFHY-a.js'))
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
