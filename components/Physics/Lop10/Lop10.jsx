import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Lop10.style'

const Lop10 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong1_10')}>
                        <Text style={styles.btnText}>Chương I.{'\n'}MỞ ĐẦU</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong2_10')}>
                        <Text style={styles.btnText}>Chương II.{'\n'}ĐỘNG HỌC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong3_10')}>
                        <Text style={styles.btnText}>Chương III.{'\n'}ĐỘNG LỰC HỌC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Chương IV.{'\n'}NĂNG LƯỢNG – CÔNG – CÔNG SUẤT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Chương V.{'\n'}ĐỘNG LƯỢNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Chương VI.{'\n'}CHUYỂN ĐỘNG TRÒN ĐỀU</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Chương VII.{'\n'}BIẾN DẠNG CỦA VẬT RẮN – ÁP SUẤT CHẤT LỎNG</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Lop10