import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {v1} from "uuid";



function App() {
    const title: string = "Counter"
    const startCounter = 0;
    const endCounter = 5;

    const [counter, setCounter] = useState<number>(startCounter);

    function addIncr ()  {
        if(counter < endCounter){
            setCounter (counter + 1)
        }
    }

    function  clearCounter () {
        setCounter(startCounter)
    }


  return (
    <div className="App">
        <Counter
            counter={counter}
            title={title}
            addIncr={addIncr}
            clearCounter={clearCounter}
        />
    </div>
  );
}

export default App;
