import {UPDATE_USER} from './reducers';

export const UpdateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: {
            user,
        },
    };
};
