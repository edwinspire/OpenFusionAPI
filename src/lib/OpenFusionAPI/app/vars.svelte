<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { listAppVars } from '../utils';
	import EditorCode from './handler/editorCode.svelte';
	import CodeHTML from '../widgets/codeHTML.svelte';

	// export let vars = {};
	export let editable = false;
	export let environment = '';
	let Datavars = {};
	let fnEditorCodes = {};
	let showNewVar = false;
	let newVar = '';

	listAppVars.subscribe((value) => {
		console.log('listAppVars ->>>>', value);
		// @ts-ignore
		Datavars = value || {};
		/*
		if (Datavars) {
			fnEditorCodes = Object.keys(Datavars[environment]).map((key) => {
				return { key: {} };
			});
		}
		*/
	});

	export function getCode() {
		//fnEditorCode.apply();
		//return fnEditorCode.getCode();
		let codes = {};
		Object.keys(fnEditorCodes).forEach((key) => {
			try {
				codes[key] = JSON.parse(fnEditorCodes[key].getCode());
			} catch (error) {
				console.warn(error, key, fnEditorCodes);
			}

			//return c;
		});
		return codes;
	}

	onMount(() => {});
</script>

<details>
	<summary><strong>App Vars - {environment}</strong></summary>

	<div>
		{#if Datavars && Datavars[environment]}
			<div class="field has-addons">
				<p class="control">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="button is-static is-small"> {environment} variables </a>
				</p>
				<p class="control">
					<button
						class="button is-small"
						on:click={() => {
							showNewVar = true;
							newVar = '';
						}}
					>
						New
					</button>
				</p>

				{#if showNewVar}
					<p class="control">
						<input
							class="input is-small"
							type="text"
							placeholder="Variable name"
							bind:value={newVar}
						/>
					</p>
					<p class="control">
						<button
							class="button is-small is-success"
							on:click={() => {
								if (newVar && newVar.startsWith('$_VAR')) {
									Datavars[environment][newVar] = {};
									showNewVar = false;
								} else {
									alert('The name must start with $_VAR');
								}
							}}
						>
							Accept
						</button>
					</p>
					<p class="control">
						<button
							class="button is-small is-danger"
							on:click={() => {
								showNewVar = false;
								newVar = '';
							}}
						>
							Cancel
						</button>
					</p>
				{/if}
			</div>

			{#each Object.keys(Datavars[environment]) as varKey}
				{#if editable}
					<details>
						<summary><strong>{varKey}</strong></summary>
						<EditorCode
							bind:this={fnEditorCodes[varKey]}
							lang={'json'}
							code={JSON.stringify(Datavars[environment][varKey])}
							><span slot="message">
								<button
									class="button is-danger is-small"
									on:click={() => {
										// TODO: Hacer que funcione
										if (confirm('Are you sure you want to permanently delete the variables?')) {
											delete Datavars[environment][varKey];
										}
									}}
								>
									<span>Delete</span>
									<span class="icon is-small">
										<i class="fas fa-times"></i>
									</span>
								</button></span
							></EditorCode
						>
					</details>
				{:else}
					<details>
						<summary><strong>{varKey}</strong></summary>
						<CodeHTML bind:jsonObject={Datavars[environment][varKey]} />
					</details>
				{/if}
			{/each}
		{/if}
	</div>
</details>
