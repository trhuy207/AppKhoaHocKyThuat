import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './PTHH.style'

const PTHH = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chemistry')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Phương Trình Hóa Học</Text>
            </View>
        </SafeAreaView>
    )
}

export default PTHH