import {Text, View, Switch, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';

import styles from './SettingsScreen.styles';

export enum Language {
  english = 'en',
  Deutsch = 'de',
}
const Settings = () => {
  
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [currentLanguage, setLanguage] = useState<string>(Language.english);
  const LanguageButton = (title: string, language: string) => {
    return (
      <Pressable
        onPress={() => {}}
        style={[
          styles.LanguageButton,
          {
            backgroundColor:
              language == currentLanguage ? "blue" : "lightGrey",
          },
        ]}>
        <Text>{title}</Text>
      </Pressable>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {},
      ]}>
      <Text style={{color: isEnabled ? "darkBlue" :"black"}}>
        {!isEnabled ? 'Light Mode is On' : 'Dark Mode is On'}
      </Text>
      <Switch
        trackColor={{false: "darkGrey", true: "blue"}}
        thumbColor={isEnabled ? "darkBlue" : "white"}
        ios_backgroundColor={"darkGrey"}
        onValueChange={() => {
         
          toggleSwitch();
        }}
        value={isEnabled}
      />

      <View style={{flexDirection: 'row', marginVertical: 50}}>
        {LanguageButton('Choose English', Language.english)}
        {LanguageButton('wähle deutsch', Language.Deutsch)}
      </View>
    </View>
  );
};

export default Settings;
