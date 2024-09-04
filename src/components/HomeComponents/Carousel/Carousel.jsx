import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';

const CarouselComponent = () => {
    const slides = [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    ];

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image
                    source={{ uri: item }}
                    style={styles.image}
                />
            </View>
        );
    };

    return (
        <View style={styles.carouselContainer}>
            <Carousel
                data={slides}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
            />
        </View>
    );
};

export default CarouselComponent;
