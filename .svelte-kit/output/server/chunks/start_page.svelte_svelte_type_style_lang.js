const PUBLIC_API_SERVER_HOST = "http://localhost:3000";
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
validateBaseUrl(PUBLIC_API_SERVER_HOST);
//# sourceMappingURL=start_page.svelte_svelte_type_style_lang.js.map
