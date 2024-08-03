import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "@edwinspire/universal-fetch";
/* empty css                                                    */
import "d3";
import "events";
const logo = "/_app/immutable/assets/android-chrome-512x512.Dq1KWJkx.png";
const flame = "/_app/immutable/assets/flame.pI4vnDs3.png";
const css = {
  code: ".xcontainer.svelte-ffrl52{display:flex;align-items:center;justify-content:center;height:100vh;width:100%;background-color:black;color:white}.main.svelte-ffrl52{display:flex;justify-content:center;align-items:center}.span01.svelte-ffrl52{height:300px;width:100%;background-position:0 -1000px;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:svelte-ffrl52-fire 4s linear infinite}@keyframes svelte-ffrl52-fire{0%{background-position:0% -50%}100%{background-position:0% -25%}}",
  map: `{"version":3,"file":"start_page.svelte","sources":["start_page.svelte"],"sourcesContent":["<script>\\n\\timport logo from './img/android-chrome-512x512.png';\\n\\timport flame from './img/flame.png';\\n<\/script>\\n\\n<div class=\\"xcontainer\\">\\n\\t<div class=\\"\\">\\n\\t\\t<div class=\\"main\\">\\n\\t\\t\\t<figure class=\\"image is-128x128\\">\\n\\t\\t\\t\\t<img src={logo} alt=\\"OpenFusionAPI\\" />\\n\\t\\t\\t</figure>\\n\\t\\t</div>\\n\\n\\t\\t<h1 class=\\"title\\">\\n\\t\\t\\t<div><span class=\\"span01\\" style=\\"background-image: url( {flame});\\">OpenFusionAPI</span></div>\\n\\t\\t</h1>\\n\\t\\t\\n\\t\\t\\t<div class=\\"has-text-centered has-text-weight-bold\\"><span class=\\"span01 \\" style=\\"background-image: url( {flame});\\"><a  href=\\"/openfusionapi\\">ENTER</a></span></div>\\n\\t\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.xcontainer {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\theight: 100vh; /* 100% del viewport height */\\n\\t\\twidth: 100%; /* 100% del ancho disponible */\\n\\t\\tbackground-color: black;\\n\\t\\tcolor: white; /* Color del texto, ajusta según sea necesario */\\n\\t}\\n\\n\\t.main {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t.span01 {\\n\\t\\theight: 300px;\\n\\t\\twidth: 100%;\\n\\t\\t/* background-image: url({flame}); */\\n\\t\\tbackground-position: 0 -1000px;\\n\\t\\t-webkit-background-clip: text;\\n\\t\\t-webkit-text-fill-color: transparent;\\n\\t\\tanimation: fire 4s linear infinite;\\n\\t}\\n\\n\\t@keyframes fire {\\n\\t\\t0% {\\n\\t\\t\\tbackground-position: 0% -50%;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\tbackground-position: 0% -25%;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuBC,yBAAY,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KACR,CAEA,mBAAM,CACL,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACd,CAEA,qBAAQ,CACP,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,CAEX,mBAAmB,CAAE,CAAC,CAAC,OAAO,CAC9B,uBAAuB,CAAE,IAAI,CAC7B,uBAAuB,CAAE,WAAW,CACpC,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,MAAM,CAAC,QAC3B,CAEA,WAAW,kBAAK,CACf,EAAG,CACF,mBAAmB,CAAE,EAAE,CAAC,IACzB,CACA,IAAK,CACJ,mBAAmB,CAAE,EAAE,CAAC,IACzB,CACD"}`
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
