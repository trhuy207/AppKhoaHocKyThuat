import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './BaiChuDe1_10.style'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'

const BaiChuDe1_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Định luật I Newton */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Định luật I Newton</Text>
                            </View>
                            {/* 1. Định luật I Newton */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Định luật I Newton</Text>
                                <Text style={styles.contentText}>Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng không thì vật đang đứng yên sẽ tiếp tục đứng yên, đang chuyển động sẽ tiếp tục chuyển động thẳng đều.</Text>
                            </View>
                            {/* 2. Quán tính */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Quán tính</Text>
                                <Text style={styles.contentText}>Là tính chất bảo toàn trạng thái đứng yên hay chuyển động của vật</Text>
                            </View>
                        </View>

                        {/* II. Định luật II Newton */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Định luật II Newton</Text>
                            </View>
                            {/* 1. Định luật II Newton */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Định luật II Newton</Text>
                                <Text style={styles.contentText}>Gia tốc của một vật cùng hướng với lực tác dụng lên vật. Độ lớn của gia tốc tỉ lệ thuận với độ lớn của lực và tỉ lệ nghịch với khối lượng của vật.</Text>
                                <Text style={styles.contentText}><SvgComponent1 /> {'\n'} hay <SvgComponent2 /></Text>
                            </View>

                            {/* 2. Khối lượng và quán tính */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Khối lượng và quán tính</Text>
                                <Text style={styles.contentText}>Khối lượng là đại lượng đặc trưng cho mức quán tính của vật</Text>
                            </View>
                        </View>

                        {/* III. Định luật III Newton */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Định luật III Newton</Text>
                            </View>
                            {/* 1. Định luật III Newton */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Định luật III Newton</Text>
                                <Text style={styles.contentText}>Trong mọi trường hợp, khi vật A tác dụng lên vật B một lực, thì vật B cũng tác dụng lại vật A một lực. Hai lực này có cùng giá, cùng độ lớn nhưng ngược chiều.</Text>
                                <SvgComponent3 />
                            </View>
                            {/* 2. Các đặc điểm của lực và phản lực */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Các đặc điểm của lực và phản lực</Text>
                                <Text style={styles.contentText}>Một trong hai lực tương tác giữa hai vật gọi là lực tác dụng còn lực kia gọi là phản lực.</Text>
                                <Text style={styles.contentText}>Đặc điểm của lực và phản lực:</Text>
                                <Text style={styles.contentText}>+ Lực và phản lực luôn luôn xuất hiện (hoặc mất đi) đồng thời.</Text>
                                <Text style={styles.contentText}>+ Lực và phản lực là hai lực trực đối: cùng giá, cùng độ lớn nhưng ngược chiều.</Text>
                                <Text style={styles.contentText}>+ Lực và phản lực không cân bằng nhau vì chúng đặt vào hai vật khác nhau.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BaiChuDe1_10