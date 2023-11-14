import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './Chuong5_10.style'

const Chuong5_10 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai28_10')}>
                        <Text style={styles.btnText}>ĐỘNG LƯỢNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bai29_10')}>
                        <Text style={styles.btnText}>ĐỊNH LUẬT BẢO TOÀN ĐỘNG LƯỢNG</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chuong5_10