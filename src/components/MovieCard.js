import React from "react";
import { IMG_URL } from "../utils/constanst";

export default function MovieCard({ movie }) {
  return (
    <div className="w-56">
      <img src={IMG_URL + movie.poster_path} alt="" />
    </div>
  );
}
