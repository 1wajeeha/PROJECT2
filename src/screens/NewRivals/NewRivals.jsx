import React from 'react';
import { View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ProductItem } from '../../components';
import useFetch from '../../hook/useFetch';

const NewRivals = ({ navigation }) => {
  const { data, error, isloading } = useFetch({ url: "http://192.168.11.46:3000/api/products" });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.Heading}>PRODUCTS</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item, index }) =>
            (<ProductItem item={item} />)
          }
          numColumns={3}
          style={{ alignSelf: 'center', marginTop: 60, }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
