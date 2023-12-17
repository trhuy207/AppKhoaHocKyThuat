import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite'

const DeleteLichKiemTra = ({navigation, route}) => {
    const db = SQLite.openDatabase('app.db')
    return (
        Alert.alert('Thông báo', 'Bạn có chắc muốn xóa nội dung này không?', [
            {
                text: 'Có', 
                onPress: () => db.transaction(tx => {
                    tx.executeSql('DELETE FROM todo WHERE id = ?', [route.params.id],
                        (txObj, resultSet) => navigation.goBack(),
                        (txObj, error) => console.log(error)
                    )
                })
            },
            {
                text: 'Không', 
                onPress: () => {}
            }
        ])
    )
}

export default DeleteLichKiemTra