import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './SinceBeforeAfter.style'

const SinceBeforeAfter = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Since  */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Since</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText1}>Hiện tại hoàn thành/ Hiện tại hoàn thành tiếp diễn/ Quá khứ hoàn thành + Since + Quá khứ đơn </Text>
                            </View>
                        </View>

                        {/* II. Before */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Before</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>• Before được đùng dể nói về một hành động đã xảy ra trước một hành động khác trong quá khứ:</Text>
                                <Text style={styles.contentText1}>Before + Quá khứ đơn, Quá khứ hoàn thành</Text>

                                <Text style={styles.contentText}>• Before được sử dụng với thì hiện tại đơn và thì tương lai đơn, diễn tả một việc sẽ thực hiện trước khi điều gì xảy ra, hoặc trước sự xảy ra của một việc nào đó:</Text>
                                <Text style={styles.contentText1}>Before + Hiện tại đơn, Hiện tại tiếp diễn/ Hiện tại đơn</Text>
                            </View>
                        </View>

                        {/* III. After */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. After</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>• Dùng để nói về một sự việc được diễn ra sau khi đã kết thúc một hành động hay sự việc khác:</Text>
                                <Text style={styles.contentText1}>After +  Quá khứ hoàn thành, Quá khứ đơn</Text>
                                <Text style={styles.contentText1}>= Quá khứ hoàn thành + before, Quá khứ đơn</Text>

                                <Text style={styles.contentText}>• Sử dụng để miêu tả một hành động xảy ra trong quá khứ, và để kết quả ở hiện tại:</Text>
                                <Text style={styles.contentText1}>After + Quá khứ đơn, Hiện tại đơn</Text>

                                <Text style={styles.contentText}>• Miêu tả một hành động xảy ra trong quá khứ, kết quả đã kết thúc ở trong quá khứ:</Text>
                                <Text style={styles.contentText1}>After + Quá khứ đơn, Quá khứ đơn</Text>

                                <Text style={styles.contentText}>• Diễn tả sau khi đã làm công việc gì và tiếp tục thực hiện một công việc khác:</Text>
                                <Text style={styles.contentText1}>After + Hiện tại hoàn thành/ Hiện tại đơn, Tương lai đơn</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SinceBeforeAfter