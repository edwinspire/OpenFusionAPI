import { p as pop, a as push, h as head } from "../../../chunks/index.js";
import "clsx";
import { a as attr } from "../../../chunks/start_page.svelte_svelte_type_style_lang.js";
import uFetch from "@edwinspire/universal-fetch";
import "events";
import "d3";
const logo = "data:image/png;base64,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";
function Login($$payload, $$props) {
  push();
  let username = "";
  let password = "";
  new uFetch();
  $$payload.out += `<div class="modal is-active"><div class="modal-background"></div> <div class="modal-content"><div class="box"><div class="media t1 svelte-fhc20z"><div class="media-left"><figure class="image is-48x48"><img${attr("src", logo)} alt="OpenFusionAPI"></figure></div> <div class="media-content"><p class="title is-family-sans-serif">Open Fusion API</p></div></div> <div class="field"><p class="control has-icons-left has-icons-right"><input class="input" type="text" placeholder="Username"${attr("value", username)}> <span class="icon is-small is-left"><i class="fa-solid fa-user"></i></span></p></div> <div class="field"><p class="control has-icons-left"><input class="input" type="password" placeholder="Password"${attr("value", password)}> <span class="icon is-small is-left"><i class="fas fa-lock"></i></span></p></div> <div class="field"><p class="control"><button class="button is-success">Login</button></p></div></div></div></div>`;
  pop();
}
function OpenFusionAPI($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
    Login($$payload);
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>OFAPI - Admin</title>`;
    $$payload2.out += `<meta name="description" content="Open Fusion API - Admin">`;
  });
  OpenFusionAPI($$payload);
}
export {
  _page as default
};
