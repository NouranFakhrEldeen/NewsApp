import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext, themes} from '../../Theme/Themes';
import {styles} from './ThemeSwitchStyles';
import {useTranslation} from 'react-i18next';
import Colors from '../../Theme/Colors'
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
          value={theme == themes.light ? true : false}
          onValueChange={toggleTheme}
          trackColor={{false: Colors.DarkGrey, true: Colors.blueGrey}}
          thumbColor={theme != themes.dark ? Colors.lightYellow : Colors.lightGrey}
        />
      </View>
    </View>
  );
};

export default ThemeSwitch;
