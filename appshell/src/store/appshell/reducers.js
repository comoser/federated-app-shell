export const SET_APP_SHELL_REQUEST = "@APP_SHELL/SET_APP_SHELL_REQUEST";

const initialState = {
    isLoading: false,
    appShellCounter: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_APP_SHELL_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        default:
            return state;
    }
}
