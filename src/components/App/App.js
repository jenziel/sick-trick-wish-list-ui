import "./App.css";
import React, { useState, useEffect } from "react";
import TrickContainer from "../TrickContainer/TrickContainer";
import Form from "../Form/Form";

function App() {
  const [tricks, setTricks] = useState([]);

  function addTrick(newTrick) {
    setTricks([...tricks, newTrick]);
  }

  const getTricks = () => {
    return fetch("http://localhost:3001/api/v1/tricks").then((response) => {
      if (!response.ok) {
        throw new Error("Oh no! Something went wrong.");
      }
      return response.json();
    });
  };
  
  function displayTricks() {
    getTricks()
    .then((data) => {
      console.log(data);
      setTricks(data);
    })
    .then(()=> console.log(tricks, "tricks"))
    .catch((error) => console.log("error message:", error.message));
  }

  useEffect(() => {
    displayTricks();
  }, []);

  return (
    <div className='App'>
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick} />
      <TrickContainer tricks={tricks} />
    </div>
  );
}

export default App;
