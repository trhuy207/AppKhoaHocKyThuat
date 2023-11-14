import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai26_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'

const Bai26_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Sự chuyển hóa giữa động năng và thế năng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Sự chuyển hóa giữa động năng và thế năng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Cơ năng của một vật là tổng động năng và thế năng của nó. Khi vật chuyển động trong trường trọng lực thì cơ năng có dạng:</Text>
                                <SvgComponent1 />
                                <Text style={styles.contentText}>Động năng và thế năng có thể chuyển hóa qua lại lẫn nhau.</Text>
                            </View>
                        </View>

                        {/* II. Định luật bảo toàn cơ năng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Định luật bảo toàn cơ năng</Text>
                            </View>
                            {/* 1. Thí nghiệm về con lắc đồng hồ  */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Thí nghiệm về con lắc đồng hồ</Text>
                                <Image 
                                    style={{width: 210, height: 195}}
                                    source={require('../../../../../assets/img/Physics/sss.png')}
                                />
                                <Text style={styles.contentText}>   Vật chuyển động từ A đến O rồi đến B, sau đó quay ngược trở lại về A. Cứ như vậy động năng và thế năng chuyển hóa qua lại lẫn nhau.</Text>
                            </View>

                            {/* 2. Định luật bảo toàn cơ năng: */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Định luật bảo toàn cơ năng:</Text>
                                <Text style={styles.contentText}>Khi một vật chuyển động trong trọng trường chỉ chịu tác dụng của trọng lực thì cơ năng của vật là một đại lượng bảo toàn</Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent2 /></Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent3 /></Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent4 /></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai26_10