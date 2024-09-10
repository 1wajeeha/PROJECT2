import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const Heading = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Rivals</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
                    <Ionicons name='grid' size={30} color={"grey"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Heading