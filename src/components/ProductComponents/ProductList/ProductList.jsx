import React, { useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import ProductCardView from "../PoductCardView/ProductCardView";
import styles from './styles'


const ProductRow = () => {
  const { data, error, isloading } = useEffect()
  const products = [1, 2, 3, 4]
  return (
    <View style={styles.container}>
      {isloading ? (
        <ActivityIndicator size={size.xxlarge} color="blue" />

      ) : error ? (
        <Text>
          something wrong
        </Text>
      ) : (

        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: 12 }}
        />
      )}
    </View>
  )
}

export default ProductRow