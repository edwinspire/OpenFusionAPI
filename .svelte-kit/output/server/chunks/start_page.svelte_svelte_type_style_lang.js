import { e as escape_html } from "./escaping.js";
import "clsx";
import "@edwinspire/universal-fetch";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
validateBaseUrl("");
function validateBaseUrl(baseUrl) {
  try {
    const url = new URL(baseUrl);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return baseUrl;
    }
    return "";
  } catch (e) {
    return "";
  }
}
export {
  attr as a
};
