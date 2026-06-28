import { r as root } from "./root.js";
import "./server.js";
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
const error = ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
const options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  server_error_boundaries: false,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<!doctype html>\r\n<html lang="en">\r\n	<head>\r\n		<title>OpenFusion API | Low-Code, AI-Friendly API Platform</title>\r\n		<meta charset="utf-8" />\r\n		<link rel="icon" href="' + assets + '/favicon.png" />\r\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n		<meta\r\n			name="description"\r\n			content="OpenFusion API is a production-ready, low-code API platform to build, govern, and deploy endpoints fast for humans and AI agents with MCP support."\r\n		/>\r\n		<meta\r\n			name="keywords"\r\n			content="OpenFusion API, low-code API platform, MCP, AI agents, API gateway, SOAP to REST, SQL API, integration platform, universal-fetch"\r\n		/>\r\n		<meta name="robots" content="index, follow" />\r\n		<meta name="author" content="OpenFusion API" />\r\n\r\n		<meta property="og:type" content="website" />\r\n		<meta property="og:title" content="OpenFusion API | Production-Ready APIs for Humans and AI Agents" />\r\n		<meta\r\n			property="og:description"\r\n			content="Build and deploy API endpoints in minutes with reusable handlers, JSON Schema, environment isolation, and MCP-ready tooling."\r\n		/>\r\n		<meta property="og:site_name" content="OpenFusion API" />\r\n\r\n		<meta name="twitter:card" content="summary_large_image" />\r\n		<meta name="twitter:title" content="OpenFusion API | Low-Code API Platform" />\r\n		<meta\r\n			name="twitter:description"\r\n			content="A production-tested platform to create integration APIs faster, including AI-agent workflows and MCP tooling."\r\n		/>\r\n\r\n		<script type="application/ld+json">\r\n			{\r\n				"@context": "https://schema.org",\r\n				"@type": "SoftwareApplication",\r\n				"name": "OpenFusion API",\r\n				"applicationCategory": "DeveloperApplication",\r\n				"operatingSystem": "Linux, Windows, Docker",\r\n				"description": "Low-code and AI-friendly platform to create, manage, and deploy API endpoints with built-in handlers, schema validation, and MCP integration.",\r\n				"url": "https://www.openfusionapi.com",\r\n				"softwareVersion": "1"\r\n			}\r\n		<\/script>\r\n		' + head + '\r\n	</head>\r\n	<body data-sveltekit-preload-data="hover">\r\n		<div style="display: contents">' + body + "</div>\r\n	</body>\r\n</html>\r\n",
    error
  },
  version_hash: "eyjtlk"
};
async function get_hooks() {
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
export {
  set_public_env as a,
  set_read_implementation as b,
  set_manifest as c,
  get_hooks as g,
  options as o,
  public_env as p,
  read_implementation as r,
  set_private_env as s
};
//# sourceMappingURL=internal.js.map
