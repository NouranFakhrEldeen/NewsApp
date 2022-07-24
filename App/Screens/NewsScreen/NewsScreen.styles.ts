import { StyleSheet } from 'react-native'
export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      borderRadius: 6,
      backgroundColor: props.background,
      
    },
    newsContainer: {
      padding: 10,
      borderRadius: 6,
      backgroundColor: props.background,
      borderColor: props.text,
    },
    item: {
    
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
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