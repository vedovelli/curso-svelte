import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import MovieList from "../Movies/MovieList.svelte";
import { store, INITIAL_STATE } from "../../store";
import moviesMock from "../../mocks/movie.json";

const setStore = ({ movies }) => {
  store.set({
    ...INITIAL_STATE,
    wasSearched: true,
    movies,
  });
};

describe("MovieList", () => {
  it("renders a message when a search was made and no movies are returned", () => {
    setStore({ movies: [] });

    const { getByText } = render(MovieList);

    expect(getByText("Nenhum filme encontrado")).toBeInTheDocument();
  });

  it("renders movie list when a search was made and movies are returned", () => {
    setStore({ movies: moviesMock.results });

    const { getByTestId } = render(MovieList);

    expect(getByTestId("movie-list")).toBeInTheDocument();
  });

  it("renders movie list with 2 movies even when the list contains more movies but only 2 of them contain backdrop_path", () => {
    setStore({ movies: moviesMock.results });

    const { getByTestId } = render(MovieList);

    expect(getByTestId("movie-list")).toBeInTheDocument();
  });

  it("select a movie card when a movie item gets clicked", async () => {
    setStore({ movies: moviesMock.results });

    const { getAllByTestId } = render(MovieList);

    const card = getAllByTestId("movie-item")[0];

    await fireEvent.click(card);

    expect(card).toHaveClass("bg-red-200");
  });

  it("toggles card selection when a card is clicked a second time", async () => {
    setStore({ movies: moviesMock.results });

    const { getAllByTestId } = render(MovieList);

    const card = getAllByTestId("movie-item")[0];

    await fireEvent.click(card);
    expect(card).toHaveClass("bg-red-200");

    await fireEvent.click(card);
    expect(card).not.toHaveClass("bg-red-200");
  });

  it("removes select from the first clicked card when a second card is clicked", async () => {
    setStore({ movies: moviesMock.results });

    const { getAllByTestId } = render(MovieList);

    const [card1, card2] = getAllByTestId("movie-item");

    await fireEvent.click(card1);
    expect(card1).toHaveClass("bg-red-200");
    expect(card2).not.toHaveClass("bg-red-200");

    await fireEvent.click(card2);
    expect(card1).not.toHaveClass("bg-red-200");
    expect(card2).toHaveClass("bg-red-200");
  });
});
