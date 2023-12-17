import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite'

import styles from './LichKiemTra.style'

const InsertLichKiemTra = ({navigation}) => {
    const db = SQLite.openDatabase('app.db')

    const [title, setTitle] = useState([])

    const addTitle = () => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO todo (title) VALUES (?)', [title],
                (txObj, resultSet) => Alert.alert('Thông báo', 'Đã thêm nội dung thành công!', [
                    { text: 'OK!', onPress: () => navigation.goBack() }
                ]),
                (txObj, error) => console.log(error)
            )
        })
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Nhập nội dung"
                placeholderTextColor={'grey'}
                onChangeText={setTitle}
            />
            <TouchableOpacity style={styles.btnAdd} onPress={() => addTitle()}>
                <Text style={styles.btnText}>Thêm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InsertLichKiemTra