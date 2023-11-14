import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai29_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'
import SvgComponent5 from './SvgImage/SvgComponent5'
import SvgComponent6 from './SvgImage/SvgComponent6'
import SvgComponent7 from './SvgImage/SvgComponent7'

const Bai29_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Định luật bảo toàn động lượng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Định luật bảo toàn động lượng</Text>
                            </View>
                            {/* 1. Hệ kín (hệ cô lập) */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Hệ kín (hệ cô lập)</Text>
                                <Text style={styles.contentText}>- Một hệ nhiều vật được gọi là cô lập khi không có ngoại lực tác dụng lên hệ hoặc nếu có thì các ngoại lực ấy cân bằng nhau.</Text>
                                <Text style={styles.contentText}>- Trong hệ cô lập chỉ có nội lực tương tác giữa các vật trong hệ trực đối nhau từng đôi một.</Text>
                            </View>
                            {/* 2. Định luật bảo toàn động lượng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Định luật bảo toàn động lượng</Text>
                                <Text style={styles.contentText}>- Động lượng của một hệ cô lập là một đại lượng bảo toàn.</Text>
                                <SvgComponent1 />
                                <Text style={styles.contentText}><SvgComponent2 /> và <SvgComponent3 /> là động lượng của vật 1 và vật 2 trước tương tác.</Text>
                                <Text style={styles.contentText}><SvgComponent4 /> và <SvgComponent5 /> là động lượng của vật 1 và vật 2 sau tương tác.</Text>
                            </View>
                        </View>

                        {/* II. Va chạm đàn hồi và va chạm mềm */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Va chạm đàn hồi và va chạm mềm</Text>
                            </View>
                            {/* 1. Va chạm đàn hồi */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Va chạm đàn hồi</Text>
                                <Text style={styles.contentText}>- Hai xe giống nhau, xe A chuyển động với vận tốc v, đến va chạm với xe B đang đứng yên.</Text>
                                <Text style={styles.contentText}>- Sau va chạm xe A đứng yên, xe B chuyển động với vận tốc v.</Text>
                                <Text style={styles.contentText}>Kết luận: xe A đã truyền toàn bộ chuyển động cho xe B.</Text>
                                <Text style={styles.contentText}>Đây là va chạm đàn hồi.</Text>
                            </View>
                            {/* 2. Va chạm mềm */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Va chạm mềm</Text>
                                <Text style={styles.contentText}>Va chạm mềm là va chạm mà sau đó 2 vật chuyển động với cùng một vận tốc</Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent6 /></Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent7 /></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai29_10