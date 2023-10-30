import './App.css';
import React, {useState} from 'react';
import Tricks from '../Tricks/Tricks'
import Form from '../Form/Form'

function App() {
  const [tricks, setTricks] = useState([])

  function addTrick(newTrick) {
    setTricks([...tricks, newTrick]);
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      < Form addTrick={addTrick}/>
      <Tricks tricks={tricks}/>
    </div>
  );
}

export default App; 
