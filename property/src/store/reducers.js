import { combineReducers } from "redux";
import CounterReducer from "./counter/reducers";

export default combineReducers({
    counterReducer: CounterReducer,
});
