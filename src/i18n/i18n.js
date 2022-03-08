import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enStrings from './en.json';
import heStrings from './he.json';

// RTL tips:
// Use flex align-items:flex-start .. , if you don’t want to use flexbox you can use text-align: start ..
// Avoid using padding-left ... , instead use padding-inline-start ..

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'he',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    mainH2: "We will help you to build a perfect site for your buisness",
                    enStrings
                }
            },
            he: {
                translation: {
                    mainH2: "אנו נבנה את האתר המושלם לעסק שלך",
                    heStrings
                }
            }
        }
    });