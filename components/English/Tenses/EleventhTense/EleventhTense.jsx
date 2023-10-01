import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

import styles from './EleventhTense.style'

const EleventhTense = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + have/has + been + V-ing</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + have/ has + not + been + V-ing</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>(WH) + have/ has + S + been + V-ing?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Note:</Text>
                        <Text style={styles.noteCardText}>Thì hiện tại hoàn thành nhấn mạnh kết quả của hành động để lại ở hiện tại, thì hiện tại hoàn thành tiếp diễn nhấn mạnh sự tiếp diễn của hành động kéo dài từ quá khứ và còn tiếp tục đến hiện tại.</Text>
                        
                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Diễn tả hành động bắt đầu ở quá khứ và còn đang tiếp tục ở hiện tại nhấn mạnh tính liên tục.</Text>
                        <Text style={styles.noteCardEx}>Ex 1: She has been waiting for you all day.{'\n'}(Cô ấy đã đợi bạn cả ngày.)</Text>
                        <Text style={styles.noteCardEx}>Ex 2: They have been travelling since last October.{'\n'}(Họ đã đi du lịch từ cuối tháng 10.)</Text>
                        <Text style={styles.noteCardEx}>Ex 3: I’ve been decorating the house this summer.{'\n'}(Tôi đã đang trang trí nhà từ mùa hè.)</Text>
                        <Text style={styles.noteCardText}>- Diễn tả hành động đã kết thúc trong quá khứ nhưng chúng ta quan tâm tới kết quả tới hiện tại.</Text>
                        <Text style={styles.noteCardEx}>Ex 1: She has been cooking since last night.{'\n'}(Cô ấy đã nấu ăn tối hôm qua.)</Text>
                        <Text style={styles.noteCardEx}>Ex 2: Someone’s been eating my cookies.{'\n'}(Ai đó đã ăn bánh cookies của tôi.)</Text>
                    
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>- for the whole + N (N chỉ thời gian)</Text>
                        <Text style={styles.noteCardText}>- for + N (quãng thời gian): trong khoảng(for months, for years,…)</Text>
                        <Text style={styles.noteCardText}>- since + N (mốc/điểm thời gian): từ khi(since he arrived, since July,…)</Text>
                        <Text style={styles.noteCardText}>- All + thời gian(all the morning, all the afternoon,…)</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EleventhTense