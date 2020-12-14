import { SET_APP_SHELL_ERROR, SET_APP_SHELL_REQUEST, SET_APP_SHELL_SUCCESS } from "./reducers";

export const SetAppShellLoading = () => {
    return {
        type: SET_APP_SHELL_REQUEST,
    }
}

export const SetAppShellSuccess = () => {
    return {
        type: SET_APP_SHELL_SUCCESS,
    }
}

export const SetAppShellError = () => {
    return {
        type: SET_APP_SHELL_ERROR,
    }
}
