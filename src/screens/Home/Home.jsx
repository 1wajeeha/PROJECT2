import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { Heading, Carousel, Welcome, Product, ProductList } from '../../components'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location' size={24} />
          <Text style={styles.location}>LAHORE</Text>
          <View style={{ alignItems: "flex-end" }}>
            {/* <View>
              <Text style={styles.cartNumber}>8</Text>
            </View> */}
            <TouchableOpacity>
              <AntDesign name='shoppingcart' size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  )
}
export default Home

