import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";
const names = ["evan", "rom", "alice", "jon", "eli"];
async function onBeforeRender(pageContext) {
  const { name } = pageContext.routeParams;
  if (name !== "anonymous" && !names.includes(name)) {
    const errorInfo = `Unknown name: ${name}.`;
    throw RenderErrorPage({ pageContext: { pageProps: { errorInfo } } });
  }
  const pageProps = { name };
  return {
    pageContext: {
      pageProps
    }
  };
}
function prerender() {
  return ["/hello", ...names.map((name) => `/hello/${name}`)];
}
export {
  onBeforeRender,
  prerender
};
