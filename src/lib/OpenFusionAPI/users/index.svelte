<script>
	// @ts-ignore
	import uFetch from '@edwinspire/universal-fetch';
	import {
		PredictiveInput,
		Table,
		ColumnTypes,
		DialogModal,
		Level
		// @ts-ignore
	} from '@edwinspire/svelte-components';
	import { onMount } from 'svelte';
	import { userStore } from '../utils.js';
	//import CellMethods from " ./cellMethods.svelte";
	//import MethodDialog from "./method.svelte";
	//import { AppToTable, TableToApp } from '../../db/utils.js';
	import CellAttrs from '../app/cellMethodsAttrs.svelte';

	let uf = new uFetch();
	let methodList = [];
	/**
	 * @type {any[]}
	 */
	let appDataTable = [];

	let columns = {
		//dev: { decorator: { component: CellMethods } },
		//qa: { decorator: { component: CellMethods } },
		//prd: { decorator: { component: CellMethods } },
		idapp: { hidden: true },
		rowkey: { hidden: true },
		app: { hidden: true },
		namespace: { hidden: true },
		name: { hidden: true },
		version: { hidden: true },
		description: { hidden: true },
		methods: { decorator: { component: CellAttrs } }
	};

	userStore.subscribe((value) => {
		console.log('tokenStore ->>>>', value);
		// @ts-ignore
		uf.setBearerAuthorization(value.token);
	});

	async function getApps() {
		// Lógica de autenticación aquí

		try {
			console.log('getListApps >>>>>> ', $userStore, uf);

			let apps_res = await uf.get('/system/main/role/1');
			let data = await apps_res.json();
			appDataTable = data.attrs.endpoints;
			console.log(data);
		} catch (error) {
			// @ts-ignore
			alert(error.message);
		}
	}

	onMount(() => {
		setTimeout(() => {
			getApps();
		}, 5000);
	});
</script>

<Table bind:RawDataTable={appDataTable} bind:columns>
	<span slot="l01"> Endpoints </span>
</Table>
