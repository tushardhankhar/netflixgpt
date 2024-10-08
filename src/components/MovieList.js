import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  return (
    <div className="p-4 px-10">
      <div className="text-3xl font-bold mb-4 text-white">{title}</div>
      <div className=" flex overflow-x-scroll h-full custom-scroll">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
