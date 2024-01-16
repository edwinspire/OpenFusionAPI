// @ts-ignore
import uFetch from '@edwinspire/universal-fetch';
import { writable } from 'svelte/store';
import { PUBLIC_ENVIRONMENT, PUBLIC_URL_DEVELOPMENT_API } from "$env/static/public";

export const url_paths = {
	getfunctions: PUBLIC_URL_DEVELOPMENT_API+'/api/system/functions/prd',
	getHandler: PUBLIC_URL_DEVELOPMENT_API+'/api/system/system/handler/0.01/prd',
	Methods: PUBLIC_URL_DEVELOPMENT_API+'/api/system/system/method/0.01/prd',
	listEnv: PUBLIC_URL_DEVELOPMENT_API+'/api/system/system/environment/0.01/prd',
	listApps: PUBLIC_URL_DEVELOPMENT_API+'/api/system/api/apps/0.01/prd',
	getApp: PUBLIC_URL_DEVELOPMENT_API+'/api/system/api/app/0.01/prd',
	saveApp: PUBLIC_URL_DEVELOPMENT_API+'/api/system/api/app/0.01/prd',
	saveMethod: PUBLIC_URL_DEVELOPMENT_API+'/api/system/system/method/0.01/prd',
	login: PUBLIC_URL_DEVELOPMENT_API+"/api/system/system/login/0.01/prd"
};

//const path_functions = '/system/main/functions';

//export const tokenStore = writable('');
export const userStore = writable({});
export const listMethodStore = writable({});
export const listHandlerStore = writable({});
export const listFunctionStoreDev = writable({});
export const listFunctionStoreQA = writable({});
export const listFunctionStorePRD = writable({});
export const listAppVars = writable({});

export const formatJsonForHtmlCode = (/** @type {any} */ json) => {
	return JSON.stringify(json, null, 2).replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;');
};

export const getListFunction = async (
	/** @type {string} */ token,
	/** @type {string} */ appName
) => {
	// @ts-ignore
	let f = new uFetch();
	f.setBearerAuthorization(token);
	try {
		let fr = await f.get(url_paths.getfunctions, { appName: appName, environment: 'dev' });
		let list = await fr.json();

		if (list && Array.isArray(list)) {
			let data = list.map((fn) => {
				return { id: fn, value: fn };
			});
			listFunctionStoreDev.set(data);
		}
	} catch (error) {
		console.error(error);
	}
	////////////////////////////////////
	try {
		let fr = await f.get(url_paths.getfunctions, { appName: appName, environment: 'qa' });
		let list = await fr.json();

		if (list && Array.isArray(list)) {
			let data = list.map((fn) => {
				return { id: fn, value: fn };
			});
			listFunctionStoreQA.set(data);
		}
	} catch (error) {
		console.error(error);
	}
	////////////////////////////////////
	try {
		let fr = await f.get(url_paths.getfunctions, { appName: appName, environment: 'prd' });
		let list = await fr.json();

		if (list && Array.isArray(list)) {
			let data = list.map((fn) => {
				return { id: fn, value: fn };
			});
			listFunctionStorePRD.set(data);
		}
	} catch (error) {
		console.error(error);
	}
};

export const getListHandler = async (/** @type {string} */ token) => {
	let f = new uFetch();
	f.setBearerAuthorization(token);
	try {
		let fr = await f.get(url_paths.getHandler);
		let list = await fr.json();

		if (list && Array.isArray(list)) {
			let data = list.map((m) => {
				return {
					id: m.handler,
					value: m.label,
					enabled: m.enabled,
					description: m.description
				};
			});
			listHandlerStore.set(data);
		}
	} catch (error) {
		console.error(error);
	}
};

export const getListMethods = async (/** @type {string} */ token) => {
	let f = new uFetch();
	f.setBearerAuthorization(token);
	try {
		let fr = await f.get(url_paths.Methods);
		let list = await fr.json();

		if (list && Array.isArray(list)) {
			let data = list.map((m) => {
				return {
					id: m.method,
					value: m.label,
					enabled: m.enabled,
					description: ''
				};
			});
			listMethodStore.set(data);
		}
	} catch (error) {
		console.error(error);
	}
};

/*
export const saveMethod = async ( token,   method) => {
	let f = new uFetch();
	f.setBearerAuthorization(token);
	try {
		let fr = await f.post('/api/system/system/method/0.01/prd', { method });
		let result = await fr.json();

		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
		return { error }
	}
};
*/


export const css_handlers = {
	FETCH: { css: ' is-primary  ', label: ' Fetch ', icon: ' fa-solid fa-server ' },
	JS: { css: ' is-danger ', label: ' Javascript ', icon: ' fa-brands fa-square-js ' },
	SOAP: { css: ' is-warning ', label: ' SOAP ', icon: ' fa-solid fa-soap ' },
	SQL: { css: ' is-link ', label: ' SQL ', icon: 'fa-solid fa-database ' },
	FUNCTION: { css: ' is-dark  ', label: ' Function ', icon: ' fa-brands fa-node-js ' }
};

/**
 * @param {string} string_url
 */
export function validateURL(string_url) {
	const patron = /^\/[a-zA-Z0-9\-._~%]+(\/[a-zA-Z0-9\-._~%]+)*\/?$/;
	// ^ Inicio de la cadena
	// \/ Barra inicial
	// [a-zA-Z0-9\-._~%]+ Uno o más caracteres permitidos en la ruta
	// (\/[a-zA-Z0-9\-._~%]+)* Cero o más grupos adicionales de barra seguido de caracteres permitidos
	// \/? Barra opcional al final
	// $ Fin de la cadena

	if (patron.test(string_url)) {
		return true;
	} else {
		return false;
	}
}