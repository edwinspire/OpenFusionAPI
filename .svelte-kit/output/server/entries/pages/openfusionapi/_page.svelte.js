import { a3 as attr_class, a4 as bind_props, a5 as ensure_array_like, a2 as stringify, e as escape_html, a0 as attr, a6 as clsx, a7 as head } from "../../../chunks/renderer.js";
import "clsx";
import "@edwinspire/universal-fetch";
/* empty css                                                       */
import "events";
import "prettier-plugin-sql";
import "marked";
import "echarts";
import { w as writable } from "../../../chunks/index.js";
const Logo = "data:image/png;base64,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";
function Modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { show = false, children, showCloseButton = false } = $$props;
    $$renderer2.push(`<div${attr_class("modal", void 0, { "is-active": show })}><div class="modal-background"></div> <div class="modal-content">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div> `);
    if (showCloseButton) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button class="modal-close is-large" aria-label="close"></button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { show, showCloseButton });
  });
}
let notifications_store = writable([]);
function Notifications($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let list_notify = [];
    notifications_store.subscribe((value) => {
      list_notify = value;
    });
    $$renderer2.push(`<div class="bottom-right svelte-5sfib3"><!--[-->`);
    const each_array = ensure_array_like(list_notify);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let s = each_array[$$index];
      if (!s.hidden) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<article${attr_class(`message is-small is-${stringify(s.color)}`, "svelte-5sfib3")}>`);
        if (s.title) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="message-header"><p>${escape_html(s.title)}</p> <button class="delete is-small" aria-label="delete"></button></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <div class="message-body">${escape_html(s.message)}</div></article>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
const version = "1.4.2";
function Login($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let username = "";
    let password = "";
    let processing = { waiting: false, error: null };
    let mounted = false;
    Modal($$renderer2, {
      show: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<div${attr_class("login-wrapper svelte-ogcakf", void 0, { "is-visible": mounted })}><div class="orb orb-1 svelte-ogcakf"></div> <div class="orb orb-2 svelte-ogcakf"></div> <div class="orb orb-3 svelte-ogcakf"></div> <div class="login-card box svelte-ogcakf"><div class="brand-header has-text-centered svelte-ogcakf"><div class="logo-ring svelte-ogcakf"><div class="logo-figure svelte-ogcakf"><img${attr("src", Logo)} alt="OpenFusionAPI" class="logo-img svelte-ogcakf"/></div></div> <h1 class="title is-4 mt-3 brand-title svelte-ogcakf">Open Fusion API</h1> <p class="subtitle is-6 brand-subtitle svelte-ogcakf"><span class="tag is-dark is-rounded svelte-ogcakf"><span class="icon is-small svelte-ogcakf"><i class="fa-solid fa-server svelte-ogcakf"></i></span> <span class="svelte-ogcakf">MCP Server</span></span></p></div> <div class="divider-line svelte-ogcakf"></div> <form class="login-form svelte-ogcakf"><div class="field svelte-ogcakf"><label class="label has-text-grey-light is-small svelte-ogcakf" for="login-username">Username</label> <p class="control has-icons-left svelte-ogcakf"><input id="login-username"${attr_class("input is-rounded svelte-ogcakf", void 0, { "is-danger": processing.error })} type="text" placeholder="Enter your username"${attr("value", username)} autocomplete="username"/> <span class="icon is-small is-left svelte-ogcakf"><i class="fa-solid fa-user svelte-ogcakf"></i></span></p></div> <div class="field svelte-ogcakf"><label class="label has-text-grey-light is-small svelte-ogcakf" for="login-password">Password</label> <p class="control has-icons-left has-icons-right svelte-ogcakf"><input id="login-password"${attr_class("input is-rounded svelte-ogcakf", void 0, { "is-danger": processing.error })}${attr("type", "password")} placeholder="Enter your password"${attr("value", password)} autocomplete="current-password"/> <span class="icon is-small is-left svelte-ogcakf"><i class="fa-solid fa-lock svelte-ogcakf"></i></span> <button type="button" class="icon is-small is-right is-clickable eye-icon svelte-ogcakf"${attr("title", "Show password")}${attr("aria-label", "Show password")}><i${attr_class(clsx("fa-solid fa-eye"), "svelte-ogcakf")}></i></button></p></div> `);
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> <div class="field mt-4 svelte-ogcakf"><p class="control svelte-ogcakf"><button type="submit"${attr_class("button is-fullwidth is-rounded login-btn svelte-ogcakf", void 0, { "is-loading": processing.waiting })}${attr("disabled", !username, true)}>`);
        {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<span class="icon svelte-ogcakf"><i class="fa-solid fa-right-to-bracket svelte-ogcakf"></i></span> <span class="svelte-ogcakf">Sign In</span>`);
        }
        $$renderer3.push(`<!--]--></button></p></div></form> <p class="version-tag has-text-centered has-text-grey svelte-ogcakf"><span class="icon is-small svelte-ogcakf"><i class="fa-solid fa-code-branch svelte-ogcakf"></i></span> v${escape_html(version)}</p></div></div>`);
      },
      $$slots: { default: true }
    });
  });
}
function OpenFusionAPI($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    Notifications($$renderer2);
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[-1-->");
      Login($$renderer2);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer) {
  head("gcotfn", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>OFAPI - Admin</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Open Fusion API - Admin"/>`);
  });
  OpenFusionAPI($$renderer);
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
