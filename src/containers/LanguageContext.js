// it provides the language context to app
import React, { useState, createContext } from 'react';
import { languageOptions, dictionaryList } from '../languages/languages';

// create the language context with default selected language
export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en
});

export function LanguageProvider({ children }) {

    const [userLanguage, setUserLanguage] = useState(() => {
        return localStorage.getItem('shareshuttle-lang') || 'en';
    })

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: (selected) => {
            const newLanguage = languageOptions[selected] ? selected : 'en'
            setUserLanguage(newLanguage);
            localStorage.setItem('shareshuttle-lang', newLanguage);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
};