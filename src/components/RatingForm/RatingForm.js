import React, { useReducer } from "react";
import inputs from "./config";

const initialState = {
  movie: "",
  rating: 0,
  duration: 0,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "movie":
      return { ...state, movie: payload };
    case "rating":
      return { ...state, rating: payload };
    case "duration":
      return { ...state, duration: payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const RatingForm = ({ onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    dispatch({ type: "reset" });
  };

  const handleInput = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {inputs.map(({ label, name, type }) => {
        return (
          <label key={name}>
            <span className="text-xl text-gray-600"> {label}</span>
            <input
              required
              className="border-2 border-gray-300 p-2 w-full mb-2"
              type={type}
              name={name}
              value={state[name]}
              onChange={handleInput}
              max={name === "durat" ? (name === "rating" ? 5 : 1440) : "false"}
              min="0"
            />
          </label>
        );
      })}
      <button
        className="p-3 mt-3 bg-blue-500 text-white hover:bg-blue-400"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default RatingForm;
