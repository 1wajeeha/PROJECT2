import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';  // Correct import for Ionicons
import styles from './styles';
const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPressIn={() => navigation.goBack()}>
          <Ionicons name='leftcircle' size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductDetails

