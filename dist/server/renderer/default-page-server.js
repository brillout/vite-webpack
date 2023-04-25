import { a as jsx, j as jsxs } from "../chunks/chunk-746fc63d.js";
import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
import React, { useContext } from "react";
import "react/jsx-runtime";
const logoUrl = "/assets/static/logo.bebe2e90.svg";
const Context = React.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
function Link({ href, children }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return /* @__PURE__ */ jsx("a", { href, className: isActive ? "is-active" : void 0, children });
}
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsxs(Sidebar, { children: [
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsx(Link, { href: "/", children: "Welcome" }),
      /* @__PURE__ */ jsx(Link, { href: "/markdown", children: "Markdown" }),
      /* @__PURE__ */ jsx(Link, { href: "/star-wars", children: "Data Fetching" }),
      /* @__PURE__ */ jsx(Link, { href: "/hello", children: "Routing" })
    ] }),
    /* @__PURE__ */ jsx(Content, { children })
  ] }) }) });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        maxWidth: 900,
        margin: "auto"
      },
      children
    }
  );
}
function Sidebar({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "sidebar",
      style: {
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        lineHeight: "1.8em",
        borderRight: "2px solid #eee"
      },
      children
    }
  );
}
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { id: "page-container", children: /* @__PURE__ */ jsx(
    "div",
    {
      id: "page-content",
      style: {
        padding: 20,
        paddingBottom: 50,
        minHeight: "100vh"
      },
      children
    }
  ) });
}
function Logo() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        marginTop: 20,
        marginBottom: 10
      },
      children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: logoUrl, height: 64, width: 64 }) })
    }
  );
}
function getPageTitle(pageContext) {
  const title = (
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title || // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title || "Demo"
  );
  return title;
}
const passToClient = ["pageProps", "documentProps", "someAsyncProps"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const stream = await renderToStream(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) }),
    // We don't need react-streaming for this app. (We use it merely to showcase that VPS can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true }
  );
  const title = getPageTitle(pageContext);
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    // See https://vite-plugin-ssr.com/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42
      };
    }
  };
}
export {
  passToClient,
  render
};
