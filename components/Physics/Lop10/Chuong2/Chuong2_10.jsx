import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Chuong2_10.style'

const Chuong2_10 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai4_10')}>
                        <Text style={styles.btnText}>ĐỘ DỊCH CHUYỂN VÀ QUÃNG ĐƯỜNG ĐI ĐƯỢC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai5_10')}>
                        <Text style={styles.btnText}>TỐC ĐỘ VÀ VẬN TỐC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai7_10')}>
                        <Text style={styles.btnText}>ĐỒ THỊ ĐỘ DỊCH CHUYỂN – THỜI GIAN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai8_10')}>
                        <Text style={styles.btnText}>CHUYỂN ĐỘNG BIẾN ĐỔI – GIA TỐC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai9_10')}>
                        <Text style={styles.btnText}>CHUYỂN ĐỘNG THẲNG BIẾN ĐỔI ĐỀU</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai10_10')}>
                        <Text style={styles.btnText}>SỰ RƠI TỰ DO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai12_10')}>
                        <Text style={styles.btnText}>CHUYỂN ĐỘNG NÉM</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chuong2_10