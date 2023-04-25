import fetch from "node-fetch";
import { f as filterMovieData } from "../../../chunks/chunk-337a7715.js";
async function onBeforeRender() {
  await sleep(700);
  const movies = await getStarWarsMovies();
  return {
    pageContext: {
      pageProps: {
        // We remove data we don't need because we pass `pageContext.movies` to
        // the client; we want to minimize what is sent over the network.
        movies: filterMoviesData(movies)
      },
      // The page's <title>
      documentProps: { title: getTitle(movies) }
    }
  };
}
async function getStarWarsMovies() {
  const response = await fetch("https://star-wars.brillout.com/api/films.json");
  let movies = (await response.json()).results;
  movies = movies.map((movie, i) => ({
    ...movie,
    id: String(i + 1)
  }));
  return movies;
}
function filterMoviesData(movies) {
  return movies.map((movie) => {
    const { title, release_date, id } = movie;
    return { title, release_date, id };
  });
}
async function prerender() {
  const movies = await getStarWarsMovies();
  return [
    {
      url: "/star-wars",
      // We already provide `pageContext` here so that `vite-plugin-ssr`
      // will *not* have to call the `onBeforeRender()` hook defined
      // above in this file.
      pageContext: {
        pageProps: {
          movies: filterMoviesData(movies)
        },
        documentProps: { title: getTitle(movies) }
      }
    },
    ...movies.map((movie) => {
      const url = `/star-wars/${movie.id}`;
      return {
        url,
        // Note that we can also provide the `pageContext` of other pages.
        // This means that `vite-plugin-ssr` will not call any
        // `onBeforeRender()` hook and the Star Wars API will be called
        // only once (in this `prerender()` hook).
        pageContext: {
          pageProps: {
            movie: filterMovieData(movie)
          },
          documentProps: { title: movie.title }
        }
      };
    })
  ];
}
function getTitle(movies) {
  const title = `${movies.length} Star Wars Movies`;
  return title;
}
function sleep(milliseconds) {
  return new Promise((r) => setTimeout(r, milliseconds));
}
export {
  onBeforeRender,
  prerender
};
