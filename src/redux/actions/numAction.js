import { numActions } from "../reducers/numReducer";

function increase() {
    return (dispatch, getState) => {
        dispatch(numActions.increase());
    };
}

function decrease() {
    return (dispatch, getState) => {
        dispatch(numActions.decrease());
    };
}

function deleteNum() {
    return (dispatch, getState) => {
        dispatch(numActions.deleteNum());
    };
}

export const numAction = { increase, decrease, deleteNum };