import { StyleSheet } from 'react-native'
export const styles = (props: any) =>
  StyleSheet.create({

    newsContainer: {
      padding: 10,
      flex: 1,
      borderRadius: 6,
      backgroundColor: props.background,
      borderColor: props.text,
    },
    item: {
    
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: props.background,
    },
    title: {
      fontSize: 16,
      marginTop: 20,
      color: props.text,
    },
    logo: {
      height: 200,
      resizeMode: 'cover',
      borderRadius: 8,
    },
  });