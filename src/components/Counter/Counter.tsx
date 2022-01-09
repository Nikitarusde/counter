import React from "react";
import {Action} from "./Acrion/Action";
import {Screen} from "./Screen/Screen";


type CounterType = {
    counter: number
    title: string
    addIncr: () => void,
    clearCounter: () => void,
}

export const Counter = (props: CounterType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <Screen
                counter={props.counter}
            />
            <Action
                addIncr={props.addIncr}
                clearCounter={props.clearCounter}
            />
        </div>
    )
}