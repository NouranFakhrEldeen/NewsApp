
import React from 'react'
import { FlatList,SafeAreaView,Image,Text, Pressable} from 'react-native';
import SearchBar from '../../Components/searchbar';
import styles from './NewsScreen.styles'
import Routes from '../../Navigation/Routes'
const NewsScreen=(props) =>{

  const data = {
    status: "ok",
    totalResults: 38,
    articles: [
      {
        source: {
          id: null,
          name: "BBC News"
        },
        author: "https://www.facebook.com/bbcnews",
        title: "UK heatwave: Hottest day on record likely with highs of up to 42C - BBC",
        description: "do-not-travel\" warning is issued for many parts - as temperatures hit 37C before midday.",
        url: "https://www.bbc.com/news/uk-62217282",
        urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/18387/production/_125970299_gettyimages-1241990020-1.jpg",
        publishedAt: "2022-07-19T10:29:12Z",
        content: "By Jasmine Andersson &amp; Christy Cooney BBC News\r\nMedia caption, Watch: Tuesday's weather forecast as temperatures expected to reach up to 42C (107.6F)\r\nThe UK is set to see its hottest day on reco… [+7705 chars]"
      },
      {
        source: {
          id: "axios",
          name: "Axios"
        },
        author: "Sara Fischer",
        title: "Twitter says Elon Musk's argument to delay trial \"fails at every level\" - Axios",
        description: "A Tuesday hearing will determine whether the trial moves forward in September.",
        url: "https://www.axios.com/2022/07/18/twitter-elon-musk-trial-delay",
        urlToImage: "https://images.axios.com/PqOk2S67rFSttG_qoS7hfcFXRBU=/0x0:1920x1080/1366x768/2022/07/18/1658180547134.jpg",
        publishedAt: "2022-07-19T08:40:03Z",
        content: "Twitter on Monday filed a reply to Elon Musk's Friday response to the company's lawsuit against the billionaire, saying Musk's request to delay a trial \"fails at every level.\"\r\nWhy it matters: A Tues… [+1955 chars]"
      },
      {
        source: {
          id: null,
          name: "The Guardian"
        },
        author: "Jim Farber",
        title: "‘I said, Don, it’s time for you to reveal’: 50 years later, the truth behind American Pie - The Guardian",
        description: "In an expansive new documentary, Don McLean talks about the much-discussed meaning of his enduring hit song",
        url: "https://amp.theguardian.com/music/2022/jul/19/don-mclean-american-pie-documentary-the-day-the-music-died",
        urlToImage: "https://i.guim.co.uk/img/media/840a89f4935faa315dc960d908353e0ca3996ba9/0_0_3624_2175/master/3624.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c764e8790821ef31e27cbc6c04dfaf0e",
        publishedAt: "2022-07-19T06:08:00Z",
        content: "A long, long time ago five decades to be exact America was roiled by wrenching generational showdowns, massive street protests, and a blazing array of social justice movements. Now, half a century la… [+9868 chars]"
      },
     
    ]
  }
  const Item = ({data}: {data}) => (
    <Pressable onPress={() => {
      props.navigation.navigate(Routes.NewsDetails);
    }} style={styles.item}>
      <Image style={styles.logo} source={{uri: data.urlToImage}} />
      <Text style={styles.title}>{data.title}</Text>

    </Pressable>
  );
  const renderItem = ({item}: {item}) => <Item data={item} />;
  return (
    <SafeAreaView style={styles.newsContainer}>
    <SearchBar searchPlaceHolder={'Search '} onSearch={() => {}} />

    <FlatList
      data={data?.articles}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
   
  </SafeAreaView>
  )
}

export default NewsScreen