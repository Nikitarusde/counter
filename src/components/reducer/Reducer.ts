

export type InitialStateType = {
    startCounter: number
    counter: number
    endCounter: number
}

const initialState = {
    counter: 0,
    startCounter: 0,
    endCounter: 0
}

export const ReducerCounter = (state: InitialStateType = initialState, action:GeneralType): InitialStateType => {
    switch (action.type){
        case "COUNTER-INIT":{
                return  {...state, counter: state.counter +1}
        }
        case "START-COUNTER": {
            return {...state, counter: state.startCounter}
        }
        case "CHANGE-COUNTER-START": {
            return {...state, startCounter: action.payload.startCounter}
        }
        case "CHANGE-COUNTER-END": {
            return {...state, endCounter: action.payload.endCounter}
        }
        default: return state
    }
}
type GeneralType = CounterACType | StartCounterACType | ChangeCounterStartACType | ChangeCounterEndACType

type CounterACType = ReturnType<typeof CounterAC>
export const CounterAC = () => {
    return{
        type: "COUNTER-INIT",
    }as const
}
type StartCounterACType = ReturnType<typeof StartCounterAC>
export const StartCounterAC = () => {
    return{
        type: "START-COUNTER",
    }as const
}
type ChangeCounterStartACType = ReturnType<typeof ChangeCounterStartAC>
export const ChangeCounterStartAC = (startCounter:number) => {
    return{
        type: "CHANGE-COUNTER-START",
        payload: {startCounter}
    }as const
}

type ChangeCounterEndACType = ReturnType<typeof ChangeCounterEndAC>
export const ChangeCounterEndAC = (endCounter:number) => {
    return{
        type: "CHANGE-COUNTER-END",
        payload: {endCounter}
    }as const
}
