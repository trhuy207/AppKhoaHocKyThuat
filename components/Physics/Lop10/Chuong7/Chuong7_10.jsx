import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Chuong7_10.style'

const Chuong7_10 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai33_10')}>
                        <Text style={styles.btnText}>BIẾN DẠNG CỦA VẬT RẮN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai34_10')}>
                        <Text style={styles.btnText}>KHỐI LƯỢNG RIÊNG – ÁP SUẤT CHẤT LỎNG</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chuong7_10