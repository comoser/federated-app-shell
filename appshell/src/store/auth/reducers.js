export const UPDATE_USER = "@APP_SHELL/UPDATE_USER_REQUEST";

const initialState = {
    user: 'john doe',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload.user,
            }

        default:
            return state;
    }
}
