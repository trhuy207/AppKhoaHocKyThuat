import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai6_11.style'

const Bai6_11 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Dao động tắt dần */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Dao động tắt dần</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Khái niệm:</Text>
                                <Text style={styles.contentText}>Dao động tắt dần là dao động do có lực cản của môi trường mà biên độ (hay cơ năng) giảm dần theo thời gian.</Text>
                                <Text style={styles.contentTitle}>2. Đặc điểm: </Text>
                                <Text style={styles.contentText}>Lực cản môi trường càng lớn thì dao động tắt dần xảy ra càng nhanh.</Text>
                                <Text style={styles.contentText}>Nếu vật dao động điều hoà với tần số ω0 mà chịu thêm lực cản nhỏ, thì dao động của vật tắt dần chậm. Dao động tắt dần chậm cũng có biên độ giảm dần theo thời gian cho đến 0. </Text>
                                <Image 
                                    style={{width: 200, height: 150}}
                                    source={require('../../../../../assets/img/Physics/ddtd.png')}
                                />
                                <Text style={styles.contentTitle}>3. Ứng dụng:</Text>
                                <Text style={styles.contentText}>Bộ phận giảm xóc của xe máy, ...</Text>
                            </View>
                        </View>

                        {/* II. Dao động cưỡng bức */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Dao động cưỡng bức</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Khái niệm:</Text>
                                <Text style={styles.contentText}>Dao động cưỡng bức là dao động xảy ra dưới tác dụng của ngoại lực tuần hoàn có tần số fn bất kì. Khi dao động ổn định tần số dao động cưỡng bức bằng tần số của ngoại lực.</Text>
                                <Text style={styles.contentTitle}>2. Đặc điểm: </Text>
                                <Text style={styles.contentText}>Dao động cưỡng bức có biên độ không đổi và có tần số bằng tần số của lực cưỡng bức.</Text>
                                <Text style={styles.contentText}>Biên độ dao động cưỡng bức (Acb) phụ thuộc vào các yếu tố sau:</Text>
                                <Text style={styles.contentText}>Biên độ của lực cưỡng bức.</Text>
                                <Text style={styles.contentText}>Mối quan hệ giữa tần số ngoại lực và tần số dao động riêng (Acb càng tăng khi |fn - f0| càng giảm). Khi  |fn - f0| = 0 thì (Acb)max</Text>
                            </View>
                        </View>

                        {/* IV. Hiện tượng cộng hưởng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>IV. Hiện tượng cộng hưởng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Khái niệm:</Text>
                                <Text style={styles.contentText}>là hiện tượng biên độ dao động cưỡng bức đạt giá trị cực đại (Acb)max khi tần số ngoại lực (fn) bằng với tần số riêng (f0) của vật dao động. Hay: (Acb)max {'<=>'} fn = f0.</Text>
                                <Text style={styles.contentTitle}>2. Ứng dụng:</Text>
                                <Text style={styles.contentTitle}>Hộp đàn của các đàn ghi ta, violon,…</Text>
                                <Text style={styles.contentTitle}>Hoạt động của lò vi sóng</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai6_11