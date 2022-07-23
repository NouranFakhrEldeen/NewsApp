import {View} from 'react-native';
import React, {useContext} from 'react';
import ThemeSwitch from '../../Components/ThemeSwitch/ThemeSwitch';
import {styles} from './SettingsScreen.styles';
import {ThemeContext} from '../../Utils/themes';
import LanguageSwitcher from '../../Components/LanguageSwitcher/LanguageSwitcher';

const Settings = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles(theme).container}>
      <ThemeSwitch />
      <LanguageSwitcher />
    </View>
  );
};

export default Settings;
