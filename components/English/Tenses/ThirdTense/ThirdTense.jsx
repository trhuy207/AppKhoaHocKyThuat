import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './ThirdTense.style'

const ThirdTense = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + have/ has + V3/V-ed ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + have/ has not + V3/V-ed ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Have/ has + S + V3/V-ed ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Note:</Text>
                        <Text style={styles.noteCardText}>- Chủ ngữ số ít và đại từ “He, she, it” thì đi với “has”.{'\n'}- Chủ ngữ số số nhiều và đại từ “I, you, we, they” đi với “have”.</Text>
                        
                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Nói về một hành động trong quá khứ không rõ mốc thời gian.</Text>
                        <Text style={styles.noteCardEx}>Ex: Have you had breakfast? (Em ăn sáng chưa?)</Text>
                        <Text style={styles.noteCardEx}>No, I haven’t. (dạ chưa ạ)</Text>
                        <Text style={styles.noteCardText}>- Nói về hành động ở quá khứ và đang tiếp tục ở hiện tại.</Text>
                        <Text style={styles.noteCardEx}>Ex: I have leant English for 5 years. {'\n'}(Tôi đã học tiếng anh được 5 năm)</Text>
                        <Text style={styles.noteCardText}>- Diễn tả hành động được bắt đầu trong quá khứ, không đề cập thời điểm cụ thể, nhưng ở hiện tại, kết quả của hành động có vẫn có sức ảnh hưởng.</Text>
                        <Text style={styles.noteCardEx}>Ex: She has broken up with her boyfriend {'\n'}(so she is very sad now.)</Text>
                        <Text style={styles.noteCardEx}>Cô ấy vừa chia tay với bạn trai, kết quả là ở thời điểm hiện tại cô ấy đang rất buồn.</Text>
                        <Text style={styles.noteCardText}>- Nói về một kinh nghiệm cho tới thời điểm hiện tại (thường dùng trạng từ ever).</Text>
                        <Text style={styles.noteCardEx}>Ex: My last Christmas was the worst day I’ve ever had. {'\n'}(Giáng sinh năm ngoái là ngày tệ nhất đời tôi.)</Text>
                    
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>- Before: trước đây{'\n'}- Ever: đã từng{'\n'}- Never: chưa từng, không bao giờ{'\n'}- For + quãng thời gian: trong khoảng (for years, for a long time,..){'\n'}- Since + mốc thời gian: từ khi (since 2001,…){'\n'}- Yet: chưa (dùng trong câu phủ định và câu nghi vấn){'\n'}- …the first/ second…time : lần đầu tiên/ thứ hai..{'\n'}- Just = Recently =  Lately: gần đây, vừa mới{'\n'}- Already: rồi{'\n'}- So far = Until now = Up to now = Up to the present: cho đến bây giờ</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ThirdTense