import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'

import { Table, Row, Rows, TableWrapper } from 'react-native-table-component';

import { AntDesign } from '@expo/vector-icons';

import styles from './CauHinhE.style'

import data from './data'

const CauHinhE = ({navigation}) => {
    const item = ({item}) => {
        return(
            <View style={styles.row}>
                <View style={[styles.rowChild, {width: '12%'}]}>
                    <Text style={styles.rowText}>{item.id}</Text>
                </View>
                <View style={[styles.rowChild, {width: '28%'}]}>
                    <Text style={styles.rowText}>{item.eName}</Text>
                </View>
                <View style={[styles.rowChild, {width: '25%'}]}>
                    <Text style={styles.rowText}>{item.sign}</Text>
                </View>
                <View style={[styles.rowChild, {width: '35%'}]}>
                    <Text style={styles.rowText}>{item.eC}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chemistry')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cấu Hình Electron</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <View style={[styles.rowChildTitle, {width: '12%'}]}>
                                <Text style={[styles.rowTitle, {fontWeight: 'bold'}]}>VỊ TRÍ</Text>
                            </View>
                            <View style={[styles.rowChildTitle, {width: '28%'}]}>
                                <Text style={[styles.rowTitle, {fontWeight: 'bold'}]}>NGUYÊN TỐ</Text>
                            </View>
                            <View style={[styles.rowChildTitle, {width: '25%'}]}>
                                <Text style={[styles.rowTitle, {fontWeight: 'bold'}]}>KÍ HIỆU</Text>
                            </View>
                            <View style={[styles.rowChildTitle, {width: '35%'}]}>
                                <Text style={[styles.rowTitle, {fontWeight: 'bold'}]}>CẤU HÌNH E</Text>
                            </View>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={item}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CauHinhE