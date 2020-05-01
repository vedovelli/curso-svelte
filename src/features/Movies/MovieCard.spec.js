import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import MovieCard from "./MovieCard.svelte";
import movies from "../../mocks/movies.json";

const { results } = movies;
const movie = results[0];

movie.friendly_date = new Date(movie.release_date).toLocaleDateString();

describe("MovieCard", () => {
  it("loads a card with all data", () => {
    const { getByText, getByAltText } = render(MovieCard, { movie });

    expect(getByText("Men in Black")).toBeInTheDocument();

    expect(getByText("7.1")).toBeInTheDocument();

    expect(
      getByText("Lançamento: 7/2/1997", { exact: false })
    ).toBeInTheDocument();

    expect(getByText("com 9325 votos", { exact: false })).toBeInTheDocument();

    expect(
      getByText("After a police chase with an otherworldly", { exact: false })
    ).toBeInTheDocument();

    expect(getByAltText(`Poster: ${movie.title}`)).toBeInTheDocument();
  });
});
