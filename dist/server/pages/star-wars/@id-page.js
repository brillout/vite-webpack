import { j as jsxs, F as Fragment, a as jsx } from "../../chunks/chunk-746fc63d.js";
import fetch from "cross-fetch";
import { f as filterMovieData } from "../../chunks/chunk-337a7715.js";
import "react/jsx-runtime";
function Page({ movie }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: movie.title }),
    "Release Date: ",
    movie.release_date,
    /* @__PURE__ */ jsx("br", {}),
    "Director: ",
    movie.director,
    /* @__PURE__ */ jsx("br", {}),
    "Producer: ",
    movie.producer
  ] });
}
async function onBeforeRender(pageContext) {
  const response = await fetch(`https://star-wars.brillout.com/api/films/${pageContext.routeParams.id}.json`);
  let movie = await response.json();
  movie = filterMovieData(movie);
  const { title } = movie;
  return {
    pageContext: {
      pageProps: {
        movie
      },
      documentProps: {
        // The page's <title>
        title
      }
    }
  };
}
export {
  Page,
  onBeforeRender
};
