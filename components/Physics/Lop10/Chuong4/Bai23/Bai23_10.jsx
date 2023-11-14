import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai23_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'
import SvgComponent5 from './SvgImage/SvgComponent5'
import SvgComponent6 from './SvgImage/SvgComponent6'
import SvgComponent7 from './SvgImage/SvgComponent7'

const Bai23_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Năng lượng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Năng lượng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Năng lượng có thể chuyển từ dạng này sang dạng khác, hoặc truyền từ vật này sang vật khác và luôn được bảo toàn</Text>
                            </View>
                        </View>

                        {/* II. Công cơ học */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Công cơ học</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Công thức tính công</Text>
                                <Text style={styles.contentText}>Nếu lực không đổi <SvgComponent2 /> tác dụng lên một vật và điểm đặt của lực đó chuyển dời một đoạn s theo hướng hợp với hướng của lực góc <SvgComponent3 /> thì công của lực <SvgComponent2 /> được tính theo công thức:</Text>
                                <SvgComponent1 />
                                <Text style={styles.contentText}>Biện luận:</Text>
                                <Text style={styles.contentText}>- Khi <SvgComponent4 /> thì: lực thực hiện công dương hay công phát động.</Text>
                                <Text style={styles.contentText}>- Khi <SvgComponent5 /> thì A = 0: lực không thực hiện công.</Text>
                                <Text style={styles.contentText}>- Khi <SvgComponent6 /> thì <SvgComponent7 /> : lực thực hiện công âm hay công cản lại chuyển động.</Text>
                                <Text style={styles.contentText}>Trong hệ SI, đơn vị của công là jun (kí hiệu là J): 1J = 1Nm</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai23_10