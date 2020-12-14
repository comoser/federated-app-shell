export const SET_LOADING_REQUEST = "SET_LOADING_REQUEST";
export const SET_LOADING_SUCCESS = "SET_LOADING_SUCCESS";
export const SET_LOADING_ERROR = "SET_LOADING_ERROR";

const initialState = {
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LOADING_REQUEST:
            return {
                isLoading: true,
            };
        case SET_LOADING_SUCCESS:
            return {
                isLoading: false,
            };
        case SET_LOADING_ERROR:
            return {
                isLoading: false,
            };

        default:
            return state;
    }
}
