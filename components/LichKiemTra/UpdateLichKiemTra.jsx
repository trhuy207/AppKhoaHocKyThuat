import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite'

import styles from './LichKiemTra.style'

const UpdateLichKiemTra = ({ navigation, route }) => {
    const db = SQLite.openDatabase('app.db')

    const [isLoading, setIsLoading] = useState(true)

    const [todo, setTodo] = useState([])
    const [title, setTitle] = useState([])

    useEffect(() => {
        navigation.addListener('focus', () => {
            db.transaction(tx => {
                tx.executeSql('SELECT title FROM todo WHERE id = ?', [route.params.id],
                    (txObj, resultSet) => setTitle(resultSet.rows.item(0).title),
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

    const addTitle = () => {
        db.transaction(tx => {
            tx.executeSql('UPDATE todo SET title = ? WHERE id = ?', [title, route.params.id],
                (txObj, resultSet) => Alert.alert('Thông báo', 'Đã sửa nội dung thành công!', [
                    { text: 'OK', onPress: () => navigation.goBack() }
                ]),
                (txObj, error) => console.log(error)
            )
        })
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={title}
                placeholderTextColor={'grey'}
                onChangeText={setTitle}
            />
            <TouchableOpacity style={styles.btnAdd} onPress={() => addTitle()}>
                <Text style={styles.btnText}>Sửa</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpdateLichKiemTra