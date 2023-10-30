import React, { useState } from "react";
import "./Form.css";

function Form({ addTrick }) {
  const [stance, setStance] = useState("");
  const [trickName, setTrickName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [link, setLink] = useState("");

  function submitTrick(event) {
    event.preventDefault()
    const newTrick = {
        id: Date.now(),
        stance,
        trickName,
        obstacle,
        link
    }
    addTrick(newTrick)
    clearInput()
}
function clearInput(){
    setStance("")
    setTrickName("")
    setObstacle("")
    setLink("")
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
        type='text'
        placeholder='Name of Trick'
        name='trickName'
        value={trickName}
        onChange={(event) => setTrickName(event.target.value)}
      />
      <select
        name='obstacle'
        value={obstacle}
        onChange={(event) => setObstacle(event.target.value)}
      >
        <option value='' disabled>
          Choose your Obstacle
        </option>
        <option value='Flatground'>Flatground</option>
        <option value='Ledge '>Ledge </option>
        <option value='Rail '>Rail </option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>

      <input
        type='text'
        placeholder='Link to Tutorial'
        name='link'
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <button className='submit-btn' onClick = { event => submitTrick(event)}>Send it!</button>
    </div>
  );
}

export default Form;
