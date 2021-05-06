import React from "react";
import { useDispatch } from "react-redux";
import RatingForm from "../components/RatingForm/RatingForm";
import types from "../redux/types";

const RatingFormContainer = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch({ type: types.ADD, payload: data });
  };

  return <RatingForm onSubmit={handleSubmit} />;
};

export default RatingFormContainer;
