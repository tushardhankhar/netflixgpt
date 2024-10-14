import React, { useEffect, useState } from "react";
import { API_CONSTANTS } from "../utils/constanst";
export default function VideoBackground({ id }) {
  const [trailerId, setTrailerId] = useState();
  function getVideo(params) {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_CONSTANTS
      )
        .then((response) => response.json())
        .then((response) => {
          const trailer = response?.results?.filter(
            (movie) => movie.type === "Trailer"
          );
          const trailerKey = trailer ? trailer[0].key : response.results[0].key;
          setTrailerId(trailerKey);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="h-screen">
      <div className="h-1/2 md:h-full w-full">
        <iframe
          className="w-full h-full md:h-1vh"
          src={
            "https://www.youtube.com/embed/" + trailerId + "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
