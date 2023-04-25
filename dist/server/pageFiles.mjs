import { resolveRoute } from "vite-plugin-ssr/routing";
const exportNames$9 = ["Page"];
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$9
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$8 = ["default"];
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$8
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$7 = ["documentProps", "default"];
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$7
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$6 = ["Page", "onBeforeRender"];
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$6
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$5 = ["Page"];
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$5
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$4 = ["Page"];
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$4
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$3 = ["onBeforeRender", "prerender"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$3
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$2 = ["onBeforeRender", "prerender"];
const __vite_glob_3_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$2
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$1 = ["render", "passToClient"];
const __vite_glob_3_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$1
}, Symbol.toStringTag, { value: "Module" }));
const index_page_route = (pageContext) => {
  if (pageContext.urlPathname === "/hello" || pageContext.urlPathname === "/hello/") {
    const name = "anonymous";
    return { routeParams: { name } };
  }
  return resolveRoute("/hello/@name", pageContext.urlPathname);
};
const __vite_glob_4_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_page_route
}, Symbol.toStringTag, { value: "Module" }));
const exportNames = ["render", "onHydrationEnd", "onPageTransitionStart", "onPageTransitionEnd", "clientRouting", "hydrationCanBeAborted"];
const __vite_glob_5_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const invalidator = null;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.tsx": () => import("./pages/hello/index-page.js"), "/pages/index.page.tsx": () => import("./pages/index-page.js"), "/pages/markdown.page.mdx": () => import("./pages/markdown-page.js"), "/pages/star-wars/@id.page.tsx": () => import("./pages/star-wars/@id-page.js"), "/pages/star-wars/index/index.page.tsx": () => import("./pages/star-wars/index/index-page.js"), "/renderer/_error.page.tsx": () => import("./renderer/error-page.js") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.tsx": __vite_glob_1_0, "/pages/index.page.tsx": __vite_glob_1_1, "/pages/markdown.page.mdx": __vite_glob_1_2, "/pages/star-wars/@id.page.tsx": __vite_glob_1_3, "/pages/star-wars/index/index.page.tsx": __vite_glob_1_4, "/renderer/_error.page.tsx": __vite_glob_1_5 });
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.server.ts": () => import("./pages/hello/index-page-server.js"), "/pages/star-wars/index/index.page.server.ts": () => import("./pages/star-wars/index/index-page-server.js"), "/renderer/_default.page.server.tsx": () => import("./renderer/default-page-server.js") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.server.ts": __vite_glob_3_0, "/pages/star-wars/index/index.page.server.ts": __vite_glob_3_1, "/renderer/_default.page.server.tsx": __vite_glob_3_2 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.route.ts": __vite_glob_4_0 });
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.tsx": __vite_glob_5_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  invalidator,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
