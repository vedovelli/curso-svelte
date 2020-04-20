import { API_KEY, http } from "./http";
import { INITIAL_STATE, store } from "../store";

export const fetchMovies = async (term) => {
  const {
    data: { results: movies },
  } = await http.get(`movie?api_key=${API_KEY}&query=${term}`);

  store.set({
    ...INITIAL_STATE,
    movies,
  });
};
