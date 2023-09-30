import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

import styles from './EleventhTense.style'

const EleventhTense = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Hiện Tại Hoàn Thành Tiếp Diễn</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EleventhTense