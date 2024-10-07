import React, { useEffect } from "react";
import Header from "./Header";
import { API_CONSTANTS } from "../utils/constanst";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

export default function Browser() {
  const dispatch = useDispatch();
  async function fetchMovies() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      API_CONSTANTS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addNowPlayingMovies(response.results)))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}
