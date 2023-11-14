import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai27_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'

const Bai27_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Năng lượng có ích và năng lượng hao phí */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Năng lượng có ích và năng lượng hao phí</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Luôn tồn tại năng lượng hao phí trong các quá trình chuyển hóa năng lượng.</Text>
                                <Text style={styles.contentText}>Ví dụ:</Text>
                                <Text style={styles.contentText}>- Trong các động cơ nhiệt thông thường có khoảng từ 60 – 70% năng lượng bị hao phí.</Text>
                                <Text style={styles.contentText}>- Trong các động cơ điện năng lượng hao phí thấp hơn, chỉ vào khoảng 10%</Text>
                                <Text style={styles.contentText}>- Nhưng trong Pin mặt trời thì ngược lại, chỉ có khoảng 10% năng lượng của ánh sáng mặt trời được chuyển hóa thành điện năng, còn lại là năng lượng hao phí.</Text>
                            </View>
                        </View>

                        {/* II. Hiệu suất */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Hiệu suất</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Để đánh giá tỉ lệ giữa năng lượng có ích và năng lượng toàn phần, người ta dùng khái niệm hiệu suất.</Text>
                                <Text style={styles.contentText}>Hiệu suất = Năng lượng có ích : Năng lượng toàn phần</Text>
                                <SvgComponent1 />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai27_10