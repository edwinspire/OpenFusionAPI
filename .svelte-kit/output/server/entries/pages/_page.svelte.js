import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
/* empty css                                                    */
import "@edwinspire/universal-fetch";
import "events";
import "d3";
const logo = "/_app/immutable/assets/android-chrome-512x512.6tSliZMZ.png";
const css = {
  code: ".main.svelte-1ly6m9x{display:flex;justify-content:center;align-items:center}.container.svelte-1ly6m9x{width:100%;height:300px;margin:100px auto;transform:translateY(50%)}.span01.svelte-1ly6m9x{height:300px;width:100%;background-image:url('flame.png');background-position:0 -1000px;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:svelte-1ly6m9x-fire 4s linear infinite}.h01.svelte-1ly6m9x{color:#fff;font-size:80px;text-align:center}@keyframes svelte-1ly6m9x-fire{0%{background-position:0% -50%}100%{background-position:0% -25%}}",
  map: null
};
const Start_page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="hero is-black is-fullheight" data-svelte-h="svelte-16aw2hu"><div class="hero-body"><div class="container svelte-1ly6m9x"><div class="main svelte-1ly6m9x"><figure class="image is-128x128"><img${add_attribute("src", logo, 0)}></figure></div> <div><h1 class="h01 svelte-1ly6m9x"><span class="span01 svelte-1ly6m9x">OpenFusionAPI</span></h1></div></div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Start_page, "StartPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
