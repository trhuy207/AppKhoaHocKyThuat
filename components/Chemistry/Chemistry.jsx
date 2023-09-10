import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './Chemistry.style'

const Chemistry = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.CauHinhElectronBtn}
                    onPress={() => navigation.navigate('CauHinhE')}
                >   
                    <Image 
                        style={styles.CauHinhElectronImage}
                        source={require('../../assets/img/chemistry.png')}
                    />
                    <Text style={styles.CauHinhElectronBtnText}>Cấu Hình Electron</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chemistry