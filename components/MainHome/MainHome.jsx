import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import styles from './MainHome.style'

const MainHome = () => {
    const { navigate } = useNavigation()
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.card}>
                    {/* Hóa */}
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigate('Chemistry')}
                    >   
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/chemistry.png')}
                        />
                        <Text style={styles.BtnText}>Từ Điển Hóa Học{'\n'}(Đang phát triển)</Text>
                    </TouchableOpacity>

                    {/* Lý */}
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigate('Physics')}
                    >
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/physics.png')}
                        />
                        <Text style={styles.BtnText}>Công Thức Vật Lý{'\n'}(Đang phát triển)</Text>
                    </TouchableOpacity>

                    {/* Toán */}
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigate('Math')}
                    >
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/math.png')}
                        />
                        <Text style={styles.BtnText}>Công Thức Toán{'\n'}(Đang phát triển)</Text>
                    </TouchableOpacity>

                    {/* Anh */}
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigate('English')}
                    >
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/english.png')}
                        />
                        <Text style={styles.BtnText}>Công Thức Anh Văn{'\n'}(Đang phát triển)</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default MainHome