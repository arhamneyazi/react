import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function GitHub() {
  const data = useLoaderData();

  /* const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/arhamneyazi`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []); */

  return (
    <div className="text-center text-3xl font-extrabold bg-gray-800 text-white m-4 p-4">
      GitHub Followers: {data.followers}
      <img
        src={data.avatar_url}
        width={200}
        alt="GitHub Profile Picture"
        className="rounded-full"
      />
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/arhamneyazi`);
  if (!response.ok) {
    throw new Response("Could not load data from GitHub", {
      status: response.status,
    });
  }
  return response.json();
};
