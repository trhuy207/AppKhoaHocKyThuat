import { View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './Twelfth.style'

const TwelfthTense = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Quá Khứ Hoàn Thành Tiếp Diễn</Text>
            </View>
        </SafeAreaView>
    )
}

export default TwelfthTense