import { useEffect, useState } from "react";

function useMovieInfo(title) {
  const [data, setData] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!title) return;

    fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [title, API_KEY]);

  console.log(data);
  return data;
}

export default useMovieInfo;
