// place files you want to import through the `$lib` alias in this folder.

import { ENVIRONMENT, URL_DEVELOPMENT_API } from "$env/static/private";

export const url_build = (/** @type {string} */ path) => {
    console.log(ENVIRONMENT, URL_DEVELOPMENT_API);
  return ENVIRONMENT !== "DEV" ? `${URL_DEVELOPMENT_API}${path}` : path;
};
