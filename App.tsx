

import React, {useState} from 'react';
import AppNavigation from './App/Navigation/AppNavigation'
import   {themes, ThemeContext } from './App/Theme/Themes';

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(PrevTheme =>
      PrevTheme === themes.dark ? themes.light : themes.dark,
    );
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <AppNavigation></AppNavigation>
    </ThemeContext.Provider >

  );
};



export default App;
