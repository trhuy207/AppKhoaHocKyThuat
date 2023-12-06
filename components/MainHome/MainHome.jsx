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
                        <Text style={styles.BtnText}>Hóa Học</Text>
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
                        <Text style={styles.BtnText}>Vật Lý</Text>
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
                        <Text style={styles.BtnText}>Toán</Text>
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
                        <Text style={styles.BtnText}>Anh Văn</Text>
                    </TouchableOpacity>

                    {/* Thời Khóa Biểu */}
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigate('ThoiKhoaBieu')}
                    >
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/tkb.png')}
                        />
                        <Text style={styles.BtnText}>Thời Khóa Biểu</Text>
                    </TouchableOpacity>

                    {/* Lịch Kiểm Tra */}
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigate('LichKiemTra')}
                    >
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/lkt.png')}
                        />
                        <Text style={styles.BtnText}>Lịch Kiểm Tra{'\n'}(Đang Phát Triển)</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default MainHome