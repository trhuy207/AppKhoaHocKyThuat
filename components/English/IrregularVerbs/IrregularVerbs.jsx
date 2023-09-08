import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons';

import styles from './IrregularVerbs.style'

const IrregularVerbs = () => {
    const { navigate } = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigate('English')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Động Từ Bất Quy Tắc</Text>
            </View>
            <Text>Irregular Verbs</Text>
        </SafeAreaView>
    )
}

export default IrregularVerbs