import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './LanguageSwitcherStyles';
import {ThemeContext, themes} from '../../Theme/Themes';
import {useTranslation} from 'react-i18next';
import I18n from '../../I18n/i18next';
import Colors from '../../Theme/Colors'
const LanguageSwitcher = () => {
  const {i18n} = useTranslation();
  const {theme} = useContext(ThemeContext);
  const {t} = useTranslation();
  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).text}>{t('language')}</Text>
      <View style={styles(theme).switchContainer}>
        <Switch
          value={I18n.language == 'en' ? true : false}
          onValueChange={() => {
            I18n.language == 'en'
              ? I18n.changeLanguage('de')
              : I18n.changeLanguage('en');
          }}
          trackColor={{false: Colors.DarkGrey, true: Colors.blueGrey}}
          thumbColor={theme != themes.dark ? Colors.lightYellow : Colors.lightGrey}
        />
      </View>
    </View>
  );
};

export default LanguageSwitcher;
