import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './Bai13_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'
import SvgComponent5 from './SvgImage/SvgComponent5'
import SvgComponent6 from './SvgImage/SvgComponent6'
import SvgComponent7 from './SvgImage/SvgComponent7'
import SvgComponent8 from './SvgImage/SvgComponent8'

const Bai13_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Tổng hợp lực – hợp lực tác dụng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Tổng hợp lực – hợp lực tác dụng</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Tổng hợp lực là phép thay thế các lực tác dụng đồng thời vào cùng một vật bằng một lực có tác dụng giống hệt các lực ấy. Lực thay thế này gọi là hợp lực.</Text>
                                <SvgComponent1 />
                                <Text style={styles.contentTitle}>Tổng hợp hai lực</Text>
                                <Text style={styles.contentTextBold}>* <SvgComponent2 /> và <SvgComponent3 /> cùng phương, cùng chiều</Text>
                                <Text style={styles.contentText}>{'=>'} <SvgComponent4 /></Text>

                                <Text style={styles.contentTextBold}>* <SvgComponent2 /> và <SvgComponent3 /> cùng phương, ngược chiều</Text>
                                <Text style={styles.contentText}>{'=>'} <SvgComponent5 /></Text>

                                <Text style={styles.contentTextBold}>* <SvgComponent2 /> và <SvgComponent3 /> vuông góc</Text>
                                <Text style={styles.contentText}>{'=>'} <SvgComponent6 /></Text>

                                <Text style={styles.contentTextBold}>* <SvgComponent7 /></Text>
                                <Image 
                                    style={{width: 280, height: 140}}
                                    source={require('../../../../../assets/img/Physics/9.png')}
                                />
                                <Text style={styles.contentText}>{'=>'} <SvgComponent8 /></Text>
                            </View>
                        </View>

                        {/* II. Các lực cân bằng và không cân bằng */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Các lực cân bằng và không cân bằng</Text>
                            </View>
                            {/* 1. Các lực cân bằng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Các lực cân bằng</Text>
                                <Text style={styles.contentText}>Các lực tác dụng lên một vật cân bằng nhau thì hợp lực tác dụng lên vật bằng không</Text>
                            </View>

                            {/* 2. Các lực không cân bằng */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Các lực không cân bằng</Text>
                                <Text style={styles.contentText}>Các lực tác dụng lên một vật không cân bằng nhau thì hợp lực tác dụng lên vật khác không. Khi đó vận tốc của vật thay đổi</Text>
                            </View>
                        </View>

                        {/* III. Phân tích lực */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Phân tích lực</Text>
                            </View>
                            {/* 1. Quy tắc */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Quy tắc</Text>
                                <Text style={styles.contentText}>Phân tích lực là phép thay thế một lực bằng hai lực thành phần có tác dụng giống hệt lực đó.</Text>
                            </View>

                            {/* 2. Chú ý */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Chú ý</Text>
                                <Text style={styles.contentText}>Muốn phân tích một lực thành hai lực thành phần thì phải cho biết hai phương cho trước</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai13_10