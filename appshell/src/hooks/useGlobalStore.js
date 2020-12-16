import {GlobalStore} from "redux-micro-frontend";

const useGlobalStore = () => {
    const {APP_SHELL_STORE} = GlobalStore.Get().GetGlobalState();
    
    return APP_SHELL_STORE;
};
export default useGlobalStore;
