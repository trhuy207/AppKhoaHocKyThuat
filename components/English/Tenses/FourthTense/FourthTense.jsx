import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './FourthTense.style'

const FourthTense = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Quá Khứ Đơn</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Với Động Từ Tobe:</Text>
                        <Text style={[styles.formulaContentTitle, {fontStyle: 'italic'}]}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + V2/ V-ed ...</Text>

                        <Text style={[styles.formulaContentTitle, {fontStyle: 'italic'}]}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + was/ were + not ...</Text>

                        <Text style={[styles.formulaContentTitle, {fontStyle: 'italic'}]}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Was/ Were + S ...?</Text>

                        <Text style={styles.formulaContentTitle}>Với Động Từ Thường:</Text>
                        <Text style={[styles.formulaContentTitle, {fontStyle: 'italic'}]}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + V2/ V-ed ...</Text>

                        <Text style={[styles.formulaContentTitle, {fontStyle: 'italic'}]}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + did not + V-inf ...</Text>

                        <Text style={[styles.formulaContentTitle, {fontStyle: 'italic'}]}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Did + S + V-inf ...?</Text>

                        <Text style={[styles.formulaContentTitle, {fontStyle: 'italic'}]}>Câu Hỏi WH- Question:</Text>
                        <Text style={styles.formulaContent}>WH-word + did + S + (not) + V-inf ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Note:</Text>
                        <Text style={styles.noteCardText}>- Chủ ngữ số ít và đại từ “He, she, it” thì đi với “V(s/es)”, “is” và “does” trong câu nghi vấn.{'\n'}- Chủ ngữ số số nhiều và đại từ “You, we, they” đi với “V-inf”, “are” và “do” trong câu nghi vấn.{'\n'}- Đại từ “I” đi với “V-inf”, “am” và “do” trong câu nghi vấn.</Text>
                        
                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Diễn tả hành động xảy ra và chấm dứt tại một thời điểm hoặc một khoảng thời gian xác định trong quá khứ.</Text>
                        <Text style={styles.noteCardEx}>Ex: I bought a bunch of flowers yesterday. {'\n'}(Tôi đã mua một bó bông ngày hôm qua)</Text>
                    
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>Yesterday (ngày hôm qua), … ago (cách đây …), last (night, week, month, year..) hoặc in + năm trong quá khứ.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FourthTense