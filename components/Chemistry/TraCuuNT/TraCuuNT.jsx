import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './TraCuuNT.style'

import getValue from './data';

const TraCuuNT = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chemistry')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Tra Cứu Nguyên Tố</Text>
            </View>
            <View>
                <Text>Coming soon</Text>
            </View>
        </SafeAreaView>
    ) 
}

export default TraCuuNT