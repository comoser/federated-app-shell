export const INCREMENT_REQUEST = "@@PROPERTIES/INCREMENT_REQUEST";
export const DECREMENT_REQUEST = "@@PROPERTIES/DECREMENT_REQUEST";

const initialState = {
    isLoading: false,
    counter: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT_REQUEST:
            return {
                ...state,
                counter: state.counter + 1,
            };

        case DECREMENT_REQUEST:
            return {
                ...state,
                counter: state.counter - 1,
            };

        default:
            return state;
    }
}
