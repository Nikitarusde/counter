import React from "react";

type ScreenType = {
    counter: number
}

export const Screen = (props: ScreenType) => {
    return (
        <div>
            {props.counter}
        </div>
    )
}