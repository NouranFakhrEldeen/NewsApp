import {StyleSheet} from 'react-native';

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      height: 50,
      justifyContent: 'center',
      margin: 8,
      backgroundColor: props.background,
    },
    textField: {
      borderColor: props.text,
      padding: 10,
      margin: 10,
      color: props.text,
      backgroundColor: props.background,
    },
  });
