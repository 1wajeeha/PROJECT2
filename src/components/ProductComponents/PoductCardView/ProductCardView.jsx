import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View styles={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", }}
            style={styles.image} />
        </View>

        <View style={styles.details} />
        <Text style={styles.title} numberOfLines={1}>Product
        </Text>
        <Text style={styles.supplier} numberOfLines={1}>Product
        </Text>
        <Text style={styles.price}>$2543
        </Text>
      </View>

      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-circle" size={15} color={"red"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCardView