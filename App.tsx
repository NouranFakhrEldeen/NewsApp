

import React, {useState} from 'react';
import AppNavigation from './App/Navigation/AppNavigation'
import {
  StyleSheet,
} from 'react-native';

import   {themes, ThemeContext } from './App/Utils/themes';

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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
