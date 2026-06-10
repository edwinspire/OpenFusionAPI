
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_env } from '__sveltekit/env';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<title>OpenFusion API | Low-Code, AI-Friendly API Platform</title>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<meta\r\n\t\t\tname=\"description\"\r\n\t\t\tcontent=\"OpenFusion API is a production-ready, low-code API platform to build, govern, and deploy endpoints fast for humans and AI agents with MCP support.\"\r\n\t\t/>\r\n\t\t<meta\r\n\t\t\tname=\"keywords\"\r\n\t\t\tcontent=\"OpenFusion API, low-code API platform, MCP, AI agents, API gateway, SOAP to REST, SQL API, integration platform, universal-fetch\"\r\n\t\t/>\r\n\t\t<meta name=\"robots\" content=\"index, follow\" />\r\n\t\t<meta name=\"author\" content=\"OpenFusion API\" />\r\n\r\n\t\t<meta property=\"og:type\" content=\"website\" />\r\n\t\t<meta property=\"og:title\" content=\"OpenFusion API | Production-Ready APIs for Humans and AI Agents\" />\r\n\t\t<meta\r\n\t\t\tproperty=\"og:description\"\r\n\t\t\tcontent=\"Build and deploy API endpoints in minutes with reusable handlers, JSON Schema, environment isolation, and MCP-ready tooling.\"\r\n\t\t/>\r\n\t\t<meta property=\"og:site_name\" content=\"OpenFusion API\" />\r\n\r\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\r\n\t\t<meta name=\"twitter:title\" content=\"OpenFusion API | Low-Code API Platform\" />\r\n\t\t<meta\r\n\t\t\tname=\"twitter:description\"\r\n\t\t\tcontent=\"A production-tested platform to create integration APIs faster, including AI-agent workflows and MCP tooling.\"\r\n\t\t/>\r\n\r\n\t\t<script type=\"application/ld+json\">\r\n\t\t\t{\r\n\t\t\t\t\"@context\": \"https://schema.org\",\r\n\t\t\t\t\"@type\": \"SoftwareApplication\",\r\n\t\t\t\t\"name\": \"OpenFusion API\",\r\n\t\t\t\t\"applicationCategory\": \"DeveloperApplication\",\r\n\t\t\t\t\"operatingSystem\": \"Linux, Windows, Docker\",\r\n\t\t\t\t\"description\": \"Low-code and AI-friendly platform to create, manage, and deploy API endpoints with built-in handlers, schema validation, and MCP integration.\",\r\n\t\t\t\t\"url\": \"https://www.openfusionapi.com\",\r\n\t\t\t\t\"softwareVersion\": \"1\"\r\n\t\t\t}\r\n\t\t</script>\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "4rbx18"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_env, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
