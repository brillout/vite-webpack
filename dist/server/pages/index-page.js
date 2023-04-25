import { j as jsxs, F as Fragment, a as jsx } from "../chunks/chunk-746fc63d.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { C as Counter } from "../chunks/chunk-0af5ab33.js";
import "react/jsx-runtime";
import "react";
const index_page = { Page };
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("h1", { children: [
      "Welcome to ",
      /* @__PURE__ */ jsx("code", { children: "vite-plugin-ssr" })
    ] }),
    "This page is:",
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "Rendered to HTML." }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Interactive. ",
        /* @__PURE__ */ jsx(Counter, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          const randomIndex = Math.floor(Math.random() * 3);
          const url = ["/markdown", "/star-wars", "/hello/alice"][randomIndex];
          navigate(url, { keepScrollPosition: true });
        },
        children: "Random Page"
      }
    ) })
  ] });
}
export {
  index_page as default
};
