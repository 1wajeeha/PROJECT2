import {FlatList, View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import useFetch from '../../../hook/useFetch';
import ProductItem from '../../ListItem/ProductItem/ProductItem';

const ArrivalsList = () => {
  // const {data, isLoading, error} = useFetch({
  //   url: 'http://192.168.11.46:3000/api/products/66e02d0b9c30208f71937ffb',
  // });
  console.log('data>>>');

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <ProductItem item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};
export default ArrivalsList;
