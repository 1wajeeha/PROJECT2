import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'
import styles from "./styles";
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View styles={styles.container}>
        <View style={styles.imageConatiner}>
          <Image
            source={{ uri: "https://www.linkoutdoor.com/shop-new-furniture" }}
            style={styles.image} />
        </View>

        <View style={styles.details} />
        <Text style={styles.title} numberOfLines={1}>Product</Text>
        <Text style={styles.supplier} numberOfLines={1}>Product</Text>
        <Text style={styles.price}>$2543</Text>
      </View>
      <TouchableOpacity style={style.addBtn}>
        <Ionicons name="add-circle" size={35} color={"red"} />
      </TouchableOpacity>

    </TouchableOpacity>
  );
};

export default ProductCardView