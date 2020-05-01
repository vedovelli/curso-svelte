import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import MovieList from "./MovieList.svelte";
import movies from "../../mocks/movies.json";
import moviesBackdropPath from "../../mocks/movies-backdrop-path.json";
import { INITIAL_STATE, store } from "../../store";

const state = (movieList) => {
  store.set({
    ...INITIAL_STATE,
    movies: movieList,
    wasSearched: true,
  });
};

describe("MovieList", () => {
  it("ensures a message is displayed when a search was performed and no movies are returned", () => {
    state([]);

    const { getByText } = render(MovieList);

    expect(getByText("Nenhum filme encontrado")).toBeInTheDocument();
  });

  it("ensures movie list is not displayed when a search was performed and no movies are returned", async () => {
    state([]);

    const { queryByTestId } = render(MovieList);

    expect(await queryByTestId("movie-list")).toBeNull();
  });

  it("toggles selection on MovieCard click", async () => {
    // Arrange
    state(movies.results);

    const { getAllByTestId } = render(MovieList);
    const card = getAllByTestId("movie")[0];

    // Act
    // iteraction 1
    await fireEvent.click(card);

    // Assert
    expect(card).toHaveClass("bg-red-200");

    // iteraction 2
    await fireEvent.click(card);
    expect(card).not.toHaveClass("bg-red-200");
  });

  it("ensures only one card is selected when a card is clicked", async () => {
    // Arrange
    state(movies.results);

    const { getAllByTestId } = render(MovieList);
    const card1 = getAllByTestId("movie")[0];
    const card2 = getAllByTestId("movie")[1];

    // Act
    // iteraction 1
    await fireEvent.click(card1);

    // Assert
    expect(card1).toHaveClass("bg-red-200");
    expect(card2).not.toHaveClass("bg-red-200");
  });

  it("renders a list of 2 movies", () => {
    state(movies.results);
    const { getAllByTestId } = render(MovieList);
    expect(getAllByTestId("movie")).toHaveLength(2);
  });

  it("renders a list of 3 movies even though list of movies contains 4 but one of them without backdrop_path", () => {
    state(moviesBackdropPath.results);
    const { getAllByTestId } = render(MovieList);
    expect(getAllByTestId("movie")).toHaveLength(3);
  });
});
