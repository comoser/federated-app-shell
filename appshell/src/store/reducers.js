import { combineReducers } from "redux";
import AppShellReducer from "./appshell/reducers";

export default combineReducers({
    appShellReducer: AppShellReducer,
});
