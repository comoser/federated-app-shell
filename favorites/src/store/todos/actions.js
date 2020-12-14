import {SET_LOADING_ERROR, SET_LOADING_REQUEST, SET_LOADING_SUCCESS} from "./reducers";

export const SetLoading = () => {
    return {
        type: SET_LOADING_REQUEST,
    }
}

export const SetLoadedSuccess = () => {
    return {
        type: SET_LOADING_SUCCESS,
    }
}

export const SetLoadedError = () => {
    return {
        type: SET_LOADING_ERROR,
    }
}
