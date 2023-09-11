import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './English.style'

const English = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Tenses')}
                >
                    <Text style={styles.btnText}>10 Thì Cơ Bản Tiếng Anh</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('IrregularVerbs')}
                >
                    <Text style={styles.btnText}>Động Từ Bất Quy Tắc{'\n'}(Đang phát triển)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Grammar')}
                >
                    <Text style={styles.btnText}>Ngữ Pháp Khác{'\n'}(Đang phát triển)</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default English