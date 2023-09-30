import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

import styles from './TwelfthTense.style'

const TwelfthTense = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Quá Khứ Hoàn Thành Tiếp Diễn</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TwelfthTense