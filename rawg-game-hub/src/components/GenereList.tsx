import React from "react";
import useGeneres from "../hooks/useGenres";

const GenereList = () => {
  const { genres } = useGeneres();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
