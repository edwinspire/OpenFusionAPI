<script>
	// @ts-nocheck

	'use strict';
	import { onMount } from 'svelte';

	/**
	 * @type {any}
	 */
	export let value;
	export let row = {};
	export let props = {};

	onMount(() => {});
</script>

<td>
	<div class="icon-text">
		{#if row.environment == 'dev'}
			<span class="icon has-text-danger">
				<i class="fa-solid fa-bug"></i>
			</span>
		{:else if row.environment == 'qa'}
			<span class="icon has-text-link">
				<i class="fa-regular fa-rectangle-list"></i>
			</span>
		{:else if row.environment == 'prd'}
			<span class="icon has-text-success">
				<i class="fa-solid fa-gear fa-spin"></i>
			</span>
		{:else}
			<span class="icon">
				<i class="fa-solid fa-question"></i>
			</span>
		{/if}
		<span>{value}</span>
	</div>
</td>
