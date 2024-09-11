import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 240,
    marginEnd: 22,
    borderRadius: 12,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1,
    width: 120,
    // marginLeft: 20,
    // marginTop: 12,
    // borderRadius: 12,
    // overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: 5,
  },
  title: {
    fontFamily: 'bold',
    fontSize: 10,
    // marginBottom: 2,
    marginTop: 60,
  },
  supplier: {
    fontFamily: 'bold',
    fontSize: 10,
    marginBottom: 2,
  },
  price: {
    fontFamily: 'bold',
    fontSize: 10,
    marginBottom: 2,
    color: 'purple',
  },
  addBtn: {
    position: 'absolute',
    bottom: 70,
    right: 10,
  },
});

export default styles;
