import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai33_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'

const Bai33_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Biến dạng đàn hồi – biến dạng kéo và biến dạng nén */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Biến dạng đàn hồi – biến dạng kéo và biến dạng nén</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>   Khi không có ngoại lực tác dụng, vật rắn có kích thước và hình dạng xác định. Khi có ngoại lực tác dụng, vật rắn thay đổi kích thước và hình dạng, ta nói vật rắn bị biến dạng.</Text>
                                <Text style={styles.contentText}>   Khi không còn ngoại lực tác dụng, nếu vật rắn lấy lại được hình dạng và kích thước ban đầu thì biến dạng của vật là biến dạng đàn hồi</Text>
                            </View>
                        </View>

                        {/* II. Lực đàn hồi – định luật Hooke */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Lực đàn hồi – định luật Hooke</Text>
                            </View>
                            {/* Lực đàn hồi của lò xo có: */}
                            <View style={styles.cardContent}>
                                <Text style={[styles.contentTitle, {fontStyle: 'italic'}]}>Lực đàn hồi của lò xo có:</Text>
                                <Text style={styles.contentText}>   Điểm đặt: hai đầu của lò xo và tác dụng vào vật tiếp xúc (hay gắn) với lò xo, làm nó biến dạng</Text>
                                <Text style={styles.contentText}>   Phương: Dọc theo trục của lò xo</Text>
                                <Text style={styles.contentText}>   Chiều: Ngược với hướng của ngoại lực gây biến dạng tại mỗi đầu của lò xo.</Text>
                                <Text style={styles.contentText}>   Độ lớn: <SvgComponent1 /></Text>
                                <Text style={styles.contentText}>Trong đó: </Text>
                                <Text style={styles.contentText}><SvgComponent2 /> là độ lớn của lực đàn hồi (N)</Text>
                                <Text style={styles.contentText}><SvgComponent3 /> là độ biến dạng của lò xo (m)</Text>
                                <Text style={styles.contentText}>k là độ cứng hay hệ số đàn hồi của lò xo (N/m)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai33_10