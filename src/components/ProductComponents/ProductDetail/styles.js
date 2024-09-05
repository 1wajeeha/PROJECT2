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
    // marginTop: 1,
    backgroundColor: 'skyblue',
    // width: 50,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 12,
    flexDirection: 'row',
  },
  titleRow: {
    // marginHorizontal: 20,
    // paddingBottom: 10,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: 10,
    // top: 20,
  },

  rating: {
    top: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 14,
  },
  ratingText: {
    // color: 'grey',
    fontFamily: 'medium',
  },
  descriptionWrapper: {
    marginTop: 14,
    marginHorizontal: 15,
  },
  description: {
    fontFamily: 'medium',
    fontSize: 12,
  },
  descText: {
    fontFamily: 'regualr',
    fontSize: 12,
    textAlign: 'justify',
    marginBottom: 12,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'sky',
    padding: 15,
    borderRadius: 14,
  },
  title: {
    fontFamily: 'bold',
    fontSize: 14,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: 'semibold',
    fontSize: 14,
    flexDirection: 'row',
  },
  priceWrapper: {
    // backgroundColor: 'sky',
    borderRadius: 14,
  },
});
export default styles;
