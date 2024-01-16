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
	<div class="field has-addons">
		<div class="control is-small">
			<input
				class="input is-small"
				type="number"
				placeholder="Cache time"
				bind:value
				step="1"
				min="0"
			/>
		</div>
		<div class="control">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="button is-small"> seg. </a>
		</div>
	</div>
</td>
