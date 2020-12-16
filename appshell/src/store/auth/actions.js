import {UPDATE_USER} from "./reducers";

export const UpdateUser = () => {
    return {
        type: UPDATE_USER,
        payload: {
            user: 'jane doe',
        }
    }
}

