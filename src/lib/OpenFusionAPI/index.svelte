<script>
  import { onMount } from "svelte";
  import Login from "./login/index.svelte";
  import Main from "./main/index.svelte";
  import { getListMethods } from "./utils";

  let page = "login";

  onMount(() => {
    getListMethods();
  });
</script>

{#if page == "main"}
  <Main
    on:exit={() => {
      page = "login";
    }}
  />
{:else}
  <Login
    on:login={(e) => {
      console.log("LOGIN", e);

      if (e.detail.login) {
        page = "main";
      } else {
        page = "?";
      }
    }}
  />
{/if}
