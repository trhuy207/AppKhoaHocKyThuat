import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './ThoiKhoaBieu.style'

const ThoiKhoaBieu = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text>Thoi Khoa Bieu</Text>
            </View>
        </View>
    )
}

export default ThoiKhoaBieu