<script>
    // @ts-ignore
    import uFetch from "@edwinspire/universal-fetch";
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
    
    /**
     * @param {boolean} login
     */
    function emitSuccess(login) {
      dispatch("login", {
        login: login,
      });
    }
  
    
  
    onMount(() => {});
  </script>
  
  <div class="container">
    
  </div>
  
  <style>
    
  </style>
  