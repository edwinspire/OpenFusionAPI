<script>
	 "use strict";
	import SelectAccess from '../widgets/Select.svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let list = [{value: 'Public', id: 0}, {value: 'Basic', id: 1}, {value: 'Bearer', id: 2}, {value: 'Basic & Bearer', id: 3}];

	/**
	 * @type {any}
	 */
	export let value;
	export let row = {};
	export let props = {};

	
	onMount(() => {
	//	setCSS(value);
	});
</script>
<td>

<SelectAccess
bind:options={list}
bind:option={value}
on:select={(e) => {
	console.log('Cambia', e, value);
}}
/>

</td>