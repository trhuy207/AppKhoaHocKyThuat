import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Chuong3_10.style'

const Chuong3_10 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai13_10')}>
                        <Text style={styles.btnText}>TỔNG HỢP VÀ PHÂN TÍCH LỰC. CÂN BẰNG LỰC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BaiChuDe1_10')}>
                        <Text style={styles.btnText}>3 ĐỊNH LUẬT NEWTON</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BaiChuDe2_10')}>
                        <Text style={styles.btnText}>CÁC LỰC CƠ HỌC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai21_10')}>
                        <Text style={styles.btnText}>MOMENT LỰC – CÂN BẰNG CỦA VẬT RẮN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chuong3_10