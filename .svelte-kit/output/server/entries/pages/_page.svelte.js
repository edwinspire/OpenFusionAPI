import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
/* empty css                                                    */
import "@edwinspire/universal-fetch";
import "events";
import "d3";
const logo = "/_app/immutable/assets/android-chrome-512x512.Dq1KWJkx.png";
const flame = "/_app/immutable/assets/flame.pI4vnDs3.png";
const css = {
  code: ".xcontainer.svelte-ffrl52{display:flex;align-items:center;justify-content:center;height:100vh;width:100%;background-color:black;color:white}.main.svelte-ffrl52{display:flex;justify-content:center;align-items:center}.span01.svelte-ffrl52{height:300px;width:100%;background-position:0 -1000px;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:svelte-ffrl52-fire 4s linear infinite}@keyframes svelte-ffrl52-fire{0%{background-position:0% -50%}100%{background-position:0% -25%}}",
  map: null
};
const Start_page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="xcontainer svelte-ffrl52" data-svelte-h="svelte-1ct9boh"><div class=""><div class="main svelte-ffrl52"><figure class="image is-128x128"><img${add_attribute("src", logo, 0)} alt="OpenFusionAPI"></figure></div> <h1 class="title"><div><span class="span01 svelte-ffrl52" style="${"background-image: url( " + escape(flame, true) + ");"}">OpenFusionAPI</span></div></h1> <div class="has-text-centered has-text-weight-bold"><span class="span01  svelte-ffrl52" style="${"background-image: url( " + escape(flame, true) + ");"}"><a href="/openfusionapi">ENTER</a></span></div></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Start_page, "StartPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
