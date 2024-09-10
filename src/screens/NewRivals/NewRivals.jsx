import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './style';

const NewRivals = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.upperRow}>
                    <TouchableOpacity onPressIn={() => navigation.goBack()}>
                        <AntDesign name='leftcircle' size={20} marginleft={50} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.Heading}>Products</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default NewRivals