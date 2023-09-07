import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import styles from './MainHome.style'

const MainHome = () => {
    const { navigate } = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.ChemistryBtn}
                    onPress={() => navigate('Chemistry')}
                >   
                    <Image 
                        style={styles.ChemistryBtnImage}
                        source={require('../../assets/img/chemistry.png')}
                    />
                    <Text style={styles.ChemistryBtnText}>Từ Điển Hóa Học</Text>
                </TouchableOpacity>

                <TouchableOpacity
                
                    style={styles.PhysicsBtn}
                    onPress={() => navigate('Physics')}
                >
                    <Image 
                        style={styles.PhysicsBtnImage}
                        source={require('../../assets/img/physics.png')}
                    />
                    <Text style={styles.PhysicsBtnText}>Công Thức Vật Lý</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.EnglishBtn}
                    onPress={() => navigate('English')}
                >
                    <Image 
                        style={styles.EnglishBtnImage}
                        source={require('../../assets/img/english.png')}
                    />
                    <Text style={styles.EnglishBtnText}>Công Thức Anh Văn</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainHome