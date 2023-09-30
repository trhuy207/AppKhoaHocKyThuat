import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './SecondTense.style'

const SecondTense = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + am/ is/ are + V-ing ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + am/ is/ are + not + V-ing ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Am/ Is/ Are + S + V-ing ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Note:</Text>
                        <Text style={styles.noteCardText}>- Chủ ngữ số ít và đại từ ” He, she, it” thì đi với “is”.{'\n'}- Chủ ngữ số nhiều và đại từ ” You, we, they” thì đi với “are”. Đại từ “I” thì đi với “am”.</Text>
                        
                        <Text style={styles.noteCardTitle}>Cách thêm -ing:</Text>
                        <Text style={styles.noteCardText}>- Nếu như đông từ tận cùng bằng một chữ E: chúng ta bỏ chữ E đó đi rồi mới thêm -ing.</Text>
                        <Text style={styles.noteCardEx}>Ex: Ride {'–>'} Riding</Text>
                        <Text style={styles.noteCardText}>- Nếu động từ 1 âm tiết ở cuối có phụ âm, và trước phụ âm mà có một nguyên âm thì gấp đôi phụ âm rồi mới thêm ING.</Text>
                        <Text style={styles.noteCardEx}>Ex: run {'–>'} running</Text>
                        <Text style={styles.noteCardText}>- Các trường hợp còn lại thêm -ing bình thường.</Text>

                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Nói về hành động đang diễn ra có thể là ngay khoảnh khắc nói hoặc trong một khoảng thời gian nào đó</Text>
                        <Text style={styles.noteCardEx}>Ex1: I am doing my homework. {'\n'}(Tôi đang làm bài tập về nhà)</Text>
                        <Text style={styles.noteCardEx}>Ex2: My son is studying at university {'\n'}(Con trai tôi đang học đại học)</Text>
                        <Text style={styles.noteCardText}>- Nói về hành động trong tương lai đã được lên kế hoạch</Text>
                        <Text style={styles.noteCardEx}>Ex: I am having a party this Saturday. {'\n'}(Tôi sẽ tổ chức một bữa tiệc tùng thứ 7 này)</Text>
                    
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>Now (ngay bây giờ), at the moment (ngay lúc này), at the present (ngay bây giờ), today (ngày hôm nay)</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SecondTense