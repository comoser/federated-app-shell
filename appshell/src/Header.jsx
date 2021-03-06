import React from 'react';
import './Header.less';
import {useDispatch} from "react-redux";
import {UpdateUser} from "./store/auth/actions";

export const Header = () => {
    const dispatch = useDispatch();

    const updateUser = () => {
        dispatch(UpdateUser())
    }

    return (
        <div className="header">
            <a className="header-logo__link" href="/" title="Vrbo">
                <img
                    alt="Vrbo logo"
                    src="//csvcus.homeaway.com/rsrcs/cdn-logos/4.7.0/sitename/vrbo/web/logo.svg"
                />
            </a>
            <div className="avatar">
                <img
                    src="https://cdn-images-1.medium.com/fit/c/64/64/0*6DlBGW9amkCcEMUM"
                    className="avatar-image"
                    alt="Chris Nienhuis"
                    onClick={updateUser}
                />
            </div>
        </div>
    );
};
