import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import styles from './CompoundSentence.style'

const CompoundSentence = () => {
    const [ex1, setShowEx1] = useState(false)
    const [ex2, setShowEx2] = useState(false)
    const [ex3, setShowEx3] = useState(false)
    const [ex4, setShowEx4] = useState(false)
    const [ex5, setShowEx5] = useState(false)
    const [ex6, setShowEx6] = useState(false)
    const [ex7, setShowEx7] = useState(false)
    const [ex8, setShowEx8] = useState(false)

    const [ex11, setShowEx11] = useState(false)
    const [ex22, setShowEx22] = useState(false)
    const [ex33, setShowEx33] = useState(false)
    const [ex44, setShowEx44] = useState(false)
    const [ex55, setShowEx55] = useState(false)
    const [ex66, setShowEx66] = useState(false)
    const [ex77, setShowEx77] = useState(false)
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Trạng từ  */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Dùng trạng từ liên kết để tạo câu ghép.</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Mệnh đề 1; trạng từ liên kết, mệnh đề 2</Text>
                                <Text style={styles.contentText1}>- Trạng từ liên kết chỉ kết quả: accordingly, consequently, hence, therefore, then.</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx1(!ex1)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex1 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ Thomas is not tall; <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>therefore</Text>, he didn’t get accepted into the basketball team.</Text>
                                        <Text style={styles.contentEx}>(Thomas không cao nên anh ấy không được nhận vào đội bóng rổ.)</Text>
                                    </View>
                                ): null}
                                
                                <Text style={styles.contentText1}>- Trạng từ liên kết chỉ trình tự: first, next, furthermore, finally, moreover, in addition.</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx2(!ex2)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex2 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ I ate my breakfast; <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>next</Text>, I went to school.</Text>
                                        <Text style={styles.contentEx}>(Tôi ăn bữa sáng sau đó tôi đi học.)</Text>
                                    </View>
                                ): null}
                                
                                <Text style={styles.contentText1}>- Trạng từ liên kết chỉ quan hệ thời gian: before, since, meanwhile, now, lately.</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx3(!ex3)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex3 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ I ate my breakfast; <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>before</Text>, I went to school.</Text>
                                        <Text style={styles.contentEx}>(Tôi ăn bữa sáng trước khi tôi đến trường.)</Text>
                                    </View>
                                ): null}
                                
                                <Text style={styles.contentText1}>- Trạng từ liên kết chỉ sự tương phản, đối lập: rather, however, but, instead of, in spite of.</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx4(!ex4)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex4 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ I studied very hard; <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>however</Text>, I didn’t pass the History exam.</Text>
                                        <Text style={styles.contentEx}>(Tôi đã học rất chăm chỉ nhưng tôi vẫn trượt bài thi lịch sử.)</Text>
                                    </View>
                                ): null}
                                
                                <Text style={styles.contentText1}>- Trạng từ liên kết để nhấn mạnh: indeed, certainly, of course, definitely.</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx5(!ex5)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex5 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ Tom is clever; <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>indeed</Text>, he’s one of the top 3 in the competition.</Text>
                                        <Text style={styles.contentEx}>(Tom rất thông minh, anh ấy thậm chí còn nằm trong Top 3 của cuộc thi.)</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentText1}>- Trạng từ liên kết dùng để tóm tắt: quickly, briefly, in summary, in conclusion.</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx6(!ex6)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex6 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ I’d like to thank my teammates; <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>in conclusion</Text>, I again thank everyone who's here today.</Text>
                                        <Text style={styles.contentEx}>(Tôi muốn cảm ơn đồng đội của mình, và tóm lại, tôi 1 lần nữa cảm ơn tất cả mọi người ở đây.)</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentText1}>- Trạng từ liên kết dùng để minh họa: for example, for instance, namely, typically.</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx7(!ex7)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex7 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ We will need ingredients to make bread; <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>for example</Text>, we need flour and eggs.</Text>
                                        <Text style={styles.contentEx}>(Chúng ta sẽ cần nguyên liệu để làm bánh mì ví dụ như bột mì và trứng.)</Text>
                                    </View>
                                ): null}
                                

                                <Text style={styles.contentText1}>- Trạng từ liên kết với nghĩa so sánh: similarly, likewise, as, like.</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx8(!ex8)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex8 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ We’ll need flour; <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>like</Text>, we’ll need eggs.</Text>
                                        <Text style={styles.contentEx}>(Chúng ta sẽ cần có bột mỹ cũng như sẽ cần tới trứng.)</Text>
                                    </View>
                                ): null}
                            </View>
                        </View>

                        {/* II. Liên từ */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Dùng các liên từ để tạo thành câu ghép.</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText1}>Như đã nhắc ở trên, bạn có thể dùng F-A-N-B-O-Y-S để tạo câu ghép trong tiếng Anh. Câu ghép khi đó sẽ có cấu tạo cơ bản như sau:</Text>
                                <Text style={styles.contentText}>Mệnh đề 1, liên từ mệnh đề 2 </Text>

                                <Text style={styles.contentText1}>• for - vì, bởi vì, do (chỉ mục đích)</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx11(!ex11)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex11 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ I bought some snacks, <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>for</Text> I was hungry.</Text>
                                        <Text style={styles.contentEx}>(Tôi mua đồ ăn vặt bởi vì tôi đói.)</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentText1}>• and - và (bổ sung, nối tiếp thông tin)</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx22(!ex22)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex22 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ Andy went to the market, <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>and</Text> he bought some tomatoes.</Text>
                                        <Text style={styles.contentEx}>(Andy tới chợ và mua vài quả cà chua.)</Text>
                                    </View>
                                ): null}
                                

                                <Text style={styles.contentText1}>• nor - và cũng không (2 cái đều không)</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx33(!ex33)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex33 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ Andy didn’t come to school, <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>nor</Text> he didn’t do homework.</Text>
                                        <Text style={styles.contentEx}>(Andy không đi học và cũng không làm bài tập về nhà.)</Text>
                                    </View>
                                ): null}
                                

                                <Text style={styles.contentText1}>• but - nhưng (chỉ quan hệ trái ngược)</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx44(!ex44)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex44 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→  It’s hot outside, <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>but</Text> I decide to walk.</Text>
                                        <Text style={styles.contentEx}>(Ngoài trời rất nóng nhưng tôi vẫn quyết định đi bộ.)</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentText1}>• or - hoặc, hay (chỉ sự lựa chọn)</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx55(!ex55)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex55 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ You should work harder, <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>or</Text> you will be fired.</Text>
                                        <Text style={styles.contentEx}>(Bạn cần làm việc chăm chỉ hơn hoặc bạn sẽ bị sa thải.)</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentText1}>• yet - tuy nhiên, nhưng (chỉ quan hệ trái ngược)</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx66(!ex66)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex66 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ The teacher showed us how to solve the math, <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>yet</Text> I didn’t understand.</Text>
                                        <Text style={styles.contentEx}>(Cô giáo đã chỉ cho chúng tôi cách giải rồi nhưng tôi vẫn không hiểu.)</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentText1}>• so - vì thế, bởi thế (nguyên nhân - kết quả)</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowEx77(!ex77)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex77 ? (
                                    <View>
                                        <Text style={styles.contentEx}>→ Andy is sick, <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>so</Text> he doesn’t go to work today.</Text>
                                        <Text style={styles.contentEx}>(Andy bị ốm nên hôm nay anh ấy không đi làm.)</Text>
                                    </View>
                                ): null}
                            </View>
                        </View>

                        {/* III. ; */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Dùng dấu chấm phẩy “;” để tạo câu ghép.</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText1}>Trong trường hợp các mệnh đề có mối quan hệ gần gũi, chúng có thể được liên kết với nhau chỉ bằng dấu chấm phẩy “;”. Lưu ý không dùng dấu phẩy “,” trong trường hợp này.</Text>

                                <Text style={styles.contentEx}>→ My mom is cooking<Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>;</Text> my father is washing dishes.</Text>
                                <Text style={styles.contentEx}>(Tôi mua đồ ăn vặt bởi vì tôi đói.)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CompoundSentence