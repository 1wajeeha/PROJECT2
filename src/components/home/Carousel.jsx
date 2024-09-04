import { View,StyleSheet } from 'react-native';
import React from 'react';

import { SliderBox } from 'react-native-image-slider-box';

const Carousel = () => {
  const slides = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox 
                images={slides}
                dotColor="red"
                inactiveDotColor="blue"
                ImageComponentStyle={{ borderRadius: 15, width: "92%", marginTop: 15 }}
                // autoplay
                // circleLoop
                // SliderBoxHeight={200}
            />
        </View>
    )
}

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
    },
});
