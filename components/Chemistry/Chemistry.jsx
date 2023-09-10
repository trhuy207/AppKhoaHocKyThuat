import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './Chemistry.style'

const Chemistry = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.CauHinhElectronBtn}
                    onPress={() => navigation.navigate('ColorChemistry')}
                >   
                    <Image 
                        style={styles.CauHinhElectronImage}
                        source={require('../../assets/img/Chemistry/colorChemistry.png')}
                    />
                    <Text style={styles.CauHinhElectronBtnText}>Màu Một Số Chất Phổ Biến</Text>
                </TouchableOpacity>

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

                <TouchableOpacity
                    style={styles.CauHinhElectronBtn}
                    onPress={() => navigation.navigate('TraCuuNT')}
                >   
                    <Image 
                        style={styles.CauHinhElectronImage}
                        source={require('../../assets/img/Chemistry/searchChemistry.png')}
                    />
                    <Text style={styles.CauHinhElectronBtnText}>Tra Cứu Nguyên Tố</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chemistry