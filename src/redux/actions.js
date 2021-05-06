/* eslint-disable import/no-anonymous-default-export */
import { v4 as uuidv4 } from "uuid";
import types from "./types";
import { createAction } from "@reduxjs/toolkit";

const addMovie = createAction(types.ADD, (name, rating, duration) => ({
  payload: {
    movie: { id: uuidv4(), name, rating, duration },
  },
}));

const removeMovie = createAction(types.REMOVE);

const changeFilter = createAction(types.CHANGE_FILTER);

export default {
  addMovie,
  removeMovie,
  changeFilter,
};
