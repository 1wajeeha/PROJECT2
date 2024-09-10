import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

const Cart = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Cart</Text>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});
