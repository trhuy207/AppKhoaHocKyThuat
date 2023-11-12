import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'
import SvgComponent5 from './SvgImage/SvgComponent5'
import SvgComponent6 from './SvgImage/SvgComponent6'
import SvgComponent7 from './SvgImage/SvgComponent7'
import SvgComponent8 from './SvgImage/SvgComponent8'
import SvgComponent9 from './SvgImage/SvgComponent9'

import styles from './Bai21_10.style'

const Bai21_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Tốc độ */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Tốc độ</Text>
                            </View>
                            {/* 1. Tốc độ trung bình*/}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Tốc độ trung bình</Text>
                                <SvgComponent1 />
                            </View>

                            {/* 2. Tốc độ tức thời */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Tốc độ tức thời</Text>
                                <Text style={styles.contentText}>   Trong khoảng thời gian rất ngắn Δt , xe rời được một đoạn đường Δs rất ngắn thì độ lớn của vận tốc tức thời của xe được tính bằng:</Text>
                                <SvgComponent2 />
                                <Text style={styles.contentText}>   Công thức tính vận tốc tức thời của vật ở những thời điểm khác nhau:</Text>
                                <SvgComponent3 />
                                <Text style={styles.contentText}>(với gốc thời gian lấy ở thời điểm t0 )</Text>
                            </View>
                        </View>

                        {/* II. Vận tốc */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Vận tốc</Text>
                            </View>
                            {/* 1. Tốc độ trung bình */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Vận tốc trung bình</Text>
                                <SvgComponent4 />
                            </View>

                            {/* 2. Vận tốc tức thời */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Vận tốc tức thời</Text>
                                <Text style={styles.contentText}>Vận tốc tức thời chính là vận tốc tại một thời điểm nhất định</Text>
                                <SvgComponent5 />
                                <Text style={styles.contentText}>với △t là rất nhỏ</Text>
                            </View>

                            {/* 3. Tổng hợp vận tốc */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>3. Tổng hợp vận tốc</Text>
                                <Text style={styles.contentText}>Công thức cộng vận tốc:</Text>
                                <SvgComponent6 />
                                <Text style={styles.contentText}>Trong đó:</Text>
                                <Text>* <SvgComponent7 /> vận tốc tuyệt đối (vận tốc của vật 1 đối với vật 3 đứng yên)</Text> 
                                <Text>* <SvgComponent8 /> vận tốc tương đối (vận tốc của vật 1 đối với vật 2)</Text> 
                                <Text>* <SvgComponent9 /> vận tốc kéo theo (vận tốc của vật 2 đối với vật 3 đứng yên)</Text> 
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai21_10