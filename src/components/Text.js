// get text according to id & current language
import React, { useContext } from 'react';
import { LanguageContext } from '../containers/LanguageContext';

export default function Text({ tid }) {
    const languageContext = useContext(LanguageContext);  
    return languageContext.dictionary[tid] || tid;
  };