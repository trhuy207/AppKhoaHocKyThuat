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

    const [db1, showDb1] = useState(false);
    const [db2, showDb2] = useState(false);
    const [db3, showDb3] = useState(false);
    const [db4, showDb4] = useState(false);
    const [db5, showDb5] = useState(false);
    const [db6, showDb6] = useState(false);
    const [db7, showDb7] = useState(false);
    const [db8, showDb8] = useState(false);
    const [db9, showDb9] = useState(false);

    const [exdb1, showExdb1] = useState(false);
    const [exdb2, showExdb2] = useState(false);
    const [exdb3, showExdb3] = useState(false);
    const [exdb41, showExdb41] = useState(false);
    const [exdb42, showExdb42] = useState(false);
    const [exdb43, showExdb43] = useState(false);
    const [exdb51, showExdb51] = useState(false);
    const [exdb52, showExdb52] = useState(false);
    const [exdb61, showExdb61] = useState(false);
    const [exdb62, showExdb62] = useState(false);
    const [exdb63, showExdb63] = useState(false);
    const [exdb64, showExdb64] = useState(false);
    const [exdb65, showExdb65] = useState(false);
    const [exdb66, showExdb66] = useState(false);
    const [exdb71, showExdb71] = useState(false);
    const [exdb72, showExdb72] = useState(false);
    const [exdb8, showExdb8] = useState(false);
    const [exdb9, showExdb9] = useState(false);

    const [ly1, showLy1] = useState(false);
    const [ly2, showLy2] = useState(false);
    const [ly3, showLy3] = useState(false);
    const [ly4, showLy4] = useState(false);
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
                                                <Text style={styles.contentText}>• They might show you the way to solve that problem.</Text>
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

                        {/* III. Các cấu trúc */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Một số dạng đặc biệt của câu bị động trong Tiếng Anh</Text>
                            </View>
                            <View style={styles.cardContent}>
                                {/* 1. Câu bị động với 2 tân ngữ */}
                                <Text style={styles.contentTitle}>1. Câu bị động với 2 tân ngữ</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showDb1(!db1)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {db1 ? (
                                    <View>
                                        <Text style={styles.contentCT}>• Công thức ở dạng chủ động: S + V + O1 + O2</Text>
                                        <Text style={styles.contentText}>⟶ TH1: Đưa tân ngữ gián tiếp lên làm chủ ngữ trong câu bị động:</Text>
                                        <Text style={styles.contentCT}>S + be + VpII + O1</Text>
                                        <Text style={styles.contentText}>⟶ TH2: Đưa tân ngữ trực tiếp lên làm chủ ngữ trong câu bị động:</Text>
                                        <Text style={styles.contentCT}>S + be + VpII + giới từ + O2</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb1(!exdb1)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb1 ? (
                                            <View>
                                                <Text style={styles.contentText}>• Tommy bought his wife a trench coat yesterday.</Text>
                                                <Text style={styles.contentText}>➤ Tommy's wife was bought a beautiful trench coat yesterday.</Text>
                                                <Text style={styles.contentText}>➤ A beautiful trench coat was bought for Tommy's wife yesterday.</Text>
                                                <Text style={styles.contentText}>• My dad gave me a new phone on my 18th birthday.</Text>
                                                <Text style={styles.contentText}>➤ I was given a new phone on my 18th birthday by my dad.</Text>
                                                <Text style={styles.contentText}>➤ A new phone was given to me on my 18th birthday by my dad.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 2. Câu bị động với V + V-ing */}
                                <Text style={styles.contentTitle}>2. Câu bị động với V + V-ing</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showDb2(!db2)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {db2 ? (
                                    <View>
                                        <Text style={styles.contentCT}>• Câu chủ động: V + somebody + V-ing</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: V +somebody/something + being + V(P2)</Text>
                                        <Text style={styles.contentText}>Dạng câu này được áp dụng với các động từ như: hate, love, like, dislike, admit, deny, regret, enjoy…</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb2(!exdb2)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb2 ? (
                                            <View>
                                                <Text style={styles.contentText}>• John loves trying new things.</Text>
                                                <Text style={styles.contentText}>➤ John loves new things being tried.</Text>
                                                <Text style={styles.contentText}>• I regret not eating a lot of vegetables.</Text>
                                                <Text style={styles.contentText}>➤ I regret a lot of vegetables not being eaten.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 3. Câu bị động với động từ tri giác */}
                                <Text style={styles.contentTitle}>3. Câu bị động với động từ tri giác</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showDb3(!db3)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {db3 ? (
                                    <View>
                                        <Text style={styles.contentText}>Động từ tri giác (verb of perception) là các từ như see, watch, notice, hear, look…</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + V + somebody + V-ing/to V-inf</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + to be + V(P2) + V-ing/to V-inf</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb3(!exdb3)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb3 ? (
                                            <View>
                                                <Text style={styles.contentText}>• My sister saw me leaving the house early today.</Text>
                                                <Text style={styles.contentText}>➤ I was seen leaving the house early by my sister today.</Text>
                                                <Text style={styles.contentText}>• I hear someone singing my favorite song.</Text>
                                                <Text style={styles.contentText}>➤ Someone is heard singing my favorite song.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 4. Dạng bị động của câu mệnh lệnh */}
                                <Text style={styles.contentTitle}>4. Dạng bị động của câu mệnh lệnh</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showDb4(!db4)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {db4 ? (
                                    <View>
                                        <Text style={styles.contentTitle}>⁕ TH1:</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: V + O!</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: Let + O + be + V(p2)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb41(!exdb41)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb41 ? (
                                            <View>
                                                <Text style={styles.contentText}>• Turn down the radio!</Text>
                                                <Text style={styles.contentText}>➤ Let the radio be turned off!</Text>
                                                <Text style={styles.contentText}>• Close your book!</Text>
                                                <Text style={styles.contentText}>➤ Let your book be closed!</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>⁕ TH2:</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: It’s one’s duty to + V-inf</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + to be + supposed to+V inf</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb42(!exdb42)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb42 ? (
                                            <View>
                                                <Text style={styles.contentText}>• It's your duty hang the clothes everyday.</Text>
                                                <Text style={styles.contentText}>➤ You’re supposed to hang the clothes everyday.</Text>
                                                <Text style={styles.contentText}>• It's students’ duty to finish their homework.</Text>
                                                <Text style={styles.contentText}>➤ Students are supposed to finish their homework.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>⁕ TH3:</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: It’s necessary to + V-inf</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + should/ must + be +P2</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb43(!exdb43)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb43 ? (
                                            <View>
                                                <Text style={styles.contentText}>• It's necessary to protect the wild animal.</Text>
                                                <Text style={styles.contentText}>➤ The wild animal should be protected.</Text>
                                                <Text style={styles.contentText}>• It's necessary to stop cutting down trees.</Text>
                                                <Text style={styles.contentText}>➤ Cutting down trees must be stopped.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 5. Dạng bị động của câu sai khiến (nhờ ai làm gì) */}
                                <Text style={styles.contentTitle}>5. Dạng bị động của câu sai khiến (nhờ ai làm gì)</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showDb5(!db5)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {db5 ? (
                                    <View>
                                        <Text style={styles.contentTitle}>⁕ TH1:</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + have + somebody + V</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + have + something + P2 + by sb</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb51(!exdb51)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb51 ? (
                                            <View>
                                                <Text style={styles.contentText}>• I have my older brother fix my computer.</Text>
                                                <Text style={styles.contentText}>➤ I have my older brother fix my computer.</Text>
                                                <Text style={styles.contentText}>• She had her friend submit her essay.</Text>
                                                <Text style={styles.contentText}>➤ She had her essay submitted by her friend.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>⁕ TH2:</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + get + somebody + to-V</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: S + get + something + P2</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb52(!exdb52)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb52 ? (
                                            <View>
                                                <Text style={styles.contentText}>• My mother got me to sweep the floor.</Text>
                                                <Text style={styles.contentText}>➤ My mother got the floor swept by me.</Text>
                                                <Text style={styles.contentText}>• My father gets me to pick my younger brother up after school everyday.</Text>
                                                <Text style={styles.contentText}>➤ My father gets my younger brother picked up after school by me everyday.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 6. Câu bị động kép  */}
                                <Text style={styles.contentTitle}>6. Câu bị động kép</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showDb6(!db6)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {db6 ? (
                                    <View>
                                        <Text style={styles.contentTitle}>6.1. Loại 1: Động từ chính (V1) ở thì hiện tại đơn, hiện tại tiếp diễn và hiện tại hoàn thành</Text>
                                        <Text style={styles.contentTitle}>Cách 1:</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S1 + V1 + that + S2 + V2 + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: It is + V1(p2) + that + S2 + V2 + O.</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb61(!exdb61)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb61 ? (
                                            <View>
                                                <Text style={styles.contentText}>• People believe that the government should do something to help the poor.</Text>
                                                <Text style={styles.contentText}>➤ It is believed that the government should do something to help the poor.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>Cách 2:</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S1 + V1 + that + S2 + V2 + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: </Text>
                                        <Text style={styles.contentCT}>TH1: S2 + am/is/are + V1(p2) + to + V2(inf) + O. (Khi V2 ở hiện tại đơn hoặc tương lai đơn)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb62(!exdb62)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb62 ? (
                                            <View>
                                                <Text style={styles.contentText}>• Someone says that the little boy will become a talented footballer in the future.</Text>
                                                <Text style={styles.contentText}>➤ The little boy is said to become a talented footballer in the future.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}
                                        <Text style={styles.contentCT}>TH2: S2 + am/is/are + V1(p2) + to have V2(p2) + O. (Khi V2 ở quá khứ đơn hoặc hiện tại hoàn thành)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb63(!exdb63)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb63 ? (
                                            <View>
                                                <Text style={styles.contentText}>• Our neighbors say that that young man has stolen the motorbike.</Text>
                                                <Text style={styles.contentText}>➤ That young man is said to have stolen the motorbike.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>

                                        <Text style={styles.contentTitle}>6.2. Loại 2: Khi động từ chính (V1) ở thì quá khứ đơn, quá khứ tiếp diễn, quá khứ hoàn thành</Text>
                                        <Text style={styles.contentTitle}>Cách 1:</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S1 + V1 + that + S2 + V2 + O.</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: It was + V1(p2) + that + S2 + V2 + O.</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb64(!exdb64)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb64 ? (
                                            <View>
                                                <Text style={styles.contentText}>• People told that someone has stolen the painting.</Text>
                                                <Text style={styles.contentText}>➤ It is told that someone has stolen the painting.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>Cách 2:</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S1 + V1 + that + S2 + V2 + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: </Text>
                                        <Text style={styles.contentCT}>TH1: S2 + was/were + V1(p2) + to + V2(nguyên thể) + O. (dùng khi V2 ở quá khứ đơn)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb65(!exdb65)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb65 ? (
                                            <View>
                                                <Text style={styles.contentText}>• Students said that food at the school canteen was good.</Text>
                                                <Text style={styles.contentText}>➤ Food at the school canteen was said to be good by students.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}
                                        <Text style={styles.contentCT}>TH2: S2 + was/were + V1(p2) + to have V2(p2) + O. (Dùng khi V2 ở quá khứ hoàn thành)</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb66(!exdb66)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb66 ? (
                                            <View>
                                                <Text style={styles.contentText}>• People in the town said that the President had visited their town silently.</Text>
                                                <Text style={styles.contentText}>➤ The President was said to have visited their town silently.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 7. Câu bị động với Make và Let/Allow  */}
                                <Text style={styles.contentTitle}>7. Câu bị động với Make và Let/Allow</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showDb7(!db7)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {db7 ? (
                                    <View>
                                        <Text style={styles.contentTitle}>7.1. Câu bị động với Make</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + make + sb + V-inf + O</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: Sb + to be + made + to + V-inf + O</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb71(!exdb71)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb71 ? (
                                            <View>
                                                <Text style={styles.contentText}>• My teammates make me do the presentation on my own.</Text>
                                                <Text style={styles.contentText}>➤ I am made to do the presentation on my own by my teammates.</Text>
                                                <Text style={styles.contentText}>• They make me cook for everyone at the party alone.</Text>
                                                <Text style={styles.contentText}>➤ I am made to cook for everyone at the party alone.</Text>
                                                <Text>{'\n'}</Text>
                                            </View>
                                        ): null}

                                        <Text style={styles.contentTitle}>7.2. Câu bị động với Let/Allow</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + let/allow + Sb + V-inf + O.</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: Sb + be + let/allowed + to V-inf + O.</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb72(!exdb72)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb72 ? (
                                            <View>
                                                <Text style={styles.contentText}>• My parents allow me to go out until 11 p.m.</Text>
                                                <Text style={styles.contentText}>➤ I am allowed to go out until 11 p.m by my parents.</Text>
                                                <Text style={styles.contentText}>• My friends let me choose a restaurant for our dinner.</Text>
                                                <Text style={styles.contentText}>➤ I am let to choose a restaurant for our dinner by my friends.</Text>
                                            </View>
                                        ): null}    
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 8. Câu bị động với 7 động từ đặc biệt */}
                                <Text style={styles.contentTitle}>8. Câu bị động với 7 động từ đặc biệt</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showDb8(!db8)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {db8 ? (
                                    <View>
                                        <Text style={styles.contentText}>7 động từ đặc biệt bao gồm: <Text style={{fontWeight: 'bold'}}>suggest </Text>(đề nghị), <Text style={{fontWeight: 'bold'}}>recommend </Text>(giới thiệu), <Text style={{fontWeight: 'bold'}}>order </Text>(yêu cầu, ra lệnh), <Text style={{fontWeight: 'bold'}}>request </Text>(yêu cầu), <Text style={{fontWeight: 'bold'}}>require </Text>(đòi hỏi, yêu cầu), <Text style={{fontWeight: 'bold'}}>demand </Text>(đòi hỏi, yêu cầu), <Text style={{fontWeight: 'bold'}}>insist </Text>(khăng khăng đòi)</Text>
                                        <Text style={styles.contentCT}>• Câu chủ động: S + suggest/recommend/demand… + that + S + (should) + V-inf + O.</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: It + be + suggested/recommended/demanded… + that + S + (should) + be + V3/ed + O.</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb8(!exdb8)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb8 ? (
                                            <View>
                                                <Text style={styles.contentText}>• The tour guide recommends that we (should) prepare warm clothes.</Text>
                                                <Text style={styles.contentText}>➤ It is recommended that warm clothes (should) be prepared.</Text>
                                                <Text style={styles.contentText}>• They suggest that we (should) visit HaLong Bay in the summer.</Text>
                                                <Text style={styles.contentText}>➤ It is suggested that HaLong Bay (should) be visited in the summer.</Text>
                                            </View>
                                        ): null}
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                {/* 9. Câu bị động với chủ ngữ giả It */}
                                <Text style={styles.contentTitle}>9. Câu bị động với chủ ngữ giả It</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showDb9(!db9)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {db9 ? (
                                    <View>
                                        <Text style={styles.contentCT}>• Câu chủ động: It + be + adj + for sb + to V + to do something</Text>
                                        <Text style={styles.contentCT}>• Câu bị động: It + be + adj + for sth + to be V3/ed.</Text>
                                        <TouchableOpacity style={styles.hideShowBtn} onPress={() => showExdb9(!exdb9)}>
                                            <Text style={styles.hideShowBtnText}>Xem Ví Dụ</Text>
                                        </TouchableOpacity>
                                        {exdb9 ? (
                                            <View>
                                                <Text style={styles.contentText}>• It is difficult for old people to learn a new language.</Text>
                                                <Text style={styles.contentText}>➤ It is difficult for a new league to be learnt by old people.</Text>
                                                <Text style={styles.contentText}>• It is typical for girls to play with dolls.</Text>
                                                <Text style={styles.contentText}>➤ It is typical for dolls to be played by girls.</Text>
                                            </View>
                                        ): null}
                                    </View>
                                ): null}
                            </View>
                        </View>

                        {/* IV. Các lưu ý khi chuyển từ câu chủ động sang câu bị động */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>IV. Các lưu ý khi chuyển từ câu chủ động sang câu bị động</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Chuyển đại từ tân ngữ thành đại từ chủ ngữ</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showLy1(!ly1)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {ly1 ? (
                                    <View>
                                        <Text style={styles.contentText}>Trong trường hợp tân ngữ (đối tượng chịu tác động) ở các chủ động là một đại từ tân ngữ sẽ trở thành chủ ngữ cho câu bị động, ta cần chuyển những từ này thành một đại từ chủ ngữ, cụ thể như sau: </Text>
                                        <Text style={styles.contentTitle}>Chủ ngữ Tân ngữ</Text>
                                        <Text style={styles.contentText}>I ⇒ Me</Text>
                                        <Text style={styles.contentText}>We ⇒ Us</Text>
                                        <Text style={styles.contentText}>You ⇒ You</Text>
                                        <Text style={styles.contentText}>He ⇒ Him</Text>
                                        <Text style={styles.contentText}>She ⇒ Her</Text>
                                        <Text style={styles.contentText}>It ⇒ It</Text>
                                        <Text style={styles.contentText}>They ⇒ Them</Text>
                                        <Text style={styles.contentText}>Ví dụ:</Text>
                                        <Text style={styles.contentText}>• He hates Timmy.</Text>
                                        <Text style={styles.contentText}>➤ Timmy is hated by he. <Text style={{fontWeight: 'bold'}}>(SAI)</Text></Text>
                                        <Text style={styles.contentText}>➤ Timmy is hated by him. <Text style={{fontWeight: 'bold'}}>(ĐÚNG)</Text></Text>
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentTitle}>2. Các động từ Crowd, Fill, Cover</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showLy2(!ly2)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {ly2 ? (
                                    <View>
                                        <Text style={styles.contentText}>Đối với ba động từ crowd, fill, cover, khi chuyển sang bị động, phía trước tân ngữ, ta sử dụng “with" thay cho “by".</Text>
                                        <Text style={styles.contentText}>Ví dụ:</Text>
                                        <Text style={styles.contentText}>• Strawberry jam fills the jar.</Text>
                                        <Text style={styles.contentText}>➤ The jar is filled with strawberry jam.</Text>
                                        <Text style={styles.contentText}>• People crowd the street to watch colorful fireworks on New Year’s Eve.</Text>
                                        <Text style={styles.contentText}>➤ The street is crowded with people watching colorful fireworks on New Year’s Eve.</Text>
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentTitle}>3. Thứ tự của ‘by…’, nơi chốn và thời gian trong câu bị động</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showLy3(!ly3)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {ly3 ? (
                                    <View>
                                        <Text style={styles.contentText}>Trong các câu bị động thứ tự của ‘by…’, nơi chốn, và thời gian sắp xếp cố định như sau:</Text>
                                        <Text style={styles.contentCT}>nơi chốn ⇒ ‘by…’ ⇒ thời gian</Text>
                                        <Text style={styles.contentText}>Lưu ý: Thứ tự này sẽ không thay đổi kể cả khi thiếu một trong ba yếu tố trên</Text>
                                        <Text style={styles.contentText}>Ví dụ:</Text>
                                        <Text style={styles.contentText}>• A beautiful bouquet of roses was left <Text style={{fontWeight: 'bold'}}>by someone (by…) in front of my house (nơi chốn) this morning (thời gian)</Text>.</Text>
                                        <Text style={styles.contentText}>• A beautiful bouquet of roses was left <Text style={{fontWeight: 'bold'}}>in front of my house (nơi chốn) this morning (thời gian)</Text>.</Text>
                                        <Text style={styles.contentText}>• A beautiful bouquet of roses was left <Text style={{fontWeight: 'bold'}}>by someone (by…) in front of my house (nơi chốn)</Text>.</Text>
                                        <Text>{'\n'}</Text>
                                    </View>
                                ): null}

                                <Text style={styles.contentTitle}>4. Một số tình huống không dùng được bị động</Text>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showLy4(!ly4)}>
                                    <Text style={styles.hideShowBtnText}>Xem</Text>
                                </TouchableOpacity>
                                {ly4 ? (
                                    <View>
                                        <Text style={styles.contentTitle}>4.1. Tân ngữ là đại từ phản thân hay tính từ sở hữu giống hệt với chủ ngữ (chủ thể hành động)</Text>
                                        <Text style={styles.contentText}>Ví dụ:</Text>
                                        <Text style={styles.contentText}>I love myself.</Text>
                                        <Text style={styles.contentText}>Không thể nói: Myself is loved by me. </Text>
                                        <Text style={styles.contentText}>Trong ví dụ trên, tân ngữ “myself” là một đại từ phản thân nên sẽ không có dạng bị động cho câu này. Một vài đại từ phản thân khác bao gồm: myself, himself, herself, themselves, ourselves,.</Text>
                                        <Text>{'\n'}</Text>

                                        <Text style={styles.contentTitle}>4.2. Nội động từ đóng vai trò là động từ chính trong câu</Text>
                                        <Text style={styles.contentText}>Những động từ chỉ có dạng nội động từ như live, exist, appear, die, cry,... không thể thể biến đổi thành câu bị động.</Text>
                                        <Text style={styles.contentText}>Ví dụ:</Text>
                                        <Text style={styles.contentText}>The birds fly on the sky.</Text>
                                        <Text style={styles.contentText}>Trong ví dụ trên, “fly” là một nội động từ nên không có tân ngữ theo sau. Vì vậy, câu này không tồn tại dạng bị động.</Text>
                                        <Text>{'\n'}</Text>

                                        <Text style={styles.contentTitle}>4.3. Một số động từ: have (khi mang nghĩa “có” - sở hữu), lack, belong to, resemble, seem, appear, look, be</Text>
                                        <Text style={styles.contentText}>Ví dụ:</Text>
                                        <Text style={styles.contentText}>He looks at his puppy.</Text>
                                        <Text style={styles.contentText}>Câu trên không có dạng bị động sau: A puppy is looked at by him.</Text>
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