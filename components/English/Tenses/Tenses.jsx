import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons';

import styles from './Tenses.style'

const Tenses = ({ navigation }) => {
    const { navigate } = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigate('English')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>10 Thì Cơ Bản Tiếng Anh</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('FirstTense')}
                        >
                            <Text style={styles.btnText}>Hiện tại đơn {'\n'}(Simple Present Tense)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('SecondTense')}
                        >
                            <Text style={styles.btnText}>Hiện tại tiếp diễn {'\n'}(Present Continuous)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('ThirdTense')}
                        >
                            <Text style={styles.btnText}>Hiện tại hoàn thành {'\n'}(Present Perfect Tense)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('FourthTense')}
                        >
                            <Text style={styles.btnText}>Quá khứ đơn {'\n'}(Simple Past Tense)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('FifthTense')}
                        >
                            <Text style={styles.btnText}>Quá khứ tiếp diễn {'\n'}(Past Continuous Tense)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('SixthTense')}
                        >
                            <Text style={styles.btnText}>Quá khứ hoàn thành {'\n'}(Past Perfect Tense)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('SeventhTense')}
                        >
                            <Text style={styles.btnText}>Tương Lai Đơn {'\n'}(Simple Future Tense)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('EighthTense')}
                        >
                            <Text style={styles.btnText}>Tương lai gần {'\n'}(Near Future)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('NinethTense')}
                        >
                            <Text style={styles.btnText}>Tương lai tiếp diễn {'\n'}(Future Continuous)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('TenthTense')}
                        >
                            <Text style={styles.btnText}>Tương lai hoàn thành {'\n'}(Future Perfect Tense)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Tenses