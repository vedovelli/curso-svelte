import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/svelte";

import MovieList from "./MovieList.svelte";

import movies from "../../mocks/movies.json";
import moviesBackdropPath from "../../mocks/movies-backdrop-path.json";

import { INITIAL_STATE, store } from "../../store";

describe("MovieList", () => {
  it("renders a list of 2 movies", () => {
    store.set({
      ...INITIAL_STATE,
      movies: movies.results,
      wasSearched: true,
    });

    const { getAllByTestId } = render(MovieList);

    expect(getAllByTestId("movie")).toHaveLength(2);
  });

  it("renders a list of 3 movies even though list of movies contains 4 but one of them without backdrop_path", () => {
    store.set({
      ...INITIAL_STATE,
      movies: moviesBackdropPath.results,
      wasSearched: true,
    });

    const { getAllByTestId } = render(MovieList);

    expect(getAllByTestId("movie")).toHaveLength(3);
  });
});
