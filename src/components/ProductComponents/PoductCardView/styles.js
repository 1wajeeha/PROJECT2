import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: 12,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    width: 70,
    marginLeft: 20,
    marginTop: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: 10,
  },
  title: {
    fontFamily: 'bold',
    fontSize: 8,
    marginBottom: 1,
  },
  supplier: {
    fontFamily: 'bold',
    fontSize: 8,
    marginBottom: 1,
  },
  price: {
    fontFamily: 'bold',
    fontSize: 8,
    marginBottom: 1,
    color: 'purple',
  },
  addBtn: {
    position: 'absolute',
    // bottom: 1,
    // left: 10,
    right: 20,
    top: 100,
  },
});

export default styles;
