import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/svelte";

import Movies from "./Movies.svelte";

describe("Movies", () => {
  it("mounts the MovieSearch component", () => {
    const { getByTestId } = render(Movies);

    expect(getByTestId("movie-search")).toBeInTheDocument();
  });

  it("mounts the MovieList component", () => {
    const { getByTestId } = render(Movies);

    expect(getByTestId("movie-list")).toBeInTheDocument();
  });
});
