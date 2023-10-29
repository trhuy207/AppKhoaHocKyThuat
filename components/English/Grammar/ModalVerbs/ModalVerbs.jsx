import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import styles from './ModalVerbs.style'

const ModalVerbs = () => {
    const [p1, showP1] = useState(false)
    const [p2, showP2] = useState(false)
    const [p3, showP3] = useState(false)
    const [p4, showP4] = useState(false)
    const [p5, showP5] = useState(false)
    const [p6, showP6] = useState(false)
    const [p7, showP7] = useState(false)
    const [p8, showP8] = useState(false)
    const [p9, showP9] = useState(false)
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* Cách sử dụng động từ khuyết thiếu */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>Cách sử dụng Modal Verbs</Text>
                                <Text style={styles.contentText}>Cấu trúc chung của động từ khuyết thiếu: <Text style={{fontWeight: 'bold'}}>S + modal verb + V - infinitive</Text></Text>
                                <Text style={styles.contentText}>Tuy nhiên, đối với các động từ khác nhau lại có cách sử dụng khác nhau. Hãy cùng Langmaster tìm hiểu ngay dưới đây:</Text>
                            </View>
                            {/* Can */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Cách sử dụng Can</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP1(!p1)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p1 ? (
                                    <View>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc khẳng định: </Text>S + can + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc phủ định: </Text>S + can not /can’t + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc nghi vấn: </Text>Can + S + V-infinitive + O?</Text>
                                            <Text style={styles.contentText}>- Dùng để chỉ khả năng của người, vật trong thời điểm hiện tại.</Text>
                                            <Text style={styles.contentText}>Ví dụ: She can speak English (Cô ấy có thể nói tiếng Anh)</Text>
                                            <Text style={styles.contentText}>- Chỉ sự xin phép, cho phép hoặc lời đề nghị, yêu cầu.</Text>
                                            <Text style={styles.contentText}>Ví dụ: Can I use your laptop? (Tôi có thể dùng laptop của bạn được không?)</Text>
                                    </View>
                                ):null}
                            </View>
                            {/* May */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Cách sử dụng May</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP2(!p2)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p2 ? (
                                    <View>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc khẳng định: </Text>S + may + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc phủ định: </Text>S + may not + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc nghi vấn: </Text>May + S + V-infinitive + O?</Text>
                                            <Text style={styles.contentText}>- Dùng để diễn tả khả năng xảy ra cao của một sự việc, hiện tượng.</Text>
                                            <Text style={styles.contentText}>Ví dụ: I may go to Ho Chi Minh city tomorrow (Tôi có thể đến thành phố Hồ Chí Minh vào ngày mai)</Text>
                                            <Text style={styles.contentText}>- Xin phép ai đó khi làm gì.</Text>
                                            <Text style={styles.contentText}>Ví dụ: May I open the door? (Tôi có thể mở cửa chứ?)</Text>
                                    </View>
                                ):null}
                            </View>
                            {/* Should */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>3. Cách sử dụng Should</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP3(!p3)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p3 ? (
                                    <View>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc khẳng định: </Text>S + should + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc phủ định: </Text>S + should not /shouldn’t + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc nghi vấn: </Text>Should + S + V-infinitive + O?</Text>
                                            <Text style={styles.contentText}>- Dùng để chỉ một lời khuyên.</Text>
                                            <Text style={styles.contentText}>Ví dụ: He should tell her the truth (Anh ấy nên nói cho cô ấy biết sự thật)</Text>
                                            <Text style={styles.contentText}>- Dùng để nói về một sự suy luận logic.</Text>
                                            <Text style={styles.contentText}>Ví dụ: I have revised so I should be ready for the test (Tôi đã ôn bài rồi nên tôi phải sẵn sàng cho bài kiểm tra)</Text>
                                    </View>
                                ):null}
                            </View>
                            {/* Must */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>4. Cách sử dụng Must</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP4(!p4)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p4 ? (
                                    <View>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc khẳng định: </Text>S + must + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc phủ định: </Text>S + must not/mustn’t + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc nghi vấn: </Text>Must + S + V-infinitive + O?</Text>
                                            <Text style={styles.contentText}>- Dùng để diễn tả sự cần thiết, bắt buộc ở hiện tại hoặc tương lai.</Text>
                                            <Text style={styles.contentText}>Ví dụ: You must obey the police’s guide (Bạn phải tuân thủ theo sự chỉ dẫn của cảnh sát)</Text>
                                            <Text style={styles.contentText}>- Diễn tả sự bắt buộc đến từ phía người nói (cảm xúc và mong muốn của người nói).</Text>
                                            <Text style={styles.contentText}>Ví dụ: I really must stop smoking (Thực sự tôi phải bỏ thuốc lá thôi)</Text>
                                            <Text style={styles.contentText}>- “Must not/Mustn’t” được dùng để chỉ sự cấm đoán.</Text>
                                            <Text style={styles.contentText}>Ví dụ: We mustn’t sit here (Chúng ta không được phép ngồi đây)</Text>
                                    </View>
                                ):null}
                            </View>
                            {/* Shall */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>5. Cách sử dụng Shall</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP5(!p5)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p5 ? (
                                    <View>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc khẳng định: </Text>S + shall + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc phủ định: </Text>S + shall not + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc nghi vấn: </Text>Shall + S + V-infinitive + O?</Text>
                                            <Text style={styles.contentText}>- Dùng trong cấu trúc thì tương lai (với chủ ngữ I và we)</Text>
                                            <Text style={styles.contentText}>Ví dụ: I shall go to the supermarket tomorrow (Tôi sẽ đi siêu thị vào ngày mai)</Text>
                                            <Text style={styles.contentText}>- Diễn tả một lời hứa, một sự quả quyết hay mối đe dọa.</Text>
                                            <Text style={styles.contentText}>Ví dụ: Don’t worry! I shall complete it tonight (Đừng lo, tôi sẽ hoàn thành nó vào tối nay)</Text>
                                    </View>
                                ):null}
                            </View>
                            {/* Could */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>6. Cách sử dụng Could</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP6(!p6)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p6 ? (
                                    <View>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc khẳng định: </Text>S + could + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc phủ định: </Text>S + could not /couldn’t + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc nghi vấn: </Text>Could + S + V-infinitive + O?</Text>
                                            <Text style={styles.contentText}>- Diễn tả điều gì đó có thể xảy ra ở hiện tại hoặc tương lai nhưng không chắc chắn.</Text>
                                            <Text style={styles.contentText}>Ví dụ: The phone is ringing. It could be Diana (Điện thoại đang rung chuông. Có thể là Diana gọi)</Text>
                                            <Text style={styles.contentText}>- Thể hiện sự xin phép hoặc yêu cầu lịch sự hơn “can”.</Text>
                                            <Text style={styles.contentText}>Ví dụ: Could you receive the parcel for me? (Bạn có thể nhận bưu phẩm hộ tôi được không)?</Text>
                                            <Text style={styles.contentText}>- Diễn tả khả năng của người, vật trong quá khứ.</Text>
                                            <Text style={styles.contentText}>Ví dụ: I could speak English when I was seven (Tôi có thể nói tiếng Anh khi tôi 7 tuổi)</Text>
                                    </View>
                                ):null}
                            </View>
                            {/* Would */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>7. Cách sử dụng Would</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP7(!p7)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p7 ? (
                                    <View>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc khẳng định: </Text>S + would + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc phủ định: </Text>S + would not /wouldn't + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc nghi vấn: </Text>Would + S + V-infinitive + O?</Text>
                                            <Text style={styles.contentText}>- Dùng để diễn tả một giả định ở quá khứ hoặc một dự đoán về tình huống có thể xảy ra trong tương lai.</Text>
                                            <Text style={styles.contentText}>Ví dụ: He was so tired. He would get up late tomorrow (Anh ấy đã rất mệt. Ngày mai anh ấy chắc sẽ dậy muộn)</Text>
                                            <Text style={styles.contentText}>- Dùng trong lời mời, yêu cầu một cách lịch sự.</Text>
                                            <Text style={styles.contentText}>Ví dụ: Could you receive the parcel for me? (Bạn có thể nhận bưu phẩm hộ tôi được không)?</Text>
                                            <Text style={styles.contentText}>- Diễn tả khả năng của người, vật trong quá khứ.</Text>
                                            <Text style={styles.contentText}>Ví dụ: Would you like to go out with me tonight? (Bạn có muốn ra ngoài cùng tôi tối nay không?)</Text>
                                    </View>
                                ):null}
                            </View>
                            {/* Might */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>8. Cách sử dụng Might</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP8(!p8)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p8 ? (
                                    <View>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc khẳng định: </Text>S + might + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc phủ định: </Text>S + might not + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc nghi vấn: </Text>Might + S + V-infinitive + O?</Text>
                                            <Text style={styles.contentText}>- Dùng để diễn tả khả năng xảy ra của một sự việc thấp.</Text>
                                            <Text style={styles.contentText}>Ví dụ: We might win the prize but I doubt it (Chúng ta có thể thắng giải thưởng nhưng tôi nghi ngờ chuyện đó)</Text>
                                            <Text style={styles.contentText}>- Dùng để xin phép khi làm gì đó một cách trang trọng hơn.</Text>
                                            <Text style={styles.contentText}>Ví dụ: Might I have a little more wine? (Tôi có thể xin thêm chút rượu nữa được không?)</Text>
                                    </View>
                                ):null}
                            </View>
                            {/* Will */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>9. Cách sử dụng Will</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP9(!p9)}>
                                    <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                </TouchableOpacity>
                                {p9 ? (
                                    <View>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc khẳng định: </Text>S + will + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc phủ định: </Text>S + will not /won’t + V-infinitive + O</Text>
                                            <Text style={styles.contentCT}>• <Text style={{fontWeight: 'normal', color: 'black'}}>Cấu trúc nghi vấn: </Text>Will + S + V-infinitive + O?</Text>
                                            <Text style={styles.contentText}>- Dùng để dự đoán hoặc diễn đạt các sự việc, các tình huống sẽ xảy ra trong tương lai.</Text>
                                            <Text style={styles.contentText}>Ví dụ: Next month, I will go to Paris (Tháng sau, tôi sẽ đi Paris)</Text>
                                            <Text style={styles.contentText}>- Dùng để đưa ra một quyết định ngay thời tại thời điểm nói.</Text>
                                            <Text style={styles.contentText}>Ví dụ: I will go to the store right now (Tôi sẽ đi đến cửa hàng ngay bây giờ)</Text>
                                            <Text style={styles.contentText}>- Dùng để đưa ra lời yêu cầu, lời mời hay lời đề nghị.</Text>
                                            <Text style={styles.contentText}>Ví dụ: Will you have dinner with me? (Bạn sẽ đi ăn tối cùng tôi chứ?)</Text>
                                    </View>
                                ):null}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ModalVerbs