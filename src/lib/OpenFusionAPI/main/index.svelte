<script>
	// @ts-ignore
	//import uFetch from "@edwinspire/universal-fetch";

	import { onMount } from 'svelte';
	//import { createEventDispatcher } from "svelte";
	// import { userStore } from "../utils.js";
	import App from '../app/index.svelte';
	//import Users from '../users/index.svelte';
	//  const dispatch = createEventDispatcher();

	//let idappSelected = 0;
	//let showMethod = false;

	/**
	 * @type {{ name: any; value: any; }[]}
	 */
	//  let options = [];

	/**
	 * @type {any}
	 */
	let app = {};

	let mainTab = 'app';

	//let uf = new uFetch();

	/*
  async function getListApps() {
    // Lógica de autenticación aquí

    try {
      let apps_res = await uf.get("/api/apps");
      let apps = await apps_res.json();
      //console.log(apps);

      if (apps && Array.isArray(apps) && apps.length > 0) {
        options = apps.map((item) => {
          return { name: item.app, value: item.app };
        });
      } else {
        options = [];
      }
    } catch (error) {
      // @ts-ignore
      alert(error.message);
    }
  }
*/

	/*
  userStore.subscribe((value) => {
    console.log("tokenStore >> ", value);
    // @ts-ignore
    uf.addHeader("api-token", value.token);
  });
*/

	onMount(() => {
		// uf.addHeader(tokenStore.);
		// console.log(userStore);
		// getListApps();
	});
</script>

<div class="box">
	<div class={mainTab == 'app' ? '' : 'is-hidden'}>
		<App bind:idapp={app.idapp} />
	</div>
</div>

<style>
</style>
