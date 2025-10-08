import "clsx";
import "@edwinspire/universal-fetch";
import "../../chunks/start_page.svelte_svelte_type_style_lang.js";
import "events";
import "d3";
import "prettier/standalone.js";
import "prettier/plugins/babel.mjs";
import "prettier/plugins/estree.mjs";
import "prettier/plugins/html.mjs";
import "prettier-plugin-sql";
import "marked";
import { x as attr, y as attr_style, z as stringify } from "../../chunks/index2.js";
const logo = "/_app/immutable/assets/android-chrome-512x512.Dq1KWJkx.png";
const flame = "/_app/immutable/assets/flame.pI4vnDs3.png";
function Start_page($$renderer) {
  $$renderer.push(`<div class="xcontainer svelte-10q5yk3"><div class="svelte-10q5yk3"><div class="main svelte-10q5yk3"><figure class="image is-128x128 svelte-10q5yk3"><img${attr("src", logo)} alt="OpenFusionAPI" class="svelte-10q5yk3"/></figure></div> <h1 class="title svelte-10q5yk3"><div class="svelte-10q5yk3"><span class="span01 svelte-10q5yk3"${attr_style(`background-image: url( ${stringify(flame)});`)}>OpenFusionAPI</span></div></h1> <div class="has-text-centered has-text-weight-bold svelte-10q5yk3"><span class="span01 svelte-10q5yk3"${attr_style(`background-image: url( ${stringify(flame)});`)}><a href="/openfusionapi" class="svelte-10q5yk3">ENTER</a></span></div></div></div>`);
}
function _page($$renderer) {
  Start_page($$renderer);
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
