import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Setting} from "./components/setting/Setting";
import {Counter} from "./components/counter/Counter";


function App() {


    const [counter, setCounter] = useState(0)

    const [startCounter, setStartCounter] = useState(0)

    const [endCounter, setEndCounter] = useState<number>(0)

    useEffect(() => {
        let counterValueStart = localStorage.getItem("counterValue")
        if (counterValueStart) {
            let newCounterValueStart = JSON.parse(counterValueStart)
            setStartCounter(newCounterValueStart)
            setCounter(newCounterValueStart)
        }
    }, [])

    useEffect(() => {
        let counterValueEnd = localStorage.getItem("counterValueEnd")
        if (counterValueEnd) {
            let newCounterValueStart = JSON.parse(counterValueEnd)
            setEndCounter(newCounterValueStart)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(startCounter))
    }, [startCounter])

    useEffect(() => {
        localStorage.setItem("counterValueEnd", JSON.stringify(endCounter))
    }, [endCounter])



    const onClickHandler = () => {
        if (counter < endCounter)
            setCounter(counter + 1)
    }

    const onClickHandlerDel = () => {
        setCounter(startCounter)
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
                startCounter={startCounter}
                endCounter={endCounter}
                onChangeCounterStart={onChangeCounterStart}
                onChangeCounterEnd={onChangeCounterEnd}
                onClickHandlerSet={onClickHandlerSet}
            />
            <Counter
                endCounter={endCounter}
                counter={counter}
                onClickHandler={onClickHandler}
                onClickHandlerDel={onClickHandlerDel}
                startCounter={startCounter}
            />


        </div>
    );
}

export default App;
