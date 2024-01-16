<script>
// @ts-nocheck

  import FetchCode from "./handler/fetch.svelte";
  import JsCode from "./handler/js.svelte";
  import SoapCode from "./handler/soap.svelte";
  import SqlCode from "./handler/sql.svelte";
  import { DialogModal } from "@edwinspire/svelte-components";
  import MethodDialog from "./method.svelte";

  let showMethod = false;

  /**
   * @type {FetchCode}
   */
  let fnFetchCode;
  /**
   * @type {JsCode}
   */
  let fnJsCode;
  /**
   * @type {SoapCode}
   */
  let fnSoapCode;
  /**
   * @type {SqlCode}
   */
  let fnSqlCode;
  let showCode = false;

  /**
   * @type {any}
   */
  export let value;
  export const row = {};
  export let props = {};
  let methodSelected = "";

  const classMap = {
    GET: "tag is-success",
    POST: "tag is-info",
    DELETE: "tag is-danger",
    PUT: "tag is-warning",
    PATCH: "tag is-link",
    HEADER: "tag is-primary",
  };
</script>

<td>
  <div class="field is-grouped is-grouped-multiline space">
    {#if value}
    {#each Object.keys(value) as method}
    <div class="control">
      <div class="tags has-addons">
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <a
          class="tag is-dark"
          on:click={() => {
            let message = "Do you want to enable the method?";

            if (value[method].enabled) {
              message = "Do you want to disable the method?";
            }

            if (confirm(message)) {
              value[method].enabled = !value[method].enabled;
            }
          }}
        >
          <span
            class={value[method].enabled
              ? "icon has-text-success"
              : "icon has-text-danger"}
          >
            <i
              class={value[method].enabled
                ? "fa-solid fa-check"
                : "fa-solid fa-xmark"}
            />
          </span></a
        >

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span
          class={classMap[method] || "tag is-dark"}
          on:click={() => {
            methodSelected = method;
            showMethod = true;
          }}>{method}</span
        >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          class="tag is-dark"
          on:click={() => {
            ///
            methodSelected = method;
            showCode = true;
          }}>{value[method].handler}</a
        >

        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <a
          class="tag is-dark"
          on:click={() => {
            let message = "Do you want to make the method public?";

            if (value[method].public) {
              message = "Do you want to make the method private?";
            }

            if (confirm(message)) {
              value[method].public = !value[method].public;
            }
          }}
        >
          <span
            class={value[method].public
              ? "icon has-text-success"
              : "icon has-text-danger"}
          >
            <i
              class={value[method].public
                ? "fa-solid fa-lock-open"
                : "fa-solid fa-lock"}
            />
          </span></a
        >
      </div>
    </div>
  {/each}
    {/if}
  </div>
</td>

{#if value && methodSelected.length > 2}
  <MethodDialog
    method={methodSelected}
    bind:handler={value[methodSelected].handler}
    bind:enabled={value[methodSelected].enabled}
    bind:ispublic={value[methodSelected].public}
    bind:Show={showMethod}
    title={`Method ${methodSelected}`}
    on:ok={(e) => {
      console.log(e);
//      value = e.detail;
      showMethod = false;
     // value = value;
    }}
  />

  <DialogModal
    bind:Show={showCode}
    on:ok={() => {
      if (value[methodSelected].handler == "js") {
        value[methodSelected].code = fnJsCode.getCode();
        //console.log("methodSelected > ", methodSelected, fnJsCode.getCode());
      } else if (value[methodSelected].handler == "soap") {
        value[methodSelected].code = fnSoapCode.getCode();
      } else if (value[methodSelected].handler == "sql") {
        value[methodSelected].code = fnSqlCode.getCode();
      } else if (value[methodSelected].handler == "fetch") {
        value[methodSelected].code = fnFetchCode.getCode();
      }
//      console.log(methodSelected, value, value[methodSelected]);

      showCode = false;
    }}
  >
    <span slot="title">{value[methodSelected].handler}</span>

    <div slot="body">
      {#if value[methodSelected].handler == "js"}
        <JsCode bind:this={fnJsCode} code={value[methodSelected].code} />
      {:else if value[methodSelected].handler == "soap"}
        <SoapCode
          bind:this={fnSoapCode}
          bind:code={value[methodSelected].code}
        />
      {:else if value[methodSelected].handler == "sql"}
        <SqlCode bind:this={fnSqlCode} bind:code={value[methodSelected].code} />
      {:else if value[methodSelected].handler == "fetch"}
        <FetchCode
          bind:this={fnFetchCode}
          bind:code={value[methodSelected].code}
        />
      {:else}
        <code contenteditable>
          {value[methodSelected].code}
        </code>
      {/if}
    </div>
  </DialogModal>
{/if}

<style>
  .space {
    margin: 0.5em;
  }
</style>
