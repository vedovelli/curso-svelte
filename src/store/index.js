import { writable } from "svelte/store";

export const INITIAL_STATE = {
  movies: [],
};

export const store = writable({ ...INITIAL_STATE });
