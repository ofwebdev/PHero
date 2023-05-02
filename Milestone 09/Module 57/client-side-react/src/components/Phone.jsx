import React from "react";
import { useLoaderData, Link } from "react-router-dom";

function Phone() {
  const phones = useLoaderData();
  return (
    <div>
      <h1>All phone here </h1>
      {phones.map((phone) => (
        <div key={phone.id}>
          <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Phone;
