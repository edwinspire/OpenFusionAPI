<script>
  // @ts-ignore
  import uFetch from "@edwinspire/universal-fetch";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { userStore, getListMethods, getListHandler , url_paths} from "../utils.js";

  const dispatch = createEventDispatcher();

  let username = "";
  let password = "";
  // @ts-ignore
  let uf = new uFetch();

  /**
   * @param {boolean} login
   */
  function emitSuccess(login) {
    dispatch("login", {
      login: login,
    });
  }

  async function handleSubmit() {
    // Lógica de autenticación aquí

    try {
      // @ts-ignore
      let user = await uf.post(url_paths.login, { username, password });
      let data = await user.json();
      console.log(data);

      if (data.login) {
        userStore.set(data);
        await getListMethods(data.token);
        await getListHandler(data.token);
      } else {
        alert("Credenciales inválidas");
      }

      emitSuccess(data.login);
    } catch (error) {
      console.trace(error);
      // @ts-ignore
      alert(error.message);
    }
  }

  onMount(() => {});
</script>

<div class="container">
  <h1 class="title is-4">Iniciar sesión</h1>
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <div class="field">
      <label class="label">Nombre de usuario</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Nombre de usuario"
          bind:value={username}
          required
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Contraseña</label>
      <div class="control">
        <input
          class="input"
          type="password"
          placeholder="Contraseña"
          bind:value={password}
          required
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-primary" type="submit">Iniciar sesión</button>
      </div>
    </div>
  </form>
</div>

<style>
  /* Importar los estilos de Bulma */
  @import "bulma/css/bulma.min.css";

  /* Estilos adicionales */
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    margin-top: 10vh;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .form {
    margin-bottom: 1rem;
  }
</style>
