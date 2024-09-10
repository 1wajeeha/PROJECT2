import React, { useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { ProductItem } from "../../../components";
import styles from './styles'
import useFetch from '../../../hook/useFetch';


const ProductRow = () => {
  const { data, error, isloading } = useFetch({ url: "http://192.168.11.46:3000/api/products" });
  return (
    <View style={styles.container}>
      {isloading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : error ? (
        <Text>
          Products not found !!!
        </Text>
      ) : (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <ProductItem item={item} />}
            horizontal
            contentContainerStyle={{ columnGap: 12 }}
          />
        </View>
      )}
    </View>
  )
}

export default ProductRow