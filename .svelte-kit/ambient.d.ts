
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const PORT: string;
	export const BUILD_DB: string;
	export const DATABASE_URI_API: string;
	export const JWT_KEY: string;
	export const EXPOSE_DEV_API: string;
	export const EXPOSE_QA_API: string;
	export const EXPOSE_PROD_API: string;
	export const PATH_APP_FUNCTIONS: string;
	export const EXPRESSJS_SERVER_TIMEOUT: string;
	export const MAX_FILE_SIZE_UPLOAD: string;
	export const PROCESSOR_LEVEL: string;
	export const BUNDLED_DEBUGPY_PATH: string;
	export const npm_config_global_prefix: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const ACLOCAL_PATH: string;
	export const HOME: string;
	export const npm_execpath: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const npm_config_node_gyp: string;
	export const npm_config_init_module: string;
	export const NODE_ENV: string;
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const ChocolateyInstall: string;
	export const COLOR: string;
	export const EDITOR: string;
	export const npm_config_local_prefix: string;
	export const CommonProgramW6432: string;
	export const COLORTERM: string;
	export const MSYSTEM_CARCH: string;
	export const LOGONSERVER: string;
	export const COMMONPROGRAMFILES: string;
	export const GIT_ASKPASS: string;
	export const npm_config_userconfig: string;
	export const PROMPT: string;
	export const COPILOT_DEBUG_NONCE: string;
	export const COMPUTERNAME: string;
	export const COMSPEC: string;
	export const npm_config_globalconfig: string;
	export const CONFIG_SITE: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const DriverData: string;
	export const MSYSTEM_CHOST: string;
	export const ESET_OPTIONS: string;
	export const EXEPATH: string;
	export const npm_config_noproxy: string;
	export const NPM_CLI_JS: string;
	export const NPM_PREFIX_JS: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const npm_package_version: string;
	export const MINGW_PREFIX: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const npm_config_npm_version: string;
	export const HOSTNAME: string;
	export const npm_lifecycle_event: string;
	export const INIT_CWD: string;
	export const INFOPATH: string;
	export const JAVA_HOME: string;
	export const LOCALAPPDATA: string;
	export const WINDIR: string;
	export const QIP19164: string;
	export const npm_package_json: string;
	export const MANPATH: string;
	export const MINGW_CHOST: string;
	export const MINGW_PACKAGE_PREFIX: string;
	export const npm_config_user_agent: string;
	export const MSYSTEM: string;
	export const MSYSTEM_PREFIX: string;
	export const NODE: string;
	export const NODE_EXE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const NPM_PREFIX_NPM_CLI_JS: string;
	export const npm_config_prefix: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_name: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OLLAMA_HOST: string;
	export const OLLAMA_MODELS: string;
	export const OneDrive: string;
	export const OneDriveCommercial: string;
	export const ORIGINAL_PATH: string;
	export const ORIGINAL_TEMP: string;
	export const ORIGINAL_TMP: string;
	export const OS: string;
	export const PATH: string;
	export const PATHEXT: string;
	export const SSH_ASKPASS: string;
	export const PKG_CONFIG_PATH: string;
	export const PLINK_PROTOCOL: string;
	export const __COMPAT_LAYER: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const PROGRAMFILES: string;
	export const TERM: string;
	export const ProgramW6432: string;
	export const PYDEVD_DISABLE_FILE_VALIDATION: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const PWD: string;
	export const PYTHONSTARTUP: string;
	export const PYTHON_BASIC_REPL: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SYSTEMDRIVE: string;
	export const SYSTEMROOT: string;
	export const TEMP: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMP: string;
	export const TMPDIR: string;
	export const USERDNSDOMAIN: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VBOX_MSI_INSTALL_PATH: string;
	export const VSCODE_DEBUGPY_ADAPTER_ENDPOINTS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const _: string;
	export const SVELTEKIT_FORK: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	export const PUBLIC_API_SERVER_HOST: string;
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		PORT: string;
		BUILD_DB: string;
		DATABASE_URI_API: string;
		JWT_KEY: string;
		EXPOSE_DEV_API: string;
		EXPOSE_QA_API: string;
		EXPOSE_PROD_API: string;
		PATH_APP_FUNCTIONS: string;
		EXPRESSJS_SERVER_TIMEOUT: string;
		MAX_FILE_SIZE_UPLOAD: string;
		PROCESSOR_LEVEL: string;
		BUNDLED_DEBUGPY_PATH: string;
		npm_config_global_prefix: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		ACLOCAL_PATH: string;
		HOME: string;
		npm_execpath: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		npm_config_node_gyp: string;
		npm_config_init_module: string;
		NODE_ENV: string;
		ALLUSERSPROFILE: string;
		APPDATA: string;
		ChocolateyInstall: string;
		COLOR: string;
		EDITOR: string;
		npm_config_local_prefix: string;
		CommonProgramW6432: string;
		COLORTERM: string;
		MSYSTEM_CARCH: string;
		LOGONSERVER: string;
		COMMONPROGRAMFILES: string;
		GIT_ASKPASS: string;
		npm_config_userconfig: string;
		PROMPT: string;
		COPILOT_DEBUG_NONCE: string;
		COMPUTERNAME: string;
		COMSPEC: string;
		npm_config_globalconfig: string;
		CONFIG_SITE: string;
		DISPLAY: string;
		LANG: string;
		DriverData: string;
		MSYSTEM_CHOST: string;
		ESET_OPTIONS: string;
		EXEPATH: string;
		npm_config_noproxy: string;
		NPM_CLI_JS: string;
		NPM_PREFIX_JS: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		npm_package_version: string;
		MINGW_PREFIX: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		npm_config_npm_version: string;
		HOSTNAME: string;
		npm_lifecycle_event: string;
		INIT_CWD: string;
		INFOPATH: string;
		JAVA_HOME: string;
		LOCALAPPDATA: string;
		WINDIR: string;
		QIP19164: string;
		npm_package_json: string;
		MANPATH: string;
		MINGW_CHOST: string;
		MINGW_PACKAGE_PREFIX: string;
		npm_config_user_agent: string;
		MSYSTEM: string;
		MSYSTEM_PREFIX: string;
		NODE: string;
		NODE_EXE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_command: string;
		npm_config_cache: string;
		NPM_PREFIX_NPM_CLI_JS: string;
		npm_config_prefix: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_name: string;
		NUMBER_OF_PROCESSORS: string;
		OLLAMA_HOST: string;
		OLLAMA_MODELS: string;
		OneDrive: string;
		OneDriveCommercial: string;
		ORIGINAL_PATH: string;
		ORIGINAL_TEMP: string;
		ORIGINAL_TMP: string;
		OS: string;
		PATH: string;
		PATHEXT: string;
		SSH_ASKPASS: string;
		PKG_CONFIG_PATH: string;
		PLINK_PROTOCOL: string;
		__COMPAT_LAYER: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		PROGRAMFILES: string;
		TERM: string;
		ProgramW6432: string;
		PYDEVD_DISABLE_FILE_VALIDATION: string;
		PSModulePath: string;
		PUBLIC: string;
		PWD: string;
		PYTHONSTARTUP: string;
		PYTHON_BASIC_REPL: string;
		SHELL: string;
		SHLVL: string;
		SYSTEMDRIVE: string;
		SYSTEMROOT: string;
		TEMP: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMP: string;
		TMPDIR: string;
		USERDNSDOMAIN: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VBOX_MSI_INSTALL_PATH: string;
		VSCODE_DEBUGPY_ADAPTER_ENDPOINTS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		_: string;
		SVELTEKIT_FORK: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_API_SERVER_HOST: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
