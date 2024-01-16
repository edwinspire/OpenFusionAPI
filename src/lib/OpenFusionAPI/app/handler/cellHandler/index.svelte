<script>

import Handler from './handler.svelte';

	
	/**
	 * @type {any}
	 */
	export let value;
	export let row = {};
	export let props = {};
	    
</script>

<td>
	{#if true && row && row.method && row.method != 'WS' && row.method != 'MQTT'}
		<Handler bind:value bind:row></Handler>
	{:else}
		<span />
	{/if}
</td>
