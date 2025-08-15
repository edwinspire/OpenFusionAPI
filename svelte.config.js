import adapter_static from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter_static({
      pages: "./www",
    }),
  },
};

export default config;
