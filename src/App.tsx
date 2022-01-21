import React, {ChangeEvent, useState} from 'react';
import './App.css';




function App() {


    const [counter, setCounter] = useState(0)
    const onClickHandler = () => {
        if(counter < endCounter)
        setCounter(counter+1)
    }
    const onClickHandlerDel = () => {
        setCounter(0)
    }

    const [startCounter, setStartCounter] = useState(0)

    const onChangeCounterStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartCounter(+e.currentTarget.value)
    }
    const onClickHandlerSet = () => {
        setCounter(startCounter)
    }

    const [endCounter, setEndCounter] = useState(0)
    const onChangeCounterEnd = (e: ChangeEvent<HTMLInputElement>) => {
        setEndCounter(+e.currentTarget.value)
    }


  return (
    <div className="App">


        <div>
            <div>
                <div>Max<input type="number" onChange={onChangeCounterEnd}/></div>
                <div>Min <input type="number" onChange={onChangeCounterStart}/></div>
                <button onClick={onClickHandlerSet}>Set</button>
            </div>
        </div>

        <div>
            <div>{counter}</div>
            <div>
                <button onClick={onClickHandler}>Add</button>
                <button onClick={onClickHandlerDel}>clean</button>
            </div>
        </div>
    </div>
  );
}

export default App;
