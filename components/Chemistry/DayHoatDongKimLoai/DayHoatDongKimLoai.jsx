import { View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './DayHoatDongKimLoai.style'

const DayDienHoa = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chemistry')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Dãy Hoạt Động Kim Loại</Text>
            </View>
            
            <ScrollView horizontal={true}>
                <View style={styles.body}>
                    <View style={styles.dayHoatDong}>
                        <View style={styles.kimLoaiManh}>
                            <Text style={styles.titleKLM}>Kim Loại Mạnh</Text>
                            <View style={styles.content}>
                                <Text style={styles.contentKLM}>Li</Text>
                                <Text style={styles.contentKLM}>K</Text>
                                <Text style={styles.contentKLM}>Ba</Text>
                                <Text style={styles.contentKLM}>Ca</Text>
                                <Text style={styles.contentKLM}>Na</Text>
                                <Text style={styles.contentKLM}>Mg</Text>
                                <Text style={styles.contentKLM}>Al</Text>
                            </View>
                        </View>

                        <View style={styles.kimLoaiTrungBinh}>
                            <Text style={styles.titleKLTB}>Kim Loại Trung Bình</Text>
                            <View style={styles.content}>
                                <Text style={styles.contentKLTB}>Mn</Text>
                                <Text style={styles.contentKLTB}>Zn</Text>
                                <Text style={styles.contentKLTB}>Fe</Text>
                                <Text style={styles.contentKLTB}>Co2+</Text>
                                <Text style={styles.contentKLTB}>Ni</Text>
                                <Text style={styles.contentKLTB}>Sn</Text>
                                <Text style={styles.contentKLTB}>Pb</Text>
                                <Text style={styles.contentKLTB}>Fe3+/Fe</Text>
                            </View>
                        </View>

                        <View style={styles.hydro}>
                            <Text style={styles.titleH}></Text>
                            <View style={styles.content}>
                                <Text style={styles.contentH}>H</Text>
                            </View>
                        </View>

                        <View style={styles.kimLoaiYeu}>
                            <Text style={styles.titleKLY}>Kim Loại Yếu</Text>
                            <View style={styles.content}>
                                <Text style={styles.contentKLY}>Cu</Text>
                                <Text style={styles.contentKLY}>Fe3+/Fe2+</Text>
                                <Text style={styles.contentKLY}>Hg</Text>
                                <Text style={styles.contentKLY}>Ag+</Text>
                                <Text style={styles.contentKLY}>Hg2+</Text>
                                <Text style={styles.contentKLY}>Pt</Text>
                                <Text style={styles.contentKLY}>Au</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DayDienHoa