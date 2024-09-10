import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  WelcomeTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginHorizontal: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 14,
    marginVertical: 10,
    width: '90',
  },
  searchIcons: {
    marginHorizontal: 20,
    color: 'black',
    marginTop: 15,
  },
  searchWrapper: {
    width: '80%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    fontWeight: 'bold',
    width: '100%',
    paddingHorizontal: 5,
    color: 'black',
  },
  searchBtn: {
    width: '20%',
    // borderRadius:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 8,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
  },
  searchIcon: {
    paddingLeft: 30,
  },
});

export default styles;
