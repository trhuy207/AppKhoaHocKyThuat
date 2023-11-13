import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai21_10.style'

const Bai21_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Moment lực */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Moment lực</Text>
                            </View>
                            {/* 1. Tác dụng làm quay của lực */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Tác dụng làm quay của lực</Text>
                                <Text style={styles.contentText}>- Cánh tay đòn là khoảng cách từ trục quay đến giá của lực kí hiệu d</Text>
                                <Image 
                                    style={{width: 210, height: 170}}
                                    source={require('../../../../../assets/img/Physics/mm.png')}
                                />
                            </View>

                            {/* 2. Moment lực */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Moment lực</Text>
                                <Text style={styles.contentText}>   Mômen lực đối với một trục quay là là đại lượng đặc trưng cho tác dụng làm quay của lực và được đo bằng tích của lực với cánh tay đòn của nó.</Text>
                                <Text style={styles.contentCT}>   M = F.d</Text>
                                <Text style={styles.contentText}>Trong đó:</Text>
                                <Text style={styles.contentText}>   F: độ lớn của lực tác dụng (N)</Text>
                                <Text style={styles.contentText}>   d: cánh tay đòn, là khoảng cách từ trục quay đến giá của lực (m)</Text>
                                <Text style={styles.contentText}>- Khi lực tác dụng có giá đi qua trục quay (d = 0) thì momen lực bằng không, vật sẽ không quay .</Text>
                            </View>
                        </View>

                        {/* II. Quy tắc moment lực */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Quy tắc moment lực</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Quy tắc moment lực (điều kiện cân bằng của một vật có trục quay cố định)</Text>
                                <Text style={styles.contentText}>   Muốn cho một vật có trục quay cố định ở trạng thái cân bằng, thì tổng các mômen lực có xu hướng làm vật quay theo chiều kim đồng hồ phải bằng tổng các mômen lực có xu hướng làm vật quay ngược chiều kim đồng hồ.</Text>
                            </View>
                        </View>

                        {/* III. Ngẫu lực */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Ngẫu lực</Text>
                            </View>
                            {/* 1. Ngẫu lực là gì:  */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Ngẫu lực là gì:</Text>
                                <Text style={styles.contentText}>   Hệ hai lực song song, ngược chiều, có độ lớn bằng nhau và cùng tác dụng vào một vật gọi là ngẫu lực.</Text>
                            </View>

                            {/* 2. Moment của ngẫu lực  */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Moment của ngẫu lực</Text>
                                <Text style={styles.contentText}>   Đối với các trục quay vuông góc với mặt phẵng chứa ngẫu lực thì mômen của ngẫu lực không phụ thuộc vào vị trí trục quay và luôn luôn có giá trị:</Text>
                                <Text style={styles.contentCT}>   M = F.d</Text>
                                <Text style={styles.contentText}>Trong đó:</Text>
                                <Text style={styles.contentText}>   F là độ lớn của mỗi lực</Text>
                                <Text style={styles.contentText}>   d là cánh tay đòn của ngẫu lực hay khoảng cách giữa hai giá của hai lực hợp thành ngẫu lực.</Text>
                                <Text style={styles.contentText}>   M là momen của ngẫu lực</Text>
                            </View>
                        </View>

                        {/* IV. Điều kiện cân bằng tổng quát của vật rắn: */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>IV. Điều kiện cân bằng tổng quát của vật rắn:</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Tổng các lực tác dụng lên vật bằng không</Text>
                                <Text style={styles.contentText}>Tổng các moment lực tác dụng lên vật đối với một điểm bất kì chọn làm trục quay bằng không</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai21_10