import { View, Text, TouchableOpacity, TextInput, Button, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SQLite from 'expo-sqlite'

import styles from './UpdateThoiKhoaBieu.style'

const db = SQLite.openDatabase('app.db')

const UpdateThoiKhoaBieu = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(true)

    const [tkb, setTkb] = useState([])

    const [tietSang1, setTietSang1] = useState('')
    const [tietSang2, setTietSang2] = useState('')
    const [tietSang3, setTietSang3] = useState('')
    const [tietSang4, setTietSang4] = useState('')
    const [tietSang5, setTietSang5] = useState('')

    const [tietChieu1, setTietChieu1] = useState('')
    const [tietChieu2, setTietChieu2] = useState('')
    const [tietChieu3, setTietChieu3] = useState('')
    const [tietChieu4, setTietChieu4] = useState('')
    const [tietChieu5, setTietChieu5] = useState('')
    const [tietChieu6, setTietChieu6] = useState('')

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM Tkb WHERE id = ?', [route.params.id],
                (txObj, resultSet) => {
                    setTietSang1(resultSet.rows.item(0).TietSang1)
                    setTietSang2(resultSet.rows.item(0).TietSang2)
                    setTietSang3(resultSet.rows.item(0).TietSang3)
                    setTietSang4(resultSet.rows.item(0).TietSang4)
                    setTietSang5(resultSet.rows.item(0).TietSang5)
                    
                    setTietChieu1(resultSet.rows.item(0).TietChieu1)
                    setTietChieu2(resultSet.rows.item(0).TietChieu2)
                    setTietChieu3(resultSet.rows.item(0).TietChieu3)
                    setTietChieu4(resultSet.rows.item(0).TietChieu4)
                    setTietChieu5(resultSet.rows.item(0).TietChieu5)
                    setTietChieu6(resultSet.rows.item(0).TietChieu6)
                    setTkb(resultSet.rows._array)
                },
                (txObj, error) => console.log(error)
            )
        })

        setIsLoading(false)
    }, [db])

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
                                title='Lưu'
                                style={styles.btnUpdate}
                                onPress={addTiet}
                            />
                        </View>
                    )
                } else if (id == '2') {
                    const name = 'Thứ Ba'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Lưu'
                                style={styles.btnUpdate}
                                onPress={addTiet}
                            />
                        </View>
                    )
                } else if (id == '3') {
                    const name = 'Thứ Tư'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Lưu'
                                style={styles.btnUpdate}
                                onPress={addTiet}
                            />
                        </View>
                    )
                } else if (id == '4') {
                    const name = 'Thứ Năm'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Lưu'
                                style={styles.btnUpdate}
                                onPress={addTiet}
                            />
                        </View>
                    )
                } else if (id == '5') {
                    const name = 'Thứ Sáu'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Lưu'
                                style={styles.btnUpdate}
                                onPress={addTiet}
                            />
                        </View>
                    )
                } else if (id == '6') {
                    const name = 'Thứ Bảy'
                    return (
                        <View style={[styles.rowChildTitle, { width: '100%' }]}>
                            <Text style={[styles.rowTitle, { fontWeight: 'bold' }]}>{name}</Text>
                            <Button
                                title='Lưu'
                                style={styles.btnUpdate}
                                onPress={addTiet}
                            />
                        </View>
                    )
                }
            }

            const addTiet = () => {
                db.transaction(tx => {
                    tx.executeSql('UPDATE Tkb SET TietSang1 = ?, TietSang2 = ?, TietSang3 = ?, TietSang4 = ?, TietSang5 = ?, TietChieu1 = ?, TietChieu2 = ?, TietChieu3 = ?, TietChieu4 = ?, TietChieu5 = ?, TietChieu6 = ? WHERE id = ?', [tietSang1, tietSang2, tietSang3, tietSang4, tietSang5, tietChieu1, tietChieu2, tietChieu3, tietChieu4, tietChieu5, tietChieu6, route.params.id],
                        (txObj, resultSet) => Alert.alert('Message', 'Successful', [
                            { text: 'OK!', onPress: () => navigation.goBack() }
                        ]),
                        (txObj, error) => console.log(error)
                    )
                })
            }

            return (
                <View key={index} style={styles.card}>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            {dayName()}
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.rowChildTitle, { width: '50%' }]}>
                                <Text style={[styles.rowTitle1, { fontWeight: 'bold' }]}>Sáng</Text>
                            </View>
                            <View style={[styles.rowChildTitle, { width: '50%' }]}>
                                <Text style={[styles.rowTitle1, { fontWeight: 'bold' }]}>Chiều</Text>
                            </View>
                        </View>

                        {Tkb()}
                    </View>
                </View>
            )
        })
    }

    const Tkb = () => {
        return (
            <View style={styles.row}>
                <View style={[styles.rowChild, { width: '50%' }]}>
                    <TextInput
                        style={styles.rowText}
                        value={tietSang1}
                        placeholder='Nhập tiết 1'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietSang1}
                    />
                    <TextInput
                        style={styles.rowText}
                        value={tietSang2}
                        placeholder='Nhập tiết 2'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietSang2}
                    />
                    <TextInput
                        style={styles.rowText}
                        value={tietSang3}
                        placeholder='Nhập tiết 3'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietSang3}
                    />
                    <TextInput
                        style={styles.rowText}
                        value={tietSang4}
                        placeholder='Nhập tiết 4'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietSang4}
                    />
                    <TextInput
                        style={styles.rowText}
                        value={tietSang5}
                        placeholder='Nhập tiết 5'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietSang5}
                    />
                </View>

                <View style={[styles.rowChild, { width: '50%' }]}>
                    <TextInput
                        style={styles.rowText}
                        value={tietChieu1}
                        placeholder='Nhập tiết 1'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietChieu1}
                    />
                    <TextInput
                        style={styles.rowText}
                        value={tietChieu2}
                        placeholder='Nhập tiết 2'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietChieu2}
                    />
                    <TextInput
                        style={styles.rowText}
                        value={tietChieu3}
                        placeholder='Nhập tiết 3'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietChieu3}
                    />
                    <TextInput
                        style={styles.rowText}
                        value={tietChieu4}
                        placeholder='Nhập tiết 4'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietChieu4}
                    />
                    <TextInput
                        style={styles.rowText}
                        value={tietChieu5}
                        placeholder='Nhập tiết 5'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietChieu5}
                    />
                    <TextInput
                        style={styles.rowText}
                        value={tietChieu6}
                        placeholder='Nhập tiết 6'
                        placeholderTextColor={'grey'}
                        onChangeText={setTietChieu6}
                    />
                </View>
            </View>
        )
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

export default UpdateThoiKhoaBieu