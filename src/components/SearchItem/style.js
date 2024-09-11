import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'brown',
    shadowColor: 'white',
  },
  image: {
    width: 70,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignContent: 'center',
  },
  productImg: {
    width: '100%',
    height: 65,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  productTitle: {
    fontSize: 12,
    fontFamily: 'bold',
    color: 'red',
  },
  supplier: {
    fontSize: 12,
    fontFamily: 'bold',
    color: 'grey',
    marginTop: 3,
  },
});

export default styles;
