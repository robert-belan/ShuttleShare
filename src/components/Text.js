// get text according to id & current language

import React, { useContext } from 'react';

import { LanguageContext } from '../containers/LanguageContext';

// source: https://dev.to/halilcanozcelik/create-a-multi-language-website-with-react-context-api-4i27



export default function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
};