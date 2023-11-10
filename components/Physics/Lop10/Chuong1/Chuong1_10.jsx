import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Chuong1_10.style'

const Chuong1_10 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai3_10')}>
                        <Text style={styles.btnText}>THỰC HÀNH TÍNH SAI SỐ TRONG PHÉP ĐO. GHI KẾT QUẢ ĐO</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chuong1_10