import { Modal, Button, View } from 'react-native';
import React from 'react'

import ImageViewer from 'react-native-image-zoom-viewer';

import styles from './Chuong3_11.style'

import IMAGES from './data';

const Chuong3_11 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Modal visible={true} transparent onRequestClose={() => navigation.goBack()} animationType="fade">
                <ImageViewer imageUrls={IMAGES} backgroundColor={'#cecece'} onCancel={() => navigation.goBack()} enableSwipeDown />
            </Modal>
        </View>
    )
}

export default Chuong3_11