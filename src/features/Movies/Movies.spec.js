import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Movies from "../Movies/Movies.svelte";

describe("Movies", () => {
  it("mounts MovieSearch and MovieList", () => {
    const { getByTestId } = render(Movies);

    expect(getByTestId("movie-search")).toBeInTheDocument();
    expect(getByTestId("movie-list")).toBeInTheDocument();
  });
});
