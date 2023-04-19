import React from "react";
import { addToLocalStorage } from "../utils/storeData";

function ShowDataFromOtherComponent(props) {
  const { name, id } = props.student;
  const addFriend = (id) => {
    addToLocalStorage(id);
  };

  return (
    <div className="single-student">
      <h3>Student name: {name}</h3>
      <h3>Student id: {id}</h3>

      <button onClick={() => addFriend(id)}>Add Friend</button>
    </div>
  );
}

export default ShowDataFromOtherComponent;
