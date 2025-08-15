import "@edwinspire/universal-fetch";
import "clsx";
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
//# sourceMappingURL=start_page.svelte_svelte_type_style_lang.js.map
