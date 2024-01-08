import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IconButton } from 'react-native-paper'
import * as SQLite from 'expo-sqlite'

import styles from './LichKiemTra.style'

const LichKiemTra = ({ navigation }) => {
    const db = SQLite.openDatabase('app.db')
    const [isLoading, setIsLoading] = useState(true)

    const [todo, setTodo] = useState([])
    const [title, setTitle] = useState([])

    useEffect(() => {
        navigation.addListener('focus', () => {
            db.transaction(tx => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)')
            })

            db.transaction(tx => {
                tx.executeSql('SELECT * FROM todo', null,
                    (txObj, resultSet) => setTodo(resultSet.rows._array),
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

    const renderTodos = () => {
        return todo.map((todo, index) => {
            return (
                <View key={index} style={styles.todosList}>
                    <Text style={styles.todosListText}>{todo.title}</Text>
                    <IconButton icon='pencil' iconColor='#fff' onPress={() => navigation.navigate('UpdateLichKiemTra', { id: todo.id })} />
                    <IconButton icon='trash-can' iconColor='#fff' onPress={() => navigation.navigate('DeleteLichKiemTra', {id: todo.id})} />
                </View>
            )
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('InsertLichKiemTra')}>
                <Text style={styles.btnText}>Thêm Mục Mới</Text>
            </TouchableOpacity>
            {renderTodos()}
        </View>
    )
}

export default LichKiemTra