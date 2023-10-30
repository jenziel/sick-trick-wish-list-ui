import "./App.css";
import React, { useState, useEffect } from "react";
import TrickContainer from "../TrickContainer/TrickContainer";
import Form from "../Form/Form";

function App() {
  const dummyTricks = [
    {
      stance: "regular",
      name: "treflip",
      obstacle: "flat ground",
      tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig",
      id: 1,
    },
    {
      stance: "switch",
      name: "heelflip",
      obstacle: "stairs",
      tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
      id: 2,
    },
    {
      stance: "regular",
      name: "frontside 50-50, backside 180 out",
      obstacle: "ledge",
      tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
      id: 3,
    },
  ];
  const [tricks, setTricks] = useState(dummyTricks);

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
