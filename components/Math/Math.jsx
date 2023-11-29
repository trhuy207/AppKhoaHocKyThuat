import { TouchableOpacity, View, Text, Image, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';

import ImageZoom from '@synconset/react-native-image-zoom';

import styles from './Math.style'

import IMAGES from './data';

const Math = () => {
    const { width } = Dimensions.get('window');
    const SPACING = 10;
    const THUMB_SIZE = 80;

    const [images, setImages] = useState([
        { id: '1', image: IMAGES.image1 },
        { id: '2', image: IMAGES.image2 },
        { id: '3', image: IMAGES.image3 },
        { id: '4', image: IMAGES.image4 },
        { id: '5', image: IMAGES.image5 },
        { id: '6', image: IMAGES.image6 },
        { id: '7', image: IMAGES.image7 },
        { id: '8', image: IMAGES.image8 },
        { id: '9', image: IMAGES.image9 },
        { id: '10', image: IMAGES.image10 },
        { id: '11', image: IMAGES.image11 },
        { id: '12', image: IMAGES.image12 },
        { id: '13', image: IMAGES.image13 },
        { id: '14', image: IMAGES.image14 },
        { id: '15', image: IMAGES.image15 },
        { id: '16', image: IMAGES.image16 },
        { id: '17', image: IMAGES.image17 },
        { id: '18', image: IMAGES.image18 },
        { id: '19', image: IMAGES.image19 },
        { id: '20', image: IMAGES.image20 },
        { id: '21', image: IMAGES.image21 },
        { id: '22', image: IMAGES.image22 },
        { id: '23', image: IMAGES.image23 },
    ]);

    const [indexSelected, setIndexSelected] = useState(0);

    const onSelect = indexSelected => {
        setIndexSelected(indexSelected);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#e5e5e5', alignItems: 'center' }}>
            {/* Title JSX Remains same */}
            {/* Carousel View */}
            <View style={{ flex: 1 / 2 }}>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={'100%'}
                    imageHeight={'100%'}>
                    <Carousel
                        layout='default'
                        data={images}
                        sliderWidth={width}
                        itemWidth={width}
                        renderItem={({ item, index }) => (
                            <Image
                                key={index}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode='contain'
                                source={item.image}
                            />
                        )}
                        onSnapToItem={index => onSelect(index)}
                    />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 22
                        }}
                    >
                        {indexSelected + 1}/{images.length}
                    </Text>
                </ImageZoom>
            </View>
        </View>
    )
}

export default Math