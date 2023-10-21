import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import styles from './PassiveVoice.style'

const PassiveVoice = () => {
    const [ex1, showEx1] = useState(false);
    const [ex2, showEx2] = useState(false);
    const [ex3, showEx3] = useState(false);
    const [ex4, showEx4] = useState(false);
    const [ex5, showEx5] = useState(false);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Các cấu trúc chung */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Các cấu trúc chung của câu bị động</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>⁕ <Text style={{fontWeight: 'normal'}}>Công thức chung</Text> câu bị động <Text style={{fontWeight: 'normal'}}>như sau:</Text></Text>
                                <Text style={styles.contentCT}>• Câu chủ động: Subject + Verb + Object</Text>
                                <Text style={styles.contentCT}>• Câu bị động: Subject + be + V-ed/p.p + by Object</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx1(!ex1)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex1 ? (
                                    <View>
                                        <Text style={styles.contentText}>• I gave him a book = I gave a book to him.</Text>
                                        <Text style={styles.contentText}>(Dịch: Tôi tặng anh ấy một cuốn sách)</Text>
                                        <Text style={styles.contentText}>➤ He was given a book (by me).</Text>
                                        <Text style={styles.contentText}>(Dịch: Anh ấy được tặng một cuốn sách (bởi tôi).)</Text>
                                        <Text style={styles.contentText}>• Everyone loves Tom.</Text>
                                        <Text style={styles.contentText}>(Dịch: Tất cả mọi người yêu quý Tom.)</Text>
                                        <Text style={styles.contentText}>➤ Tom is loved by everyone.</Text>
                                        <Text style={styles.contentText}>(Dịch: Tom được yêu quý bởi tất cả mọi người.)</Text>
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}
                                <Text style={styles.contentTitle}>⁕ <Text style={{fontWeight: 'normal'}}>Công thức chung</Text> câu hỏi bị động <Text style={{fontWeight: 'normal'}}>như sau:</Text></Text>
                                <Text style={styles.contentCT}>• Câu chủ động: Be + S + V-ed/p.p + O?</Text>
                                <Text style={styles.contentCT}>• Câu bị động: Be + S + V-ed/p.p + by O?</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx2(!ex2)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex2 ? (
                                    <View>
                                        <Text style={styles.contentText}>• Has he repaired his car for hours?</Text>
                                        <Text style={styles.contentText}>(Dịch: Anh ấy đã sửa xe hơi hàng giờ đồng hồ phải không?)</Text>
                                        <Text style={styles.contentText}>➤ Has the car been repaired for hours by him?</Text>
                                        <Text style={styles.contentText}>(Dịch: Chiếc xe đã được sửa hàng giờ bởi anh ấy phải không?)</Text>
                                        <Text style={styles.contentText}>• Are you watching a romantic movie?</Text>
                                        <Text style={styles.contentText}>(Dịch: Bạn đang xem một bộ phim tình cảm phải không?)</Text>
                                        <Text style={styles.contentText}>➤ Is a romantic movie watched by you?</Text>
                                        <Text style={styles.contentText}>(Dịch: Có phải một bộ phim tình cảm đang được xem bởi bạn không?)</Text>
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}
                                <Text style={styles.contentTitle}>⁕ Dưới đây là các bước cụ thể để bạn chuyển đổi từ một câu chủ động sang thể bị động:</Text>
                                <Text style={styles.contentText}><Text style={{fontWeight:'bold'}}>Bước 1: </Text>Xác định tân ngữ trong câu (O) và đẩy lên đầu câu làm chủ ngữ (S).</Text>
                                <Text style={styles.contentText}><Text style={{fontWeight:'bold'}}>Bước 2: </Text>Quan sát động từ chính (V) và xác định thì của câu. </Text>
                                <Text style={styles.contentText}><Text style={{fontWeight:'bold'}}>Bước 3: </Text>Chuyển đổi động từ về dạng bị động “tobe + p.p” theo thì của câu gốc.</Text>
                                <Text style={styles.contentText}><Text style={{fontWeight:'bold'}}>Bước 4: </Text>Chuyển đổi chủ ngữ (S) trong câu chủ động thành tân ngữ (O), đưa về cuối câu và thêm “by” phía trước.</Text>
                                <Text style={styles.contentText}>Tuy nhiên, bạn cần lưu ý 2 điểm sau:</Text>

                                <Text style={styles.contentTitle}>1. Chủ ngữ là they, people, everyone, someone, anyone, ...</Text>
                                <Text style={styles.contentText}>Nếu S - chủ ngữ trong câu chủ động là: they, people, everyone, someone, anyone, etc {'=>'} thì không cần đưa vào câu bị động</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx3(!ex3)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex3 ? (
                                    <View>
                                        <Text style={styles.contentText}>• Someone stole my bike last night.</Text>
                                        <Text style={styles.contentText}>(Dịch: Bọn chúng lấy trộm xe đạp của tôi đêm qua)</Text>
                                        <Text style={styles.contentText}>➤ My bike was stolen last night.</Text>
                                        <Text style={styles.contentText}>(Dịch: Xe đạp của tôi đã bị lấy trộm đêm qua.)</Text>
                                        <Text style={styles.contentText}>• They have finished that exercise since last week.</Text>
                                        <Text style={styles.contentText}>(Dịch: Họ đã hoàn thành bài tập đó từ tuần trước.)</Text>
                                        <Text style={styles.contentText}>➤ That exercise has been finished since last week.</Text>
                                        <Text style={styles.contentText}>(Dịch: Bài tập đó đã được hoàn thành từ tuần trước.)</Text>
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentTitle}>2. Nếu chủ ngữ là người hoặc vật</Text>
                                <Text style={styles.contentText}>Nếu chủ ngữ là người hoặc vật thì có hai trường hợp như sau:</Text>
                                <Text style={styles.contentTitle}>2.1. Trực tiếp gây ra hành động thì dùng chuyển sang bị động sẽ dùng 'by'</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx4(!ex4)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex4 ? (
                                    <View>
                                        <Text style={styles.contentText}>• She is making a cake.</Text>
                                        <Text style={styles.contentText}>(Dịch: Cô ấy đang làm một chiếc bánh.)</Text>
                                        <Text style={styles.contentText}>➤ A cake is being made by her.</Text>
                                        <Text style={styles.contentText}>(Dịch: Một chiếc bánh đang được làm bởi cô ấy.)</Text>
                                        <Text style={styles.contentText}>• My mom cleans the floor.</Text>
                                        <Text style={styles.contentText}>(Dịch: Mẹ tôi lau sàn nhà.)</Text>
                                        <Text style={styles.contentText}>➤ The floor is cleaned by my mom.</Text>
                                        <Text style={styles.contentText}>(Dịch: Sàn nhà được lau bởi mẹ tôi.)</Text>
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}
                                <Text style={styles.contentTitle}>2.2. Gián tiếp gây ra hành động thì dùng 'with'</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx5(!ex5)}>
                                    <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                </TouchableOpacity>
                                {ex5 ? (
                                    <View>
                                        <Text style={styles.contentText}>• I open the door with a key.</Text>
                                        <Text style={styles.contentText}>(Dịch: Tôi mở cái cửa với một chiếc chìa khoá.)</Text>
                                        <Text style={styles.contentText}>➤  The door is opened with a key.</Text>
                                        <Text style={styles.contentText}>(Dịch: Cái cửa được mở bằng một chiếc chìa khoá.)</Text>
                                        <Text style={styles.contentText}>• Somebody broke the window with a hammer.</Text>
                                        <Text style={styles.contentText}>(Dịch: Ai đó đã đập vỡ cửa sổ với một chiếc búa.)</Text>
                                        <Text style={styles.contentText}>➤ The window was broken with a hammer.</Text>
                                        <Text style={styles.contentText}>(Dịch: Cửa sổ đã bị đập vỡ với một chiếc búa.)</Text>
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PassiveVoice