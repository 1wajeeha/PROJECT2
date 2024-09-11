import { View, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults)
  const navigation = useNavigation();
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/products/search/${searchKey}`)
      setSearchResults(response.data)
    } catch (error) {
      console.log("Failed to get product", error);
    }
  }
  return (
    <View>
      <SafeAreaView>
        <View style={styles.searchContainer}>

          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={searchKey}
              onChangeText={setSearchKey}
              onFocus={() => navigation.navigate("Search")}
              placeholder={"What are you looking for?"}
              placeholderTextColor={'grey'}
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
            <Ionicons name="search" size={24} color={'white'} />
          </TouchableOpacity>
        </View>
        {searchResults.length === 0 ? (
          <View style={{ flex: 1 }}>
            {/* <Image
              // source={require('./')}
              style={styles.searchImage}
            /> */}
          </View>
        ) : (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (<SearchTile item={item} />)}
            style={{ marginHorizontal: !2 }}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Search;
