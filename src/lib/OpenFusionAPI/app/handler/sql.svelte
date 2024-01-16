<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { Tab } from '@edwinspire/svelte-components';
	import Vars from '../vars.svelte';
	import EditorCode from './editorCode.svelte';
	import EditorCode2 from './editorCode.svelte';

	/**
	 * @type {any}
	 */
	export let code;
	export let environment;
	export let row;
	/**
	 * @type {EditorCode}
	 */
	let fnEditorCode;

	let tabList = [
		{ label: 'Query', isActive: true },
		{ label: 'Connection Parameters' },
		{ label: 'App Variables' }
	];

	export function reset() {
		fnEditorCode.reset();
	}

	/**
	 * @type {EditorCode}
	 */
	let fnEditorCode2;
	let params_code = '{}';
	let query_code = 'SELECT 1+1;';
	$: code, ParseCode();

	function ParseCode() {
		try {
			let params = JSON.parse(code || '{}');

			if (params && params.query) {
				query_code = params.query;
			}

			if (params && params.config) {
				params_code = JSON.stringify(params.config);
			}
		} catch (error) {
			params_code = '{}';
			query_code = 'SELECT 1;';
			console.error('Error', error);
		}
	}

	export function getCode() {
		//fnEditorCode.apply();
		let p = fnEditorCode.getCode();
		let query = fnEditorCode2.getCode();
		let conf = {};
		let outcode = {};

		try {
			conf = JSON.parse(p);
			//return JSON.stringify(c, null, 2);
		} catch (error) {
			console.error('No se pudo parsear getCode', error);
			conf = p;
			//return code;
		}

		try {
			outcode.config = conf;
			outcode.query = query;
			return JSON.stringify(outcode, null, 2);
		} catch (error) {
			console.log(error);
			return code;
		}
	}

	onMount(() => {
		console.log(code);
		ParseCode();
	});
</script>

<Tab bind:tabs={tabList}>
	<div class={tabList[0].isActive ? '' : 'is-hidden'}>
		<EditorCode2 lang="sql" bind:code={query_code} bind:this={fnEditorCode2}>
			<div slot="message">
				<h3 class="subtitle is-5">
					<div class="icon-text">
						<span class="icon has-text-info">
							<i class="fa-solid fa-link"></i>
						</span>
						<span>{row.endpoint}</span>
					</div>
				</h3>

				<div>
					<div class="content is-small">
						Query to be executed. The parameters must have a name like <span
							style="font-style: oblique">$nameparameter</span
						>
						which bind to the values ​​you send in the request.
						<div>
							For more information you can consult the <a
								href="https://sequelize.org/docs/v6/core-concepts/raw-queries/#bind-parameter"
								>sequelize</a
							> documentation.
						</div>
					</div>
				</div>
			</div></EditorCode2
		>
	</div>

	<div class={tabList[1].isActive ? '' : 'is-hidden'}>
		<EditorCode lang="json" bind:code={params_code} bind:this={fnEditorCode}>
			<div slot="message">
				<div class="content is-small">
					Configuration parameters used by sequelize, visit <a href="https://sequelize.org/"
						>https://sequelize.org/</a
					> for more information.
				</div>
			</div>
		</EditorCode>
	</div>

	<div class={tabList[2].isActive ? '' : 'is-hidden'}>
		<Vars bind:environment />
	</div>
</Tab>
