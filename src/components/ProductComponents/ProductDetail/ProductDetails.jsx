import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPressIn={() => navigation.goBack()}>
          <AntDesign name='leftcircle' size={20} />
        </TouchableOpacity>

        <TouchableOpacity onpress={() => { }}>
          <Ionicons name='heart' size={20} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
        style={styles.imageStyle} />



      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$34.55</Text>
          </View>
        </View>


        <View style={styles.titleRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name='star'
                size={24}
                color="gold" />
            ))}

            {/* <Text style={styles.ratingText}>(4.9)</Text> */}
          </View>

          <View style={styles.rating}>
            {/* <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons
                name='plus' size={20} />
            </TouchableOpacity> */}
            {/* <Text style={styles.ratingText}>(4.9)</Text> */}

            {/* <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons
                name='minus' size={20} />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}></Text>
          {/* <Text style={styles.descText}> Loremi
          </Text> */}
        </View>

        <View style={{ marginBottom: 24 }}>
          <View style={styles.location} />
          <View style={{ flexDirection: "row" }}>
            {/* <Ionicons name='location' size={24} /> */}
            {/* <Text>LAHORE</Text> */}
          </View>

          <View style={{ marginBottom: 12 }}>
            <View style={styles.location} />
            <View style={{ flexDirection: "row" }}>
              {/* <Feather name='truck' size={24} /> */}
              {/* <Text>Free Delivery</Text> */}
            </View>
          </View>
        </View>
      </View>
    </View >
  )
}

export default ProductDetails
