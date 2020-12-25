import { createReducer, on } from "@ngrx/store";
import { decrement, dividir, increment, multiplicar, reset } from "./contador.actions";


/*export function contadorReducer(state: number = 10, action: Action){


    switch(action.type){
        case increment.type:
            return state + 1
        case decrement.type:
            return state - 1
        default:
            return state
    }

}*/

export const initialState = 10;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(multiplicar, (state, props) => state * props.numero),
    on(dividir, (state, props) => state / props.numero),
    on(reset, (state, props) => props.numero),
  );


export function contadorReducer(state, action) {
    return _counterReducer(state, action);
}