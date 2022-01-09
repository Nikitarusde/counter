import React from "react";


type ActionType = {
    addIncr: () => void,
    clearCounter: () => void,
}

export const Action = (props: ActionType) => {
    return (
        <div>
            <button onClick={props.addIncr}>add</button>
            <button onClick={props.clearCounter}>clear</button>
        </div>
    )
}