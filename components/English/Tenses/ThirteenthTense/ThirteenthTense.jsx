import { View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import styles from './ThirteenthTense.style'

const ThirteenthTense = () => {
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [showD, setShowD] = useState(false);
    const [showE, setShowE] = useState(false);
    const [showF, setShowF] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + will + have + been + V-ing</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + will not (won't) + have + been + V-ing</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Will + S (+ not) + have + been + V-ing +… ?{'\n'}WH-word + will + S + have + been + V-ing +…?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Note:</Text>
                        <Text style={styles.noteCardText}>Thì tương lai hoàn thành tiếp diễn không sử dụng với các mệnh đề bắt đầu bằng những từ chỉ thời gian như: when, while, before, after, by the time, as soon as, if, unless… Thay vào đó, bạn có thể sử dụng thì hiện tại hoàn thành tiếp diễn.</Text>
                        
                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowC(!showC)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>
                        
                        {showC ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex: You won’t get a promotion until you will have been working here as long as Tim (sai){'\n'}{'\n'}{'=>'} You won’t get a promotion until you have been working here as long as Nad. (đúng){'\n'}{'\n'}(Bạn sẽ không được thăng chức cho đến khi bạn làm việc lâu năm như Nad.)</Text>
                            </View>
                        ):null}

                        <Text style={styles.noteCardTitle}>Lưu Ý:</Text>
                        <Text style={[styles.noteCardText, {fontWeight: 'bold'}]}>Lưu ý 1: Một số từ ngữ không dùng ở dạng tiếp diễn cũng như thì tương lai hoàn thành tiếp diễn</Text>
                        <Text style={styles.noteCardText}>
                            state: be, cost, fit, mean, suit
                            {'\n'}possession: belong, have
                            {'\n'}senses: feel, hear, see, smell, taste, touch
                            {'\n'}feelings: hate, hope, like, love, prefer, regret, want, wish
                            {'\n'}brain work: believe, know, think (nghĩ về), understand
                        </Text>
                        
                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowD(!showD)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>
                        
                        {showD ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex: Linda will have been having his driver’s license for over two years. (sai){'\n'}{'=>'} Linda will have had his driver’s license for over two years. (đúng)</Text>
                            </View>
                        ):null}

                        <Text style={[styles.noteCardText, {fontWeight: 'bold'}]}>Lưu ý 2: Có thể dùng “be going to” thay thế cho “will” trong cấu trúc tương lai hoàn thành tiếp diễn để biểu thị cùng một nội dung</Text>
                        
                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowE(!showE)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>
                        
                        {showE ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex: You are going to have been waiting for more than three hours when his plane finally arrives.{'\n'}(Bạn chắc sẽ phải đợi hơn 3 tiếng thì máy bay anh ấy mới đến.)</Text>
                            </View>
                        ):null}

                        <Text style={[styles.noteCardText, {fontWeight: 'bold'}]}>Lưu ý 3: Dạng bị động của cấu trúc tương lai hoàn thành tiếp diễn</Text>
                        <Text style={styles.noteCardText}>Will have been being + V3/ed</Text>
                        
                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowF(!showF)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>
                        
                        {showF ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex: The famous artist will have been painting the mural for over seven months by the time it is finished. (chủ động){'\n'}{'=>'} The mural will have been being painted by the famous artist for over seven months by the time it is finished. (bị động)</Text>
                            </View>
                        ):null}

                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Nhấn mạnh tính liên tục của hành động so với một hành động khác trong tương lai.</Text>

                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowA(!showA)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>

                        {showA ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex 1: I will have been playing video games for 6 years when I am 18 years old.{'\n'}(Tôi sẽ chơi trò chơi điện tử trong 6 năm khi tôi 18 tuổi.)</Text>
                                <Text style={styles.noteCardEx}>Ex 2: My children will have been hanging out for an hour by the time I get home.{'\n'}(Các con của tôi sẽ đi chơi được 1 tiếng tính đến lúc tôi về nhà.)</Text>
                            </View>
                        ):null}

                        <Text style={styles.noteCardText}>- Diễn tả một hành động xảy ra và kéo dài liên tục đến một thời điểm cụ thể trong tương lai.</Text>
                        
                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowB(!showB)}>
                                <Text style={styles.hideShowBtnText}>Xem ví dụ</Text>
                        </TouchableOpacity>

                        {showB ? (
                            <View style={styles.ex}>
                                <Text style={styles.noteCardEx}>Ex 1: John will have been travelling abroad for 2 months by the end of next week.{'\n'}(John sẽ du lịch nước ngoài được 2 tháng tính đến cuối tuần sau.)</Text>
                                <Text style={styles.noteCardEx}>Ex 2: By September 13th, we will have been working for this factory for 10 years.{'\n'}(Đến ngày 13 tháng 9, chúng ta sẽ làm việc cho nhà máy này được 10 năm.)</Text>
                            </View>
                        ):null}

                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>
                            + by then: tính đến lúc đó
                            {'\n'}+ by this June,…: tính đến tháng 6 năm nay
                            {'\n'}+ by the end of this week/ month/ year: tính đến cuối tuần này/ tháng này/ năm này.
                            {'\n'}+ by the time + 1 mệnh đề ở thì hiện tại đơn (by the time he comes back)
                            {'\n'}+ Ngoài ra “When” cũng hay được dùng trong mệnh đề trạng ngữ chỉ thời gian.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ThirteenthTense