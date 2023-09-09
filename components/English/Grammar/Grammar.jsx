import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons';

import styles from './Grammar.style'

const Grammar = () => {
    const { navigate } = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigate('English')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ngữ Pháp Khác</Text>
            </View>
            <Text>Grammar</Text>
        </SafeAreaView>
    )
}

export default Grammar