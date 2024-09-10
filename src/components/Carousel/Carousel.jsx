import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import styles from './styles';
// import Carousel from 'react-native-snap-carousel';

const CarouselComponent = () => {
    const slides = [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    ];

    return (
        <View style={styles.carouselContainer}>
            <View style={styles.slide}>
                <Image
                    source={{ uri: slides[0] }}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

export default CarouselComponent;
