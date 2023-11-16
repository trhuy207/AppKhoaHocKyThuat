import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Lop11.style'

const Lop11 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong1_11')}>
                        <Text style={styles.btnText}>Chương I.{'\n'}DAO ĐỘNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong2_11')}>
                        <Text style={styles.btnText}>Chương II.{'\n'}SÓNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong3_11')}>
                        <Text style={styles.btnText}>Chương III.{'\n'}ĐIỆN TRƯỜNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chuong4_11')}>
                        <Text style={styles.btnText}>Chương IV.{'\n'}DÒNG ĐIỆN – MẠCH ĐIỆN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Lop11