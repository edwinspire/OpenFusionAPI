<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import EditorCode from './editorCode.svelte';
	import { Tab } from '@edwinspire/svelte-components';
	import Vars from '../vars.svelte';
	import CodeHTML from '../../widgets/codeHTML.svelte';

	/**
	 * @type {any}
	 */
	export let code;
	export let environment;

	export function reset() {
		fnEditorCode.reset();
	}

	let tabList = [
		{ label: 'Parameters', isActive: true },
		{ label: 'Information', isActive: false },
		{ label: 'App Variables' }
	];

	/**
	 * @type {EditorCode}
	 */
	let fnEditorCode;
	let jsonParams = {
		wsdl: 'https://www.dataaccess.com/webservicesserver/numberconversion.wso?WSDL',
		FunctionName: 'NumberToDollars',
		BasicAuthSecurity: {
			User: 'any',
			Password: 'any'
		},
		RequestArgs: {}
	};

	export let row;

	export function getCode() {
		//fnEditorCode.apply();
		return fnEditorCode.getCode();
	}

	onMount(() => {
		// console.log(code);
	});
</script>

<Tab bind:tabs={tabList}>
	<div class={tabList[0].isActive ? '' : 'is-hidden'}>
		<EditorCode lang="json" bind:code bind:this={fnEditorCode}>
			<div slot="message">
				<h3 class="subtitle is-5">
					<div class="icon-text">
						<span class="icon has-text-info">
							<i class="fa-solid fa-link"></i>
						</span>
						<span>{row.endpoint}</span>
					</div>
				</h3>
				<div>Service connection parameters.</div>
			</div>
		</EditorCode>
	</div>
	<div class={tabList[1].isActive ? '' : 'is-hidden'}>
		Enter the parameters in json format like the following example:
		<CodeHTML bind:jsonObject={jsonParams} />
		<div style="margin-top: 1em;">
			The variables with the following:
			<ul class="list_params">
				<li>
					<strong>wsdl:</strong> url where the wsdl is located.
				</li>

				<li>
					<strong>FunctionName:</strong> Function or method to call.
				</li>
				<li>
					<strong>BasicAuthSecurity:</strong> Only if required.
				</li>
				<li>
					<strong>RequestArgs:</strong> Better not define it. Internally, the variables that must be
					sent when consuming the endpoint are assigned.
				</li>
			</ul>
		</div>
	</div>

	<div class={tabList[2].isActive ? '' : 'is-hidden'}>
		<Vars bind:environment />
	</div>
</Tab>

<style>
	.list_params {
		margin-left: 2em;
		list-style: disc;
	}
</style>
