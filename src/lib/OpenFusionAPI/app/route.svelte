<script>
  import Method from "./method.svelte";

  /**
   * @type {{ route: any; method: any; }}
   */
  export let route;
  let showMethods = false;
</script>

<div class="method_margin">
  <!-- Main container -->

  <div class="has-background-grey-dark header_method">
    <nav class="level has-background-grey-dark">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-primary is-small"> Route </a>
                  </p>
                  <p class="control is-expanded">
                    <input
                      class="input is-small"
                      type="text"
                      placeholder="Route name"
                      bind:value={route.route}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="level-item">
          <span
            ><label class="checkbox has-text-white">
              <input type="checkbox" />
              Enabled
            </label></span
          >
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item">
          <a
            class="button is-success is-small"
            on:click={() => {
              showMethods = !showMethods;
            }}>Methods</a
          >
        </p>
      </div>
    </nav>
  </div>

  <div
    class={showMethods
      ? "has-background-light box"
      : "is-hidden"}
  >
    <div class="columns">
      <div class="column is-one-third">
        {#each route.methods as method}
          {#if method.env == "dev"}
            <Method bind:method />
          {/if}
        {/each}
      </div>
      <div class="column is-one-third">
        {#each route.methods as method}
          {#if method.env == "qa"}
            <Method bind:method />
          {/if}
        {/each}
      </div>
      <div class="column is-one-third">
        {#each route.methods as method}
          {#if method.env == "prd"}
            <Method bind:method />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>


<style>
  .header_method {
    padding: 0.3em;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .method_margin {
    margin: 0.3em;
  }
</style>
