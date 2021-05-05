import store from './store';
import {GlobalStore} from 'redux-micro-frontend';
import {
    createSelectorProtocol,
    createDispatcherProtocol,
} from '../../appshell/src/hooks/useGlobalStore';
import {getUserName} from './store/auth/selectors';
import {UpdateUser} from './store/auth/actions';

const STORE_NAME = 'APP_SHELL_STORE';

GlobalStore.Get().RegisterStore(STORE_NAME, store);

export const selectors = createSelectorProtocol(
    {useUserName: getUserName},
    STORE_NAME
);

export const dispatchers = createDispatcherProtocol(
    {
        updateUserName: UpdateUser,
    },
    STORE_NAME
);
