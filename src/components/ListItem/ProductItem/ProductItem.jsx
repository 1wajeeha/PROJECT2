import React from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const ProductItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { id: item._id })}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.image}
          />
        </View>

        <ScrollView>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.supplier} numberOfLines={1}>
              {item.supplier}
            </Text>
            <Text style={styles.price}>
              ${item.price}
            </Text>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={15} color={"red"} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
