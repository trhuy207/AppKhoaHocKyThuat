import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './BaiChuDe1_10.style'

const BaiChuDe1_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Chuyển động thẳng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Chuyển động thẳng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>- Quỹ đạo chuyển động là đường thẳng</Text>
                                <Text style={styles.contentText}>- Khi vật chuyển động theo một chiều không đổi thì d = s (độ dịch chuyển = quãng đường đi được)</Text>
                                <Text style={styles.contentText}>- Khi vật đang chuyển động theo chiều dương, nếu đổi chiều chuyển động thì trong khoảng thời gian chuyển động ngược chiều đó s {'>'} 0; d {'<'} 0; tốc độ dương còn vận tốc âm.</Text>
                            </View>
                        </View>

                        {/* II. Đồ thị độ dịch chuyển – thời gian trong chuyển động thẳng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Đồ thị độ dịch chuyển – thời gian trong chuyển động thẳng</Text>
                            </View>
                            {/* 1. Cách vẽ đồ thị độ dịch chuyển – thời gian (d – t) trong chuyển động thẳng đều */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Cách vẽ đồ thị độ dịch chuyển – thời gian (d – t) trong chuyển động thẳng đều</Text>
                                <Text style={styles.contentText}>- Biểu thức d = v.t, vẽ giống biểu thức hàm số y = a.x</Text>
                                <Text style={styles.contentText}>- Hình dạng: đường thẳng</Text>
                                <Text style={styles.contentText}>Ví dụ: </Text>
                                <Image 
                                    style={styles.image}
                                    source={require('../../../../../assets/img/Physics/d-t.png')}
                                />
                            </View>

                            {/* 2. Sử dụng đồ thị độ dịch chuyển – thời gian trong chuyển động thẳng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Sử dụng đồ thị độ dịch chuyển – thời gian trong chuyển động thẳng</Text>
                                <Text style={styles.contentText}>Dựa vào đồ thị, ta có thể thu thập số liệu để tính toán yêu cầu của đề bài</Text>
                                <Text style={styles.contentText}>Có thể mô tả được chuyển động: đều, đứng yên, NDĐ, CDĐ, đổi chiều chuyển động…</Text>
                            </View>
                        </View>

                        {/* III. Vận tốc và đồ thị độ dịch chuyển – thời gian trong chuyển động thẳng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Vận tốc và đồ thị độ dịch chuyển – thời gian trong chuyển động thẳng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>- Độ dốc của độ dịch chuyển – thời gian trong chuyển động thẳng cho biết độ lớn vận tốc chuyển động</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BaiChuDe1_10