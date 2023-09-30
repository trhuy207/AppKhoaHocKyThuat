import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'

import styles from './CauHinhE.style'

import data from './data'

const CauHinhE = () => {
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