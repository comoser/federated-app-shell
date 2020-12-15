import React from 'react';
import './MyTrips.less';
import { Decrement, Increment } from "./store/counter/actions";
import { useDispatch } from "react-redux";

export const MyTrips = () => {
    const dispatch = useDispatch();

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
            <div className="my-trips">
                <div className="trip">
                    <p>Summer Trip</p>
                    <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1_Img1.png" />
                </div>
                <div className="trip">
                    <p>Winter Trip</p>
                    <img
                        src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1C3_Img1.png" />
                </div>
            </div>
        </>
    );
}
