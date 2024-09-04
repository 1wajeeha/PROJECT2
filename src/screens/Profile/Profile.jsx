import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

const Profile = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Profile</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});
