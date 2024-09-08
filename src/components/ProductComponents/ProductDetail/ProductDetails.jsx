import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(10)

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

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name='star'
                size={24}
                color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons
                name='plus' size={14} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons
                name='minus' size={14} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>Designed for those who demand more from their footwear. Whether you're heading
            to the gym, running errands, or going out for a casual evening, these sneakers are your perfect companion.Made from high-grade synthetic leather and breathable mesh,
            these shoes provide lasting durability and all-day comfort.ith a cushioned insole and padded collar, your feet will stay supported and comfortable no matter how long you're on the move.
            A sleek and timeless design that pairs well with anything in your wardrobe—from jeans and joggers to casual shorts.
          </Text>
        </View>


        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 60, alignItems: 'center' }}>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
            <Ionicons name='location' size={20} />
            <Text style={{ marginLeft: 5 }}>LAHORE</Text>
          </View>


          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
            <Feather name='truck' size={24} />
            <Text style={{ marginLeft: 5 }}>Free Delivery</Text>
          </View>
        </View>

      </View>
      <View style={styles.cartRow}>
        <TouchableOpacity onPress={() => { }} style={styles.cartBtn}>
          <Text style={styles.cartTitle}>BUY NOW</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity onPress={() => { }} style={styles.addCart}>
        <Ionicons name="cart" />
      </TouchableOpacity> */}
    </View>

  )
}

export default ProductDetails
