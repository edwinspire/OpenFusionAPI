<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import EditorCode from './editorCode.svelte';
	import { Tab } from '@edwinspire/svelte-components';
	import Vars from '../vars.svelte';

	/**
	 * @type {any}
	 */
	export let code;
	export let environment;
	export let row;

	export function reset() {
		fnEditorCode.reset();
	}

	/**
	 * @type {EditorCode}
	 */
	let fnEditorCode;

	let tabList = [{ label: 'Url', isActive: true }, { label: 'App Variables' }];

	export function getCode() {
		//fnEditorCode.apply();
		return fnEditorCode.getCode();
	}

	onMount(() => {
		console.log(code);
	});
</script>

<Tab bind:tabs={tabList}>
	<div class={tabList[0].isActive ? '' : 'is-hidden'}>
		<EditorCode lang="txt" bind:code bind:this={fnEditorCode}>
			<div slot="message">
				<h3 class="subtitle is-5">
					<div class="icon-text">
						<span class="icon has-text-info">
							<i class="fa-solid fa-link"></i>
						</span>
						<span>{row.endpoint}</span>
					</div>
				</h3>

				<div>Url to make the request. The operation is similar to a proxy</div>
			</div>
		</EditorCode>
	</div>

	<div class={tabList[1].isActive ? '' : 'is-hidden'}>
		<Vars bind:environment />
	</div>
</Tab>
