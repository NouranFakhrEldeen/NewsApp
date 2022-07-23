import {StyleSheet} from 'react-native';

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: props.background,
      flexDirection: 'row',
      padding: 20,
    },
    text: {
      flex: 0.5,
      color: props.text,
      fontSize: 20,
      fontWeight: 'bold',
    },
    switchContainer: {
      flex: 0.5,
      alignItems: 'flex-end',
    },
  });
