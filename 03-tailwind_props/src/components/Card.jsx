import React from 'react'

function Card({
  title = "Title Here",
  album = "Album name",
  pic = "https://tailwindcss.com/_next/static/media/cover.0g8-x6e87bh6a.png",
  myArr = [1, 'a', 333]
}) {
  // console.log(props)
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-3 md:flex-row md:gap-8 rounded-2xl bg-slate-900 m-5">
        <div>
          <img className="size-48 shadow-xl rounded-md" alt="" src={pic} />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">{title}</span>
          <span className="font-medium text-sky-500">{album}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>{myArr}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card 