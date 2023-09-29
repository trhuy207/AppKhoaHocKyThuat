import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './Tenses.style'

const Tenses = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('English')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>13 Thì Cơ Bản Tiếng Anh</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* hiện tại đơn */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('FirstTense')}
                        >
                            <Text style={styles.btnText}>Hiện tại đơn {'\n'}<Text style={{fontWeight: 'normal'}}>(Simple Present)</Text></Text>
                        </TouchableOpacity>

                        {/* hiện tại tiếp diễn */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('SecondTense')}
                        >
                            <Text style={styles.btnText}>Hiện tại tiếp diễn {'\n'}<Text style={{fontWeight: 'normal'}}>(Present Continuous)</Text></Text>
                        </TouchableOpacity>

                        {/* hiện tại hoàn thành */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('ThirdTense')}
                        >
                            <Text style={styles.btnText}>Hiện tại hoàn thành {'\n'}<Text style={{fontWeight: 'normal'}}>(Present Perfect)</Text></Text>
                        </TouchableOpacity>

                        {/* hiện tại hoàn thành tiếp diễn */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('EleventhTense')}
                        >
                            <Text style={styles.btnText}>Hiện tại hoàn thành tiếp diễn {'\n'}<Text style={{fontWeight: 'normal'}}>(Present Perfect Continuous){'\n'}(Đang phát triển)</Text></Text>
                        </TouchableOpacity>

                        {/* quá khư đơn */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('FourthTense')}
                        >
                            <Text style={styles.btnText}>Quá khứ đơn {'\n'}<Text style={{fontWeight: 'normal'}}>(Simple Past)</Text></Text>
                        </TouchableOpacity>

                        {/* quá khư tiếp diễn */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('FifthTense')}
                        >
                            <Text style={styles.btnText}>Quá khứ tiếp diễn {'\n'}<Text style={{fontWeight: 'normal'}}>(Past Continuous)</Text></Text>
                        </TouchableOpacity>

                        {/* quá khư hoàn thành */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('SixthTense')}
                        >
                            <Text style={styles.btnText}>Quá khứ hoàn thành {'\n'}<Text style={{fontWeight: 'normal'}}>(Past Perfect)</Text></Text>
                        </TouchableOpacity>

                        {/* quá khư hoàn thành tiếp diễn */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('TwelfthTense')}
                        >
                            <Text style={styles.btnText}>Quá khứ hoàn thành tiếp diễn {'\n'}<Text style={{fontWeight: 'normal'}}>(Past Perfect Continuous){'\n'}(Đang phát triển)</Text></Text>
                        </TouchableOpacity>

                        {/* tương lai đơn */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('SeventhTense')}
                        >
                            <Text style={styles.btnText}>Tương Lai Đơn {'\n'}<Text style={{fontWeight: 'normal'}}>(Simple Future)</Text></Text>
                        </TouchableOpacity>

                        {/* tương lai gần */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('EighthTense')}
                        >
                            <Text style={styles.btnText}>Tương lai gần {'\n'}<Text style={{fontWeight: 'normal'}}>(Near Future)</Text></Text>
                        </TouchableOpacity>

                        {/* tương lai tiếp diễn */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('NinethTense')}
                        >
                            <Text style={styles.btnText}>Tương lai tiếp diễn {'\n'}<Text style={{fontWeight: 'normal'}}>(Future Continuous)</Text></Text>
                        </TouchableOpacity>

                        {/* tương lai hoàn thành */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('TenthTense')}
                        >
                            <Text style={styles.btnText}>Tương lai hoàn thành {'\n'}<Text style={{fontWeight: 'normal'}}>(Future Perfect)</Text></Text>
                        </TouchableOpacity>

                        {/* tương lai hoàn thành tiếp diễn */}
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('ThirteenthTense')}
                        >
                            <Text style={styles.btnText}>Tương lai hoàn thành tiếp diễn {'\n'}<Text style={{fontWeight: 'normal'}}>(Future Perfect Continuous){'\n'}(Đang phát triển)</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Tenses