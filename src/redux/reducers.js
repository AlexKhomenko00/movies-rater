import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./actions";

const addMovie = (state, { payload }) => {
  if (state.find((movie) => movie.movie === payload.movie)) {
    return state.map((movie) =>
      movie.name === payload.name ? { ...payload } : movie
    );
  }
  return [...state, payload];
};

const movies = createReducer([], {
  [actions.addMovie]: addMovie,
  [actions.removeMovie]: (state, { payload }) =>
    state.filter((movie) => movie.id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  movies,
  filter,
});
