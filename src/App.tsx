import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Setting} from "./components/setting/Setting";
import {Counter} from "./components/counter/Counter";


function App() {


    const [counter, setCounter] = useState(0)
    const [error, setError] = useState(false)


    const [startCounter, setStartCounter] = useState(0)

    const [endCounter, setEndCounter] = useState<number>(0)

    const onClickHandler = () => {
        if (counter < endCounter)
            setCounter(counter + 1)
    }




    const onClickHandlerDel = () => {
        setCounter(0)
    }


    const onChangeCounterStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartCounter(+e.currentTarget.value)
    }

    const onChangeCounterEnd = (e: ChangeEvent<HTMLInputElement>) => {
        setEndCounter(+e.currentTarget.value)
    }

    const onClickHandlerSet = () => {
        setCounter(startCounter)
    }

    return (
        <div className="App">

            <Setting
                onChangeCounterStart={onChangeCounterStart}
                onChangeCounterEnd={onChangeCounterEnd}
                onClickHandlerSet={onClickHandlerSet}
            />
            <Counter
                error={error}
                counter={counter}
                onClickHandler={onClickHandler}
                onClickHandlerDel={onClickHandlerDel}
            />


        </div>
    );
}

export default App;
