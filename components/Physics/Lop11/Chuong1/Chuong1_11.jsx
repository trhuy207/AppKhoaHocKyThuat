import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Chuong1_11.style'

const Chuong1_11 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BaiChuDe1_11')}>
                        <Text style={styles.btnText}>DAO ĐỘNG ĐIỀU HÒA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => {}}>
                        <Text style={styles.btnText}>ĐỘNG NĂNG – THẾ NĂNG. {'\n'}SỰ CHUYỂN HÓA NĂNG LƯỢNG TRONG DAO ĐỘNG ĐIỀU HÒA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => {}}>
                        <Text style={styles.btnText}>DAO ĐỘNG TẮT DẦN – DAO ĐỘNG CƯỠNG BỨC. HIỆN TƯỢNG CỘNG HƯỞNG</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai5_11')}>
                        <Text style={styles.btnText}>ĐỘNG NĂNG – THẾ NĂNG. {'\n'}SỰ CHUYỂN HÓA NĂNG LƯỢNG TRONG DAO ĐỘNG ĐIỀU HÒA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai6_11')}>
                        <Text style={styles.btnText}>DAO ĐỘNG TẮT DẦN – DAO ĐỘNG CƯỠNG BỨC. HIỆN TƯỢNG CỘNG HƯỞNG</Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chuong1_11