import "clsx";
import "@edwinspire/universal-fetch";
import { a as attr } from "../../chunks/start_page.svelte_svelte_type_style_lang.js";
import "events";
import "d3";
import { s as stringify } from "../../chunks/index.js";
const logo = "/_app/immutable/assets/android-chrome-512x512.Dq1KWJkx.png";
const flame = "/_app/immutable/assets/flame.pI4vnDs3.png";
function Start_page($$payload) {
  $$payload.out += `<div class="xcontainer svelte-92eur2"><div class="svelte-92eur2"><div class="main svelte-92eur2"><figure class="image is-128x128 svelte-92eur2"><img${attr("src", logo)} alt="OpenFusionAPI" class="svelte-92eur2"></figure></div> <h1 class="title svelte-92eur2"><div class="svelte-92eur2"><span class="span01 svelte-92eur2"${attr("style", `background-image: url( ${stringify(flame)});`)}>OpenFusionAPI</span></div></h1> <div class="has-text-centered has-text-weight-bold svelte-92eur2"><span class="span01 svelte-92eur2"${attr("style", `background-image: url( ${stringify(flame)});`)}><a href="/openfusionapi" class="svelte-92eur2">ENTER</a></span></div></div></div>`;
}
function _page($$payload) {
  Start_page($$payload);
}
export {
  _page as default
};
