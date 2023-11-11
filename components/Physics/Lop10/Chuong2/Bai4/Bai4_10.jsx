import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Bai4_10.style'

const Bai4_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Độ dịch chuyển */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Độ dịch chuyển</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Độ dịch chuyển là một đại lượng vectơ, cho biết độ dài và hướng của sự thay đổi vị trí của vật</Text>
                            </View>
                        </View>

                        {/* II. Phân biệt độ dịch chuyển và quãng đường đi được */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Phân biệt độ dịch chuyển và quãng đường đi được</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Khi vật chuyển động thẳng, không đổi chiều thì độ lớn của độ dịch chuyển và quãng đường đi được bằng nhau.</Text>
                                <Text style={styles.contentText}>Khi vật chuyển động thẳng, có đổi chiều thì độ lớn của độ dịch chuyển và quãng đường đi được không bằng nhau.</Text>
                            </View>
                        </View>

                        {/* III. Tổng hợp độ dịch chuyển */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Tổng hợp độ dịch chuyển</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Bằng quy tắc tổng hợp vectơ</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai4_10