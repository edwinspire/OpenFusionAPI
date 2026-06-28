
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

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
		error
	},
	version_hash: "c1fnsr"
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

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
