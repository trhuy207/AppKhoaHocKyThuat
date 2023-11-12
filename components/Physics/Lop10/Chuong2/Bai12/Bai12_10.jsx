import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'

import styles from './Bai12_10.style'

const Bai12_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Chuyển động ném ngang */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Chuyển động ném ngang</Text>
                            </View>
                            {/* 1. Khái niệm về chuyển động ném ngang: */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Khái niệm về chuyển động ném ngang:</Text>
                                <Text style={styles.contentText}>là chuyển động có vận tốc ban đầu theo phương ngang và chuyển động dưới tác dụng của trọng lực</Text>
                            </View>

                            {/* 2. Thí nghiệm */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Thí nghiệm</Text>
                                <Image
                                    style={{width: 160, height: 280}}
                                    source={require('../../../../../assets/img/Physics/121.png')}
                                />
                                <Text style={styles.contentText}>Dùng búa đập nhẹ vào thanh thép giữ bi B, thanh thép chuyển động thả bi B rơi tự do đồng thời đẩy bi A theo phương nằm ngang khỏi giá đỡ với vận tốc v0</Text>
                            </View>

                            {/* 3. Phân tích kết quả thí nghiệm */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>3. Phân tích kết quả thí nghiệm</Text>
                                <Text style={styles.contentText}>a. Thành phần chuyển động theo phương thẳng đứng: rơi tự do với vận tốc ban đầu bằng không</Text>
                                <SvgComponent1 />
                                <Text style={styles.contentText}>b. Thành phần chuyển động theo phương nằm ngang: là chuyển động thẳng đều với vận tốc ban đầu v0.</Text>
                                <SvgComponent2 />
                            </View>
                        </View>

                        {/* II. Chuyển động ném xiên */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Chuyển động ném xiên</Text>
                            </View>
                            {/* 1. Phân tích chuyển động ném xiên: */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Phân tích chuyển động ném xiên:</Text>
                                <Text style={styles.contentText}>được chia làm hai chuyển động: chuyển động theo phương thẳng đứng và chuyển động theo phương nằm ngang</Text>
                            </View>

                            {/* 2. Công thức xác định tầm cao và tầm xa của chuyển động ném xiên */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Công thức xác định tầm cao và tầm xa của chuyển động ném xiên</Text>
                                <Text style={styles.contentText}>Tầm cao: </Text>
                                <SvgComponent3 />
                                <Text style={styles.contentText}>Tầm xa: </Text>
                                <SvgComponent4 />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai12_10