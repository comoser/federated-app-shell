import {DECREMENT_REQUEST, INCREMENT_REQUEST} from "./reducers";

export const Increment = () => {
    return {
        type: INCREMENT_REQUEST,
        payload: null,
    }
}

export const Decrement = () => {
    return {
        type: DECREMENT_REQUEST,
        payload: null,
    }
}
