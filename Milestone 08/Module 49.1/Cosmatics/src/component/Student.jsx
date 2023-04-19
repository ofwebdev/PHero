import React, { useEffect, useState } from "react";

import ShowDataFromOtherComponent from "./ShowDataFromOtherComponent";

export default function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="grid-layout">
      {students.map((student) => (
        <ShowDataFromOtherComponent
          key={student.id}
          student={student}
        ></ShowDataFromOtherComponent>
      ))}
    </div>
  );
}
