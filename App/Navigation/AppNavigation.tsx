import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import NewsNavigation from './NewsNavigation';
import Routes from './Routes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const Navigation = () => {

  return (
<NavigationContainer>
      <Tab.Navigator screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          
        },
       
      })}>
      <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )
          }}
          name={Routes.News}
          component={NewsNavigation}
        />
        <Tab.Screen name={Routes.Settings} component={SettingsScreen}
           options={{ 
            tabBarIcon: ({color, size}) => (
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
