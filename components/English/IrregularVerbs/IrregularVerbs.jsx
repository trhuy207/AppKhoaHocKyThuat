import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'

import styles from './IrregularVerbs.style'

import data from './data'

const IrregularVerbs = () => {
    const item = ({item}) => {
        return(
            <View style={styles.row}>
                <View style={[styles.rowChild, {width: 60}]}>
                    <Text style={styles.rowText}>{item.id}</Text>
                </View>
                <View style={[styles.rowChild, {width: 120}]}>
                    <Text style={styles.rowText}>{item.v1}</Text>
                </View>
                <View style={[styles.rowChild, {width: 120}]}>
                    <Text style={styles.rowText}>{item.v2}</Text>
                </View>
                <View style={[styles.rowChild, {width: 120}]}>
                    <Text style={styles.rowText}>{item.v3}</Text>
                </View>
                <View style={[styles.rowChild, {width: 120}]}>
                    <Text style={styles.rowText}>{item.trans}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View styles={styles.table}>
                        <ScrollView horizontal={true}>
                            <View style={styles.tableContent}>
                                <View style={styles.row}>
                                    <View style={[styles.rowChildTitle, {width: 60}]}>
                                        <Text style={styles.rowTitle}>STT</Text>
                                    </View>
                                    <View style={[styles.rowChildTitle, {width: 120, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}]}>
                                        <Text style={styles.rowTitle1}>V</Text>
                                        <View style={styles.grp}>
                                            <Text style={styles.subTop}></Text>
                                            <Text style={styles.sub}>(1)</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.rowChildTitle, {width: 120, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}]}>
                                        <Text style={styles.rowTitle1}>V</Text>
                                        <View style={styles.grp}>
                                            <Text style={styles.subTop}></Text>
                                            <Text style={styles.sub}>(2)</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.rowChildTitle, {width: 120, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}]}>
                                        <Text style={styles.rowTitle1}>V</Text>
                                        <View style={styles.grp}>
                                            <Text style={styles.subTop}></Text>
                                            <Text style={styles.sub}>(3)</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.rowChildTitle, {width: 120}]}>
                                        <Text style={styles.rowTitle}>Nghĩa</Text>
                                    </View>
                                </View>

                                <FlatList
                                    data={data}
                                    renderItem={item}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default IrregularVerbs