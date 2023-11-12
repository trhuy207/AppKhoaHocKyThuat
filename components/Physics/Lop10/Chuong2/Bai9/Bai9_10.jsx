import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'

import SvgComponent1 from './SvgImage/SvgComponent1'
import SvgComponent2 from './SvgImage/SvgComponent2'
import SvgComponent3 from './SvgImage/SvgComponent3'
import SvgComponent4 from './SvgImage/SvgComponent4'
import SvgComponent5 from './SvgImage/SvgComponent5'
import SvgComponent6 from './SvgImage/SvgComponent6'
import SvgComponent7 from './SvgImage/SvgComponent7'
import SvgComponent8 from './SvgImage/SvgComponent8'
import SvgComponent9 from './SvgImage/SvgComponent9'
import SvgComponent0 from './SvgImage/SvgComponent0'
import SvgComponent11 from './SvgImage/SvgComponent11'
import SvgComponent12 from './SvgImage/SvgComponent12'

import styles from './Bai9_10.style'

const Bai9_10 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Gia tốc của chuyển động thẳng biến đổi đều */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Gia tốc của chuyển động thẳng biến đổi đều</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Chuyển động thẳng biến đổi đều là chuyển động thẳng mà vận tốc có độ lớn tăng đều hoặc giảm đều theo thời gian</Text>
                                <Text style={styles.contentText}>Chuyển động thẳng biến đổi đều gồm 2 loại:</Text>
                                <Text style={styles.contentText}>- Chuyển động thẳng nhanh dần đều</Text>
                                <Text style={styles.contentText}>- Chuyển động thẳng chậm dần đều</Text>
                                <SvgComponent1 />
                            </View>
                        </View>

                        {/* II. Vận tốc tức thời của chuyển động thẳng biến đổi đều */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Vận tốc tức thời của chuyển động thẳng biến đổi đều</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <SvgComponent2 />
                                <Text style={styles.contentText}>Nếu cho <SvgComponent3 /> thì <SvgComponent4 /></Text>
                            </View>
                        </View>

                        {/* III. Đồ thị vận tốc – thời gian của chuyển động thẳng biến đổi đều */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Đồ thị vận tốc – thời gian của chuyển động thẳng biến đổi đều</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Các dạng đồ thị vận tốc – thời gian trong chuyển động thẳng biến đổi đều</Text>
                                <View style={styles.cardImage}>
                                    <Image 
                                        style={styles.image}
                                        source={require('../../../../../assets/img/Physics/v-ta.png')}
                                    />
                                    <Image 
                                        style={styles.image}
                                        source={require('../../../../../assets/img/Physics/v-tb.png')}
                                    />
                                    <Image 
                                        style={styles.image}
                                        source={require('../../../../../assets/img/Physics/v-tc.png')}
                                    />
                                </View>
                            </View>
                        </View>

                        {/* IV. Độ dịch chuyển của chuyển động thẳng biến đổi đều */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>IV. Độ dịch chuyển của chuyển động thẳng biến đổi đều</Text>
                            </View>
                            {/* 1. Tính độ dịch chuyển bằng đồ thị vận tốc – thời gian (v – t) */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Tính độ dịch chuyển bằng đồ thị vận tốc – thời gian (v – t)</Text>
                                <Image 
                                    style={{width: 170, height: 130, alignSelf: 'center'}}
                                    source={require('../../../../../assets/img/Physics/3_2.png')}
                                />
                                <Text style={styles.contentText}>Nếu là đồ thị (v – t) của chuyển động thẳng đều thì độ dịch chuyển được tính bằng diện tích của hình chữ nhật được giới hạn của đồ thị (v – t) đối với trục hoành.</Text>
                                <Image 
                                    style={{width: 180, height: 190, alignSelf: 'center'}}
                                    source={require('../../../../../assets/img/Physics/93b.png')}
                                />
                                <Text style={styles.contentText}>Nếu trong khoảng thời gian t, vật chuyển động thẳng biến đổi đều với vận tốc ban đầu là <SvgComponent5 /> thì công thức tính vận tốc là <SvgComponent6 /></Text>
                                <Text style={styles.contentText}>{'=>'} Cách tính độ dịch chuyển</Text>
                                <Text style={styles.contentText}>+ Kẻ đường thẳng song song với trục tung Ov, cách nhau một khoảng Δt rất nhỏ để chia hình thang giới hạn bởi đường thẳng biểu diễn đồ thị, đường thẳng vuông góc với trục Ot và các trục tọa độ thành các hình thang nhỏ có đường cao Δt</Text>
                                <Text style={styles.contentText}>+ Chọn một hình thang nhỏ bất kì trong hình. Vì vật chuyển động thẳng biến đổi đều nên trong khoảng thời gian nhỏ từ <SvgComponent7 /> đến <SvgComponent8 /> , có thể coi là chuyển động thẳng với vận tốc <SvgComponent9 /> (C nằm giữa A và B)</Text>
                                <Text style={styles.contentText}>+ Độ dịch chuyển của vật trong thời gian Δt có độ lớn bằng diện tích hình chữ nhật có cạnh <SvgComponent0 /> và Δt.</Text>
                            </View>

                            {/* 2. Tính độ dịch chuyển bằng công thức */}
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Tính độ dịch chuyển bằng công thức</Text>
                                <SvgComponent11 />
                                <Text style={styles.contentText}>Công thức liên hệ giữa độ dịch chuyển, vận tốc và gia tốc: </Text>
                                <SvgComponent12 />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai9_10