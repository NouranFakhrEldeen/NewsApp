import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NewsDetailsScreen from '../Screens/NewsDetailsScreen/NewsDetailsScreen';
import Routes from './Routes';

import NewsScreen from '../Screens/NewsScreen/NewsScreen';
const StackNavigator = createNativeStackNavigator();

const NewsNavigation = () => {
  return (
    <StackNavigator.Navigator   >
      <StackNavigator.Screen
        name={Routes.News}
        component={NewsScreen}
        options={{
          headerShown: false
          
        }}
      />
      <StackNavigator.Screen
        name={Routes.NewsDetails}
        component={NewsDetailsScreen}
        options={{
            headerShown: false
            }}
      
      />
    </StackNavigator.Navigator>
  );
};

export default NewsNavigation;
