import { Fragment, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const styles = {
  card: {
    width: "300px",
    backgroundColor: "#c5c5c5",
    border: "1px solid red",
    margin: "10px",
    color: "#000",
    borderRadius: "8px",
  },
  card2: {
    width: "300px",
    backgroundColor: "#fafafa",
    border: "1px solid red",
    margin: "10px",
    color: "#000",
    borderRadius: "8px",
  },
};

function App() {
  return (
    <div className="App">
      <ExtUesr />
      <Counter></Counter>
      <Person name="Omor Faruk" profession="Web Developer"></Person>
      <Person name="Tushy" profession="Nurse"></Person>
    </div>
  );
}

function ExtUesr() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>External User {user.length}</h1>

      {user.map((u) => (
        <ShowUserName name={u.name} email={u.email} />
      ))}
    </div>
  );
}

function ShowUserName(props) {
  return (
    <div style={styles.card2}>
      <div>{props.name}</div>
      <p>{props.email}</p>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((lol) => lol + 1)}>Count ⬆️</button>
      <button onClick={() => setCount(count - 1)}>Count ⬇️</button>
    </div>
  );
}

function Person(props) {
  console.log(props.name);
  return (
    <div style={styles.card}>
      <h1>{props.name}</h1>
      <p>Profession: {props.profession}</p>
      {/* <Details
        email="onlineaid.dev@gmail.com"
        mobile="+8801771133111"
      ></Details> */}
    </div>
  );
}

function Details(props) {
  return (
    <div style={styles.card2}>
      <p>{props.email}</p>
      <p>{props.mobile}</p>
    </div>
  );
}

export default App;
