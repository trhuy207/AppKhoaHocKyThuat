import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './CauTuongThuat.style'

const CauTuongThuat = ({navigation}) => {
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [showD, setShowD] = useState(false);
    const [showE, setShowE] = useState(false);
    const [showF, setShowF] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Grammar')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Câu Tường Thuật</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* Intro */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>Khi đổi câu trực tiếp sang câu tường thuật cần lưu ý 3 điều sau:</Text>
                            </View>
                        </View>

                        {/* Note 1 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>Ngôi:</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Ngôi thứ 1 sẽ được đổi thành chủ ngữ trong câu.{'\n'}Ngôi thứ 2 sẽ được đổi thành túc từ trong câu.{'\n'}Ngôi thứ 3 sẽ được giữ nguyên trong câu.</Text>
                            </View>
                        </View>

                        {/* Note 2 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>Thì:</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Đơn giản chỉ cần lùi về một thì:</Text>
                                <Text style={styles.contentTitle}>- Hiện tại chuyền về quá khứ</Text>
                                <Text style={styles.contentText}>+ Work → worked, am/is/are working → was/were working</Text>
                                <Text style={styles.contentText}>+ Has/have worked → had worked, has/have been working → had been working{'\n'}</Text>
                                
                                <Text style={styles.contentTitle}>- Quá khứ chuển về quá khứ hoàn thành</Text>
                                <Text style={styles.contentText}>+ Worked → had worked, was/were working → had been working{'\n'}</Text>

                                <Text style={styles.contentTitle}>- Quá khư hoàn thành giữ nguyên{'\n'}</Text>

                                <Text style={styles.contentTitle}>- Các Modal Verb</Text>
                                <Text style={styles.contentText}>+ Can → Could</Text>
                                <Text style={styles.contentText}>+ Will → Would</Text>
                                <Text style={styles.contentText}>+ Shall → Should</Text>
                                <Text style={styles.contentText}>+ May → Might</Text>
                                <Text style={styles.contentText}>+ Must → Had to</Text>
                            </View>
                        </View>

                        {/* Note 3 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>Trạng từ chỉ thời gian và nơi chốn:</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Today → That day</Text>
                                <Text style={styles.contentTitle}>Tonight → That night</Text>
                                <Text style={styles.contentTitle}>Next week → The week after</Text>
                                <Text style={styles.contentTitle}>Tomorrow → The day after</Text>
                                <Text style={styles.contentTitle}>Now → Then</Text>
                                <Text style={styles.contentTitle}>Ago → Before</Text>
                                <Text style={styles.contentTitle}>This → That</Text>
                                <Text style={styles.contentTitle}>These → Those</Text>
                                <Text style={styles.contentTitle}>Yesterday → The day before</Text>
                                <Text style={styles.contentTitle}>Last week → The week before</Text>
                                <Text style={styles.contentTitle}>Here → There</Text>
                                <Text style={styles.contentEx}>Ex: He said to me "I split up with my girlfriend yesterday"</Text>
                                <Text style={styles.contentEx}>→ He told me that he had split up with his girlfriend the day before.</Text>
                            </View>
                        </View>

                        {/* A */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>A. COMMANDS / REQUESTS (CÂU MỆNH LỆNH, CÂU ĐỀ NGHỊ)</Text>
                            </View>
                            <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowA(!showA)}>
                                <Text style={styles.hideShowBtnText}>Hiện / Ẩn</Text>
                            </TouchableOpacity>
                            {showA ? (
                                <View style={styles.cardContent}>
                                    <Text style={styles.contentTitle}>- Khẳng định:</Text>
                                    <Text style={styles.contentTitle1}>+ Chủ động:</Text>
                                    <Text style={styles.contentText}>S + V + O: “V1 + O ...”</Text>
                                    <Text style={styles.contentTitle1}>+ Gián Tiếp:</Text>
                                    <Text style={styles.contentText}>S + asked / told + O + to + V1 + ...</Text>
                                    <Text style={styles.contentTitle1}>+ Ví dụ:</Text>
                                    <Text style={styles.contentEx}>Ex 1: He said to her: “Be quiet, please.”{'\n'}→ He told her to be quiet.</Text>
                                    <Text style={styles.contentEx}>Ex 2: “Brush your teeth before going to bed, Lan.” The mother said.{'\n'}→ The mother told Lan to brush her teeth before going to bed.{'\n'}</Text>

                                    <Text style={styles.contentTitle}>- Phủ định:</Text>
                                    <Text style={styles.contentTitle1}>+ Chủ động:</Text>
                                    <Text style={styles.contentText}>S + V + O: “Don’t + V1 + ...”</Text>
                                    <Text style={styles.contentTitle1}>+ Gián Tiếp:</Text>
                                    <Text style={styles.contentText}>S + asked / told + O + not + to + V1 ...</Text>
                                    <Text style={styles.contentTitle1}>+ Ví dụ:</Text>
                                    <Text style={styles.contentEx}>Ex 1: “Don’t forget to phone me this afternoon,” he said.{'\n'}→ He reminded me to phone him that afternoon.{'\n'}</Text>
                                    <Text style={styles.contentEx}>Ex 2: The teacher said to the students: “Don’t talk in the class.”{'\n'}→ The teacher told/ ask the students not to talk in the class.{'\n'}</Text>

                                    <Text style={styles.contentNote}>*Tùy theo ngữ cảnh trong lời nói động từ tường thuật said hoặc said to có thể đổi thành told,asked, advised, persuaded, directed, begged, encouraged, ...{'\n'}</Text>
                                    <Text style={styles.contentEx}>Ex: The doctor said to his patient: “Do exercise regularly.”{'\n'}→ The doctor advised his patient to do exercise regularly.</Text>
                                </View>
                            ):null}
                        </View>

                        {/* B */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>B. STATEMENT (CÂU TRẦN THUẬT)</Text>
                            </View>
                            <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowB(!showB)}>
                                <Text style={styles.hideShowBtnText}>Hiện / Ẩn</Text>
                            </TouchableOpacity>
                            {showB ? (
                                <View style={styles.cardContent}>
                                    <Text style={styles.contentTitle1}>Chủ động:</Text>
                                    <Text style={styles.contentText}>S + V + (O): “clause”</Text>
                                    <Text style={styles.contentTitle1}>Gián Tiếp:</Text>
                                    <Text style={styles.contentText}>S + told / said + (O) + (that) + clause ...{'\n'}</Text>

                                    <Text style={styles.contentNote}>*"said to" đổi thành "told"{'\n'}</Text>
                                    <Text style={styles.contentEx}>Ex 1: Tom said, “I want to visit my friend this weekend.”{'\n'}→ Tom said that he wanted to visit his friend that weekend.{'\n'}</Text>
                                    <Text style={styles.contentEx}>Ex 2: She said to me, “I am going to Dalat next summer.”{'\n'}→ She told me that she was going to Dalat the next summer.</Text>
                                </View>
                            ): null}
                        </View>

                        {/* C */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>C. QUESTIONS (Câu hỏi)</Text>
                            </View>
                            <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowC(!showC)}>
                                <Text style={styles.hideShowBtnText}>Hiện / Ẩn</Text>
                            </TouchableOpacity>
                            {showC ? (
                                <View style={styles.cardContent}>
                                    <Text style={styles.contentTitle}>Yes – No question</Text>
                                    <Text style={styles.contentTitle1}>+ Chủ động:</Text>
                                    <Text style={styles.contentText}>S + V + (O) : “Aux. V + S + V1 + O ....?”</Text>
                                    <Text style={styles.contentTitle1}>+ Gián Tiếp:</Text>
                                    <Text style={styles.contentText}>S + asked + O + if / whether + S + V + O</Text>
                                    <Text style={styles.contentEx}>Ex: He asked: “Have you ever been to Ha Noi, Annie?”{'\n'}→ He asked Annie whether / if she had ever been to Ha Noi.{'\n'}</Text>

                                    <Text style={styles.contentTitle}>Wh – question</Text>
                                    <Text style={styles.contentTitle1}>+ Chủ động:</Text>
                                    <Text style={styles.contentText}>S + V + (O): “Wh- + Aux. V + S + V1 + O ?”</Text>
                                    <Text style={styles.contentTitle1}>+ Gián Tiếp:</Text>
                                    <Text style={styles.contentText}>S + asked + O + Wh- + S + V + O.{'\n'}</Text>
                                    <Text style={styles.contentEx}>Ex: “Where did you go last night, John?” the father asked.{'\n'}→ The father asked John where he had gone the night before.</Text>
                                </View>
                            ): null}
                        </View>

                        {/* D */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>D. GERUND – DANH ĐỘNG TỪ (V-ING)</Text>
                            </View>
                            <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowD(!showD)}>
                                <Text style={styles.hideShowBtnText}>Hiện / Ẩn</Text>
                            </TouchableOpacity>
                            {showD ? (
                                <View style={styles.cardContent}>
                                    <Text style={styles.contentTitle}>Khi lời nói trực tiếp là lời đề nghị , chúc mừng, cảm ơn, xin lỗi, …động từ tường thuật cùng với danh động từ (V-ing) theo sau nó thường được dùng để chuyển tải nội dung lời nói trên.</Text>
                                    <Text style={styles.contentText}>Reporting Verb + V-ing + ...</Text>
                                    <Text style={styles.contentNote}>Deny (phủ nhận), admit (thừa nhận), suggest (đề nghị), regret (nuối tiếc), appreciate (đánh giá cao, cảm kích)</Text>
                                    <Text style={styles.contentEx}>Ex 1: Peter said: “I didn’t steal the pen.”{'\n'}→ Peter denied stealing the pen.</Text>
                                    <Text style={styles.contentEx}>Ex 2: “Why don’t we go out for a walk?” said the boy.{'\n'}→ The boy suggested going out for a walk.</Text>

                                    <Text style={styles.contentText}>Reporting Verb + (Someone) + Preposition + V-ing + ...</Text>
                                    <Text style={styles.contentTitle}>
                                        Thank someone for → cám ơn ai về ….
                                        {'\n'}Accuse someone of → buộc tội ai về … 
                                        {'\n'}Congratulate someone on → chúc mừng ai về …. 
                                        {'\n'}Warn someone against → cảnh báo ai về …. 
                                        {'\n'}Dream of → mơ về … 
                                        {'\n'}Object to → chống đối về … 
                                        {'\n'}Apologize someone for → xin lỗi ai về … 
                                        {'\n'}Insist on → khăng khăng dòi … 
                                        {'\n'}Complain about → phàn nàn về …
                                    </Text>
                                    <Text style={styles.contentEx}>Ex 1: “I’m happy to know that you have been promoted. Congratulations!”, Jim said to Mary.{'\n'}→ Jim congratulated Mary on having beeb promoted.</Text>
                                    <Text style={styles.contentEx}>Ex 2: I said to the boy: “Don’t play ball near the restricted area.”{'\n'}→ I warned the boy agianst playing near the restricted area.</Text>
                                </View>
                            ): null}
                        </View>

                        {/* E */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>E. ĐỘNG TỪ NGUYÊN MẪU – TO-INFINITIVE</Text>
                            </View>
                            <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowE(!showE)}>
                                <Text style={styles.hideShowBtnText}>Hiện / Ẩn</Text>
                            </TouchableOpacity>
                            {showE ? (
                                <View style={styles.cardContent}>
                                    <Text style={styles.contentTitle}>Khi lời nói gián tiếp là một lời đề nghị, mệnh lệnh, ý định, lời hứa, lời yêu cầu, …động từ tường thuật cùng với động từ nguyên mẫu theo sau nó thường được dùng để chuyển tải nội dung lời nói này.</Text>
                                    <Text style={styles.contentText}>Reporting Verb + To-inf ...</Text>
                                    <Text style={styles.contentTitle}>Agree / demand/ guarantee / hope / promise / swear / threaten / volunteer / offer / refuse/ consent / decide</Text>
                                    <Text style={styles.contentEx}>Ex: “I will lend you my pencil if you need it,” said my friend.{'\n'}→ My friend offered to lend me her pencil if I needed it.</Text>

                                    <Text style={styles.contentText}>Reporting Verb + Object + To-inf ...</Text>
                                    <Text style={styles.contentTitle}>Ask/ advise/ command / expect / instruct / invite / order / persuade / recommend /remind / encourage / tell / urge / warn / want</Text>
                                    <Text style={styles.contentEx}>Ex: “Don’t forget to turn off the lights,” I said to my sister.{'\n'}→ I reminded my sister to turn off the lights.</Text>

                                    <Text style={styles.contentTitle}># Lời đề nghị:</Text>
                                    <Text style={styles.contentText}>Would you / could you / Will you / Can you → asked + someone + to-inf</Text>
                                    <Text style={styles.contentText}>Would you mind / Do you mind + V-ing → asked + someone + to-inf</Text>
                                    <Text style={styles.contentEx}>Ex 1: “Can you read the the message again?” she said.{'\n'}→ She asked me to read the message again.</Text>
                                    <Text style={styles.contentEx}>Ex 2: He said: “Would you mind giving me a ride, please?”{'\n'}→ He asked me to give him a ride.</Text>

                                    <Text style={styles.contentTitle}># Lời mời:</Text>
                                    <Text style={styles.contentText}>Would you like / Will you → invited someone + to-inf</Text>
                                    <Text style={styles.contentEx}>Ex: “Will you go out with me tonight ?” he said.{'\n'}→ He invited me to go out with him that night.</Text>

                                    <Text style={styles.contentTitle}># Lời khuyên:</Text>
                                    <Text style={styles.contentText}>Had better / If I were you / Why don’t you → advised someone + to-inf</Text>
                                    <Text style={styles.contentEx}>Ex: “If I were you, I would break up with her,” he said.{'\n'}→ He advised me to break up with her.</Text>
                                </View>
                            ): null}
                        </View>

                        {/* F */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>F. CÂU ĐIỀU KIỆN TRONG LỜI NÓI GIÁN TIẾP</Text>
                            </View>
                            <TouchableOpacity style={styles.hideShowBtn} onPress={() => setShowF(!showF)}>
                                <Text style={styles.hideShowBtnText}>Hiện / Ẩn</Text>
                            </TouchableOpacity>
                            {showF ? (
                                <View style={styles.cardContent}>
                                    <Text style={styles.contentTitle}>Nếu trong lời nói trực tiếp có câu điều kiện thì chỉ có câu điều kiện loại 1 là thay đổi về thì,câu điều kiện loại 2 và 3 vẫn giữ nguyên hình thức động từ của chúng.</Text>
                                    <Text style={styles.contentEx}>Ex 1: “If I have time, I will call her,” he said.{'\n'}→ He said that if he had time he would call her.</Text>
                                    <Text style={styles.contentEx}>Ex 2: She said: “If I had enough patience, I wouldn’t wait this long.”{'\n'}→ She said that if she had enough patience, she wouldn’t wait that long.</Text>
                                    <Text style={styles.contentEx}>Ex 3: He said to me : “If I had killed you, I would have been set free.”{'\n'}→ He told me that if he had killed me he would have been set free.</Text>
                                </View>
                            ): null}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CauTuongThuat