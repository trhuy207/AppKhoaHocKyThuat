import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './Physics.style'

const Physics = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <TouchableOpacity style={styles.btn10} onPress={() => navigation.navigate('Lop10')}>
                    <Image 
                        style={styles.btnImage}
                        source={require('../../assets/img/Physics/1.png')}
                    />
                    <Text style={styles.btnText}>Lớp 10</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn11} onPress={() => navigation.navigate('Lop11')}>
                    <Image 
                        style={styles.btnImage}
                        source={require('../../assets/img/Physics/2.png')}
                    />
                    <Text style={styles.btnText}>Lớp 11</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn12} onPress={() => navigation.navigate('Lop12')}>
                    <Text style={styles.btnText}>Lớp 12</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Physics