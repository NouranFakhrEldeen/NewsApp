import React from 'react';
export const themes = {
  light: {
    text: 'black',
    background: 'white',
    border: 'grey',
  },
  dark: {
    text: 'white',
    background: 'black',
    border: 'white',
  },
};

export  const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});







