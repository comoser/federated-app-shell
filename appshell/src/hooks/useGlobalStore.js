import {useState} from 'react';
import {GlobalStore} from 'redux-micro-frontend';

const useGlobalStore = () => {
    const {APP_SHELL_STORE} = GlobalStore.Get().GetGlobalState();

    return APP_SHELL_STORE;
};

/**
 * Mimics behaviour of react-redux's useSelector, but for the global store
 *
 * @param {Function} selector redux selector
 * @param {String} STORE store the selector should be ran against
 *
 */
export const useGlobalSelector = (
    selector = (state) => state,
    STORE = 'APP_SHELL_STORE'
) => {
    const [state, setState] = useState(
        GlobalStore.Get().GetGlobalState()[STORE]
    );
    GlobalStore.Get().Subscribe(STORE, (newState) => {
        setState(newState);
    });

    return selector(state);
};

/**
 * Mimics the behavior of react-redux's useDispatch for the globalStore
 *
 * @param {String} STORE store the selector should be ran against
 */
export const useGlobalDispatch = (STORE = 'APP_SHELL_STORE') => {
    return (action) => GlobalStore.Get().DispatchAction(STORE, action);
};

export const createSelectorProtocol = (obj, store) => {
    return Object.keys(obj).reduce((protocol, key) => {
        return {
            ...protocol,
            [key]: () => useGlobalSelector(obj[key], store),
        };
    }, {});
};

export const createDispatcherProtocol = (obj, store) => {
    return Object.keys(obj).reduce((protocol, key) => {
        return {
            ...protocol,
            [key]: (...args) => useGlobalDispatch(store)(obj[key](...args)),
        };
    }, {});
};

export default useGlobalStore;
