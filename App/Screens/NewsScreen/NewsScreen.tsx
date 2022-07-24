
import React , {useEffect, useState, useContext} from 'react'
import { FlatList,SafeAreaView,Image,Text, Pressable , ActivityIndicator} from 'react-native';

 import SearchBar from '../../Components/SearchBar/searchBar';
import {styles} from './NewsScreen.styles'
import Routes from '../../Navigation/Routes'
import {AxiosClient} from '../../services/AxiosClient'
import useApiCall from '../../Hooks/useApiCall'
import {ThemeContext} from '../../Utils/themes';
import NewsResponse from '../../services/ApiModels/NewsResponse'
import Article from '../../services/ApiModels/Article'
// import {getUIdByDynamicLink} from '../../Utils/deepLink'
const NewsScreen=(props) =>{
  const {theme} = useContext(ThemeContext);
  const {responseData, isLoading, isError, refresh} = useApiCall(() => AxiosClient<NewsResponse>());
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   async function invokeDeepLink() {
  //     const id = await getUIdByDynamicLink();
  //     if (id) props.navigation.navigate(Routes.NewsDetails, {id: id});
  //   }
  //   invokeDeepLink();
  // }, []);



  useEffect(() => {
    if (responseData) setFilteredList(responseData.articles);
  }, [responseData]);

 const getFilteredNews = (searchValue: string, newsList: any) => {
    return newsList.filter((item: any) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  };
  
  useEffect(() => {
    if (responseData) setFilteredList(getFilteredNews(searchQuery, responseData.articles));
  }, [searchQuery]);
  const Item = ({data}: {data: Article}) => (
    <Pressable onPress={() => {
      props.navigation.navigate(Routes.NewsDetails,  {response: data});
    }} style={styles(theme).item}>
      <Image style={styles(theme).logo} source={{uri: data.urlToImage}} />
      <Text style={styles(theme).title}>{data.title}</Text>

    </Pressable>
  );

  const renderItem = ({item}: {item: Article}) => <Item data={item} />;
  return (
    <SafeAreaView style={styles(theme).newsContainer}>
     <SearchBar   onTextChange={setSearchQuery} /> 
  
    <FlatList
      data={filteredList}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      onRefresh={() => {
        refresh();
      }}
      refreshing={isLoading}
    />
     {isLoading && <ActivityIndicator />}
      {isError && (
        <Text >
          an error has occured 
        </Text>
      )}
  </SafeAreaView>
  )
}

export default NewsScreen