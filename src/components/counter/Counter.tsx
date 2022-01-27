import React from 'react';
import {Button} from "../button/Button";




type CounterType = {
    endCounter: number
    counter: number
    onClickHandler: () => void
    onClickHandlerDel: () => void
    startCounter:number
 }

export const Counter = ({counter, endCounter, onClickHandler, onClickHandlerDel, startCounter}: CounterType) => {

    return (
        <div className={"counter"}>
            <div className={counter === endCounter || counter === 0  ? "containerCounterError" : "containerCounter"}>
                <div className={counter === endCounter || counter === 0  ? "error" : "numberCounter" }>
                    {startCounter === endCounter || startCounter > endCounter || startCounter < 0 || endCounter < 0 ? <div className={"errorText"}>Invalid value entered</div> : <div>{counter}</div>}</div>
            </div>

            <div>
                <Button name={"Add"} callBack={onClickHandler} disable={counter === endCounter}/>
                <Button name={"Clear"} callBack={onClickHandlerDel} disable={counter === 0}/>
            </div>
        </div>
    );
};
