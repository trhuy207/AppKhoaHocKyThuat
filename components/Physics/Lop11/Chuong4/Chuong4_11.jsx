import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Chuong4_10.style'

const Chuong4_10 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai23_10')}>
                        <Text style={styles.btnText}>NĂNG LƯỢNG – CÔNG CƠ HỌC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai24_10')}>
                        <Text style={styles.btnText}>CÔNG SUẤT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai25_10')}>
                        <Text style={styles.btnText}>ĐỘNG NĂNG – THẾ NĂNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai26_10')}>
                        <Text style={styles.btnText}>CƠ NĂNG – ĐỊNH LUẬT BẢO TOÀN CƠ NĂNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai27_10')}>
                        <Text style={styles.btnText}>HIỆU SUẤT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chuong4_10