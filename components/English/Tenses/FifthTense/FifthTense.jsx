import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './FifthTense.style'

const FifthTense = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Quá Khứ Tiếp Diễn</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + were / was + V-ing ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + were / was + not + V-ing ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Were / Was + S + V-ing ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Note:</Text>
                        <Text style={styles.noteCardText}>- Chủ ngữ số ít và đại từ “I, he, she, it” thì đi với “was”.{'\n'}- Chủ ngữ số số nhiều và đại từ “You, we, they” đi với “were”.</Text>

                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Nói về một hành động xảy ra tại một thời điểm cụ thể nào đó.</Text>
                        <Text style={styles.noteCardEx}>Ex: She was cooking dinner at 7 0’clock last night.{'\n'}(Cô ấy đang nấu ăn vào 7 giờ tối qua)</Text>

                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>At that moment (vào lúc đó), at that time (vào lúc đó), at this time yesterday/ last night (vào lúc này hôm qua/ tối qua), at … o’clock yesterday (vào … giờ hôm qua), all day yesterday (suốt ngày hôm qua), all last week = during last week (trong suốt tuần) + thời gian ở quá khứ, whe whole of….(toàn bộ) + thời gian ở quá khứ.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FifthTense