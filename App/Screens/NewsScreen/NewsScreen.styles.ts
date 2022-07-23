import { StyleSheet, Platform } from 'react-native'
export default StyleSheet.create<any>({
    container: {
      flex: 1,
      marginTop: 0,
      borderRadius: 6,
    },
    newsContainer: {
      padding: 10,
      borderRadius: 6,
    },
    item: {
      backgroundColor: '#f0f8ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
      marginTop: 20,
      color: '#000000',
    },
    logo: {
      height: 200,
      resizeMode: 'cover',
      borderRadius: 8,
    },
  });