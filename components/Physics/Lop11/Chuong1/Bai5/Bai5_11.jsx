import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'
import SvgComponent5 from './SvgImage/SvgComponent5'
import SvgComponent6 from './SvgImage/SvgComponent6'
import SvgComponent7 from './SvgImage/SvgComponent7'
import SvgComponent8 from './SvgImage/SvgComponent8'
import SvgComponent9 from './SvgImage/SvgComponent9'

import styles from './Bai5_11.style'

const Bai5_11 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Động năng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Động năng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <SvgComponent1 />
                                <Text style={styles.contentTitle}>Sự biến thiên động năng theo li độ:</Text>
                                <SvgComponent2 />
                            </View>
                        </View>

                        {/* II. Thế năng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Thế năng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <SvgComponent3 />
                            </View>
                        </View>

                        {/* III. Thế năng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Cơ năng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <SvgComponent4 />
                            </View>
                        </View>
                        
                        {/* IV. Một số dao động thường gặp */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>IV. Một số dao động thường gặp</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>● Con lắc lò xo:</Text>
                                <Text style={styles.contentTitle}>- Cấu tạo:</Text>
                                <Text style={styles.contentText}>Gồm một lò xo có độ cứng k, khối lượng không đáng kể, một đầu gắn cố định, đầu kia gắn với vật nặng khối lượng m chuyển động dọc theo trục của lò xo</Text>
                                <Text style={styles.contentTitle}>- VTCB:</Text>
                                <Text style={styles.contentText}>Con lắc lò xo nằm ngang: VTCB là vị trí lò xo không biến dạng.</Text>
                                <Text style={styles.contentText}>Con lắc lò xo treo thẳng đứng: VTCB là vị trí lò xo biến dạng đoạn <SvgComponent5 /></Text>
                                <Text style={styles.contentTitle}>- Chu kỳ - Tần số:</Text>
                                <Text style={styles.contentText}><SvgComponent6 /></Text>
                                <Text style={styles.contentText}><SvgComponent7 /></Text>
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>● Con lắc đơn:</Text>
                                <Text style={styles.contentTitle}>- Cấu tạo:</Text>
                                <Text style={styles.contentText}>Gồm một vật nặng treo vào sợi dây không giãn có chiều dài l.</Text>
                                <Text style={styles.contentTitle}>- Chu kỳ - Tần số:</Text>
                                <Text style={styles.contentText}><SvgComponent8 /></Text>
                                <Text style={styles.contentText}><SvgComponent9 /></Text>
                            </View>
                        </View>

                        {/* Nhận xét: */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>Nhận xét:</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Vậy động năng và thế năng của vật dao động điều hòa biến thiên với tần số góc ω’=2ω, tần số f’=2f và chu kỳ T’= T/2</Text>
                                <Text style={styles.contentText}>Cơ năng của con lắc tỉ lệ với bình phương biên độ dao động.</Text>
                                <Text style={styles.contentText}>Cơ năng của con lắc lò xo không phụ thuộc vào khối lượng vật.</Text>
                                <Text style={styles.contentText}>Động năng của vật đạt cực đại khi vật qua VTCB và cực tiểu tại vị trí biên. </Text>
                                <Text style={styles.contentText}>Thế năng của vật đạt cực đại tại vị trí biên và cực tiểu khi vật qua VTCB.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai5_11