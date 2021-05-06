import React from "react";
import convertTime from "../helpers/convertTime";
import inputs from "../helpers/inputsConfig";

const MoviesList = ({ movies }) => {
  return (
    <table className="min-w-full table-auto">
      <thead className="justify-between">
        <tr className="bg-gray-800">
          {inputs.map((input) => (
            <th key={input.name} className="px-16 py-2 text-gray-200">
              {input.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {movies.map(({ movie, rating, duration }) => (
          <tr
            className="bg-white border-4 border-gray-200 text-center ml-2 font-semibold"
            key={movie}
          >
            <td>{movie}</td>
            <td>{rating}</td>
            <td>{convertTime(duration)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesList;
