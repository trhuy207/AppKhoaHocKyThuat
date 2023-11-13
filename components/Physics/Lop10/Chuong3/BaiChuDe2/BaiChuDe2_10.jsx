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
                        {/* I. Trọng lực */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Trọng lực</Text>
                            </View>
                            {/* 1. Trọng lực */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Trọng lực</Text>
                                <Text style={styles.contentText}>Điểm đặt: trọng tâm của vật.</Text>
                                <Text style={styles.contentText}>Phương: thẳng đứng</Text>
                                <Text style={styles.contentText}>Chiều: từ trên xuống</Text>
                                <Text style={styles.contentText}>Độ lớn:  P = mg</Text>
                            </View>

                            {/* 2. Trọng lượng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Trọng lượng</Text>
                                <Text style={styles.contentText}>Trọng lực là cường độ hay độ lớn của trọng lực tác dụng lên vật. Hay nói cách khác, trọng lượng của một vật là độ lớn của lực hút Trái Đất tác dụng lên vật đó. </Text>
                            </View>

                            {/* 3. Phân biệt trọng lượng và khối lượng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>3. Phân biệt trọng lượng và khối lượng</Text>
                                <Text style={[styles.contentTextBold, {color: 'red'}]}>* Khái niệm:</Text>
                                <Text style={styles.contentText}>- <Text style={{fontWeight: 'bold'}}>Trọng lượng</Text>: Là độ lớn hay cường độ của lực hút Trái Đất tác dụng lên vật. Nó phụ thuộc vào khối lượng của vật và phụ thuộc gia tốc trọng trường. Nếu xét vật có khối lượng cố định thì trọng lượng sẽ phụ thuộc vào gia tốc trọng trường</Text>
                                <Text style={styles.contentText}>- <Text style={{fontWeight: 'bold'}}>Khối lượng</Text>: Là khối lượng chất tạo nên vật. Giá trị của nó luôn không đổi dù ở bất kỳ đâu, dù là trong môi trường chân không hay môi trường nước,…</Text>
                                <Text style={[styles.contentTextBold, {color: 'red'}]}>* Đơn vị đo:</Text>
                                <Text style={styles.contentText}>- <Text style={{fontWeight: 'bold'}}>Trọng lượng</Text>: Newton (N)</Text>
                                <Text style={styles.contentText}>- <Text style={{fontWeight: 'bold'}}>Khối lượng</Text>: Kg, Tấn, Tạ, Gam,…</Text>
                                <Text style={[styles.contentTextBold, {color: 'red'}]}>* Cách xác định:</Text>
                                <Text style={styles.contentText}>- <Text style={{fontWeight: 'bold'}}>Trọng lượng</Text>: Cân là vật dụng dùng để xác định khối lượng.</Text>
                                <Text style={styles.contentText}>- <Text style={{fontWeight: 'bold'}}>Khối lượng</Text>: Thường sử dụng lực kế để đo.</Text>
                            </View>
                        </View>

                        {/* II. Lực căng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Lực căng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Lực căng do sợi dây tác dụng vào vật, có đặc điểm:</Text>
                                <Text style={styles.contentText}>+ Điểm đặt: tại đầu của sợi dây</Text>
                                <Text style={styles.contentText}>+ Phương: trùng với phương của sợi dây</Text>
                                <Text style={styles.contentText}>+ Chiều: ngược chiều với lực do vật kéo dây dãn</Text>
                                <Text style={styles.contentText}>+ Độ lớn: bằng độ lớn của lực do vật kéo dây dãn</Text>
                            </View>
                        </View>

                        {/* III. Lực ma sát */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Lực ma sát</Text>
                            </View>
                            {/* 1. Lực ma sát nghỉ: */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Lực ma sát nghỉ:</Text>
                                <Text style={styles.contentText}>là lực ma sát tác dụng lên mặt tiếp xúc của vật, khi vật có xu hướng chuyển động nhưng chưa chuyển động</Text>
                            </View>

                            {/* 2. Lực ma sát trượt */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Lực ma sát trượt</Text>
                                <Text style={styles.contentTitle}>a. Đặc điểm của lực ma sát trượt</Text>
                                <Text style={styles.contentText}>+ Không phụ thuộc vào diện tích tiếp xúc và tốc độ của vật.</Text>
                                <Text style={styles.contentText}>+ Tỉ lệ với độ lớn của áp lực.</Text>
                                <Text style={styles.contentText}>+ Phụ thuộc vào vật liệu và tình trạng của hai mặt tiếp xúc.</Text>
                                
                                <Text style={styles.contentTitle}>b. Công thức của lực ma sát trượt</Text>
                                <SvgComponent1 />
                                <Text style={styles.contentText}>Trong đó:</Text>
                                <Text style={styles.contentText}><SvgComponent2 /> : độ lớn lực ma sát.</Text>
                                <Text style={styles.contentText}><SvgComponent4 /> : áp lực vật đè lên mặt tiếp xúc.</Text>
                                <Text style={styles.contentText}><SvgComponent3 /> : hệ số ma sát trượt, không có đơn vị (Hệ số ma sát trượt <SvgComponent3 /> phụ thuộc vào vật liệu và tình trạng của hai mặt tiếp xúc).</Text>
                            </View>
                        </View>

                        {/* IV. Lực cản của chất lưu */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>IV. Lực cản của chất lưu</Text>
                            </View>
                            {/* 1. Lực cản */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Lực cản:</Text>
                                <Text style={styles.contentText}>lực cản của chất lưu có tác dụng tương tự như lực ma sát, chúng làm chuyển động của các vật bị chậm lại</Text>
                            </View>
                            {/* 2. Lực cản phụ thuộc vào những yếu tố nào */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Lực cản phụ thuộc vào những yếu tố nào:</Text>
                                <Text style={styles.contentText}>Phụ thuộc vào hình dạng và tốc độ của vật</Text>
                            </View>
                        </View>

                        {/* V. Lực nâng của chất lưu */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>V. Lực nâng của chất lưu</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Lực nâng của chất lưu giúp khinh khí cầu lơ lửng trên không trung, máy bay di chuyển trong không khí, cho phép tàu thuyền di chuyển trên mặt nước…</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BaiChuDe2_10