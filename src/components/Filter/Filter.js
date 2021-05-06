import React from "react";

const Filter = ({ onChangeFilter, filterValue }) => {
  const handleChangeFilter = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <input
      type="text"
      className="border-2 border-gray-300 p-2 w-full my-7"
      placeholder="Find movies by name..."
      value={filterValue}
      onChange={handleChangeFilter}
    />
  );
};

export default Filter;
