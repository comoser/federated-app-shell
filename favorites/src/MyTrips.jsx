import React from 'react';
import { useTranslation } from 'react-i18next';
import './MyTrips.less';

export const MyTrips = () => {
    const { t } = useTranslation();

    return (
        <div className="my-trips">
            <div className="trip">
                <p>{t('favorite')}</p>
                <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1_Img1.png" />
            </div>
            <div className="trip">
                <p>{t('namespace2:favorite_alt')}</p>
                <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1C3_Img1.png" />
            </div>
        </div>
    );
}