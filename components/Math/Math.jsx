import { Modal, Button, View, SafeAreaView } from 'react-native';
import React from 'react'

import ImageViewer from 'react-native-image-zoom-viewer';

import styles from './Math.style'

import IMAGES from './data';

const Math = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
                <ImageViewer 
                    imageUrls={IMAGES} 
                    backgroundColor={'#85cfc2'} 
                    onCancel={() => navigation.navigate('Home')} 
                    enableSwipeDown
                />
        </SafeAreaView>
    )
}

export default Math