import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import styles from './MainHome.style'

const MainHome = () => {
    const { navigate } = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => navigate('Chemistry')}
                >   
                    <Image 
                        style={styles.BtnImage}
                        source={require('../../assets/img/chemistry.png')}
                    />
                    <Text style={styles.BtnText}>Từ Điển Hóa Học</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => navigate('Physics')}
                >
                    <Image 
                        style={styles.BtnImage}
                        source={require('../../assets/img/physics.png')}
                    />
                    <Text style={styles.BtnText}>Công Thức Vật Lý</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => navigate('Math')}
                >
                    <Image 
                        style={styles.BtnImage}
                        source={require('../../assets/img/math.png')}
                    />
                    <Text style={styles.BtnText}>Công Thức Toán</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => navigate('English')}
                >
                    <Image 
                        style={styles.BtnImage}
                        source={require('../../assets/img/english.png')}
                    />
                    <Text style={styles.BtnText}>Công Thức Anh Văn</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainHome