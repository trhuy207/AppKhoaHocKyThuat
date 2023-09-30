import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

import styles from './FirstTense.style'

const FirstTense = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + V(s/es) ...{'\n'}S am/is/are ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + do/does + not + V ...{'\n'}S + am/is/are + not ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Do/Does + S + V ...?{'\n'}Am/Is/Are + S ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Note:</Text>
                        <Text style={styles.noteCardText}>- Chủ ngữ số ít và đại từ “He, she, it” thì đi với “V(s/es)”, “is” và “does” trong câu nghi vấn.{'\n'}- Chủ ngữ số số nhiều và đại từ “You, we, they” đi với “V-inf”, “are” và “do” trong câu nghi vấn.{'\n'}- Đại từ “I” đi với “V-inf”, “am” và “do” trong câu nghi vấn.</Text>
                        
                        <Text style={styles.noteCardTitle}>Cách thêm “s” và “es” cho động từ:</Text>
                        <Text style={styles.noteCardText}>Thêm “es” sau các động từ tận cùng là: O, CH, SH, S, X, Y (Nếu đứng trước Y là một phụ âm thì đổi Y thành I + ES, còn nếu nguyên âm thì thêm S)</Text>

                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Diễn tả một hành động lặp đi lặp lại hoặc một thói quen.</Text>
                        <Text style={styles.noteCardEx}>Ex: Mary often gets up early in the morning.{'\n'}(Mary thường thức dậy sớm vào buổi sáng)</Text>
                        <Text style={styles.noteCardText}>- Diễn tả một sự thật hiển nhiên.</Text>
                        <Text style={styles.noteCardEx}>Ex: The sun rises in the east and sets in the west.{'\n'}(Mặt trời mọc ở phía đông và lặn ở phía tây.)</Text>
                    
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>Always(luôn luôn), usually(thường xuyên), often/occasionally(thường), sometimes (thỉnh thoảng), rarely/barely/seldom (hiếm khi), never (không bao giờ).</Text>

                        <Text style={styles.noteCardTitle}>Lưu Ý: Các trạng từ trên đứng trước động từ thường và đứng sau động từ to be.</Text>
                        <Text style={styles.noteCardEx}>Ex1: He usually goes to bed at 10 p.m. (Anh ấy thường xuyên đi ngủ lúc 10 giờ tối)</Text>
                        <Text style={styles.noteCardEx}>Ex2: He is often late for class. (Anh ấy thường đi học trễ )</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FirstTense