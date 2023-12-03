import { Modal, Button, View } from 'react-native';
import React from 'react'

import ImageViewer from 'react-native-image-zoom-viewer';

import styles from './Chuong2_11.style'

import IMAGES from './data';

const Chuong2_11 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Modal visible={true} transparent onRequestClose={() => navigation.navigate('Lop11')} animationType="fade">
                <ImageViewer imageUrls={IMAGES} backgroundColor={'#cecece'} onCancel={() => navigation.navigate('Lop11')} enableSwipeDown />
            </Modal>
        </View>
    )
}

export default Chuong2_11