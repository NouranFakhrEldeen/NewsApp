import {StyleSheet} from 'react-native';

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      margin:20,
      backgroundColor: props.background,
    },
    image: {
      height: 200,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10,
      color: props.text,
    },
    authorText: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'right',
      paddingTop: 10,
      color: props.text,
    },
    dateText: {
      fontSize: 12,
      fontWeight: 'normal',
      textAlign: 'right',
      color: props.text,
    },
    contentText: {
      fontSize: 15,
      fontWeight: 'normal',
      paddingTop: 10,
      color: props.text,
   
    },
    scrollView: {
      backgroundColor: props.background,
      flex: 1,
    },
  });
