export const SET_APP_SHELL_REQUEST = "@APP_SHELL/SET_APP_SHELL_REQUEST";
export const UPDATE_USER = "@APP_SHELL/UPDATE_USER_REQUEST";
export const UPDATE_USER_GLOBAL = "@APP_SHELL/UPDATE_USER_GLOBAL_REQUEST";


const initialState = {
    isLoading: false,
    appShellCounter: 0,
    user: 'john doe',
    auth_user: 'foo bar',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_APP_SHELL_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case UPDATE_USER:
            return {
                ...state,
                user: 'jane doe',
            }

        case UPDATE_USER_GLOBAL:
            return {
                ...state,
                auth_user: action.payload.auth_user,
            }

        default:
            return state;
    }
}
