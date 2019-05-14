import React from 'react';
import './App.css';
import { Greet } from './component/Greet';
import Message from './component/Message';

function App() {
  return (
    <div className="App">
    <Message/>
    <Greet name="AAA"></Greet>
     {/* <Greet name="AAA">
      <button> TEST </button>
      </Greet>
      <Greet  name="BBB"/>
      <Greet  name="CCC"/>

      <Welcome name="AAA" heroName ="asdf"/>
      <Welcome name="BBB" heroName ="bsdf"/>
  <Hello />*/}
    </div>
  );
}

export default App;
