Example of using webpack with Vite(-plugin-ssr).

To run the example:

```bash
git clone git@github.com:brillout/vite-webpack
cd vite-webpack/
pnpm install
pnpm run build
```

Same as single line (copy-paste me):

```shell
git clone git@github.com:brillout/vite-webpack && cd vite-webpack/ && pnpm install && pnpm run build
```

Observe how the new build has a completely new code-splitting that is entirely determined by webpack:

```
$ ls dist-webpack/
dist_client_assets_pages_hello_index_page_cc53f6cc_js.mjs   dist_client_assets_pages_star-wars_index_index_page_6fffbe9f_js.mjs
dist_client_assets_pages_index_page_21345b96_js.mjs         dist_client_assets_renderer_default_page_client_29cfd61c_js.mjs
dist_client_assets_pages_markdown_page_ace6d43c_js.mjs      dist_client_assets_renderer_error_page_fdb94e9a_js.mjs
dist_client_assets_pages_star-wars_id_page_8070f5a4_js.mjs  main.mjs
```
