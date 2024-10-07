import React, { useEffect } from "react";
import Header from "./Header";
import { API_CONSTANTS } from "../utils/constanst";

export default function Browser() {
  async function fetchMovies() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      API_CONSTANTS
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
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
