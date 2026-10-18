import React from "react";

function MovieCard({
  title,
  poster,
  rating,
  desc = "Description not available",
  director,
  year,
  genre = [],
}) {
  return (
    <div className="w-70 rounded-xl overflow-hidden shadow-lg bg-slate-900 border border-slate-800 text-white transition-transform duration-300 hover:scale-105 flex flex-col">
      <div className="relative h-76 w-full bg-slate-950 shrink-0 flex items-center justify-center">
        <img
          src={poster}
          alt={`${title} Poster`}
          className="w-full h-full object-contain"
        />
        <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-amber-400 border border-amber-500/30">
          <span>★</span>
          <span>{rating}</span>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2.5 grow">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-bold tracking-tight text-slate-100 line-clamp-2">
            {title}
          </h3>
          <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded shrink-0">
            {year}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {genre.map((g, index) => (
            <span
              key={index}
              className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded font-medium"
            >
              {g}
            </span>
          ))}
        </div>

        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed grow">
          {desc}
        </p>

        <div className="pt-2.5 mt-1 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 truncate">
            {director}
          </span>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold px-3 py-1.5 rounded-md transition-colors cursor-pointer shrink-0">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
