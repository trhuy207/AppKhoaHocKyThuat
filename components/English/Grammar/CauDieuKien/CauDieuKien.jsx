import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './CauDieuKien.style'

const CauDieuKien = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Grammar')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Câu Điều Kiện</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* Câu điều kiện loại 1 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>A. ĐIỀU KIỆN LOẠI 1 (SẼ CÓ THỂ XẢY RA TRONG TƯƠNG LAI):</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Công thức:</Text>
                                <Text style={styles.contentText}>If + S + V(present), S + will + V-inf ....</Text>
                                <Text style={styles.contentNote}>*Chủ ngữ S trong câu điều kiện trên có thể giống nhau hoặc khác nhau.</Text>
                                <Text style={styles.contentEx}>Ex 1: If I have free time, I will go out with you.{'\n'}(Nếu anh rãnh, anh sẽ đi chơi với em)</Text>
                                <Text style={styles.contentEx}>Ex 2: If he says “I love you”, she will feel extremely happy.{'\n'}(Nếu anh nói anh yêu em, cô ấy sẽ cảm thấy cực kì hạnh phúc)</Text>
                            </View>
                        </View>

                        {/* Câu điều kiện loại 2 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>B. ĐIỀU KIỆN LOẠI 2 (NÓI VỀ SỰ VIỆC KHÔNG CÓ THẬT Ở HIỆN TẠI)</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Công thức:</Text>
                                <Text style={styles.contentText}>If + S + V2/V-ed/be(were), S + would + V-inf ....</Text>
                                <Text style={styles.contentNote}>*Chủ ngữ S trong câu điều kiện trên có thể giống nhau hoặc khác nhau.</Text>
                                <Text style={styles.contentEx}>Ex 1: If I were the judge, I would sentence that criminal to death.{'\n'}(Nếu tôi là thẩm phán, tôi đã kết án tử hình tên tội phạm đó rồi)</Text>
                                <Text style={styles.contentEx}>Ex 2: If I stayed at home now, my mom would force me to do the homework.{'\n'}(Nếu tôi mà đang ở nhà bây giờ, mẹ tôi sẽ bắt tôi làm bài tập)</Text>
                            </View>
                        </View>

                        {/* Câu điều kiện loại 3 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>C. ĐIỀU KIỆN LOẠI 3 (NÓI VỀ SỰ VIỆC KHÔNG CÓ THẬT TRONG QUÁ KHỨ)</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Công thức:</Text>
                                <Text style={styles.contentText}>If + S + had V3/V-ed, S + would have + V3/V-ed ....</Text>
                                <Text style={styles.contentNote}>*Chủ ngữ S trong câu điều kiện trên có thể giống nhau hoặc khác nhau.</Text>
                                <Text style={styles.contentEx}>Ex 1: If I hadn’t treated her too badly, She wouldn’t have left me behind.{'\n'}(Nếu tôi đã không đối xử tệ với cô ấy thì cô ấy đã không bỏ tôi lại rồi)</Text>
                                <Text style={styles.contentEx}>Ex 2: If he had come in time for help, she wouldn’t have died.{'\n'}(Nếu ông ấy đến kịp để giúp thì bà đã không chết rồi)</Text>
                            </View>
                        </View>

                        {/* Câu điều kiện loại 4 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>D. ĐIỀU KIỆN LOẠI 4 (NÓI VỀ NGUYÊN NHÂN KHÔNG CÓ THẬT Ở QUÁ KHỨ VÀ KẾT QUẢ CŨNG KHÔNG CÓ THẬT Ở HIỆN TẠI)</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Công thức:</Text>
                                <Text style={styles.contentText}>If + S + V2/V-ed/be(were), S + would have + V3/V-ed ....</Text>
                                <Text style={styles.contentNote}>*Chủ ngữ S trong câu điều kiện trên có thể giống nhau hoặc khác nhau.</Text>
                                <Text style={styles.contentEx}>Ex: If I had studied last night, I wouldn’t have get a big zero now.{'\n'}(Nếu tôi chịu học bài thì tôi đã không ăn trứng ngỗng như bây giờ)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CauDieuKien