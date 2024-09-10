import {StyleSheet} from 'react-native';
import {Heading} from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  upperRow: {
    width: 400,
    height: 24,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'brown',
    borderRadius: 100,
    top: 20,
    // zIndex: 999,
  },
  Heading: {
    color: 'white',
    fontWeight: '700',
    marginLeft: 15,
  },
});

export default styles;
