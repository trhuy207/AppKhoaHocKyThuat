import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

import styles from './Chemistry.style'

const Chemistry = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.card}>
                    {/* <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigation.navigate('PTHH')}
                    >   
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/Chemistry/pthh.png')}
                        />
                        <Text style={styles.BtnText}>Phương Trình Hóa Học{'\n'}(Đang phát triển)</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigation.navigate('DayHoatDongKimLoai')}
                    >   
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/Chemistry/dayDienHoa.png')}
                        />
                        <Text style={styles.BtnText}>Dãy Hoạt Động Kim Loại</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigation.navigate('CauHinhE')}
                    >   
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/chemistry.png')}
                        />
                        <Text style={styles.BtnText}>Cấu Hình Electron</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigation.navigate('NTHHLop8')}
                    >   
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/Chemistry/nthhLop8.png')}
                        />
                        <Text style={styles.BtnText}>Nguyên Tố Hóa Học Lớp 8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigation.navigate('BangTinhTan')}
                    >   
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/Chemistry/searchChemistry.png')}
                        />
                        <Text style={styles.BtnText}>Bảng Tính Tan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigation.navigate('BangTuanHoan')}
                    >   
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/Chemistry/bangtuanhoan.png')}
                        />
                        <Text style={styles.BtnText}>Bảng Tuần Hoàn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => navigation.navigate('ColorChemistry')}
                    >   
                        <Image 
                            style={styles.BtnImage}
                            source={require('../../assets/img/Chemistry/colorChemistry.png')}
                        />
                        <Text style={styles.BtnText}>Màu Một Số Chất Phổ Biến</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Chemistry