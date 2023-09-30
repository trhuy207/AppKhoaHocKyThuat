import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './EighthTense.style'

const EighthTense = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + am/is/are going to + V-inf ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + am/is/are not going to + V-inf ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Am/Is/Are + S + going to + V-inf ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Nói về hành động xảy ra trong tương lại gần.</Text>
                        <Text style={styles.noteCardEx}>Ex: I am going to do some shopping. Do you want to come with me?{'\n'}(Tôi định đi mua sắm đây, bạn muốn đi cùng không?)</Text>
                        <Text style={styles.noteCardText}>- Nói về khả năng xảy ra việc gì đó dựa trên cơ sở sẵn có hiện tại.</Text>
                        <Text style={styles.noteCardEx}>Ex: Look at the dark clouds! It’s going to rain.{'\n'}(Nhìn đám mây đen kìa!Trời sắp mưa rồi)</Text>
                    
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>- in + thời gian: trong … nữa (in 2 minutes: trong 2 phút nữa){'\n'}- tomorrow: ngày mai{'\n'}- Next day: ngày hôm tới{'\n'}- Next week/ next month/ next year: Tuần tới/ tháng tới/ năm tới</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EighthTense