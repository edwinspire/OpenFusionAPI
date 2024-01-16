import { c as create_ssr_component, f as createEventDispatcher, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import uFetch from "@edwinspire/universal-fetch";
import "events";
import "d3";
const css = {
  code: '@import "bulma/css/bulma.min.css";.container.svelte-osrx57{max-width:400px;margin:0 auto;padding:2rem;margin-top:10vh;border:1px solid #ccc;border-radius:4px}.form.svelte-osrx57{margin-bottom:1rem}',
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let username = "";
  let password = "";
  new uFetch();
  $$result.css.add(css);
  return `<div class="container svelte-osrx57"><h1 class="title is-4" data-svelte-h="svelte-1yeihy2">Iniciar sesión</h1> <form class="form svelte-osrx57"><div class="field"><label class="label" data-svelte-h="svelte-1tq2mwz">Nombre de usuario</label> <div class="control"><input class="input" type="text" placeholder="Nombre de usuario" required${add_attribute("value", username, 0)}></div></div> <div class="field"><label class="label" data-svelte-h="svelte-66z98u">Contraseña</label> <div class="control"><input class="input" type="password" placeholder="Contraseña" required${add_attribute("value", password, 0)}></div></div> <div class="field" data-svelte-h="svelte-u84jsi"><div class="control"><button class="button is-primary" type="submit">Iniciar sesión</button></div></div></form> </div>`;
});
const OpenFusionAPI = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(OpenFusionAPI, "APIServerGUI").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
