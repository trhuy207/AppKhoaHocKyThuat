import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'

import styles from './BaiChuDe2_10.style'

const BaiChuDe2_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Chuyển động biến đổi */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Chuyển động biến đổi</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Chuyển động có vận tốc thay đổi được gọi là chuyển động biến đổi</Text>
                            </View>
                        </View>

                        {/* II. Gia tốc của chuyển động biến đổi */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Gia tốc của chuyển động biến đổi</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Là đại lượng cho biết sự thay đổi nhanh chậm của sự thay đổi vận tốc</Text>
                                <SvgComponent1 />
                                <Text style={styles.contentText}>Đơn vị gia tốc là <SvgComponent2 /></Text>
                                <Text style={styles.contentText}>Khi <SvgComponent3 /> cùng chiều với <SvgComponent4 /> : chuyển động nhanh dần</Text>
                                <Text style={styles.contentText}>Khi <SvgComponent3 /> ngược chiều với <SvgComponent4 /> : chuyển động chậm dần</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BaiChuDe2_10