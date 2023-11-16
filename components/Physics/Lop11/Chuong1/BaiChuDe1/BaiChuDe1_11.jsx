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
import SvgComponent10 from './SvgImage/SvgComponent10'
import SvgComponent11 from './SvgImage/SvgComponent11'
import SvgComponent12 from './SvgImage/SvgComponent12'
import SvgComponent13 from './SvgImage/SvgComponent13'
import SvgComponent14 from './SvgImage/SvgComponent14'
import SvgComponent15 from './SvgImage/SvgComponent15'
import SvgComponent16 from './SvgImage/SvgComponent16'
import SvgComponent17 from './SvgImage/SvgComponent17'
import SvgComponent18 from './SvgImage/SvgComponent18'
import SvgComponent19 from './SvgImage/SvgComponent19'
import SvgComponent20 from './SvgImage/SvgComponent20'
import SvgComponent21 from './SvgImage/SvgComponent21'
import SvgComponent22 from './SvgImage/SvgComponent22'
import SvgComponent23 from './SvgImage/SvgComponent23'
import SvgComponent24 from './SvgImage/SvgComponent24'
import SvgComponent25 from './SvgImage/SvgComponent25'
import SvgComponent26 from './SvgImage/SvgComponent26'

import styles from './BaiChuDe1_11.style'

const BaiChuDe1_11 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. Dao động cơ */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>I. Dao động cơ</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Dao động cơ</Text>
                                <Text style={styles.contentText}>Là chuyển động có giới hạn trong không gian, lặp đi lặp lại nhiều lần quanh vị trí cân bằng.</Text>
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Dao động tuần hoàn</Text>
                                <Text style={styles.contentText}>Là dao động mà sau những khoảng thời gian bằng nhau gọi là chu kỳ, vật trở lại vị trí và chiều chuyển động như cũ (trở lại trạng thái ban đầu).</Text>
                                <Text style={styles.contentText}>Chu kỳ: <SvgComponent1 /> với N là số dao động thực hiện trong thời gian <SvgComponent2 /></Text>
                                <Text style={styles.contentText}>Tần số: <SvgComponent3 /></Text>
                            </View>
                        </View>

                        {/* II. Dao động điều hoà */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>II. Dao động điều hoà</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Phương trình dao động</Text>
                                <Text style={styles.contentText}>Xét một chất điểm M chuyển động tròn đều trên một đường tròn tâm O, bán kính A như hình vẽ.</Text>
                                <Image 
                                    style={{width: 160, height: 160}}
                                    source={require('../../../../../assets/img/Physics/dt.png')}
                                />
                                <Text style={styles.contentText}>+ Tại thời điểm ban đầu t = 0: vị trí của chất điểm là <SvgComponent4 />, xác định bởi góc φ</Text>
                                <Text style={styles.contentText}>+ Tại thời điểm t: vị trí của chất điểm là M, xác định bởi góc (ωt + φ)</Text>
                                <Text style={styles.contentText}>+ Hình chiếu của M xuống trục xx’ là P, có toạ độ x: </Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent5 /></Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent6 /></Text>
                                <Text style={styles.contentText}>Ta thấy: hình chiếu P của chất điểm M dao động điều hoà quanh điểm O.</Text>
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Định nghĩa</Text>
                                <Text style={styles.contentText}>Dao động điều hòa là dao động trong đó li độ của vật là một hàm cosin (hoặc sin) của thời gian.</Text>
                                <SvgComponent6 />
                                <Text style={styles.contentText}>Trong đó:</Text>
                                <Text style={styles.contentText}>x: li độ</Text>
                                <Text style={styles.contentText}>A: biên độ dao động</Text>
                                <Text style={styles.contentText}>φ: pha ban đầu</Text>
                                <Text style={styles.contentText}>(ωt + φ): pha dao động ở thời điểm t</Text>
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>3. Độ lệch pha của hai dao động cùng chu kỳ:</Text>
                                <Text style={styles.contentTextBold}>Cho 2 dao động điều hòa: </Text>
                                <SvgComponent7 />
                                <SvgComponent8 />
                                <Text style={styles.contentText}>Độ lệch pha của hai dao động: <SvgComponent9 /></Text>
                                <Text style={styles.contentText}>Nếu <SvgComponent10 /> thì dao động 2 nhanh pha hơn dao động 1</Text>
                                <Text style={styles.contentText}>Nếu <SvgComponent11/> thì dao động 2 trễ pha hơn dao động 1</Text>
                                <Text style={styles.contentText}>Nếu <SvgComponent12/> thì dao động 2 cùng pha với dao động 1</Text>
                            </View>
                        </View>

                        {/* III. Phương trình vận tốc của vật */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>III. Phương trình vận tốc của vật</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Vận tốc</Text>
                                <SvgComponent13 />
                                <SvgComponent14 />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Nhận xét</Text>
                                <Text style={styles.contentText}>- Vận tốc sớm pha hơn li độ góc <SvgComponent15 /></Text>
                                <Text style={styles.contentText}>- Khi x = 0 (VTCB): <SvgComponent16 /></Text>
                                <Text style={styles.contentText}>- Khi x = <SvgComponent17 />(VTB): <SvgComponent18 /></Text>
                                <Text style={styles.contentText}>- Công thức liên hệ giữa x và v: </Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent19 /></Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent20 /></Text>
                            </View>
                        </View>

                        {/* IV. Phương trình gia tốc */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>IV. Phương trình gia tốc</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>1. Phương trình gia tốc (gia tốc tức thời):</Text>
                                <SvgComponent21 />
                                <SvgComponent22 />
                                <SvgComponent23 />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>2. Nhận xét</Text>
                                <Text style={styles.contentText}>- Gia tốc sớm pha hơn vận tốc góc <SvgComponent15 />, ngược pha với li độ</Text>
                                <Text style={styles.contentText}>- Khi x = A: <SvgComponent24 /></Text>
                                <Text style={styles.contentText}>- Khi x = 0: a = 0</Text>
                                <Text style={styles.contentText}>- Gia tốc luôn hướng về VTCB</Text>
                                <Text style={styles.contentText}>- Công thức liên hệ giữa v và a:</Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent25 /></Text>
                                <Text style={[styles.contentText, {textAlign: 'center'}]}><SvgComponent26 /></Text>
                                <Text style={styles.contentText}>- Khi vật chuyển động từ VTCB ra VTB thì vật chuyển động chậm dần.</Text>
                                <Text style={styles.contentText}>- Khi vật chuyển động từ VTB về VTCB thì vật chuyển động nhanh dần.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BaiChuDe1_11