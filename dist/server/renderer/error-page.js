import { j as jsxs, F as Fragment, a as jsx } from "../chunks/chunk-746fc63d.js";
import "react/jsx-runtime";
function Page({ is404, errorInfo }) {
  if (is404) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "404 Page Not Found" }),
      /* @__PURE__ */ jsx("p", { children: "This page could not be found." }),
      /* @__PURE__ */ jsx("p", { children: errorInfo })
    ] });
  } else {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "500 Internal Server Error" }),
      /* @__PURE__ */ jsx("p", { children: "Something went wrong." })
    ] });
  }
}
export {
  Page
};
