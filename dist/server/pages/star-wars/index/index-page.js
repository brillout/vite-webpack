import { j as jsxs, F as Fragment, a as jsx } from "../../../chunks/chunk-746fc63d.js";
import "react/jsx-runtime";
function Page({ movies }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Star Wars Movies" }),
    /* @__PURE__ */ jsx("ol", { children: movies.map(({ id, title, release_date }) => /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("a", { href: `/star-wars/${id}`, children: title }),
      " (",
      release_date,
      ")"
    ] }, id)) }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Source: ",
      /* @__PURE__ */ jsx("a", { href: "https://star-wars.brillout.com", children: "star-wars.brillout.com" }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Data can be fetched by using the ",
      /* @__PURE__ */ jsx("code", { children: "onBeforeRender()" }),
      " hook."
    ] })
  ] });
}
export {
  Page
};
