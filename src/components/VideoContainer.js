import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

export default function VideoContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];

  return (
    <div>
      <div className="absolute w-3/4 md:w-1/2 h-3/4 flex flex-col justify-center pl-10 bg-gradient-to-r gap-8 from-black text-white">
        <h1 className="text-xl md:text-6xl font-bold ">{mainMovie?.title}</h1>
        <h3 className=" text-sm md:text-xl w-3/4">{mainMovie?.overview}</h3>
        <div>
          <button
            className="md:py-4 md:text-xl py-2 px-5 md:px-10 rounded-lg text-black bg-white hover:bg-opacity-80"
          >
            ▶ Play
          </button>
          <button
            className="md:py-4 md:text-xl py-2 px-5 md:px-10 rounded-lg bg-slate-400 ml-4 bg-opacity-70"
          >
            ℹ More Info
          </button>
        </div>
      </div>
      <VideoBackground id={mainMovie?.id} />
    </div>
  );
}
