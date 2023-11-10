import React from 'react';
import { View,Text , Image,ScrollView} from 'react-native';
import Header from './Header';
import { styles } from './style';
import SearchBar from './SearchBar';

const newsData = [
  {
    title: 'Want to kickstart yoga .Government Launch yoga app ',
    imageSource: require('../assets/news.png')
  },
  {
    title: 'Want to kickstart yoga .Government Launch yoga app ',
    imageSource:  require('../assets/news.png')
  },
  {
    title: 'Want to kickstart yoga .Government Launch yoga app ',
    imageSource:  require('../assets/news.png')
  },
  {
    title: 'Want to kickstart yoga .Government Launch yoga app ',
    imageSource:  require('../assets/news.png')
  },
  {
    title: 'Want to kickstart yoga .Government Launch yoga app ',
    imageSource:  require('../assets/news.png')
  },
  // Add more news items as needed
];
const YogaNewsItem = ({ title, description, imageSource }) => {
  return (
    <View style={styles.containers}>
     <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
      <Text style={[styles.vsmalltext,{textAlign:'left',fontFamily:'Poppins-Light'}]}>News: Sources</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};





const YogaNews  = () => {

   return (
    <View style={styles.container}>
     
        <Header title={"Yoga News"} icon={require("../assets/black_back.png")} />
            <SearchBar/>

          <View style={{flexDirection:'row',justifyContent: 'space-between',marginLeft:30,marginRight:30}}>
         
         <Text style={[styles.Text,{textAlign:'left'}]}>Latest Post</Text>
        <Text style={{ fontFamily : 'Poppins-SemiBold',fontSize:14,marginTop:30,textAlign:'center',color:'#5474FD'}}>View all</Text>
        </View>
        <ScrollView style={{marginLeft:30,marginRight:30}}>
      {newsData.map((news, index) => (
        <YogaNewsItem
          key={index}
          title={news.title}
          imageSource={news.imageSource}
        />
      ))}
    </ScrollView>
      
              </View>  
       
    
  );
 };

export default YogaNews;
