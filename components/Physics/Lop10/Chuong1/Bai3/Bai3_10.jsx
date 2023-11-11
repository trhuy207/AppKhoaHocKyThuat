import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'
import SvgComponent5 from './SvgImage/SvgComponent5'
import SvgComponent6 from './SvgImage/SvgComponent6'

import styles from './Bai3_10.style'

const Bai3_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Phép đo trực tiếp và phép đo gián tiếp. */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Phép đo trực tiếp và phép đo gián tiếp.</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Phép đo một đại lượng vật lí là phép so sánh nó với đại lượng cùng loại được qui ước làm đơn vị.</Text>
                                <Text style={styles.contentText}>+ Công cụ để so sánh gọi là dụng cụ đo.</Text>
                                <Text style={styles.contentText}>+ Đo trực tiếp: So sánh trực tiếp qua dụng cụ.</Text>
                                <Text style={styles.contentText}>+ Đo gián tiếp: Đo một số đại lượng trực tiếp rồi suy ra đại lượng cần đo thông qua công thức.</Text>
                                <Text style={styles.contentText}>Hệ đơn vị đo thông dụng hiện nay là hệ SI.</Text>
                                <Text style={styles.contentText}>Hệ SI qui định 7 đơn vị cơ bản: Độ dài: mét (m) ; thời gian : giây (s) ; khối lượng : kilôgam (kg) ; nhiệt độ : kenvin (K) ; cưòng độ dòng điện: ampe (A) ; cường độ sáng : canđêla (Cd) ; lượng chất : mol (mol).</Text>
                            </View>
                        </View>

                        {/* II. Sai số phép đo. */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Sai số phép đo.</Text>
                            </View>
                            {/* 1. Phân loại sai số */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Phân loại sai số</Text>
                                <Text style={styles.contentTitle}>a. Sai số hệ thống.</Text>
                                <View>
                                    <Text style={styles.contentText}>Là sự sai lệch do phần lẻ không đọc được chính xác trên dụng cụ (gọi là sai số dụng cụ △A’) hoặc điểm 0 ban đầu bị lệch.</Text>
                                    <Text style={styles.contentText}>Sai số dụng cụ △A’ thường lấy bằng nữa hoặc một độ chia trên dụng cụ.</Text>
                                </View>

                                <Text style={styles.contentTitle}>b. Sai số ngẫu nhiên.</Text>
                                <View>
                                    <Text style={styles.contentText}>Là sự sai lệch do hạn chế về khả năng giác quan của con người do chịu tác động của các yếu tố ngẫu nhiên bên ngoài.</Text>
                                </View>

                                <Text style={styles.contentTitle}>c. Giá trị trung bình.</Text>
                                <View>
                                    <SvgComponent1 />
                                </View>
                            </View>

                            {/* 2. Cách xác định sai số của phép đo. */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Cách xác định sai số của phép đo.</Text>
                                <View>
                                    <Text style={styles.contentText}>Sai số ngẫu nhiên tuyệt đối của mỗi lần đo:</Text>
                                    <SvgComponent2 />

                                    <Text style={styles.contentText}>Sai số ngẫu nhiên tuyệt đối trung bình của n lần đo:</Text>
                                    <SvgComponent3 />

                                    <Text style={styles.contentText}>Sai số tuyệt đối của phép đo là tổng sai số tuyệt đối trung bình và sai số dụng cụ:</Text>
                                    <SvgComponent4 />

                                    <Text style={styles.contentText}>Sai số tỉ đối:</Text>
                                    <SvgComponent5 />
                                </View>
                            </View>

                            {/* 3. Cách xác định sai số của phép đo gián tiếp */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>3. Cách xác định sai số của phép đo gián tiếp.</Text>
                                <View>
                                    <Text style={styles.contentText}>Sai số tuyệt đối của một tổng hay hiệu thì bằng tổng các sai số tuyệt đối của các số hạng.</Text>
                                    <Text style={styles.contentText}>Sai số tỉ đối của một tích hay thương thì bằng tổng các sai số tỉ đối của các thừa số.</Text>
                                    <Text style={styles.contentText}>Nếu trong công thức vật lí xác định các đại lượng đo gián tiếp có chứa các hằng số thì hằng số phải lấy đến phần thập phân lẻ nhỏ hơn 1/10 tổng các sai số có mặt trong cùng công thức tính.</Text>
                                    <Text style={styles.contentText}>Nếu công thức xác định đại lượng đo gián tiếp tương đối phức tạp và các dụng cụ đo trực tiếp có độ chính xác tương đối cao thì có thể bỏ qua sai số dụng cụ.</Text>
                                </View>
                            </View>

                            {/* 4. Cách viết kết quả đo. */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>4. Cách viết kết quả đo.</Text>
                                <View>
                                    <SvgComponent6 />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai3_10