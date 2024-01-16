<script>
	import { onMount } from 'svelte';
	import SelectFns from '../../widgets/Select.svelte';
	import { listFunctionStoreDev } from '../../utils';
	import { listFunctionStoreQA } from '../../utils';
	import { listFunctionStorePRD } from '../../utils';

	/**
	 * @type {any[]}
	 */
	let functions = [];

	/**
	 * @type {any[]}
	 */
	let functionsDev = [];

	/**
	 * @type {any[]}
	 */
	let functionsQa = [];

	/**
	 * @type {any[]}
	 */
	let functionsPrd = [];

	let selection = '';

	/**
	 * @type {any}
	 */
	export let environment;
	/**
	 * @type {any}
	 */
	export let code;
	/**
	 * @type {{ endpoint: any; }}
	 */
	export let row;

	export function getCode() {
		//fnEditorCode.apply();
		return selection;
	}

	export function reset() {
		selection = code;
	}

	listFunctionStoreDev.subscribe((value) => {
		// @ts-ignore
		functionsDev = value;
	});

	listFunctionStoreQA.subscribe((value) => {
		// @ts-ignore
		functionsQa = value;
	});

	listFunctionStorePRD.subscribe((value) => {
		// @ts-ignore
		functionsPrd = value;
	});

	function setCode() {
		selection = code;
	}

	$: code, setCode();

	onMount(() => {
		//		console.log(code);
		switch (environment) {
			case 'dev':
				functions = functionsDev;
				break;
			case 'qa':
				functions = functionsQa;
				break;
			case 'prd':
				functions = functionsPrd;
				break;
		}
	});
</script>

<div>
	<div>
		<h3 class="subtitle is-5">
			<div class="icon-text">
				<span class="icon has-text-info">
					<i class="fa-solid fa-link"></i>
				</span>
				<span>{row.endpoint}</span>
			</div>
		</h3>
	</div>

	<div class="content is-small">Use the selected function to return a response.</div>

	<div class="field is-horizontal">
		<div class="field-label is-normal">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label is-small">Function</label>
		</div>
		<div class="field-body">
			<div class="field is-narrow">
				<SelectFns bind:options={functions} bind:option={selection} />
			</div>
		</div>
	</div>
</div>
