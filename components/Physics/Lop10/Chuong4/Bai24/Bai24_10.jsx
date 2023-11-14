import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai24_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'

const Bai24_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Khái niệm */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Khái niệm</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Công suất là đại lượng đặc trưng cho tốc độ sinh công, được đo bằng  công thực hiện được trong một đơn vị thời gian</Text>
                                <SvgComponent1 />
                                <Text style={styles.contentText}>Trong đó:</Text>
                                <Text style={styles.contentText}>   A là công thực hiện (J)</Text>
                                <Text style={styles.contentText}>   t là thời gian thực hiện công A	(s)</Text>
                                <Text style={styles.contentText}>   P là công suất	(W)</Text>
                                <Text style={styles.contentText}>   Đơn vị của công suất là oát (W): {'\n'} <SvgComponent2 /></Text>
                            </View>
                        </View>

                        {/* II. Liên hệ giữa công suất với lực và tốc độ */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Liên hệ giữa công suất với lực và tốc độ</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <SvgComponent3 />
                                <Text style={styles.contentText}>Chú ý: Trong thực tế, người ta còn dùng</Text>
                                <Text style={styles.contentText}>+ Đơn vị công suất là mã lực hay ngựa (HP): 1HP = 736W</Text>
                                <Text style={styles.contentText}>+ Đơn vị công kilowatt giờ (kwh): 1kwh = 3.600.000J</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai24_10