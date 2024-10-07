import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

export default function VideoContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);

  return (
    <div>
      <div className="absolute w-1/2 h-screen flex flex-col justify-center pl-10 bg-gradient-to-r gap-8 from-black text-white">
        <h1 className="text-6xl font-bold ">{mainMovie?.title}</h1>
        <h3 className="text-xl w-3/4">{mainMovie?.overview}</h3>
        <div>
          <button
            className="py-4 text-xl px-10 rounded-lg text-black bg-white hover:bg-opacity-80"
          >
            ▶ Play
          </button>
          <button
            className="py-4 text-xl px-10 rounded-lg bg-slate-400 ml-4 bg-opacity-70"
          >
            ℹ More Info
          </button>
        </div>
      </div>
      <VideoBackground id={mainMovie?.id} />
    </div>
  );
}
