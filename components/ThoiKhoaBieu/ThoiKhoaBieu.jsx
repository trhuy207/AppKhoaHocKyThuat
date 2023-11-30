import { View, Text, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SQLite from 'expo-sqlite'

import styles from './ThoiKhoaBieu.style'

const ThoiKhoaBieu = ({ navigation }) => {
    const db = SQLite.openDatabase('app.db')
    const [isLoading, setIsLoading] = useState(true)

    const [tkb, setTkb] = useState([])
    const [id, setId] = useState([])

    useEffect(() => {
        navigation.addListener('focus', () => {
            db.transaction(tx => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Tkb (id INTEGER PRIMARY KEY AUTOINCREMENT, TietSang1 TEXT, TietSang2 TEXT, TietSang3 TEXT, TietSang4 TEXT, TietSang5 TEXT, TietChieu1 TEXT, TietChieu2 TEXT, TietChieu3 TEXT, TietChieu4 TEXT, TietChieu5 TEXT, TietChieu6 TEXT)')
            })

            db.transaction(tx => {
                tx.executeSql('SELECT id FROM Tkb', null,
                    (txObj, resultSet) => setId(resultSet.rows._array),
                    (txObj, error) => console.log(error)
                )
            })

            if (id <= 6) {
                db.transaction(tx => {
                    tx.executeSql('INSERT INTO Tkb (id) VALUES ("1")'),
                    tx.executeSql('INSERT INTO Tkb (id) VALUES ("2")'),
                    tx.executeSql('INSERT INTO Tkb (id) VALUES ("3")'),
                    tx.executeSql('INSERT INTO Tkb (id) VALUES ("4")'),
                    tx.executeSql('INSERT INTO Tkb (id) VALUES ("5")'),
                    tx.executeSql('INSERT INTO Tkb (id) VALUES ("6")')
                })
            }

            db.transaction(tx => {
                tx.executeSql('SELECT * FROM Tkb', null,
                    (txObj, resultSet) => setTkb(resultSet.rows._array),
                    (txObj, error) => console.log(error)
                )
            })

            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>loading...</Text>
            </View>
        )
    }

    const showTkb = () => {
        return tkb.map((tkb, index) => {
            const dayName = () => {
                let id = tkb.id

                if (id == '1') {
                    const name = 'Thứ Hai'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Chỉnh Sửa'
                                style={styles.btnUpdate}
                                onPress={() => navigation.navigate('UpdateThoiKhoaBieu', {id: tkb.id})}
                            />
                        </View>
                    )
                } else if (id == '2') {
                    const name = 'Thứ Ba'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Chỉnh Sửa'
                                style={styles.btnUpdate}
                                onPress={() => navigation.navigate('UpdateThoiKhoaBieu', {id: tkb.id})}
                            />
                        </View>
                    )
                } else if (id == '3') {
                    const name = 'Thứ Tư'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Chỉnh Sửa'
                                style={styles.btnUpdate}
                                onPress={() => navigation.navigate('UpdateThoiKhoaBieu', {id: tkb.id})}
                            />
                        </View>
                    )
                } else if (id == '4') {
                    const name = 'Thứ Năm'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Chỉnh Sửa'
                                style={styles.btnUpdate}
                                onPress={() => navigation.navigate('UpdateThoiKhoaBieu', {id: tkb.id})}
                            />
                        </View>
                    )
                } else if (id == '5') {
                    const name = 'Thứ Sáu'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Chỉnh Sửa'
                                style={styles.btnUpdate}
                                onPress={() => navigation.navigate('UpdateThoiKhoaBieu', {id: tkb.id})}
                            />
                        </View>
                    )
                } else if (id == '6') {
                    const name = 'Thứ Bảy'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Chỉnh Sửa'
                                style={styles.btnUpdate}
                                onPress={() => navigation.navigate('UpdateThoiKhoaBieu', {id: tkb.id})}
                            />
                        </View>
                    )
                }
            }

            const tiet = () => {
                return (
                    <View style={[styles.rowChild, { width: '20%' }]}>
                        <Text style={styles.rowText}>1</Text>
                        <Text style={styles.rowText}>2</Text>
                        <Text style={styles.rowText}>3</Text>
                        <Text style={styles.rowText}>4</Text>
                        <Text style={styles.rowText}>5</Text>
                        <Text style={styles.rowText}>6</Text>
                    </View>
                )
            }

            return (
                <View key={index} style={styles.card}>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            {dayName()}
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.rowChildTitle, { width: '20%' }]}>
                                <Text style={[styles.rowTitle1, { fontWeight: 'bold' }]}>Tiết</Text>
                            </View>
                            <View style={[styles.rowChildTitle, { width: '40%' }]}>
                                <Text style={[styles.rowTitle1, { fontWeight: 'bold' }]}>Sáng</Text>
                            </View>
                            <View style={[styles.rowChildTitle, { width: '40%' }]}>
                                <Text style={[styles.rowTitle1, { fontWeight: 'bold' }]}>Chiều</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        {tiet()}

                        <View style={[styles.rowChild, { width: '40%' }]}>
                            <Text style={styles.rowText}>{tkb.TietSang1}</Text>
                            <Text style={styles.rowText}>{tkb.TietSang2}</Text>
                            <Text style={styles.rowText}>{tkb.TietSang3}</Text>
                            <Text style={styles.rowText}>{tkb.TietSang4}</Text>
                            <Text style={styles.rowText}>{tkb.TietSang5}</Text>
                        </View>

                        <View style={[styles.rowChild, { width: '40%' }]}>
                            <Text style={styles.rowText}>{tkb.TietChieu1}</Text>
                            <Text style={styles.rowText}>{tkb.TietChieu2}</Text>
                            <Text style={styles.rowText}>{tkb.TietChieu3}</Text>
                            <Text style={styles.rowText}>{tkb.TietChieu4}</Text>
                            <Text style={styles.rowText}>{tkb.TietChieu5}</Text>
                            <Text style={styles.rowText}>{tkb.TietChieu6}</Text>
                        </View>
                    </View>
                </View>
            )
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    {showTkb()}
                </View>
            </ScrollView>
        </View>
    )
}

export default ThoiKhoaBieu