import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProductCardView from "../PoductCardView/ProductCardView";
import styles from './styles'


const ProductRow = () => {
  const products = [1, 2, 3, 4]
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: 12 }}
      />
    </View>
  )
}

export default ProductRow