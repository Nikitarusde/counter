import {combineReducers, createStore} from "redux";
import {ReducerCounter} from "../reducer/Reducer";

export let rootReduce = combineReducers({
    counter: ReducerCounter
})

export type rootReduceType = ReturnType<typeof rootReduce>
export let store = createStore(rootReduce)