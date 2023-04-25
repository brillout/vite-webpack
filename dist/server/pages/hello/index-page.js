import { j as jsxs, F as Fragment, a as jsx } from "../../chunks/chunk-746fc63d.js";
import "react/jsx-runtime";
function Page({ name }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Hello" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Hi ",
      /* @__PURE__ */ jsx("b", { children: name }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/hello/eli", children: "/hello/eli" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/hello/jon", children: "/hello/jon" }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Parameterized routes can be defined by exporting a route string in ",
      /* @__PURE__ */ jsx("code", { children: "*.page.route.js" }),
      "."
    ] })
  ] });
}
export {
  Page
};
