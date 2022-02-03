import React, { useContext } from 'react';

import { Select, MenuItem } from '@mui/material';

import { languageOptions } from '../languages/languages';
import { LanguageContext } from '../containers/LanguageContext';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (event) => {
    userLanguageChange(event.target.value);
  }

  const sx = {
    color: 'secondary.main'
  }

  return (
    <Select
      onChange={handleLanguageChange}
      value={userLanguage}
      size='small'
      sx={sx}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <MenuItem sx={sx} key={id} value={id}>{name}</MenuItem>
      ))}
    </Select>
  );
};
