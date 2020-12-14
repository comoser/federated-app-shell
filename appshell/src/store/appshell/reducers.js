export const SET_APP_SHELL_REQUEST = "SET_APP_SHELL_REQUEST";
export const SET_APP_SHELL_SUCCESS = "SET_APP_SHELL_SUCCESS";
export const SET_APP_SHELL_ERROR = "SET_APP_SHELL_ERROR";

const initialState = {
    isLoading: false,
    appShellCounter: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_APP_SHELL_REQUEST:
            return {
                isLoading: true,
            };
        case SET_APP_SHELL_SUCCESS:
            return {
                isLoading: false,
            };
        case SET_APP_SHELL_ERROR:
            return {
                isLoading: false,
            };

        default:
            return state;
    }
}
