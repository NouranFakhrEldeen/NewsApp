import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import NewsNavigation from './NewsNavigation';
import Routes from './Routes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import {ThemeContext, themes} from '../Utils/themes';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);
  return (
<NavigationContainer>
      <Tab.Navigator screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          headerTintColor: theme.text,
          tabBarActiveTintColor: theme.text,
          tabBarInactiveTintColor: 'lightgrey',
          backgroundColor: theme.background,
        },
       
      })}>
      <Tab.Screen
          options={{
            headerShown: false,
            title: t('news'),
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )
          }}
          name={Routes.News}
          component={NewsNavigation}
        />
        <Tab.Screen name={Routes.Settings} component={SettingsScreen}
           options={{ 
            title: t('settings'),
            tabBarIcon: ({color, size, focused}) => (
                <MaterialCommunityIcons
                  name="cog-outline"
                  color={color}
                  size={size}
                />)
             
            }}
                 />
      </Tab.Navigator>
    </NavigationContainer>


  );
};

export default Navigation;
