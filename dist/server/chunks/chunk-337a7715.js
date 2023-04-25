function filterMovieData(movie) {
  const { id, title, release_date, director, producer } = movie;
  movie = { id, title, release_date, director, producer };
  return movie;
}
export {
  filterMovieData as f
};
