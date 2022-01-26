import React from 'react';
import {Button} from "../button/Button";




type CounterType = {
    counter: number
    error: boolean
    onClickHandler: () => void
    onClickHandlerDel: () => void
 }

export const Counter = ({counter, error, onClickHandler, onClickHandlerDel}: CounterType) => {


    return (
        <div className={"counter"}>
            <div className={"containerCounter"}>
                <div className={error ? "error" : "numberCounter"}>{counter}</div>
            </div>

            <div>
                <Button name={"Add"} callBack={onClickHandler} />
                <Button name={"clean"} callBack={onClickHandlerDel}/>
            </div>
        </div>
    );
};
