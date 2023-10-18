import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './WhenWhile.style'

const WhenWhile = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. When  */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. When</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>• Diễn tả mối liên quan giữa hành động và kết quả:</Text>
                                <Text style={styles.contentText1}>When + Hiện tại đơn, Hiện tại đơn/ Tương lai đơn</Text>

                                <Text style={styles.contentText}>• Diễn tả 1 hành động xảy ra trước 1 hành động trong quá khứ:</Text>
                                <Text style={styles.contentText1}>When + Quá khứ đơn, Quá khứ hoàn thành</Text>

                                <Text style={styles.contentText}>• Diễn tả 2 hành động xảy ra song song, hoặc xảy ra liên tiếp trong quá khứ:</Text>
                                <Text style={styles.contentText1}>When + Quá khứ đơn, Quá khứ đơn</Text>

                                <Text style={styles.contentText}>• Diễn tả 2 hành động diễn ra nối tiếp nhau trong quá khứ:</Text>
                                <Text style={styles.contentText1}>When + Quá khứ hoàn thành, Quá khứ đơn</Text>

                                <Text style={styles.contentText}>• Diễn tả một hành động diễn ra thì có một hành động khác xen vào:</Text>
                                <Text style={styles.contentText1}>When + Quá khứ tiếp diễn, Quá khứ đơn</Text>

                                <Text style={styles.contentText}>• Diễn tả 2 hành động đang diễn ra song song trong tương lai:</Text>
                                <Text style={styles.contentText1}>When + Hiện tại đơn, S + will + be + V-ing</Text>
                            </View>
                        </View>

                        {/* II. While */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. While</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>• Diễn tả một hành động đang diễn ra thì bị một hành động khác cắt ngang:</Text>
                                <Text style={styles.contentText1}>While + Quá khứ tiếp diễn, Quá khứ đơn </Text>

                                <Text style={styles.contentText}>• Diễn tả 2 hành động xảy ra ở cùng 1 thời điểm trong hiện tại hoặc trong quá khứ:</Text>
                                <Text style={styles.contentText1}>While + Hiện tại tiếp diễn/ Quá khứ tiếp diễn, Hiện tại tiếp diễn/ Quá khứ tiếp diễn</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WhenWhile