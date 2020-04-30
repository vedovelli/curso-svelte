import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/svelte";

import MovieSearch from "./MovieSearch.svelte";

describe("MovieSearch", () => {
  it("mounts the component and displays a form", () => {
    const { getByTestId } = render(MovieSearch);

    expect(getByTestId("search-form")).toBeInTheDocument();
  });

  it("mounts the component and displays a text input", () => {
    const { getByTestId } = render(MovieSearch);

    expect(getByTestId("search-input")).toBeInTheDocument();
  });
});
