import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Setting} from "./components/setting/Setting";
import {Counter} from "./components/counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {rootReduceType} from "./components/store/Store";
import {
    ChangeCounterEndAC,
    ChangeCounterStartAC,
    CounterAC,
    InitialStateType,
    StartCounterAC
} from "./components/reducer/Reducer";


function App() {



    // const [counter, setCounter] = useState(0)
    //
    // const [startCounter, setStartCounter] = useState(0)
    //
    // const [endCounter, setEndCounter] = useState<number>(0)

    const counter = useSelector<rootReduceType, number>(state => state.counter.counter);
    const endCounter = useSelector<rootReduceType, number>(state => state.counter.endCounter);
    const startCounter = useSelector<rootReduceType, number>(state => state.counter.startCounter);

    const dispatch = useDispatch()

    // useEffect(() => {
    //     let counterValueStart = localStorage.getItem("counterValue")
    //     if (counterValueStart) {
    //         let newCounterValueStart = JSON.parse(counterValueStart)
    //         setStartCounter(newCounterValueStart)
    //         setCounter(newCounterValueStart)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     let counterValueEnd = localStorage.getItem("counterValueEnd")
    //     if (counterValueEnd) {
    //         let newCounterValueStart = JSON.parse(counterValueEnd)
    //         setEndCounter(newCounterValueStart)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem("counterValue", JSON.stringify(startCounter))
    // }, [startCounter])
    //
    // useEffect(() => {
    //     localStorage.setItem("counterValueEnd", JSON.stringify(endCounter))
    // }, [endCounter])



    const onClickHandler = () => {
        if (counter < endCounter)
            dispatch(CounterAC())
    }

    const onClickHandlerDel = () => {
        dispatch(StartCounterAC())
    }


    const onChangeCounterStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeCounterStartAC(+e.currentTarget.value))
    }

    const onChangeCounterEnd = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeCounterEndAC(+e.currentTarget.value))
    }

    const onClickHandlerSet = () => {
        dispatch(StartCounterAC())
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
