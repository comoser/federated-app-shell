import {createSelector} from 'reselect';

const getCounterReducer = createSelector(
    state => state.counterReducer,
    counterReducer => counterReducer,
);

export const getCounter = createSelector(
    [getCounterReducer],
    counterReducer => counterReducer.counter,
);
