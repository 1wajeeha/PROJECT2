import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ProductCardView } from '../../../components'

const ProductRow = () => {
  const products = [1, 2, 3, 4]
  return (
    <View style={{ marginTop: 12 }}>
      <FlatList
        data={products}
        renderItem={({ items }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: 12 }}
      />
    </View>
  )
}

export default ProductRow