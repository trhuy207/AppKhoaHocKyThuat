import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai25_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'

const Bai25_10 = () => {
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
                            {/* 1. Khái niệm */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Khái niệm</Text>
                                <Text style={styles.contentText}>Là dạng năng lượng của một vật có được do nó đang chuyển động và được xác định theo công thức:</Text>
                                <SvgComponent1 />
                            </View>

                            {/* 2. Liên hệ giữa động năng và công của lực */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Liên hệ giữa động năng và công của lực</Text>
                                <Text style={styles.contentText}>Độ biến thiên động năng bằng công của các ngoại lực tác dụng vào vật</Text>
                                <SvgComponent2 />
                            </View>
                        </View>

                        {/* II. Thế năng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Thế năng</Text>
                            </View>
                            {/* 1. Khái niệm thế năng trong trọng trường: */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Khái niệm thế năng trong trọng trường:</Text>
                                <Text style={styles.contentText}>là dạng năng lượng tương tác giữa trái đất và vật, nó phụ thuộc vào vị trí của vật trong trọng trường.</Text>
                                <SvgComponent3 />
                            </View>

                            {/* 2. Liên hệ giữa thế năng và công của lực thế  */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Liên hệ giữa thế năng và công của lực thế</Text>
                                <Text style={styles.contentText}>Thế năng của vật ở độ cao h có độ lớn bằng công của lực dùng để nâng đều vật lên độ cao này.</Text>
                                <SvgComponent4 />
                                <Text style={styles.contentText}>Công trong trường hợp này được gọi là công của lực thế, nó không phụ thuộc vào độ lớn quãng đường đi được mà chỉ phụ thuộc vào sự chênh lệch độ cao của vị trí đầu và vị trí cuối.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai25_10