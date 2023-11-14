import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai32_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'

const Bai32_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Lực hướng tâm */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Lực hướng tâm</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Lực (hay hợp lực của các lực) tác dụng vào một vật chuyển động tròn đều và gây ra cho vật gia tốc hướng tâm gọi là lực hướng tâm.</Text>
                            </View>
                        </View>

                        {/* II. Gia tốc hướng tâm */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Gia tốc hướng tâm</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Trong chuyển động tròn đều, tuy vận tốc có độ lớn không đổi, nhưng có hướng luôn thay đổi, nên chuyển động này có gia tốc. Gia tốc trong chuyển động tròn đều luôn hướng vào tâm của quỹ đạo nên gọi là gia tốc hướng tâm.</Text>
                                <SvgComponent1 />
                            </View>
                        </View>

                        {/* III. Công thức độ lớn lực hướng tâm */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Công thức độ lớn lực hướng tâm</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <SvgComponent2 />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai32_10