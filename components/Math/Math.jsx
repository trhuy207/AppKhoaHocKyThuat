import { Modal, Button, View } from 'react-native';
import React from 'react'

import ImageViewer from 'react-native-image-zoom-viewer';

import styles from './Math.style'

import IMAGES from './data';

const Math = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Modal visible={true} transparent onRequestClose={() => navigation.navigate('Home')} animationType="fade">
                <ImageViewer imageUrls={IMAGES} backgroundColor={'#cecece'} onCancel={() => navigation.navigate('Home')} enableSwipeDown />
            </Modal>
        </View>
    )
}

export default Math