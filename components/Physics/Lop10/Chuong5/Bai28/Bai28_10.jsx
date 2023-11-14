import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai28_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'
import SvgComponent5 from './SvgImage/SvgComponent5'
import SvgComponent6 from './SvgImage/SvgComponent6'
import SvgComponent7 from './SvgImage/SvgComponent7'

const Bai28_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Động lượng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Động lượng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Động lượng của một vật khối lượng m đang chuyển động với vận tốc v là đại lượng được xác định bởi công thức:</Text>
                                <SvgComponent1 />
                                <Text style={styles.contentText}>Đơn vị động lượng là kgm/s = N.s</Text>
                                <Text style={styles.contentText}>Động lượng là đại lượng đặc trưng cho sự truyền tương tác giữa các vật</Text>
                            </View>
                        </View>

                        {/* II. Xung lượng của lực */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Xung lượng của lực</Text>
                            </View>
                            {/* 1. Xung lượng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Xung lượng</Text>
                                <Text style={styles.contentText}>Khi một lực <SvgComponent2 /> không đổi tác dụng lên một vật trong khoảng thời gian <SvgComponent4 /> thì tích <SvgComponent3 /> được định nghĩa là xung lượng của lực <SvgComponent2 /> trong khoảng thời gian <SvgComponent4 /> ấy.</Text>
                            </View>
                            {/* 2. Liên hệ giữa xung lượng của lực và độ biến thiên động lượng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Liên hệ giữa xung lượng của lực và độ biến thiên động lượng</Text>
                                <SvgComponent5 />
                                <Text style={styles.contentText}>Độ biến thiên động lượng của một vật trong khoảng thời gian <SvgComponent4 /> bằng xung lượng của tổng các lực tác dụng lên vật trong khoảng thời gian đó.</Text>
                            </View>

                            {/* 3. Dạng tổng quát của định luật II Newton */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>3. Dạng tổng quát của định luật II Newton</Text>
                                <Text style={styles.contentText}>Phát biểu khác của định luật 2 Newton: lực tổng hợp tác dụng lên vật bằng tốc độ thay đổi động lượng của vật.</Text>
                                <SvgComponent6 />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai28_10