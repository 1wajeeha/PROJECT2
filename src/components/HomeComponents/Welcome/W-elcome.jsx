import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';  // Ensure this file exists and the styles are properly defined
import Ionicons from 'react-native-vector-icons/Ionicons';  // Correct import for Ionicons
import Feather from 'react-native-vector-icons/Feather';  // Correct import for Feather
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.WelcomeTxt}>Find The Most</Text>
                <Text style={[styles.WelcomeTxt, { color: 'purple', fontSize: 30 }]}>Luxurious Furniture</Text>
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchWrapper} onPress={() => navigation.navigate("Search")}>
                    <TextInput
                        style={styles.searchInput}
                        value={""}
                        placeholder={"What are you looking for?"}
                        placeholderTextColor={'grey'}
                        editable={false}  // Prevents text input and forces focus on touch
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name="camera-outline" size={24} color={'white'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Welcome;
