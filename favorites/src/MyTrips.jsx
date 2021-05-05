import React from 'react';
import {useTranslation} from 'react-i18next';
import './MyTrips.less';
import {Decrement, Increment} from "./store/counter/actions";
import {useDispatch, useSelector} from "react-redux";
import {getCounter} from "./store/counter/selectors";
import * as GlobalProtocol from '../../appshell/src/protocol';
import {  } from '../../appshell/src/hooks/useGlobalStore';

export const MyTrips = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const counter = useSelector(getCounter);
    const user = GlobalProtocol.selectors.useUserName()

    const changeUser = () => {
        GlobalProtocol.dispatchers.updateUserName('Username from MyTrips')
    }

    const increment = () => {
        dispatch(Increment())
    }
    const decrement = () => {
        dispatch(Decrement())
    }

    return (
        <>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <div>User: {user}</div>
            <button onClick={changeUser}>Change user from child MFE</button>
            <div className="my-trips">
                <div className="trip">
                    <p>{t('favorite')}</p>
                    <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1_Img1.png"/>
                </div>
                <div className="trip">
                    <p>{t('namespace2:favorite_alt')}</p>
                    <img
                        src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1C3_Img1.png"/>
                </div>
            </div>
        </>
    );
}
