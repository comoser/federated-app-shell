import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";

function configureI18n() {
    i18next.use(initReactI18next).init({
        lng: 'en',
        debug: true,
        ns: ['translation'],
        resources: {
            en
        }
    });
}

export default configureI18n;
