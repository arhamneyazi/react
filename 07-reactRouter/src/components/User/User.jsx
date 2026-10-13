import React from "react";
import { useParams } from "react-router";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-red-500 text-green-500 text-center text-3xl font-bold py-5">
      {userid ? `User: ${userid}` : "User"}
    </div>
  );
}

export default User;
