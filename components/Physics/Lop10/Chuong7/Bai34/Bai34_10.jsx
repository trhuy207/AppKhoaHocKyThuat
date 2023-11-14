import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai34_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'
import SvgComponent5 from './SvgImage/SvgComponent5'
import SvgComponent6 from './SvgImage/SvgComponent6'
import SvgComponent7 from './SvgImage/SvgComponent7'

const Bai34_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Khối lượng riêng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Khối lượng riêng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Khối lượng riêng của một chất là khối lượng của một đơn vị thể tích chất đó:</Text>
                                <SvgComponent1 />
                            </View>
                        </View>

                        {/* II. Áp lực và áp suất */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Áp lực và áp suất</Text>
                            </View>
                            {/* 1. Áp lực */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Áp lực</Text>
                                <Text style={styles.contentTitle}>a. Khái niệm:</Text>
                                <Text style={styles.contentText}>Áp lực là lực ép tác động trên diện tích bề mặt của một vật theo phương vuông góc với bề mặt tiếp xúc.</Text>
                                
                                <Text style={styles.contentTitle}>b. Đặc điểm:</Text>
                                <Text style={styles.contentText}>Phụ thuộc vào độ lớn của lực tác dụng lên vật và diện tích bề mặt tiếp xúc lên vật.</Text>
                            </View>
                            {/* 2. Áp suất */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Áp suất</Text>
                                <Text style={styles.contentText}>Áp suất là độ lớn của áp lực mà bị ép trên một diện tích có phương vuông góc với bề mặt bị ép.</Text>
                                <SvgComponent2 />
                            </View>
                        </View>

                        {/* III. Áp suất của chất lỏng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Áp suất của chất lỏng</Text>
                            </View>
                            {/* 1. Sự tồn tại áp suất của chất lỏng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Sự tồn tại áp suất của chất lỏng</Text>
                                <Text style={styles.contentText}>Vật ở trong chất lỏng sẽ chịu áp suất của chất lỏng tác dụng lên vật theo mọi phương.</Text>
                            </View>
                            {/* 2. Công thức tính áp suất của chất lỏng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Công thức tính áp suất của chất lỏng</Text>
                                <SvgComponent3 />
                                <Text style={styles.contentText}>Trong đó: </Text>
                                <Text style={styles.contentText}>p: áp suất của chất lỏng tác dụng lên đáy bình</Text>
                                <Text style={styles.contentText}><SvgComponent4 />: áp suất khí quyển</Text>
                                <Text style={styles.contentText}><SvgComponent5 />: khối lượng riêng của chất lỏng</Text>
                                <Text style={styles.contentText}>h: độ sâu của chất lỏng so với mặt thoáng</Text>
                            </View>
                            {/* 3. Phương trình cơ bản của chất lưu đứng yên */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>3. Phương trình cơ bản của chất lưu đứng yên</Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent6 /></Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent7 /></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai34_10