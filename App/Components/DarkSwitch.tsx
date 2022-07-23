import React from 'react';
import {Switch} from 'react-native';


export const darkModeSwitchColors = Object.freeze({
  false: '#767577',
  true: '#81b0ff',
});
const DarkSwitch = () => {


  


  return (
    <Switch
      trackColor={darkModeSwitchColors}
      value={false}
      onValueChange={()=>{}}
    />
  );
};

export default DarkSwitch;
