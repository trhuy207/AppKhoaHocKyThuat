import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import styles from './PassiveVoice.style'

const PassiveVoice = () => {
    const [ex1, showEx1] = useState(false);
    const [ex2, showEx2] = useState(false);
    const [ex3, showEx3] = useState(false);
    const [ex4, showEx4] = useState(false);
    const [ex5, showEx5] = useState(false);

    const [tense1, showTense1] = useState(false);
    const [tense2, showTense2] = useState(false);
    const [tense3, showTense3] = useState(false);
    const [tense4, showTense4] = useState(false);
    const [tense5, showTense5] = useState(false);

    const [ex11, showEx11] = useState(false);
    const [ex12, showEx12] = useState(false);
    const [ex13, showEx13] = useState(false);
    const [ex21, showEx21] = useState(false);
    const [ex22, showEx22] = useState(false);
    const [ex23, showEx23] = useState(false);
    const [ex31, showEx31] = useState(false);
    const [ex32, showEx32] = useState(false);
    const [ex33, showEx33] = useState(false);
    const [ex34, showEx34] = useState(false);
    const [ex41, showEx41] = useState(false);
    const [ex42, showEx42] = useState(false);
    const [ex43, showEx43] = useState(false);
    const [ex44, showEx44] = useState(false);
    const [ex51, showEx51] = useState(false);
    const [ex52, showEx52] = useState(false);
    const [ex53, showEx53] = useState(false);
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

                        {/* II. Các cấu trúc */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Các cấu trúc của câu bị động</Text>
                            </View>
                            <View style={styles.cardContent}>
                                {/* 1. Nhóm thì hiện tại */}
                                <Text style={styles.contentTitle}>1. Nhóm thì hiện tại</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showTense1(!tense1)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {tense1 ? (
                                    <View>
                                        <Text style={styles.contentTitle}>1.1. <Text style={{color: '#195298'}}>Thì hiện tại đơn</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + V + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + be + V3 (+ by Sb/O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx11(!ex11)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex11 ? (
                                            <View>
                                                <Text style={styles.contentText}>• She reads a book every week.</Text>
                                                <Text style={styles.contentText}>(Dịch: Cô ấy đọc muốn cuốn sách mỗi tuần.)</Text>
                                                <Text style={styles.contentText}>➤ A book is read by her every week.</Text>
                                                <Text style={styles.contentText}>(Dịch: Một cuốn sách được đọc bởi cô ấy mỗi tuần.)</Text>
                                                <Text style={styles.contentText}>• I buy a pen on the way home.</Text>
                                                <Text style={styles.contentText}>(Dịch: Tôi mua một chiếc bút trên đường về nhà.)</Text>
                                                <Text style={styles.contentText}>➤ A pen is bought on the way home (by me).</Text>
                                                <Text style={styles.contentText}>(Dịch: Một chiếc bút được mua trên đường về nhà (bởi tôi).)</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>1.2. <Text style={{color: '#195298'}}>Thì hiện tại tiếp diễn</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + am/ is/are + V-ing + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + am/ is/are +  being + V3 (+ by Sb/O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx12(!ex12)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex12 ? (
                                            <View>
                                                <Text style={styles.contentText}>• She is wearing a school uniform.</Text>
                                                <Text style={styles.contentText}>(Dịch: Cô ấy đang mặc một bộ đồng phục trường.)</Text>
                                                <Text style={styles.contentText}>➤ A school uniform is worn by her.</Text>
                                                <Text style={styles.contentText}>(Dịch: Đồng phục trường đang được cô ấy mặc.)</Text>
                                                <Text style={styles.contentText}>• My brother is writing an essay.</Text>
                                                <Text style={styles.contentText}>(Dịch: Anh trai tôi đang viết một bài luận.)</Text>
                                                <Text style={styles.contentText}>➤ An essay is written by my brother.</Text>
                                                <Text style={styles.contentText}>(Dịch: Một bài luận đang được viết bởi anh trai tôi.)</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>1.3. <Text style={{color: '#195298'}}>Thì hiện tại hoàn thành</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + have/has + V3 + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + have/has + been + V3 (+ by Sb/ O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx13(!ex13)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex13 ? (
                                            <View>
                                                <Text style={styles.contentText}>• My mom have made this lunch box for me.</Text>
                                                <Text style={styles.contentText}>(Dịch: Mẹ đã làm hộp cơm trưa này cho tôi.)</Text>
                                                <Text style={styles.contentText}>➤ This lunch box has been made for me by my mom.</Text>
                                                <Text style={styles.contentText}>(Dịch: Hộp cơm trưa này đã được làm cho tôi bởi mẹ.)</Text>
                                                <Text style={styles.contentText}>• My best friend has sent me a gift on my birthday.</Text>
                                                <Text style={styles.contentText}>(Dịch: Bạn thân của tôi gửi tôi một món quà vào ngày sinh nhật.)</Text>
                                                <Text style={styles.contentText}>➤ I have been sent a gift on my birthday by my best friend./ A gift has been sent to me on my birthday by my best friend.</Text>
                                                <Text style={styles.contentText}>(Dịch: Tôi đã được gửi một món quà vào ngày sinh nhật bởi bạn thân tôi./ Một món quà đã được gửi tới tôi vào ngày sinh nhật bởi bạn thân tôi.)</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 2. Nhóm thì quá khứ */}
                                <Text style={styles.contentTitle}>2. Nhóm thì quá khứ</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showTense2(!tense2)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {tense2 ? (
                                    <View>
                                        <Text style={styles.contentTitle}>2.1. <Text style={{color: '#195298'}}>Thì quá khứ đơn</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + V-ed + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + was/ were + V3 (+ by Sb/O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx21(!ex21)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex21 ? (
                                            <View>
                                                <Text style={styles.contentText}>• I ate a hamburger for lunch.</Text>
                                                <Text style={styles.contentText}>➤ A hamburger was eaten for lunch by me.</Text>
                                                <Text style={styles.contentText}>• She didn’t tell you the truth.</Text>
                                                <Text style={styles.contentText}>➤ The truth wasn't told to you by her. </Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>2.2. <Text style={{color: '#195298'}}>Thì quá khứ tiếp diễn</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + was/ were + V-ing + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + was/ were +  being + V3 (+ by Sb/O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx22(!ex22)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex22 ? (
                                            <View>
                                                <Text style={styles.contentText}>• I was doing my homework at that time.</Text>
                                                <Text style={styles.contentText}>➤ My homework was being done by me at that time.</Text>
                                                <Text style={styles.contentText}>• Students were planting trees.</Text>
                                                <Text style={styles.contentText}>➤ Trees were being planted by students.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>2.3. <Text style={{color: '#195298'}}>Thì quá khứ hoàn thành </Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + had + V3 + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + had + been + V3 (+ by Sb/O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx23(!ex23)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex23 ? (
                                            <View>
                                                <Text style={styles.contentText}>• A poor man in that town had won a lottery.</Text>
                                                <Text style={styles.contentText}>➤ A poor man in that town had won a lottery.</Text>
                                                <Text style={styles.contentText}>• They had built the house for ages.</Text>
                                                <Text style={styles.contentText}>➤ The house had been built by them for ages.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 3. Nhóm thì tương lai */}
                                <Text style={styles.contentTitle}>3. Nhóm thì tương lai</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showTense3(!tense3)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {tense3 ? (
                                    <View>
                                        <Text style={styles.contentTitle}>3.1. <Text style={{color: '#195298'}}>Thì tương lai đơn</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + will V + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + will be + V3 (+ by Sb/O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx31(!ex31)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex31 ? (
                                            <View>
                                                <Text style={styles.contentText}>• Our boss will hold a meeting tomorrow.</Text>
                                                <Text style={styles.contentText}>➤ A meeting will be held by our boss tomorrow.</Text>
                                                <Text style={styles.contentText}>• The businessman will buy that expensive car soon.</Text>
                                                <Text style={styles.contentText}>➤ That expensive car will be bought by the businessman soon.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>3.2. <Text style={{color: '#195298'}}>Thì tương lai gần</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + is/ am/ are going to + V inf + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + is/ am/ are going to BE + V3 (by O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx32(!ex32)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex32 ? (
                                            <View>
                                                <Text style={styles.contentText}>• My family is going to spend the 5-day holiday in Da Lat.</Text>
                                                <Text style={styles.contentText}>➤ The 5-day holiday is going to be spent in Da Lat by my family.</Text>
                                                <Text style={styles.contentText}>• We are going to bake a delicious cake for our friend's birthday.</Text>
                                                <Text style={styles.contentText}>➤ A delicious cake is going to be baked for our friend's birthday by us.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>3.3. <Text style={{color: '#195298'}}>Tương lai tiếp diễn</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + will be + V_ing + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + will be + being + V3 (+ by Sb/O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx33(!ex33)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex33 ? (
                                            <View>
                                                <Text style={styles.contentText}>• When they get to the meeting, the boss will be asking that team a lot of questions.</Text>
                                                <Text style={styles.contentText}>➤ When they get to the meeting, that team will be being asked a lot of questions by the boss.</Text>
                                                <Text style={styles.contentText}>• This time next month, people will be planting 20 new trees in our area.</Text>
                                                <Text style={styles.contentText}>➤ This time next month, 20 new trees will be being planted in our area.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>3.4. <Text style={{color: '#195298'}}>Thì tương lai hoàn thành </Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + will have + V3 + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + will have + been + V3 (+ by Sb/ O)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx34(!ex34)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex34 ? (
                                            <View>
                                                <Text style={styles.contentText}>• At this time tomorrow, we will have finished the mid-term test.</Text>
                                                <Text style={styles.contentText}>➤ At this time tomorrow, the mid-term test will have been finished by us.</Text>
                                                <Text style={styles.contentText}>• We’re late already. When we get there, people will have bought all the books.</Text>
                                                <Text style={styles.contentText}>➤ We’re late already. When we get there, all the books will have been bought.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 4. Động từ khiếm khuyết */}
                                <Text style={styles.contentTitle}>4. Động từ khiếm khuyết</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showTense4(!tense4)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {tense4 ? (
                                    <View>
                                        <Text style={styles.contentCT}>Cấu trúc chung: S + modal verb + be + V3 (+ by O)</Text>
                                        <Text style={styles.contentText}>Lưu ý: Đối với câu có một số động từ và theo sau là động từ bổ trợ ở dạng “to V” hoặc “V-ing”, khi viết ở dạng bị động thì các động từ đó sẽ lần lượt chia theo “to be V3/p.p” và “being V3/ PP”</Text>

                                        <Text style={styles.contentTitle}>4.1. <Text style={{color: '#195298'}}>Can/Could: Có thể</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + Can/Could + V + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + Can/Could + be + V3/V-ed + (by sb) + O</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx41(!ex41)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex41 ? (
                                            <View>
                                                <Text style={styles.contentText}>• We can't see the words on the board.</Text>
                                                <Text style={styles.contentText}>➤ A meeting will be held by our boss tomorrow.</Text>
                                                <Text style={styles.contentText}>• The football team could have won the championship last month.</Text>
                                                <Text style={styles.contentText}>➤ The championship could have been won by the football team last month.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>4.2. <Text style={{color: '#195298'}}>May/Might: Có lẽ</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + May/Might + V + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S+ to be + avoided being p.p + (by sb)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx42(!ex42)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex42 ? (
                                            <View>
                                                <Text style={styles.contentText}>• His careless driving may cause an accident.</Text>
                                                <Text style={styles.contentText}>➤ An accident may be caused by his careless driving.</Text>
                                                <Text style={styles.contentText}>• An accident may be caused by his careless driving.</Text>
                                                <Text style={styles.contentText}>➤ The way to solve that problems might be shown to you by them.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>4.3. <Text style={{color: '#195298'}}>Should/Ought to: Nên</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + Should/Ought to + V + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + Should/Ought to  + be + V3/V-ed + (by sb) + O</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx43(!ex43)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex43 ? (
                                            <View>
                                                <Text style={styles.contentText}>• You should leave a message before leaving.</Text>
                                                <Text style={styles.contentText}>➤ A message should be left before leaving.</Text>
                                                <Text style={styles.contentText}>• I ought to gain more weight.</Text>
                                                <Text style={styles.contentText}>➤ More weight ought to be gained by me.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>4.4. <Text style={{color: '#195298'}}>Must/Have to: Phải </Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + Must/Have to + V + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + Must/Have to  + be + V3/V-ed + (by sb) + O</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx44(!ex44)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex44 ? (
                                            <View>
                                                <Text style={styles.contentText}>• You must wear a helmet when driving a motorcycle.</Text>
                                                <Text style={styles.contentText}>➤ A helmet must be worn when driving a motorcycle.</Text>
                                                <Text style={styles.contentText}>• The students have to submit the homework before 4 p.m.</Text>
                                                <Text style={styles.contentText}>➤ The homework has to be submitted by the students before 4 p.m.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 5. Các cấu trúc câu khác */}
                                <Text style={styles.contentTitle}>5. Các cấu trúc câu khác</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showTense5(!tense5)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {tense5 ? (
                                    <View>
                                        <Text style={styles.contentTitle}>5.1. <Text style={{color: '#195298'}}>Need/ want/ require/ deserve/be worth: Cần/ muốn/ yêu cầu/ xứng đáng với/ đáng để</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: Need/ want/ require/ deserve/be worth + to V/V-ing</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: Need/ want/ require/ deserve/be worth to be p.p</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx51(!ex51)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex51 ? (
                                            <View>
                                                <Text style={styles.contentText}>• You need to cut your hair soon.</Text>
                                                <Text style={styles.contentText}>➤ Your hair needs to be cut.</Text>
                                                <Text style={styles.contentText}>➤ Your hair needs cutting.</Text>
                                                <Text style={styles.contentText}>Lưu ý: Need + V-ing trong trường hợp này mang nghĩa bị động.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>5.2. <Text style={{color: '#195298'}}>Avoid: Tránh</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + avoid V-ing </Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S+ to be + avoided being p.p + (by sb)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx52(!ex52)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex52 ? (
                                            <View>
                                                <Text style={styles.contentText}>• He avoids driving on that bumpy road.</Text>
                                                <Text style={styles.contentText}>➤ That bumpy road is avoided being driven on.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>5.3. <Text style={{color: '#195298'}}>Prevent: Ngăn cản</Text></Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + prevent … from V-ing</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: Sb/sth + to be prevent from being p.p + (by sb)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showEx53(!ex53)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {ex53 ? (
                                            <View>
                                                <Text style={styles.contentText}>• He prevented me from making that mistake again.</Text>
                                                <Text style={styles.contentText}>➤ I was prevented from making that mistake again by him.</Text>
                                            </View>
                                        ): null}
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