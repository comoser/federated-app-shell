
import store from "./store";
import {GlobalStore} from "redux-micro-frontend";
import { createSelectorProtocol } from "../../appshell/src/hooks/useGlobalStore";

const STORE_NAME = "FAVORITES_STORE";

GlobalStore.Get().RegisterStore(STORE_NAME, store);

// Demo selectors
export const useFavorites =  () => [{name: 'abcd'}];

export const selectors = createSelectorProtocol({ useFavorites }, STORE_NAME);