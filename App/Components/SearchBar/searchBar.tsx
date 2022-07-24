// import {View, TextInput, StyleSheet} from 'react-native';
// import React from 'react';
// import {useTheme} from '@react-navigation/native';

// type SearchBarProps = {
//   searchPlaceHolder: string;
//   onSearch: (query: string) => void;
// };

// const SearchBar = ({searchPlaceHolder, onSearch}) => {
//   const {colors} = useTheme();
//   return (
//     <View style={[styles.container, {backgroundColor: 'white'}]}>
//       <TextInput
//         style={[styles.searchInput, {color: 'black'}]}
//         autoCapitalize="none"
//         autoCorrect={false}
//         clearButtonMode="always"
//         onChangeText={queryText => onSearch(queryText)}
//         placeholder={searchPlaceHolder}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     height: 50,
//     justifyContent: 'center',
//     borderRadius: 8,
//     margin: 8,
//   },
//   searchInput: {
//     padding: 8,
//   },
// });
// export default SearchBar;
import {TextInput, View} from 'react-native';
import React, {useContext} from 'react';

import {ThemeContext} from '../../Theme/Themes';
import {styles} from './SearchBar.style';

import {useTranslation} from 'react-i18next';
type  SearchFieldProps= {
  onTextChange: Function;
}
const SearchBar =(props: { onTextChange}) =>{
  const {theme} = useContext(ThemeContext);
  const {t} = useTranslation();

  return (
    <View style={[styles(theme).container]}>
    <TextInput
      style={styles(theme).textField}
      placeholder={t("searchPlaceholder")}
      placeholderTextColor={theme.text}
      onChangeText={text => props.onTextChange(text)}
      autoCapitalize="none"
      autoCorrect={false}
      clearButtonMode="always"
    />
    </View>
  );
}

export default SearchBar;
