import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './SixthTense.style'

const SixthTense = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + had + V3 / V-ed ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + had + not + V3 / V-ed ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Had + S + V3 / V-ed ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Để nói về một hành động diễn ra trước hành động khác trong quá khứ.</Text>
                        <Text style={styles.noteCardEx}>Ex: Before/ By the time my mother came back, I had cleaned up the broken vase.{'\n'}(Trước khi mẹ quay lại, tôi đã dọn sạch bình hoa bị bể rồi)</Text>
                        
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>Before / by the time (trước khi).</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SixthTense