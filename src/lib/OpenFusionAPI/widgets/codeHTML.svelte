<script>
  import { formatJsonForHtmlCode } from "../utils.js";
  export let jsonObject = {};
</script>

<div class="code_container">
  <code class="code_tag">
    {@html formatJsonForHtmlCode(jsonObject)}
  </code>
</div>

<style>
  .code_tag {
    background-color: #fff;
    color: #2c43aa;
    font-size: 1em;
    font-style: italic;
  }

  .code_container {
    margin-left: 1em;
    border-color: #fff #fafafa #fff #4c63c8;
    border-style: solid;
    border-width: 1px;
    padding-left: 1em;
  }
</style>
