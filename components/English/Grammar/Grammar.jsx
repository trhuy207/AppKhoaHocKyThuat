import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './Grammar.style'

const Grammar = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('English')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ngữ Pháp Khác</Text>
            </View>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('CauDieuKien')}>
                                <Text style={styles.cardBtnText}>Câu Điều Kiện</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Câu Điều Ước{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Câu Tường Thuật{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Câu Chẻ{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Câu Hỏi Đuôi{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Cách sử dụng COULD và BE ABLE TO{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Liên Từ{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Mệnh Đề Quan Hệ{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Danh Động Từ Và Động Từ Nguyên Mẫu{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Thể Bị Động{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Cách Sử Sụng THOUGH, ALTHOUGH, EVEN THOUGH, DESPITE và IN SPITE OF{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Câu Diễn Tả Mục Đích{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Động Từ Khiếm Khuyết{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Tính Từ Thái Độ{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardElement}>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Mẫu Câu Thông Dụng{'\n'}(Đang Phát Triển)</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Grammar