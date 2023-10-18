import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import styles from './Grammar.style'

const Grammar = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ConditionalSentences')}>
                                <Text style={styles.cardBtnText}>Câu Điều Kiện</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('Wish')}>
                                <Text style={styles.cardBtnText}>Câu Điều Ước</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ReportedSpeech')}>
                                <Text style={styles.cardBtnText}>Câu Tường Thuật</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Câu Ghép{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ToVerbAndBareInfinitive')}>
                                <Text style={styles.cardBtnText}>To-Verb và Verb nguyên mẫu</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Quá Khứ Đơn và Quá Khứ Tiếp diễn với When, While{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Danh Động Từ và To-Verb{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('PassiveVoice')}>
                                <Text style={styles.cardBtnText}>Câu Bị Động{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>So Sánh Hơn và So Sánh Nhất{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Mệnh Đề Quan Hệ{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ClausesOfPurpose')}>
                                <Text style={styles.cardBtnText}>Câu Diễn Tả Mục Đích</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Modal Verbs{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Grammar