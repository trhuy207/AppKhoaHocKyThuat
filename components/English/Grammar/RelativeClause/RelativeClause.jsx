import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import styles from './RelativeClause.style'

const RelativeClause = () => {
    const [p1, showP1] = useState(false)
    const [p2, showP2] = useState(false)
    const [p3, showP3] = useState(false)
    const [p4, showP4] = useState(false)
    const [p5, showP5] = useState(false)
    const [p6, showP6] = useState(false)
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* A. Các loại từ dùng trong mệnh đề quan hệ */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>A. Các loại từ dùng trong mệnh đề quan hệ</Text>
                            </View>
                            {/* 1. Các loại đại từ quan hệ */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Các loại đại từ quan hệ</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP1(!p1)}>
                                    <Text style={styles.hideShowBtnText}>Xem Cách Dùng</Text>
                                </TouchableOpacity>
                                {p1 ? (
                                    <View>
                                        <Text style={styles.contentTextBold}>- Who: Thường sử dụng làm chủ ngữ, tân ngữ hoặc có thể thay thế cho các danh từ chỉ người.</Text>
                                        <Text style={styles.contentCT}>• <Text style={{ fontWeight: 'bold', color: 'black' }}>Cấu trúc: </Text>... N (person) + Who + V + O</Text>
                                        <Text style={styles.contentText}>Ví dụ: The person I admire most in life is my father, who has done so many great things for our family. (Người tôi ngưỡng mộ nhất trong cuộc sống là bố của tôi, người mà đã làm rất nhiều điều vĩ đại vì gia đình chúng tôi.)</Text>

                                        <Text style={styles.contentTextBold}>- Whom: Thường sử dụng để làm tân ngữ hoặc thay thế cho các danh từ chỉ người.</Text>
                                        <Text style={styles.contentCT}>• <Text style={{ fontWeight: 'bold', color: 'black' }}>Cấu trúc: </Text>... N (person) + Whom + V + O</Text>
                                        <Text style={styles.contentText}>Ví dụ: Do you know the teacher whom was the homeroom of my class for 3 years in high school? (Bạn có biết cô giáo người mà là chủ nhiệm của lớp tôi trong suốt 3 năm cấp 3?)</Text>

                                        <Text style={styles.contentTextBold}>- Which: Thường sử dụng để làm chủ ngữ, tân ngữ, dùng để thay thế cho các danh từ chỉ vật.</Text>
                                        <Text style={styles.contentCT}>• <Text style={{ fontWeight: 'bold', color: 'black' }}>Cấu trúc: </Text>... N (thing) + Which + V + O</Text>
                                        <Text style={styles.contentCT}>  <Text style={{ fontWeight: 'bold', color: 'black' }}>hoặc: </Text>... N (thing) + Which + S + V</Text>
                                        <Text style={styles.contentText}>Ví dụ: I really like Vietnam which has a lot of delicious, cheap street food. (Tôi thực sự rất thích Việt Nam cái mà có rất nhiều món ăn đường phố ngon, rẻ.)</Text>

                                        <Text style={styles.contentTextBold}>- Whose: Dùng để chỉ sự sở hữu của người và vật.</Text>
                                        <Text style={styles.contentCT}>• <Text style={{ fontWeight: 'bold', color: 'black' }}>Cấu trúc: </Text>... N (person, thing) + Whose + N + V</Text>
                                        <Text style={styles.contentText}>Ví dụ: Mr. Roborts, whose son received a full scholarship to Harvard University, is a very kind man. (Ông Roborts người có con trai nhận được học bổng toàn phần của đại học Harvard là người rất phúc hậu.)</Text>

                                        <Text style={styles.contentTextBold}>- That: Thường dùng làm chủ ngữ, tân ngữ để thay cho cả danh từ chỉ người và danh từ chỉ vật (who, whom,which). Tuy nhiên, that sẽ không dùng trong các mệnh đề quan hệ không xác định hoặc các giới từ.</Text>
                                        <Text style={styles.contentText}>Ngoài ra, that còn thường sử dụng trong các trường hợp sau: khi đi sau là các hình thức so sánh nhất; khi đi sau các từ như: only, the last, the first; khi các danh từ đi trước bao gồm cả người cả vật. Hoặc sử dụng khi đi sau các đại từ bất định, đại từ phủ định như: nobody, anyone, no one, anything, something,...</Text>
                                        <Text style={styles.contentText}>Ví dụ: He was talking about the movie that he went to see last night. (Anh ta đang nói về bộ phim cái mà anh ta đã đi xem vào tối hôm qua.)</Text>
                                    </View>
                                ) : null}
                            </View>

                            {/* 2. Các loại trạng từ quan hệ */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Các loại trạng từ quan hệ</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP2(!p2)}>
                                    <Text style={styles.hideShowBtnText}>Xem Cách Dùng</Text>
                                </TouchableOpacity>
                                {p2 ? (
                                    <View>
                                        <Text style={styles.contentTextBold}>- Why: Thường sử dụng cho các mệnh đề chỉ lý do, sử dụng thay cho for that reason hoặc for the reason.</Text>
                                        <Text style={styles.contentCT}>• <Text style={{ fontWeight: 'bold', color: 'black' }}>Cấu trúc: </Text>... N (reason) + Why + S + V ...</Text>
                                        <Text style={styles.contentText}>Ví dụ: I don’t know the reason. You didn’t go to school for that reason.</Text>
                                        <Text style={styles.contentText}>{'->'} I don’t know the reason why you didn’t go to school.</Text>

                                        <Text style={styles.contentTextBold}>- Where: Dùng để thay thế từ chỉ nơi chốn, dùng thay cho there.</Text>
                                        <Text style={styles.contentCT}>• <Text style={{ fontWeight: 'bold', color: 'black' }}>Cấu trúc: </Text>... N (place) + Where + S + V (Where = ON / IN / AT + Which)</Text>
                                        <Text style={styles.contentText}>Ví dụ: The hotel wasn’t very clean. We stayed at that hotel.</Text>
                                        <Text style={styles.contentText}>{'->'} The hotel <Text style={styles.contentTextBold}>where we stayed</Text> wasn’t very clean.</Text>
                                        <Text style={styles.contentText}>{'->'} The hotel <Text style={styles.contentTextBold}>at which we stayed</Text> wasn’t very clean. </Text>
                                        <Text style={styles.contentText}>{'->'} The hotel <Text style={styles.contentTextBold}>which we stayed</Text> at wasn’t very clean. </Text>

                                        <Text style={styles.contentTextBold}>- When: Dùng thay thế cho các từ chỉ thời gian, thay cho when.</Text>
                                        <Text style={styles.contentCT}>• <Text style={{ fontWeight: 'bold', color: 'black' }}>Cấu trúc: </Text>...N (time) + When + S + V … (When = ON / IN / AT + Which)</Text>
                                        <Text style={styles.contentText}>Ví dụ: Do you still remember the day? We first met on that day.</Text>
                                        <Text style={styles.contentText}>{'->'} Do you still remember the day <Text style={styles.contentTextBold}>when we first met?</Text></Text>
                                        <Text style={styles.contentText}>{'->'} Do you still remember the day <Text style={styles.contentTextBold}>on which we first met?</Text></Text>
                                        <Text style={styles.contentText}>{'->'} Do you still remember the day <Text style={styles.contentTextBold}>which we first met on?</Text></Text>
                                    </View>
                                ) : null}
                            </View>
                        </View>

                        {/* B. Các loại mệnh đề quan hệ */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>B. Các loại mệnh đề quan hệ</Text>
                                <Text style={styles.contentText}>Mệnh đề quan hệ được chia thành hai loại chính là mệnh đề xác định và mệnh đề không xác định. Cùng tìm hiểu chi tiết ngay dưới đây.</Text>
                            </View>
                            {/* 1. Mệnh đề quan hệ xác định */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Mệnh đề quan hệ xác định</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP3(!p3)}>
                                    <Text style={styles.hideShowBtnText}>Xem Cách Dùng</Text>
                                </TouchableOpacity>
                                {p3 ? (
                                    <View>
                                        <Text style={styles.contentText}>Mệnh đề quan hệ xác định là mệnh đề thường dùng để xác định danh từ đứng trước nó, đem đến ý nghĩa cho câu. Nếu thiếu nó thì câu sẽ không mang đủ nghĩa. Các đại từ quan hệ được sử dụng trong câu mệnh đề xác định.</Text>
                                        <Text style={styles.contentText}>Ví Dụ:</Text>
                                        <Text style={styles.contentText}>- Do you know the name of the knitter who helped me pick up the shirt yesterday? (Bạn có biết tên của người đàn ông, người mà đã giúp tôi nhặt chiếc áo ngày hôm qua không?)</Text>
                                        <Text style={styles.contentText}>- The woman you met yesterday is the homeroom teacher of my class. (Người phụ nữ người mà bạn gặp hôm qua là giáo viên chủ nhiệm của lớp tôi.)</Text>
                                    </View>
                                ) : null}
                            </View>

                            {/* 2. Mệnh đề quan hệ không xác định */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Mệnh đề quan hệ không xác định</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP4(!p4)}>
                                    <Text style={styles.hideShowBtnText}>Xem Cách Dùng</Text>
                                </TouchableOpacity>
                                {p4 ? (
                                    <View>
                                        <Text style={styles.contentText}>Mệnh đề quan hệ không xác định là mệnh đề sử dụng nhằm cung cấp thêm thông tin về người, vật. Không có nó thì câu vẫn mang đầy đủ nghĩa.</Text>
                                        <Text style={styles.contentText}>Ví Dụ:</Text>
                                        <Text style={styles.contentText}>- Ms. Lan, who taught me dance, is getting married next month. (Cô Lan, người mà dạy tôi múa chuẩn bị kết hôn vào tháng sau.)</Text>
                                        <Text style={styles.contentText}>- The movie, which I saw yesterday, is very good. (Bộ phim, cái mà tôi đã xem ngày hôm qua, rất hay.)</Text>
                                    </View>
                                ) : null}
                            </View>
                        </View>

                        {/* C. Cách rút gọn mệnh đề quan hệ */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>C. Cách rút gọn mệnh đề quan hệ</Text>
                                <Text style={styles.contentText}>Trong các câu mệnh đề quan hệ, dù văn nói hoặc văn viết thì bạn cũng có thể rút gọn câu. Dưới đây là cách rút gọn mệnh đề quan hệ đơn giản để bạn tham khảo.</Text>
                            </View>
                            {/* 1. Nếu đại từ quan hệ đóng vai trò là tân ngữ */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Nếu đại từ quan hệ đóng vai trò là tân ngữ</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP5(!p5)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p5 ? (
                                    <View>
                                        <Text style={styles.contentText}>Đối với các mệnh đề quan hệ đóng vai trò là tân ngữ trong câu thì sẽ lược bỏ đại từ quan hệ, nếu có giới từ trước đại từ quan hệ thì đảo giới từ ra cuối mệnh đề.</Text>
                                        <Text style={styles.contentText}>Ví Dụ:</Text>
                                        <Text style={styles.contentText}>- It is the best movie that my friend has ever seen {'->'} It is the best movie my friend has ever seen.</Text>
                                        <Text style={styles.contentText}>Trong mệnh đề này, that đóng vai trò là tân ngữ của have seen, vì thế có thể lược bỏ that.</Text>
                                        <Text style={styles.contentText}>- I saw the boy whom my parents talked to yesterday {'->'} I saw the boy my parents talked to yesterday.</Text>
                                        <Text style={styles.contentText}>Đối với mệnh đề này, whom cũng đóng vai trò làm tân ngữ của talk to nên có thể lược bỏ whom.</Text>
                                    </View>
                                ) : null}
                            </View>

                            {/* 2. Nếu đại từ quan hệ đóng vai trò là chủ ngữ */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Nếu đại từ quan hệ đóng vai trò là chủ ngữ</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP6(!p6)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p6 ? (
                                    <View>
                                        <Text style={styles.contentTextBold}>a. Rút gọn bằng cách dùng V-ing</Text>
                                        <Text style={styles.contentText}>Đối với trường hợp này, nếu mệnh đề quan hệ là mệnh đề chủ động thì sử dụng V-ing.</Text>
                                        <Text style={styles.contentText}>Ví Dụ:</Text>
                                        <Text style={styles.contentText}>• The man who is standing over there is my father.</Text>
                                        <Text style={styles.contentText}>{'->'} The man standing over there is my father.</Text>
                                        <Text style={styles.contentText}>• The couple who live next door to me are professors.</Text>
                                        <Text style={styles.contentText}>{'->'} The couple living next door to me are professors.</Text>

                                        <Text style={styles.contentTextBold}>b. Rút gọn bằng cách dùng V3/ed</Text>
                                        <Text style={styles.contentText}>Nếu mệnh đề quan hệ là mệnh đề bị động thì rút thành cụm quá khứ phân từ (V3/ed). </Text>
                                        <Text style={styles.contentText}>Ví Dụ:</Text>
                                        <Text style={styles.contentText}>• The instructions that are given on the front page are very important.</Text>
                                        <Text style={styles.contentText}>{'->'} The instructions given on the front page are very important.</Text>
                                        <Text style={styles.contentText}>• The book which was bought by my mother is interesting.</Text>
                                        <Text style={styles.contentText}>{'->'} The book bought by my mother is interesting.</Text>

                                        <Text style={styles.contentTextBold}>c. Rút gọn bằng cách dùng to Verb</Text>
                                        <Text style={styles.contentText}>Mệnh đề quan hệ được rút thành cụm động từ nguyên mẫu (To-infinitive) khi trước đại từ quan hệ có các cụm từ: the first, the second, the last, the only hoặc hình thức so sánh bậc nhất.</Text>
                                        <Text style={styles.contentText}>Ví Dụ:</Text>
                                        <Text style={styles.contentText}>• John was the last person that got the news.</Text>
                                        <Text style={styles.contentText}>{'->'} John was the last person to get the news.</Text>
                                        <Text style={styles.contentText}>• He was the best player that we admire.</Text>
                                        <Text style={styles.contentText}>{'->'} He was the best player to be admired.</Text>
                                        <Text style={styles.contentText}>• He was the second man who was killed in this way.</Text>
                                        <Text style={styles.contentText}>{'->'} He was the second man to be killed in this way.</Text>
                                    </View>
                                ) : null}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RelativeClause