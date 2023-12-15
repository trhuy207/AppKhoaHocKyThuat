import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

import styles from './Physics.style'

const Physics = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong1_10')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop10/hinh-30_1.jpg')}
                        />
                        <Text style={styles.btnText}>MỞ ĐẦU</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong2_10')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop10/a-500x300.jpg')}
                        />
                        <Text style={styles.btnText}>ĐỘNG HỌC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong3_10')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop10/khoi-dong-trang-56-vat-li-10-131841.png')}
                        />
                        <Text style={styles.btnText}>ĐỘNG LỰC HỌC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong4_10')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop10/phat_trien_nang_luong_tai_tao_o_viet_nam-18_34_56_154.jpg')}
                        />
                        <Text style={styles.btnText}>NĂNG LƯỢNG – CÔNG – CÔNG SUẤT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong5_10')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop10/cfd1c2c5af5df0f45682fce1b8462691.jpg')}
                        />
                        <Text style={styles.btnText}>ĐỘNG LƯỢNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong6_10')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop10/25-07-2022_09_25_30_chuyen-dong-tron-deu.jpg')}
                        />
                        <Text style={styles.btnText}>CHUYỂN ĐỘNG TRÒN ĐỀU</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong7_10')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop10/ly-thuyet-bai-33-bien-dang-cua-vat-ran-154841.png')}
                        />
                        <Text style={styles.btnText}>BIẾN DẠNG CỦA VẬT RẮN – ÁP SUẤT CHẤT LỎNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong1_11')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop11/daodong.jpg')}
                        />
                        <Text style={styles.btnText}>DAO ĐỘNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong2_11')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop11/songco.jpg')}
                        />
                        <Text style={styles.btnText}>SÓNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong3_11')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop11/dientruong.png')}
                        />
                        <Text style={styles.btnText}>ĐIỆN TRƯỜNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong4_11')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/lop11/dongdien.jpg')}
                        />
                        <Text style={styles.btnText}>DÒNG ĐIỆN – MẠCH ĐIỆN</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.btn10} onPress={() => navigation.navigate('Lop10')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/1.png')}
                        />
                        <Text style={styles.btnText}>Lớp 10</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn11} onPress={() => navigation.navigate('Lop11')}>
                        <Image
                            style={styles.btnImage}
                            source={require('../../assets/img/Physics/2.png')}
                        />
                        <Text style={styles.btnText}>Lớp 11</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn12} onPress={() => navigation.navigate('Lop12')}>
                        <Text style={styles.btnText}>Lớp 12</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </ScrollView>
    )
}

export default Physics