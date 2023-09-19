import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './CauTuongThuat.style'

const CauTuongThuat = ({navigation}) => {
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
                                <Text style={styles.contentText}>+ Work {'–>'} worked, am/is/are working {'–>'} was/were working</Text>
                                <Text style={styles.contentText}>+ Has/have worked {'–>'} had worked, has/have been working {'–>'} had been working{'\n'}</Text>
                                
                                <Text style={styles.contentTitle}>- Quá khứ chuển về quá khứ hoàn thành</Text>
                                <Text style={styles.contentText}>+ Worked {'–>'} had worked, was/were working {'–>'} had been working{'\n'}</Text>

                                <Text style={styles.contentTitle}>- Quá khư hoàn thành giữ nguyên{'\n'}</Text>

                                <Text style={styles.contentTitle}>- Các Modal Verb</Text>
                                <Text style={styles.contentText}>+ Can {'–>'} Could</Text>
                                <Text style={styles.contentText}>+ Will {'–>'} Would</Text>
                                <Text style={styles.contentText}>+ Shall {'–>'} Should</Text>
                                <Text style={styles.contentText}>+ May {'–>'} Might</Text>
                                <Text style={styles.contentText}>+ Must {'–>'} Had to</Text>
                            </View>
                        </View>

                        {/* Note 3 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>Trạng từ chỉ thời gian và nơi chốn:</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Today {'———–>'} That day</Text>
                                <Text style={styles.contentTitle}>Tonight {'———–>'} That night</Text>
                                <Text style={styles.contentTitle}>Next week {'———–>'} The week after</Text>
                                <Text style={styles.contentTitle}>Tomorrow {'———–>'} The day after</Text>
                                <Text style={styles.contentTitle}>Now {'———–>'} Then</Text>
                                <Text style={styles.contentTitle}>Ago {'———–>'} Before</Text>
                                <Text style={styles.contentTitle}>This {'———–>'} That</Text>
                                <Text style={styles.contentTitle}>These {'———–>'} Those</Text>
                                <Text style={styles.contentTitle}>Yesterday {'———–>'} The day before</Text>
                                <Text style={styles.contentTitle}>Last week {'———–>'} The week before</Text>
                                <Text style={styles.contentTitle}>Here {'———–>'} There</Text>
                                <Text style={styles.contentEx}>Ex: He said to me "I split up with my girlfriend yesterday"</Text>
                                <Text style={styles.contentEx}>{'->'} He told me that he had split up with his girlfriend the day before.</Text>
                            </View>
                        </View>

                        {/* A */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>A. COMMANDS / REQUESTS (CÂU MỆNH LỆNH, CÂU ĐỀ NGHỊ)</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>- Khẳng định:</Text>
                                <Text style={styles.contentTitle1}>+ Chủ động:</Text>
                                <Text style={styles.contentText}>S + V + O: “V1 + O ...”</Text>
                                <Text style={styles.contentTitle1}>+ Gián Tiếp:</Text>
                                <Text style={styles.contentText}>S + asked / told + O + to + V1 + ...</Text>
                                <Text style={styles.contentTitle1}>+ Ví dụ:</Text>
                                <Text style={styles.contentEx}>Ex 1: He said to her: “Be quiet, please.”{'\n'}{'->'} He told her to be quiet.</Text>
                                <Text style={styles.contentEx}>Ex 2: “Brush your teeth before going to bed, Lan.” The mother said.{'\n'}{'->'} The mother told Lan to brush her teeth before going to bed.{'\n'}</Text>

                                <Text style={styles.contentTitle}>- Phủ định:</Text>
                                <Text style={styles.contentTitle1}>+ Chủ động:</Text>
                                <Text style={styles.contentText}>S + V + O: “Don’t + V1 + ...”</Text>
                                <Text style={styles.contentTitle1}>+ Gián Tiếp:</Text>
                                <Text style={styles.contentText}>S + asked / told + O + not + to + V1 ...</Text>
                                <Text style={styles.contentTitle1}>+ Ví dụ:</Text>
                                <Text style={styles.contentEx}>Ex 1: “Don’t forget to phone me this afternoon,” he said.{'\n'}{'->'} He reminded me to phone him that afternoon.{'\n'}</Text>
                                <Text style={styles.contentEx}>Ex 2: The teacher said to the students: “Don’t talk in the class.”{'\n'}{'->'} The teacher told/ ask the students not to talk in the class.{'\n'}</Text>

                                <Text style={styles.contentNote}>*Tùy theo ngữ cảnh trong lời nói động từ tường thuật said hoặc said to có thể đổi thành told,asked, advised, persuaded, directed, begged, encouraged, ...{'\n'}</Text>
                                <Text style={styles.contentEx}>Ex: The doctor said to his patient: “Do exercise regularly.”{'\n'}{'->'} The doctor advised his patient to do exercise regularly.</Text>
                            </View>
                        </View>

                        {/* B */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>B. STATEMENT (CÂU TRẦN THUẬT)</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle1}>Chủ động:</Text>
                                <Text style={styles.contentText}>S + V + (O): “clause”</Text>
                                <Text style={styles.contentTitle1}>Gián Tiếp:</Text>
                                <Text style={styles.contentText}>S + told / said + (O) + (that) + clause ...{'\n'}</Text>

                                <Text style={styles.contentNote}>*"said to" đổi thành "told"{'\n'}</Text>
                                <Text style={styles.contentEx}>Ex 1: Tom said, “I want to visit my friend this weekend.”{'\n'}{'->'} Tom said that he wanted to visit his friend that weekend.{'\n'}</Text>
                                <Text style={styles.contentEx}>Ex 2: She said to me, “I am going to Dalat next summer.”{'\n'}{'->'} She told me that she was going to Dalat the next summer.</Text>
                            </View>
                        </View>

                        {/* C */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>C. QUESTIONS (Câu hỏi)</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Yes – No question</Text>
                                <Text style={styles.contentTitle1}>+ Chủ động:</Text>
                                <Text style={styles.contentText}>S + V + (O) : “Aux. V + S + V1 + O ....?”</Text>
                                <Text style={styles.contentTitle1}>+ Gián Tiếp:</Text>
                                <Text style={styles.contentText}>S + asked + O + if / whether + S + V + O</Text>
                                <Text style={styles.contentEx}>Ex: He asked: “Have you ever been to Ha Noi, Annie?”{'\n'}{'->'} He asked Annie whether / if she had ever been to Ha Noi.{'\n'}</Text>

                                <Text style={styles.contentTitle}>Wh – question</Text>
                                <Text style={styles.contentTitle1}>+ Chủ động:</Text>
                                <Text style={styles.contentText}>S + V + (O): “Wh- + Aux. V + S + V1 + O ?”</Text>
                                <Text style={styles.contentTitle1}>+ Gián Tiếp:</Text>
                                <Text style={styles.contentText}>S + asked + O + Wh- + S + V + O.{'\n'}</Text>
                                <Text style={styles.contentEx}>Ex: “Where did you go last night, John?” the father asked.{'\n'}{'->'} The father asked John where he had gone the night before.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CauTuongThuat