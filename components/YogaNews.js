import React from 'react';
import { View,Text , Image,ScrollView} from 'react-native';
import Header from './Header';
import { styles } from './style';
import SearchBar from './SearchBar';
import Icon from 'react-native-vector-icons/Feather';
import { color } from 'react-native-elements/dist/helpers';

const newsData = [
  {
    title: 'Want to kickstart yoga ',
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
      <View style={[{width:260 }]}>
      <Text style={[styles.vsmalltext,{textAlign:'left',fontFamily:'Poppins-Light'}]}>News: Sources</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection:'row', alignItems:'center',flex:1,marginTop:5}}>
        <View style={{ flexDirection: 'row',alignItems: 'flex-start',marginRight:30  }}>
      <Icon name="calendar" size={15} color="#9397A0" style={{marginRight:4}}/>
          <Text style={[styles.vsmalltext,{color:'#9397A0',fontSize:13}]}>16th May</Text>
        </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
      <Icon name="clock" size={15} color="#9397A0" style={{marginRight:4,marginBottom:4}}/>
          <Text style={[styles.vsmalltext,{color:'#9397A0',fontSize:13}]}>09 : 32 pm</Text>
                </View>
                </View>

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
        <ScrollView style={{marginLeft:20,marginRight:20}}>
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
