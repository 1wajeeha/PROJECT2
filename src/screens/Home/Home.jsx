import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import styles from './styles';
import {AppLogo} from "../../assets"
import Icons from 'react-native-vector-icons/Fontisto';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Welcome from '../../components/home/welcome';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
      <Text style={styles.textStyle}>Home</Text>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Icons name='home' size={24} />
          <Text style={styles.location}>LAHORE</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCourt}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Icons name='shopping-bag' size={24} />
            </TouchableOpacity>


          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        {/* <Heading/>
        <Product/>  */}
      </ScrollView>
    </SafeAreaView>

  )
}
export default Home

