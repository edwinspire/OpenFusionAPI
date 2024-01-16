<script>
	 "use strict";
	import SelectMethods from '../widgets/Select.svelte';
	import { listMethodStore } from '../utils.js';
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let methods = [];

	/**
	 * @type {any}
	 */
	export let value;
	export let row = {};
	export let props = {};
	//let methodSelected = '';
	let css_class_methods = { GET: ' is-primary ', POST: ' is-link ', DELETE: ' is-danger ', PUT: ' is-info', WS: ' is-warning ' };
	let css_class_method = ' is-small  ';

	listMethodStore.subscribe((value) => {
		//console.log('listMethodStore ->>>>', value);
		// @ts-ignore
		methods = value;
	});

	/**
	 * @param {string} method
	 */
	function setCSS(method) {
		// @ts-ignore
		let css_selected = css_class_methods[method];
		if(css_selected){
			css_class_method = ' is-small ' + css_selected;
		}else{
			css_class_method = ' is-small has-background-warning-light';
		}		
		
//		console.log('>>>>>>>', row);
		//console.log(css_class_method);
	}

	onMount(() => {
		setCSS(value);
	});
</script>
<td>

<SelectMethods
bind:options={methods}
bind:option={value}
bind:css_class={css_class_method}
on:select={(e) => {
	setCSS(e.detail.value);
	console.log('Cambia', e, value);
}}
/>

</td>