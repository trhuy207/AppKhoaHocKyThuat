import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'

import styles from './Bai10_10.style'

const Bai10_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Sự rơi trong không khí */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Sự rơi trong không khí</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Các vật rơi trong không khí xảy ra nhanh chậm khác nhau là do lực cản của không khí tác dụng vào chúng khác nhau.</Text>
                            </View>
                        </View>

                        {/* II. Sự rơi tự do */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Sự rơi tự do</Text>
                            </View>
                            {/* 1. Sự rơi tự do: */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Sự rơi tự do:</Text>
                                <Text style={styles.contentText}>sự rơi tự do là sự rơi chỉ dưới tác dụng của trọng lực</Text>
                            </View>

                            {/* 2. Đặc điểm của sự rơi tự do */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Đặc điểm của sự rơi tự do</Text>
                                <Text style={styles.contentText}>Phương: thẳng đứng</Text>
                                <Text style={styles.contentText}>Chiều từ trên xuống</Text>
                                <Text style={styles.contentText}>Là chuyển động thẳng nhanh dần đều</Text>
                            </View>

                            {/* 3. Công thức rơi tự do */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>3. Công thức rơi tự do</Text>
                                <SvgComponent1 />
                                <SvgComponent2 />
                                <SvgComponent3 />
                                <SvgComponent4 />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai10_10