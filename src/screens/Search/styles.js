import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "pink",
    borderRadius: 10,
    marginHorizontal: 14,
    marginVertical: 10,
    width: '90',
    backgroundColor: 'yellow',
  },
  SearchIcons: {
    marginHorizontal: 10,
    color: 'black',
    // margintop:10
  },
  searchWrapper: {
    // flex:1,
    // marginRight:10,
    // borderRadius:30,
    width: '80%',
    backgroundColor: 'white',
  },
  searchInput: {
    fontWeight: 'bold',
    width: '100%',
    paddingHorizontal: 10,
    color: 'black',
    // backgroundColor: "green",
  },
  searchBtn: {
    width: '20%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 8,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
  },
});

export default styles;
