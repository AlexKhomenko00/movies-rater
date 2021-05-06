import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter/Filter";
import types from "../redux/types";

const FilterContainer = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filter);

  const handleChangeFilter = (value) => {
    dispatch({ type: types.CHANGE_FILTER, payload: value });
  };

  return (
    <Filter onChangeFilter={handleChangeFilter} filterValue={filterValue} />
  );
};

export default FilterContainer;
