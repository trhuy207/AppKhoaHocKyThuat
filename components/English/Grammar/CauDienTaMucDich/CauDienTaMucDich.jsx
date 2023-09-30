import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'


import styles from './CauDienTaMucDich.style'

const CauDienTaMucDich = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        <View style={styles.cardElement}>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Để diễn tả mục đích chúng ta sẽ dùng TO, SO THAT, IN ORDER THAT, SO AS TO và IN ORDER TO, và được chia thành 2 nhóm sau :</Text>
                                
                                <Text style={styles.headerText}>A. SO THAT VÀ IN ORDER THAT:</Text>
                                <Text style={styles.contentText}><Text style={{fontWeight:'normal'}}>Theo sau 2 từ trên là</Text> một mệnh đề.</Text>
                                <Text style={styles.contentEx}>Ex: She has been working hard <Text style={{fontWeight:'bold'}}>so that/ in order that she can save enough money to cureher mother’s rare disease.</Text>{'\n'}→ Cô ấy làm việc chăm chỉ để cô ấy có thể dành dạm đủ tiền chữa căn bệnh hiểm nghèo của mẹ mình.</Text>

                                <Text style={styles.headerText}>B. TO , SO AS TO VÀ IN ORDER TO:</Text>
                                <Text style={styles.contentText}><Text style={{fontWeight:'normal'}}>Theo sau 3 từ trên là</Text> động từ nguyên mẫu (V-inf).</Text>
                                <Text style={styles.contentEx}>Ex: I want to take the IELTS test<Text style={{fontWeight:'bold'}}>to/ in order to/ so as to know how well my English is.</Text>{'\n'}→ Tôi muốn thi IELTS để biết trình độ tiếng Anh của mình như thế nào.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CauDienTaMucDich