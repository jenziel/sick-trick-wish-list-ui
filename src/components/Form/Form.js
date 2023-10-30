import React, { useState } from "react";
import "./Form.css";

function Form({ addTrick }) {
  const [stance, setStance] = useState("");
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [tutorial, setTutorial] = useState("");

  function submitTrick(event) {
    event.preventDefault()
    const newTrick = {
        id: Date.now(),
        stance,
        name,
        obstacle,
        tutorial
    }
    addTrick(newTrick)
    clearInput()
}
function clearInput(){
    setStance("")
    setName("")
    setObstacle("")
    setTutorial("")
}
  return (
    <div className='form'>
      <select
        className='stance'
        name='stance'
        value={stance}
        onChange={(event) => setStance(event.target.value)}
      >
        <option value='' disabled>
          Choose your stance
        </option>
        <option value='regular'>regular</option>
        <option value='switch'>switch</option>
      </select>
      <input
        className='trick-name'
        type='text'
        placeholder='Name of Trick'
        name='name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <select
        name='obstacle'
        value={obstacle}
        onChange={(event) => setObstacle(event.target.value)}
      >
        <option value='' disabled className='obstacle'>
          Choose your Obstacle
        </option>
        <option value='Flatground'>Flatground</option>
        <option value='Ledge '>Ledge </option>
        <option value='Rail '>Rail </option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>

      <input
        className='tutorial'
        type='text'
        placeholder='Link to Tutorial'
        name='tutorial'
        value={tutorial}
        onChange={(event) => setTutorial(event.target.value)}
      />
      <button className='submit-btn' onClick = { event => submitTrick(event)}>Send it!</button>
    </div>
  );
}

export default Form;
