import React from "react";
import { useLoaderData, Link } from "react-router-dom";

function Details() {
  const details = useLoaderData();
  const img = details.data.phonesFindById.image;
  return (
    <div>
      <h4>Details</h4>
      <img src={img} alt="" />
    </div>
  );
}

export default Details;
