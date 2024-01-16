<script>
	'use strict';
	import { BasicSelect } from '@edwinspire/svelte-components';
	import { listHandlerStore, css_handlers } from '../../../utils.js';
	import { onMount } from 'svelte';
	import Code from './code.svelte';

	/**
	 * @type {any[]}
	 */
	let handlers = [];

	/**
	 * @type {any}
	 */
	export let value;
	export let row = {};
	//let methodSelected = '';
	let css_h = ' is-small ';

	// @ts-ignore
	listHandlerStore.subscribe((/** @type {any[]} */ value) => {
		//console.log('listMethodStore ->>>>', value);
		// @ts-ignore
		handlers = value;
	});

	/**
	 * @param {string } value_handler
	 */
	function setCSS(value_handler) {
		css_h =
			// @ts-ignore
			value_handler && css_handlers[value_handler] && css_handlers[value_handler].css
				? // @ts-ignore
					' is-small ' + css_handlers[value_handler].css
				: ' is-small ';
	}

	onMount(() => {
		setCSS(value);
	});
</script>

<div class="field has-addons">
	<div class="control">
		<BasicSelect
			bind:options={handlers}
			bind:option={value}
			bind:css_class={css_h}
			on:select={(/** @type {{ detail: { value: string; }; }} */ e) => {
				setCSS(e.detail.value);
				console.log('Row', row);
			}}
		/>
	</div>

	<div class="control">
		<Code bind:value={row.code} bind:row></Code>
	</div>
</div>
