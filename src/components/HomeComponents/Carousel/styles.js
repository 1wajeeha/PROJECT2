import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.4, // Adjust the height as needed
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4, // Match the height of the slide
    resizeMode: 'cover', // Adjust the image to cover the entire slide
  },
});

export default styles;
