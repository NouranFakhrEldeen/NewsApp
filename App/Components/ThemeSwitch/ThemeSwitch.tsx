import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext, themes} from '../../Utils/themes';
import {styles} from './ThemeSwitchStyles';
import {useTranslation} from 'react-i18next';

const ThemeSwitch = () => {
  const {t} = useTranslation();
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).text}>
        {theme == themes.dark ? t('dark') : t('light')}
      </Text>
      <View style={styles(theme).switchContainer}>
        <Switch
          value={theme == themes.dark ? true : false}
          onValueChange={toggleTheme}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={theme != themes.dark ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

export default ThemeSwitch;
