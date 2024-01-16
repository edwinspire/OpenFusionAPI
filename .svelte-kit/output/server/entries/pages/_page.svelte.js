import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p data-svelte-h="svelte-270yyu">Visit <a${add_attribute("href", `${base}/openfusionapi`, 0)}>OpenFusionAPI</a> to read the documentation</p>`;
});
export {
  Page as default
};
