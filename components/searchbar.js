import React , {useState} from 'react';
import { View,TextInput  } from 'react-native';
import { styles } from './style';
const SearchBar  = () => {
const [text, setText] = useState('');

const handleSearch = () => {
      onSearch(text);
    };
   return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#7E7E7E" // Custom placeholder color
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
 };


export default SearchBar;
