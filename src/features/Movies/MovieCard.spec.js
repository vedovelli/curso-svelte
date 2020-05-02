import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import MovieCard from "../Movies/MovieCard.svelte";
import moviesMock from "../../mocks/movie.json";

describe("MovieCard", () => {
  it("renders the movie poster with proper data", () => {
    const [movie] = moviesMock.results;

    const { getByAltText } = render(MovieCard, { movie });

    const image = getByAltText(`Poster: ${movie.title}`);

    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty(
      "src",
      "https://image.tmdb.org/t/p/original/kaPTm06WnoqaHOgGbQaRCrupaKo.jpg"
    );
  });

  it("renders movie card with all relevant content", () => {
    const [movie] = moviesMock.results;

    movie.friendly_date = new Date(movie.release_date).toLocaleDateString();

    const { getByText } = render(MovieCard, { movie });

    expect(getByText("Men in Black")).toBeInTheDocument();

    const exactAssertions = [
      "com 9337 votos",
      "7.1",
      "7/2/1997",
      "and new recruit Agent Jay",
    ];

    exactAssertions.forEach((item) => {
      expect(getByText(item, { exact: false })).toBeInTheDocument();
    });
  });
});
