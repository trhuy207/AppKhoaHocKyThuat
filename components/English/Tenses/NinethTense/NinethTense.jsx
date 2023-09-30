import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './NinethTense.style'

const NinethTense = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + will be + V-ing ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + will not be + V-ing ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Will + S be + V-ing ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Nói về một hành động đang diễn ra ở tương lai vào một thời điểm cụ thể.</Text>
                        <Text style={styles.noteCardEx}>Ex: By this time next month, my father will be visiting the White House.{'\n'}(Vào giờ này tháng sau, ba tôi đang ghé vào nhà Trắng).</Text>
                    
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>– At this/ that + time/ moment + khoảng thời gian trong tương lai (at this time next year,…).{'\n'}– At + thời điểm xác định trong tương lai (at 8 p.m tomorrow).{'\n'}– …when + mệnh đề chia thì hiện tại đơn (when you arrive,…){'\n'}– Từ/cụm từ nhận biết: In the future, soon, next year, next week, next time.{'\n'}– Ngoài ra khi trong câu có sử dụng các động từ chính như “expect” hay “guess” thì câu viết/nói cũng sẽ được chia ở thì tương lai tiếp diễn.</Text>

                        <Text style={styles.noteCardTitle}>Lưu Ý:</Text>
                        <Text style={styles.noteCardText}>– Mệnh đề bắt đầu với những từ “when, while, before, after, by the time, as soon as, if, unless…” thì không sử dụng thì tương lai tiếp diễn mà dùng thì hiện tại tiếp diễn.{'\n'}– Những từ sau sẽ không hoặc hiếm khi được dùng ở dạng tiếp diễn:{'\n'}+ Sate: be, fit, mean, cost, suit.{'\n'}+ Sở hữu: belong, have{'\n'}+ Giác quan: feel, hear, see, smell, taste, touch{'\n'}+ Cảm giác: hate, hope, like, love, prefer, regret, want, wish{'\n'}+ Hoạt động của não: believe, know, think (nghĩ về), understand</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NinethTense