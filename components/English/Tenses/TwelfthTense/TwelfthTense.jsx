import { View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import styles from './TwelfthTense.style'

const TwelfthTense = () => {
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [showD, setShowD] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + had + been + V-ing +…</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + had not (hadn't) + been + V-ing</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Had + S + been + V-ing +… ?{'\n'}WH-word + had + S + been + V-ing +…?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Note:</Text>
                        <Text style={styles.noteCardText}>Thì quá khứ hoàn thành tiếp diễn có thể được sử dụng trong câu điều kiện loại 3 nhằm diễn tả điều kiện không có thực trong quá khứ.</Text>

                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Diễn tả quá trình của một hành động xảy ra trong quá khứ và kéo dài tới một thời điểm khác trong quá khứ.</Text>

                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowA(!showA)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>

                        {showA ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex 1: He and his wife had been talking for about two hours before the policemen arrived. (Anh ấy và vợ đã đang nói chuyện trong khoảng hai giờ trước khi cảnh sát tới.){'\n'}{'→'} sự việc “nói chuyện” đã bắt đầu trong quá khứ và kéo dài tới lúc “cảnh sát tới”. Cả hai sự việc đều diễn ra trong quá khứ.</Text>
                                <Text style={styles.noteCardEx}>Ex 2: Hannah had been running five kilometers a day before she got sick. (Hannah đã đi bộ năm kilomet mỗi ngày trước khi cô ấy bị ốm.){'\n'}{'→'} sự việc “chạy năm kilomet một ngày” bắt đầu từ trong quá khứ, tiếp diễn tới thời điểm sự việc “bị ốm” xảy ra. Cả hai sự việc đều xảy ra trong quá khứ.</Text>
                            </View>
                        ):null}

                        <Text style={styles.noteCardText}>- Diễn tả hành động, sự việc là nguyên nhân của một hành động, sự việc nào đó trong quá khứ.</Text>
                        
                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowB(!showB)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>

                        {showB ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex 1: James gained three kilograms because he had been overeating.{'\n'}(James đã tăng ba cân vì anh ấy đã ăn uống quá độ.)</Text>
                                <Text style={styles.noteCardEx}>Ex 2: Barry didn’t pass the exam because he hadn’t been paying attention to what the teacher said.{'\n'}(Barry đã không vượt qua kỳ kiểm tra vì anh ấy đã không tập trung vào những gì giáo viên nói.)</Text>
                            </View>
                        ):null}

                        <Text style={styles.noteCardText}>- Diễn đạt một hành động đang xảy ra trước một hành động trong quá khứ (nhấn mạng tính tiếp diễn)</Text>
                        
                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowC(!showC)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>
                        
                        {showC ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex 1: I had been thinking about that before you mentioned it.{'\n'}(Tôi vẫn đang nghĩ về điều đó trước khi bạn đề cập tới.)</Text>
                            </View>
                        ):null}
                        
                        <Text style={styles.noteCardText}>- Diễn tả hành động xảy ra để chuẩn bị cho một hành động khác.</Text>
                        
                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowD(!showD)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>
                        
                        {showD ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex 1: I had been practicing for five months and was ready for the championship.{'\n'}(Tôi đã luyện tập suốt 5 tháng và sẵn sàng cho giải vô địch.)</Text>
                                <Text style={styles.noteCardEx}>Ex 2: Willis had been studying hard and felt good about the Spanish test he was about to take.{'\n'}(Willis đã học hành rất chăm chỉ và cảm thấy rất tốt về bài thi tiếng Tây Ban Nha mà anh ấy đã làm.)</Text>
                                <Text style={styles.noteCardEx}>Ex 3: Anna and Mark had been falling in love for 5 years and prepared for a wedding.{'\n'}(Anna và Mark đã yêu nhau được 5 năm và đã chuẩn bị cho một đám cưới.)</Text>
                            </View>
                        ):null}
                        
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>
                            For: trong bao lâu 
                            {'\n'}Since: kể từ khi 
                            {'\n'}When: khi 
                            {'\n'}How long: trong bao lâu 
                            {'\n'}Until then: cho đến lúc đó
                            {'\n'}By the time: vào lúc
                            {'\n'}Prior to that time: thời điểm trước đó
                            {'\n'}Before, after: trước, sau
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TwelfthTense