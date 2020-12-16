import {SET_APP_SHELL_REQUEST, UPDATE_USER, UPDATE_USER_GLOBAL} from "./reducers";

export const SetAppShellLoading = () => {
    return {
        type: SET_APP_SHELL_REQUEST,
    }
}

export const UpdateUser = () => {
    return {
        type: UPDATE_USER,
    }
}

export const DispatchGlobalAction = () => {
    return {
        type: UPDATE_USER_GLOBAL,
        payload: {
            auth_user: 'jane doe',
        }
    }
}
