import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

import styles from './English.style'

const English = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.card}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Tenses')}
                    >
                        <Image 
                            style={styles.btnImage}
                            source={require('../../assets/img/English/tense.png')}
                        />
                        <Text style={styles.btnText}>12 Thì Cơ Bản Tiếng Anh</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('IrregularVerbs')}
                    >
                        <Image 
                            style={styles.btnImage}
                            source={require('../../assets/img/English/irregularverbs.png')}
                        />
                        <Text style={styles.btnText}>Động Từ Bất Quy Tắc</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Grammar')}
                    >
                        <Image 
                            style={styles.btnImage}
                            source={require('../../assets/img/English/grammar.png')}
                        />
                        <Text style={styles.btnText}>Ngữ Pháp Khác</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default English