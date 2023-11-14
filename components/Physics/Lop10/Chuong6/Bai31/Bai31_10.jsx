import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai31_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'

const Bai31_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Mô tả chuyển động tròn */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Mô tả chuyển động tròn</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Chuyển động tròn là chuyển động có quỹ đạo tròn.</Text>
                                <Text style={styles.contentText}>Công thức liên hệ giữa độ dài cung với góc chắn tâm và bán kính đường tròn</Text>
                                <SvgComponent1 />
                            </View>
                        </View>

                        {/* II. Chuyển động tròn đều – tốc độ - tốc độ góc */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Chuyển động tròn đều – tốc độ - tốc độ góc</Text>
                            </View>
                            {/* 1. Tốc độ */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Tốc độ</Text>
                                <Text style={styles.contentText}>Chuyển động tròn đều có tốc độ không thay đổi</Text>
                                <SvgComponent2 />
                            </View>
                            {/* 2. Tốc độ góc */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Tốc độ góc</Text>
                                <SvgComponent3 />
                                <Text style={styles.contentText}>Công thức liên hệ giữa tốc độ góc, tốc độ và bán kính:</Text>
                                <SvgComponent4 />
                            </View>
                        </View>

                        {/* III. Vận tốc trong chuyển động tròn đều */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Vận tốc trong chuyển động tròn đều</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Tại mỗi thời điểm, vectơ vận tốc tức thời sẽ có phương trùng với tiếp tuyến của đường tròn</Text>
                                <Text style={styles.contentText}>Trong chuyển động tròn đều, độ lớn của vận tốc tức thời không đổi nhưng hướng luôn thay đổi.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai31_10