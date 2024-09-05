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
        source={{ uri: "https://unsplash.com/photos/a-view-of-a-beach-through-a-cave--TJGAtPA7GQ" }}
        style={styles.image} />



      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}></Text>
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

            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons
                name='plus' size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>(4.9)</Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons
                name='minus' size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}></Text>
          <Text style={styles.descText}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est labore nam eius expedita quisquam, eum accusantium voluptates
            qui a ut voluptas quis dicta esse corrupti vel animi at magni.
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <View style={styles.location} />
          <View style={{ flexDirection: "row" }}>
            <Ionicons name='location' size={24} />
            <Text>LAHORE</Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <View style={styles.location} />
            <View style={{ flexDirection: "row" }}>
              <Feather name='truck' size={24} />
              <Text>Free Delivery</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails
