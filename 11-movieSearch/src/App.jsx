import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import MovieCard from "./components/MovieCard";
import useMovieInfo from "./hooks/useMovieInfo.js";

function App() {
  const [title, setTitle] = useState("");
  const movieInfo = useMovieInfo(title);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <div className="pt-12 px-4 w-full">
        <SearchBox onSearch={(submittedTitle) => setTitle(submittedTitle)} />
      </div>
      <div className="flex grow items-center justify-center p-8">
        {movieInfo && movieInfo["Title"] && (
          <MovieCard
            title={movieInfo["Title"]}
            poster={movieInfo["Poster"]}
            rating={movieInfo["imdbRating"]}
            desc={movieInfo["Plot"]}
            director={movieInfo["Director"]}
            year={movieInfo["Year"]}
            genre={movieInfo["Genre"] ? movieInfo["Genre"].split(", ") : []}
          />
        )}
      </div>
    </div>
  );
}

export default App;
