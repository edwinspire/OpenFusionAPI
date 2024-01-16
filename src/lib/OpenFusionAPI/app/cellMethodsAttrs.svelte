<script>
	// @ts-nocheck

	import FetchCode from './handler/fetch.svelte';
	import JsCode from './handler/js.svelte';
	import SoapCode from './handler/soap.svelte';
	import SqlCode from './handler/sql.svelte';

	/**
	 * @type {any}
	 */
	export let value;
	export const row = {};
	export let props = {};

	const classMap = {
		GET: 'tag is-success',
		POST: 'tag is-info',
		DELETE: 'tag is-danger',
		PUT: 'tag is-warning',
		PATCH: 'tag is-link',
		HEADER: 'tag is-primary'
	};
</script>

<div class="table-container">
	<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
		{#if value}
			<thead class="has-background-link">
				<tr>
					<th class=" has-text-white"> Method</th>
					<th
						><label class="checkbox has-text-white">
							<input type="checkbox" />
							Dev
						</label></th
					>
					<th
						><label class="checkbox has-text-white">
							<input type="checkbox" />
							QA
						</label></th
					>
					<th
						><label class="checkbox has-text-white">
							<input type="checkbox" />
							Producction
						</label></th
					>
				</tr>
			</thead>

			<tbody>
				{#each Object.keys(value) as method}
					<tr>
						<th>{method}</th>
						<td><input type="checkbox" bind:checked={value[method].dev} /></td>
						<td><input type="checkbox" bind:checked={value[method].qa} /></td>
						<td><input type="checkbox" bind:checked={value[method].prd} /></td>
					</tr>
				{/each}
			</tbody>
		{/if}
	</table>
</div>
