import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import useFetch from '../../hook/useFetch';


const ProductDetails = ({ navigation, route }) => {

  const { data: item, error, isloading } = useFetch({ url: `http://192.168.11.46:3000/api/products/${route?.params?.id}` });

  const [count, setCount] = useState(1);

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
          <AntDesign name='leftcircle' size={30} />
        </TouchableOpacity>

        <TouchableOpacity onpress={() => { }}>
          <Ionicons name='heart' size={30} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: item.imageUrl,

        }}
        style={styles.imageStyle} />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
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
          <Text style={styles.descText}> {item.description}
          </Text>
        </View>


        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
            <Ionicons name='location' size={20} />
            <Text style={{ marginLeft: 5 }}>{item.product_location}</Text>
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


        <TouchableOpacity onPress={() => { }} style={styles.addCart}>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductDetails
