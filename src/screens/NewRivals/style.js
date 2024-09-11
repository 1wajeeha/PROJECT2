import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  wrapper: {
    flex: 0.2,
  },
  upperRow: {
    width: 400,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    backgroundColor: 'brown',
    borderRadius: 14,
    top: 15,
    zIndex: 999,
  },
  Heading: {
    fontWeight: '400',
    color: 'white',
    marginLeft: 20,
  },
  listContainer: {
    paddingHorizontal: 4,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 250,
    width: '49%',
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'red',
  },
});
export default styles;
