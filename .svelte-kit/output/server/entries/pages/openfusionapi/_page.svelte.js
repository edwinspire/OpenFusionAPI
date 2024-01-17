import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { O as OpenFusionAPI } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(OpenFusionAPI, "APIServerGUI").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
