import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './SeventhTense.style'

const SeventhTense = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Tương Lai Đơn</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.formulaCard}>
                        <Text style={styles.formulaTitle}>Công Thức</Text>
                        <Text style={styles.formulaContentTitle}>Câu Khẳng Định:</Text>
                        <Text style={styles.formulaContent}>S + will + V-inf ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Phủ Định:</Text>
                        <Text style={styles.formulaContent}>S + will + NOT + V-inf ...</Text>

                        <Text style={styles.formulaContentTitle}>Câu Hỏi:</Text>
                        <Text style={styles.formulaContent}>Will + S + V-inf ...?</Text>
                    </View>  

                    <View style={styles.noteCard}>
                        <Text style={styles.noteCardTitle}>Cách Dùng:</Text>
                        <Text style={styles.noteCardText}>- Nói về một hành động sẽ xảy ra ở tương lai.</Text>
                        <Text style={styles.noteCardEx}>Ex: I will become a doctor when I grow up. {'\n'}(Tôi sẽ trở thành bác sĩ khi tôi trưởng thành)</Text>
                        <Text style={styles.noteCardText}>- Nói về một hành động được quyết định lúc nói.</Text>
                        <Text style={styles.noteCardEx}>Ex: Tomorrow is her birthday, do you have any idea for the present? (Mai là sinh nhật cô ấy rồi, bạn có ý tưởng gì không?){'\n'} {'->'} I will buy her a birthday cake. (Tôi sẽ mua cho cô ấy một cái bánh kem)</Text>
                    
                        <Text style={styles.noteCardTitle}>Dấu hiệu nhận biết:</Text>
                        <Text style={styles.noteCardText}>Tomorrow (ngày mai), next (week, month, year..), someday / one day (một ngày nào đó), in the future, soon (chẳng bao lâu nữa), tonight (tối nay), in a few day’s time (trong vài ngày).</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SeventhTense