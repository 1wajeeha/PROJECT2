import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    width: 370,
    zIndex: 999,
  },
  imageStyle: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'bold',
    fontSize: 16,
    flex: 1,
  },
  price: {
    fontFamily: 'semibold',
    fontSize: 16,
    backgroundColor: '#ff4081',
    paddingHorizontal: 10,
    textAlign: 'right',
    borderRadius: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 7,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 3,
  },
  ratingText: {
    color: 'grey',
    fontFamily: 'medium',
    fontSize: 14,
    marginLeft: 5,
  },
  description: {
    color: 'black',
    marginTop: 20,
  },
  cartRow: {
    // marginLeft: 10,
    padding: 10,
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBtn: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    flex: 1,
  },
  cartTitle: {
    color: 'white',
    textAlign: 'center',
  },
  addCart: {
    width: 47,
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
});

export default styles;
