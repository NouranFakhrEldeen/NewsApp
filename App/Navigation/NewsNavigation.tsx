import React, {useContext} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NewsDetailsScreen from '../Screens/NewsDetailsScreen/NewsDetailsScreen';
import Routes from './Routes';
import {ThemeContext} from '../Theme/Themes';
import NewsScreen from '../Screens/NewsScreen/NewsScreen';
const StackNavigator = createNativeStackNavigator();
import {useTranslation} from 'react-i18next';
const NewsNavigation = () => {
    const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);
  return (
    <StackNavigator.Navigator  
    screenOptions={{
      headerStyle: {backgroundColor: theme.background},
      headerTintColor: theme.text,
      headerBackTitleVisible: false,
    }}>
      <StackNavigator.Screen
        name={Routes.News}
        component={NewsScreen}
        options={{title: t('newsList')
        ,
        headerShown:false
      }
      
      }
      />
      <StackNavigator.Screen
        name={Routes.NewsDetails}
        component={NewsDetailsScreen}
        options={{title: t('newsDetails')}}
      
      />
    </StackNavigator.Navigator>
  );
};

export default NewsNavigation;
