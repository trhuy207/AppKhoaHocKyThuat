import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './ToVerbAndBareInfinitive.style'

const ToVerbAndBareInfinitive = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. To Verb */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. To Verb</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>a) V + to V</Text>
                                <Text style={styles.contentTitle1}>Agree; Promise; Refuse; Appear; Want;..</Text>
                                <Text style={styles.contentText}>b) V + O + to V</Text>
                                <Text style={styles.contentTitle1}>Advice; Ask; Tell; Beg; Promise</Text>
                                <Text style={styles.contentText}>c) Like/ love/ hate/ begin/ start + V-ing/ to V</Text>
                                <Text style={styles.contentText}>d) Remember + V-ing/ to V</Text>
                                <Text style={styles.contentTitle1}>+ Remember + V-ing (Nhớ đã làm gì đó)</Text>
                                <Text style={styles.contentTitle1}>+ Remember + to V (Nhắc nhở làm gì đó)</Text>
                                <Text style={styles.contentText}>Forget + V-ing/ to V</Text>
                                <Text style={styles.contentTitle1}>+ Forget + V-ing (Quên đã làm gì đó)</Text>
                                <Text style={styles.contentTitle1}>+ Forget + to V (Quên việc cần làm)</Text>
                                <Text style={styles.contentText}>Regret + V-ing/ to V</Text>
                                <Text style={styles.contentTitle1}>+ Regret + V-ing (Hối hận khi đã làm gì đó)</Text>
                                <Text style={styles.contentTitle1}>+ Regret + to V (Lấy làm tiếc)</Text>
                                <Text style={styles.contentText}>Try + V-ing/ to V</Text>
                                <Text style={styles.contentTitle1}>+ Try + V-ing (Thử làm gì đó)</Text>
                                <Text style={styles.contentTitle1}>+ Try + to V (Cố gắng làm gì đó)</Text>
                                <Text style={styles.contentText}>Stop + V-ing/ to V</Text>
                                <Text style={styles.contentTitle1}>+ Stop + V-ing (Ngưng hẳn một việc)</Text>
                                <Text style={styles.contentTitle1}>+ Stop + to V (Ngưng lại để làm gì đó)</Text>
                                <Text style={styles.contentText}>e) Một số cấu trúc To-infinitive khác</Text>
                                <Text style={styles.contentTitle1}>+ When/ where/ which/ how ... + to V</Text>
                                <Text style={styles.contentTitle1}>+ It takes/took + O + thời gian + to V (Ai đó mất bao lâu để)</Text>
                                <Text style={styles.contentTitle1}>+ S + be + adj + to V (Thật là ... để làm gì đó)</Text>
                                <Text style={styles.contentTitle1}>+ S + V + too + adj/adv + to V (Quá ... để)</Text>
                                <Text style={styles.contentTitle1}>+ S + V + adj/adv + enough + to V (Đủ ... để)</Text>
                                <Text style={styles.contentTitle1}>+ I + think/ thought/ believe/ find + it + adj + to + V-inf (tôi nghĩ ... để)</Text>
                            </View>
                        </View>

                        {/* II. Bare Infinitive */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Bare infinitive</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>a) Make/ let/ help + O + V</Text>
                                <Text style={styles.contentText}>b) be made/ let + O + V</Text>
                                <Text style={styles.contentText}>c) Modal Verbs (can, should, must, ...) + V</Text>
                                <Text style={styles.contentText}>d) Should = had better = would rather = ought to + V</Text>
                                <Text style={styles.contentText}>e) Động từ giác quan (see, watch, hear, smell, notice, ...) + O + V</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ToVerbAndBareInfinitive