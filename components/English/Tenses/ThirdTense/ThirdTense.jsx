import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './ThirdTense.style'

const ThirdTense = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Hiện Tại Hoàn Thành</Text>
            </View>
        </SafeAreaView>
    )
}

export default ThirdTense