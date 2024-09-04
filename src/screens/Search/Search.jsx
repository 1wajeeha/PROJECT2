import { View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  // Use the useNavigation hook to get the navigation object
  const navigation = useNavigation();

  return (
    <View>
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              // When TextInput is focused, navigate to the Search screen
              onFocus={() => navigation.navigate("Search")} 
              placeholder={"What are you looking for?"}
              placeholderTextColor={'grey'}
            />
          </View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="camera-outline" size={24} color={'white'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Search;
