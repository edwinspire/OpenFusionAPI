<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import EditorCode from './editorCode.svelte';
	import { Tab } from '@edwinspire/svelte-components';
	import Vars from '../vars.svelte';

	export let code;
	export let environment;
	let fnEditorCode;
	export let row;

	export function reset() {
		fnEditorCode.reset();
	}

	let tabList = [
		{ label: 'Code', isActive: true },
		{ label: 'Predefined Variables' },
		{ label: 'App Variables' }
	];

	export function getCode() {
		//    console.log(">> getCode en JS.SVELTE ", );
		return fnEditorCode.getCode();
	}

	onMount(() => {});
</script>

<Tab bind:tabs={tabList}>
	<div class={tabList[0].isActive ? '' : 'is-hidden'}>
		<EditorCode lang="js" bind:code bind:this={fnEditorCode}>
			<div slot="message">
				<h3 class="subtitle is-5">
					<div class="icon-text">
						<span class="icon has-text-info">
							<i class="fa-solid fa-link"></i>
						</span>
						<span>{row.endpoint}</span>
					</div>
				</h3>
			</div>
		</EditorCode>
	</div>

	<div class={tabList[1].isActive ? '' : 'is-hidden'}>
		<div class="content is-small">
			<h3>Predefined variables</h3>
			<ul>
				<li>
					<strong>$_RETURN_DATA_:</strong> Variable that returns the return of the function
				</li>
				<li>
					<strong>$_UFETCH_:</strong> Instance of the uFetch class. More information at
					<a href="https://github.com/edwinspire/universal-fetch">universal-fetch</a>
				</li>
				<li>
					<strong>$_REQUEST_:</strong> Represents the HTTP request received by the server. Contains information
					about the request made by the client, such as URL parameters, headers, body data, and more.
				</li>
				<li>
					<strong>$_SECUENTIAL_PROMISES_:</strong> PromiseSequence class. More information at
					<a href="https://github.com/edwinspire/sequential-promises">sequential-promises</a>.
				</li>
			</ul>
		</div>
	</div>

	<div class={tabList[2].isActive ? '' : 'is-hidden'}>
		<Vars bind:environment />
	</div>
</Tab>
