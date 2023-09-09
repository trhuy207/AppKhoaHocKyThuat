import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './TenthTense.style'

const TenthTense = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Tương Lai Hoàn Thành</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + will have + V3/V-ed ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + will have not + V3/V-ed ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Will + S have + V3/V-ed ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Nói về một hành động diễn ra trước một hành động khác/ thời điểm trong tương lai.</Text>
                        <Text style={styles.noteCardEx}>Ex: By the end of this year, I will have worked for our company for 10 years.{'\n'}(Hết năm nay là tôi đã làm việc cho công ty được 10 năm rồi đấy)</Text>

                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>- by + thời gian tương lai (by 10 a.m, by tomorrow, by next month,..){'\n'}- by the end of + thời gian trong tương lai (by the end of next week,..){'\n'}- by the time + mệnh đề chia ở thì hiện tại đơn (by the time I get up,…){'\n'}- before + sự việc/ thời điểm trong tương lai (before 2022,…){'\n'}- khoảng thời gian + from now (2 weeks from now,…)</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TenthTense