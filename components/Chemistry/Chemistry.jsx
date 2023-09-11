import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './Chemistry.style'

const Chemistry = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.CauHinhElectronBtn}
                    onPress={() => navigation.navigate('PTHH')}
                >   
                    <Image 
                        style={styles.CauHinhElectronImage}
                        source={require('../../assets/img/Chemistry/pthh.png')}
                    />
                    <Text style={styles.CauHinhElectronBtnText}>Phương Trình Hóa Học{'\n'}(Đang phát triển)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.CauHinhElectronBtn}
                    onPress={() => navigation.navigate('TraCuuNT')}
                >   
                    <Image 
                        style={styles.CauHinhElectronImage}
                        source={require('../../assets/img/Chemistry/chatHoaHoc.png')}
                    />
                    <Text style={styles.CauHinhElectronBtnText}>Tra Cứu Nguyên Tố{'\n'}(Đang phát triển)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.CauHinhElectronBtn}
                    onPress={() => navigation.navigate('DayDienHoa')}
                >   
                    <Image 
                        style={styles.CauHinhElectronImage}
                        source={require('../../assets/img/Chemistry/dayDienHoa.png')}
                    />
                    <Text style={styles.CauHinhElectronBtnText}>Dãy Điện Hóa Kim Loại{'\n'}(Đang phát triển)</Text>
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
                    onPress={() => navigation.navigate('NTHHLop8')}
                >   
                    <Image 
                        style={styles.CauHinhElectronImage}
                        source={require('../../assets/img/Chemistry/nthhLop8.png')}
                    />
                    <Text style={styles.CauHinhElectronBtnText}>Nguyên Tố Hóa Học Lớp 8{'\n'}(Đang phát triển)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.CauHinhElectronBtn}
                    onPress={() => navigation.navigate('BangTinhTan')}
                >   
                    <Image 
                        style={styles.CauHinhElectronImage}
                        source={require('../../assets/img/Chemistry/searchChemistry.png')}
                    />
                    <Text style={styles.CauHinhElectronBtnText}>Bảng Tính Tan{'\n'}(Đang phát triển)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.CauHinhElectronBtn}
                    onPress={() => navigation.navigate('BangTuanHoan')}
                >   
                    <Image 
                        style={styles.CauHinhElectronImage}
                        source={require('../../assets/img/Chemistry/bangtuanhoan.png')}
                    />
                    <Text style={styles.CauHinhElectronBtnText}>Bảng Tuần Hoàn{'\n'}(Đang phát triển)</Text>
                </TouchableOpacity>

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
            </View>
        </View>
    )
}

export default Chemistry