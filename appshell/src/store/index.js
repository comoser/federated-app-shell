import {compose, createStore} from 'redux';
import rootReducer from "./reducers";
import {GlobalStore} from 'redux-micro-frontend';

let globalStore = GlobalStore.Get();

export const initStore = (store, name) => {
    const globalState = globalStore.GetGlobalState();

    if (!globalState[name]) {
        globalStore.RegisterStore(name, store);
    }
}

export const initGlobalStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const AppShellStore = createStore(rootReducer, composeEnhancers());
    initStore(AppShellStore, "AppShellStore");

    AppShellStore.dispatch({type: "REGISTER_APP_SHELL_STORE"});
}

export default globalStore;

