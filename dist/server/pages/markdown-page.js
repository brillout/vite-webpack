import { a as jsx, j as jsxs, F as Fragment } from "../chunks/chunk-746fc63d.js";
import { C as Counter } from "../chunks/chunk-0af5ab33.js";
import "react/jsx-runtime";
import "react";
const documentProps = {
  title: "Some Markdown Page"
};
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    em: "em"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsx(_components.h1, {
      children: "Markdown"
    }), "\n", jsxs(_components.p, {
      children: ["This page is written in ", jsx(_components.em, {
        children: "Markdown"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["MDX allows us to include interactive components in the markdown. ", jsx(Counter, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export {
  MDXContent as default,
  documentProps
};
