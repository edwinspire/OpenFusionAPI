import { c as create_ssr_component, e as each, a as escape } from "../../chunks/ssr.js";
const css = {
  code: ".title.svelte-1alarcm{position:relative;font-size:3rem;margin-top:2rem;text-align:center}.flash.svelte-1alarcm{position:absolute;width:2px;height:20px;background-color:#f39c12;transform:translate(-50%, -50%) rotate(-45, 45);pointer-events:none;animation:svelte-1alarcm-flashAnimation 2s ease-in-out infinite}@keyframes svelte-1alarcm-flashAnimation{0%,50%,100%{opacity:1;height:20px}25%,75%{opacity:0;height:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let flashes = [];
  $$result.css.add(css);
  return `<div class="title svelte-1alarcm"><h1 data-svelte-h="svelte-1vlp3se">Open Fusion API</h1> ${each(flashes, ({ top, left, angle, animationDuration }) => {
    return `<div class="flash svelte-1alarcm" style="${"top: " + escape(top, true) + "; left: " + escape(left, true) + "; animation-duration: " + escape(animationDuration, true) + ";"}"></div>`;
  })}</div>`;
});
export {
  Page as default
};
