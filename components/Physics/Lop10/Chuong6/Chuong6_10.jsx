import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Chuong6_10.style'

const Chuong6_10 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai31_10')}>
                        <Text style={styles.btnText}>ĐỘNG HỌC CỦA CHUYỂN ĐỘNG TRÒN ĐỀU</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai32_10')}>
                        <Text style={styles.btnText}>LỰC HƯỚNG TÂM VÀ GIA TỐC HƯỚNG TÂM</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chuong6_10